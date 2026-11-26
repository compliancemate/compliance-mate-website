/**
 * COMPLIANCE MATE
 * File: src/data/blogData.ts
 *
 * Centralized blog data and slug management.
 */
// ==========================================
// SLUG GENERATOR
// ==========================================
export const createSlug = (title) => {
    return title
        .toLowerCase()
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
};
// ==========================================
// BLOG DATA
// ==========================================
export const blogs = [
    {
        id: 1,
        slug: 'epr-registration-india',
        category: 'EPR COMPLIANCE',
        title: 'EPR Registration in India: A Business Guide',
        description: 'Understand the importance of Extended Producer Responsibility, registration and compliance.',
        date: '23 Nov 2026',
        publishedAt: '2026-11-23',
        readTime: '5 min read',
        author: 'Compliance Mate',
        image: '/blogs/epr-registration.jpg',
        keywords: [
            'EPR Registration India',
            'EPR Compliance',
            'CPCB Registration',
            'Extended Producer Responsibility',
        ],
        content: [
            'Extended Producer Responsibility (EPR) is an environmental policy approach that places defined waste-management responsibilities on producers and other obligated entities.',
            'In India, EPR requirements apply to specified product and waste categories, including plastic packaging, electronic waste and batteries.',
            'Businesses should first identify their applicable category, relevant rules, registration obligations and reporting requirements.',
            'A structured compliance process helps businesses maintain records, plan recycling obligations and prepare required returns.',
        ],
    },
    {
        id: 2,
        slug: 'lithium-battery-recycling-plant',
        category: 'BATTERY RECYCLING',
        title: 'How to Set Up a Lithium-Ion Battery Recycling Plant',
        description: 'Explore machinery, processes, raw materials and project planning requirements.',
        date: '23 Nov 2026',
        publishedAt: '2026-11-23',
        readTime: '6 min read',
        author: 'Compliance Mate',
        image: '/blogs/lithium-battery-recycling.jpg',
        keywords: [
            'Lithium Ion Battery Recycling',
            'Battery Recycling Plant Setup',
            'Black Mass Recovery',
            'Battery Recycling Machinery',
        ],
        content: [
            'Lithium-ion battery recycling involves recovering valuable materials from used and rejected batteries through controlled industrial processes.',
            'A typical project may include battery discharge, dismantling, shredding, mechanical separation and further material recovery.',
            'Technology selection depends on feedstock chemistry, targeted products, processing capacity and environmental requirements.',
            'Before investing, promoters should prepare a feasibility study covering machinery, raw material sourcing, product recovery, operating costs and regulatory approvals.',
        ],
    },
    {
        id: 3,
        slug: 'plastic-recycling-business',
        category: 'PLASTIC RECYCLING',
        title: 'Starting a Plastic Waste Recycling Business in India',
        description: 'Learn about recycling technologies, plant planning and business opportunities.',
        date: '23 Nov 2026',
        publishedAt: '2026-11-23',
        readTime: '5 min read',
        author: 'Compliance Mate',
        image: '/blogs/plastic-recycling.jpg',
        keywords: [
            'Plastic Recycling Business',
            'Plastic Recycling Plant Setup',
            'Plastic Waste Management',
            'PET HDPE LDPE Recycling',
        ],
        content: [
            'Plastic recycling helps recover reusable materials from selected waste streams such as PET, HDPE, LDPE and polypropylene.',
            'A recycling project requires careful planning around feedstock quality, processing technology, waste segregation and product specifications.',
            'Common processes can include sorting, washing, shredding, drying, extrusion and pelletizing, depending on the chosen material.',
            'Businesses should evaluate local sourcing arrangements, potential buyers, regulatory requirements and financial feasibility before establishing a plant.',
        ],
    },
    {
        id: 4,
        slug: 'cbg-plant-setup',
        category: 'RENEWABLE ENERGY',
        title: 'Compressed Biogas Plant Setup: Key Considerations',
        description: 'Understand feedstock planning, biogas technology and project feasibility.',
        date: '23 Nov 2026',
        publishedAt: '2026-11-23',
        readTime: '6 min read',
        author: 'Compliance Mate',
        image: '/blogs/cbg-plant.jpg',
        keywords: [
            'Compressed Biogas Plant Setup',
            'CBG Plant Cost',
            'Biogas Plant Consultancy',
            'CBG Plant DPR',
        ],
        content: [
            'Compressed Biogas (CBG) projects convert suitable organic feedstocks into biogas that is upgraded to meet applicable fuel specifications.',
            'Common feedstocks include cattle dung, agricultural residues, press mud, food waste and energy crops.',
            'Plant design depends on feedstock characteristics, biogas yield, process selection, gas upgrading technology and digestate management.',
            'A project feasibility report should assess feedstock availability, plant capacity, land, utilities, capital costs, operating expenses and potential revenue streams.',
        ],
    },
];
// ==========================================
// GET BLOG BY SLUG
// ==========================================
export const getBlogBySlug = (slug) => {
    return blogs.find((blog) => blog.slug === slug);
};
// ==========================================
// GET BLOG BY ID
// ==========================================
export const getBlogById = (id) => {
    return blogs.find((blog) => blog.id === id);
};
// ==========================================
// GET BLOGS BY CATEGORY
// ==========================================
export const getBlogsByCategory = (category) => {
    return blogs.filter((blog) => blog.category.toLowerCase() ===
        category.toLowerCase());
};
// ==========================================
// GET ALL BLOG CATEGORIES
// ==========================================
export const getBlogCategories = () => {
    return [
        ...new Set(blogs.map((blog) => blog.category)),
    ];
};
// ==========================================
// GET BLOG URL
// ==========================================
export const getBlogUrl = (blog) => {
    return `#/blogs/${blog.slug}`;
};
