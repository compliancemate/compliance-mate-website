// Run after Vite client + SSR builds. Generates indexable HTML without needing a server.
import {readFile,writeFile,mkdir,rm,readdir} from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {loadEnv} from 'vite';
const env=loadEnv('production',process.cwd(),'VITE_');
const site=(process.env.VITE_SITE_URL||env.VITE_SITE_URL||'https://compliancemate.co.in').replace(/\/$/,'');
const template=await readFile('dist/index.html','utf8');
const files=await readdir('.ssr');
const entry=files.find(n=>/^entry-server\.(js|mjs)$/.test(n));
if(!entry)throw Error('SSR entry not found in .ssr');
const {pages,render}=await import(pathToFileURL(path.resolve('.ssr',entry)));
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const baseDesc='Environmental licensing, EPR compliance, compressed biogas plant setup, bankable DPRs and sustainable industrial project consultancy.';
const url=p=>site+(p==='/'?'/':p+'/');
for(const page of [...pages,{path:'/404',title:'Page Not Found',description:'The requested page was not found.',draft:true}]){
 const html=render(page.path);
 const title=`${page.title} | Compliance Mate`, desc=page.description||baseDesc;
 let document=template.replace(/<title>[\s\S]*?<\/title>/,`<title>${escape(title)}</title>`).replace(/<meta\s+name="description"[^>]*>/,`<meta name="description" content="${escape(desc)}">`).replace(/<meta\s+name="robots"[^>]*>/,`<meta name="robots" content="${page.draft?'noindex, follow':'index, follow'}">`).replace(/<link\s+rel="canonical"[^>]*>/,`<link rel="canonical" href="${escape(url(page.path))}">`).replace(/<meta\s+property="og:title"[^>]*>/,`<meta property="og:title" content="${escape(title)}">`).replace(/<meta\s+property="og:description"[^>]*>/,`<meta property="og:description" content="${escape(desc)}">`).replace(/<meta\s+property="og:url"[^>]*>/,`<meta property="og:url" content="${escape(url(page.path))}">`).replace(/<meta\s+property="og:type"[^>]*>/,`<meta property="og:type" content="${page.article?'article':'website'}">`).replace('<div id="root"></div>',()=>`<div id="root">${html}</div>`);
 const target=page.path==='/404'?'dist/404.html':page.path==='/'?'dist/index.html':path.join('dist',page.path.slice(1),'index.html');
 await mkdir(path.dirname(target),{recursive:true});await writeFile(target,document);
}
await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.filter(p=>!p.draft).map(p=>`  <url><loc>${escape(url(p.path))}</loc></url>`).join('\n')}\n</urlset>\n`);
await writeFile('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${site}/sitemap.xml\n`);
await rm('.ssr',{recursive:true,force:true});console.log(`Prerendered ${pages.length} pages plus 404, sitemap and robots.txt.`);
