import { renderToString } from 'react-dom/server';
import App, {routes} from './App';
export const pages = Object.entries(routes).map(([path,route])=>({path,title:route.title,description:route.description,draft:!!route.draft,article:!!route.article}));
export const render = path => renderToString(<App initialPath={path}/>);
