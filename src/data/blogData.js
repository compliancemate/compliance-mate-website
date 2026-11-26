// Register a new article here after creating its JSX file. Set category to 'biogas' or 'licensing-certification'.
import { licensingBlogs } from './licensingBlogs.js';
import Loan from '../pages/blogs/biogas/compressed-biogas-plant-bank-loan-assistance.jsx';
import Machinery from '../pages/blogs/biogas/compressed-biogas-plant-machinery-setup.jsx';
import Feasibility from '../pages/blogs/biogas/compressed-biogas-project-planning-and-feasibility.jsx';
import Subsidies from '../pages/blogs/biogas/compressed-biogas-subsidies-and-incentives.jsx';
export const categories = [
 {slug:'biogas',title:'Biogas',description:'Practical guidance on CBG plant planning, machinery, financing and incentives.'},
 {slug:'licensing-certification',title:'License & Certification',description:'Environmental approvals, industrial licensing and compliance resources.'},
];
export const blogs = [
 {slug:'compressed-biogas-plant-bank-loan-assistance',category:'biogas',title:'Compressed Biogas Plant Bank Loan Assistance',description:'Explore CBG financing, lender requirements, documentation and project finance assistance.',readTime:'8 min read',icon:'finance',Component:Loan},
 {slug:'compressed-biogas-plant-machinery-setup',category:'biogas',title:'Compressed Biogas Plant Machinery and Setup',description:'Understand feedstock handling, anaerobic digestion, gas upgrading and machinery selection.',readTime:'10 min read',icon:'factory',Component:Machinery},
 {slug:'compressed-biogas-project-planning-and-feasibility',category:'biogas',title:'Compressed Biogas Project Planning and Feasibility',description:'Explore feedstock assessment, bankable DPR preparation and technical and financial feasibility.',readTime:'12 min read',icon:'plan',Component:Feasibility},
 {slug:'compressed-biogas-subsidies-and-incentives',category:'biogas',title:'Compressed Biogas Subsidies and Incentives',description:'Learn about government incentive frameworks, eligibility and support considerations.',readTime:'9 min read',icon:'leaf',Component:Subsidies},
 ...licensingBlogs,
];
