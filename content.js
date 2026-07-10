/* =========================================================================
   CONTENT.JS
   ------------------------------------------------------------------------
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE YOUR WEBSITE.
   Change the text between the "quotes". Save. Done.
   Don't delete commas, curly braces { }, or square brackets [ ].
   ========================================================================= */

const CONTENT = {

  name: "Pragnya Prasanna Athri",
  short_name: "Pragnya",
  role: "Immunotherapy Researcher",

  // Hero — 3 lines
  hero_line_1: "Hi, I'm Pragnya.",
  hero_line_2: "I explore how the immune system works",
  hero_line_3: "and how we can harness it to fight disease",

  tagline: "Purdue graduate and immunology researcher with experience across academic and industry settings, including Merck and Eradivir. My work focuses on developing innovative immunotherapy approaches, spanning tumor microenvironment biology, immune modulation, and bispecific antibody platforms.",

  about_headline: "A little about me.",
  about_paragraphs: [
    "I was drawn to immunology by a simple but powerful question: how can such a sophisticated defense system fail to recognize or control disease? That curiosity has taken me from a biochemistry bench in Bangalore to research environments in Boston and Purdue, where I have explored immune responses across cancer biology, virology, and stromal immunology.",

"As a Purdue graduate in Cell, Molecular, and Developmental Biology, with a minor in Chemistry and a certificate in Pharmaceutical Manufacturing, I have worked across academic and industry settings to understand how immune cells interact with tumors, viruses, and the surrounding tissue environment. My experience includes tumor microenvironment research, immune-cell modulation, in vivo immunology, immunotherapy development at Eradivir, and the development of mechanistic assays at Merck.",

"Beyond the laboratory, I care deeply about making science and public-health education accessible. Through my work with the Cancer Mukti Foundation, I have seen that meaningful scientific progress depends not only on discovery, but also on ensuring that knowledge reaches the communities that need it most."
  ],
  
/*
  quick_facts: [
    { label: "Currently at", value: "Eradivir, West Lafayette" },
    { label: "Studying", value: "CMDB at Purdue University" },
    { label: "Coffee order", value: "Iced oat latte, always" },
    { label: "Favorite technique", value: "Multi-color flow cytometry" },
    { label: "Reading", value: "Papers on CAR-T resistance" },
    { label: "Dream project", value: "Early-detection assay for pancreatic cancer" }
  ],
*/

  email: "athripragnya@gmail.com",

  links: {
    cv: "https://github.com/pragnyathri-design/portfolio/raw/main/static/Athri_Pragnya%20_%20resume%20.pdf",
    linkedin: "https://linkedin.com/in/pragnya-athri-1375951b5",
    github: "",
    googleScholar: "",
    orcid: ""
  },

  projects: [
    {
      title: "BAiT platform for hypoxic melanoma",
      image:"https://pragnyathri-design.github.io/portfolio/project/hypoxia/featured_hua31db05636174199f08743621b775e5b_91998_550x0_resize_q90_lanczos_3.png",
      tag: "Immunotherapy",
      period: "2024 – Present · Eradivir",
      summary: "Developing bispecific antigenic immunotherapy targeting hypoxic tumor environments in melanoma. What draws me here: hypoxic pockets are exactly where drugs usually fail and where the biology gets interesting.",
      stat_label: "Platform",
      stat_value: "BAiT"
    },
    {
      title: "BAiT for folate receptor solid tumors",
      image:"https://pragnyathri-design.github.io/portfolio/project/folate/featured_hu8676f5fcb6b95611b748801eef8b0342_571435_550x0_resize_q90_lanczos_3.png",
      tag: "Targeted therapy",
      period: "2024 – Present · Eradivir",
      summary: "Extending the same platform to FOLR-overexpressing solid tumors. The receptor is a beautiful therapeutic handle as they are high on cancer cells, low almost everywhere else.",
      stat_label: "Target",
      stat_value: "FOLR"
    },
    {
      title: "Fibroblast functional assays at Merck",
      image: "https://pragnyathri-design.github.io/portfolio/project/fibroblast/featured_hu1a6107d0b969c88948a0027485c766bc_151074_550x0_resize_q90_lanczos_3.png",
      tag: "Assay development",
      period: "2025 · Merck & Co., Boston",
      summary: "Built and optimized 384-well proliferation and migration assays to study how stromal fibroblasts talk to immune cells inside the tumor microenvironment. My first industry co-op — I learned as much about how big science teams actually run as I did about assays.",
      stat_label: "skills",
      stat_value: "Mechanistic assays"
    },
    {
      title: "BAiT platform for Influenza",
      image: "https://raw.githubusercontent.com/pragnyathri-design/portfolio/main/content/project/H1N1.jpg",
      tag: "Immunotherapy",
      period: "2024 – Present · Eradivir",
      summary: "Advancing the BAiT immunotherapy platform for influenza through in vivo mouse studies and neuraminidase inhibition assays to assess antiviral activity and therapeutic potential.",
      stat_label: "Platform",
      stat_value: "BAiT"
    },
    {
      title: "T cell responses",
      image: "https://pragnyathri-design.github.io/portfolio/project/gut-olson/featured_hufb9f5a318118726d4ae85e0f6bcdaad7_18134_550x0_resize_q90_lanczos_3.png",
      tag: "Tumor immunology",
      period: "2023 – 2024 · Purdue",
      summary: "Investigated Treg recruitment strategies to reprogram the TME — turning immunologically 'cold' tumors into 'hot' ones. My first serious flow cytometry project, and honestly where I fell in love with immunology.",
      stat_label: "Focus",
      stat_value: "Treg"
    },
    {
      title: "Imatinib resistance in CML",
      image: "https://pragnyathri-design.github.io/portfolio/project/gleevec/featured_hud07766cf671306d6b88d041584150557_308227_550x0_resize_q90_lanczos_3.png",
      tag: "Drug resistance",
      period: "2023 – 2024 · Purdue",
      summary: "Explored the molecular reasons chronic myeloid leukemia stops responding to Gleevec. A classic story a wonder drug, and then the cancer figures out a workaround.",
      stat_label: "Disease",
      stat_value: "CML"
    },
    {
      title: "Oncolytic virus therapy for glioblastoma",
      image: "https://pragnyathri-design.github.io/portfolio/project/oncolytic-virus/featured_hu11cfe0b7abd74831b724d5a57d4d21d9_157730_550x0_resize_q90_lanczos_3.png",
      tag: "Translational",
      period: "2023 – 2024 · Purdue Honors",
      summary: "Deep-dive on using engineered viruses to trigger anti-tumor immunity in glioblastoma — one of the hardest cancers to treat. Honors research project.",
      stat_label: "Model",
      stat_value: "GBM"
    }
  ],

  experience: [
    { role: "Youth Advocate — Public Health & Cancer Education", org: "Cancer Mukti Foundation", period: "Dec 2025 – Present", detail: "Volunteer work with families impacted by cancer. Awareness campaigns, educational content on early detection, community engagement." },
    { role: "Research Associate", org: "Eradivir — West Lafayette", period: "Aug 2025 – Present", detail: "Expanding the BAiT immunotherapy platform to kidney cancer and hematologic malignancies." },
    { role: "Discovery Immunology CO-OP", org: "Merck & Co., Inc. — Boston", period: "Jan – Jul 2025", detail: "Built proliferation and migration assays for stromal–immune biology. Cross-functional work on preclinical immunotherapy pipelines." },
    { role: "Research Assistant", org: "Eradivir — West Lafayette", period: "Jul – Dec 2024", detail: "Immunological assays for novel immunotherapeutics. BSL-2 in vivo influenza studies, lung homogenization, peptide synthesis." },
    { role: "Undergraduate Student Researcher", org: "Purdue University", period: "Aug 2023 – May 2024", detail: "TME reprogramming via Treg recruitment and macrophage polarization (M2 → M1). PBMC isolation, cytokine differentiation, multi-color flow cytometry." },
    { role: "Summer Intern", org: "Indian Institute of Science (IISc) — Bangalore", period: "Jun – Jul 2023", detail: "Dr. Palani's biochemistry lab, working on cytoskeletal dynamics. Plasmid prep, Gibson assembly, gel electrophoresis, gene cloning." }
  ],

  skills: [
"Mouse handling and in vivo studies",
"Multicolor flow cytometry",
"Flow cytometry sample preparation",
"Flow cytometry data analysis",
"ELISA",
"Neuraminidase inhibition assays",
"Mechanistic assay development",
"Immunological assay development",
"Cell-based assays",
"Cell proliferation assays",
"Cell migration assays",
"Mammalian cell culture",
"PBMC isolation",
"Immune-cell isolation and differentiation",
"Cytokine stimulation assays",
"Gel electrophoresis",
"DNA and plasmid preparation",
"Gibson assembly",
"Peptide synthesis",
"BSL-2 laboratory practices",
"Experimental design",
"Data analysis and interpretation",
"Scientific literature review",
"Technical documentation"
  ],

  publications: [
    {
      type: "Poster",
      year: "2026",
      title: "Preclinical evaluation of BAiT in Hypoxic Melanoma",
      authors: "Pragnya Athri, Ria Singh, Payton Baker et al.",
      venue: "New england Science Symposium",
      url: ""
    },
    {
      type: "Poster",
      year: "2025",
      title: "Preclinical Evaluation of BAiT in solid tumor expressing Folate receptors ",
      authors: "Pragnya Athri, Ria Singh, Payton Baker et al.",
      venue: "UIUC Undergraduate Research Conference",
      url: ""
    },
    {
      type: "Oral Presentation/ Poster",
      year: "2025",
      title: "Development of Fibroblast Functional assay",
      authors: "Pragnya Athri.",
      venue: "Merck Immunology Symposium",
      url: ""
    },
    {
      type: "Honors thesis",
      year: "2024",
      title: "Oncolytic virus immunotherapy for glioblastoma: mechanisms and clinical potential",
      authors: "Pragnya Athri",
      venue: "Purdue University Honors College",
      url: ""
    },
    {
      type: "Poster",
      year: "2023",
      title: "Gut Microbiota–Driven Modulation of T Cell Inflammatory Responses",
      authors: "Pragnya Athri",
      venue: "Purdue University",
      url: ""
    }
  ],

  certificates: [
    { name: "Animal Biosafety", issuer: "CITI Program", year: "Jan 2026", url: "https://www.citiprogram.org/verify/?w26570ca1-cd40-415d-b11c-df99ee1288f0-65421820" },
    { name: "Epidemiology in Public Health Practice", issuer: "Coursera", year: "Jul 2025", url: "https://coursera.org/share/fdbc2fae3f97ef8a3d319ccbeef5101f" },
    { name: "Working with Mice", issuer: "CITI Program", year: "Dec 2023", url: "https://www.citiprogram.org/verify/?w1438d76b-6e16-4ade-af11-340f8684940b-60220750" },
    { name: "Responsible Conduct of Research", issuer: "CITI Program", year: "Feb 2023", url: "https://www.citiprogram.org/verify/?we989256e-f1b7-4edc-8458-c6dea52d774d-54272818" },
    { name: "Stanford Introduction to Food and Health", issuer: "Coursera", year: "Nov 2020", url: "https://coursera.org/share/edf37820a1a535777eddd5c05db62df4" }
  ],

  contact_headline: "Say hi.",
  contact_message: "I’m always open to conversations about immunology, virology, cancer research, therapeutic development, and accessible science communication. Whether you’re a researcher, student, collaborator, or simply curious about my work, I’d be glad to hear from you."
};
