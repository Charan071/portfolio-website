// ====================================
// PORTFOLIO DATA CONFIGURATION
// ====================================
// Edit this file to update your portfolio content

export const personalInfo = {
  name: "Charan S Naik",
  titles: ["AI Engineer", "GenAI Engineer", "LLM Engineer", "AI Automation Developer"],
  tagline: "AI Engineer · GenAI · LLM",
  location: "Bengaluru, India",
  
  aboutMe: {
    summary: "Versatile AI Engineer with hands-on expertise in building production-ready GenAI solutions, RAG systems, and intelligent automation workflows. Experienced in deploying local LLM inference, developing full-stack AI applications, and designing scalable data pipelines. Proven track record in transforming complex business requirements into efficient, user-centric AI products through strategic implementation of LangChain, vector databases, and modern web technologies.",
    highlights: [
      "Specialized in RAG systems with ChromaDB, Pinecone, and semantic retrieval",
      "Built end-to-end AI applications using FastAPI, Next.js, and Streamlit",
      "Expert in n8n automation with custom node development and workflow orchestration",
      "Proficient in local LLM deployment using Ollama (Llama 3.2, CodeLlama, Mistral)",
      "Strong foundation in data analytics, ETL automation, and business intelligence"
    ],
    image: "/profile.jpg" // Add your image to public folder
  },

  tagline_description: "Hands-on experience in RAG systems, prompt engineering, local LLM inference, vector databases, n8n automation, and full-stack AI development. I transform business requirements into scalable AI solutions.",
  
  resume: "/resume.pdf",
  
  contact: {
    email: "charan07naik@gmail.com",
    phone: "+91 63622 97018",
    location: "Bengaluru, India"
  },
  
  social: {
    github: "https://github.com/Charan071",
    linkedin: "https://linkedin.com/in/charan-naik-403892294",
  }
};

export const skills = [
  {
    category: "AI & LLM",
    items: [
      "LLMs: Llama 3.2, CodeLlama, GPT-3.0 Mini",
      "Ollama, Embeddings (Ollama, OpenAI)",
      "RAG Pipelines, LangChain, Vector DBs (ChromaDB, Pinecone)"
    ]
  },
  {
    category: "Backend & Automation",
    items: [
      "Python, FastAPI, n8n",
      "API Integration, ETL Automation, Workflow Orchestration",
      "Streaming (SSE), Custom Nodes"
    ]
  },
  {
    category: "Full-stack & Data",
    items: [
      "React, Next.js, Vite, Streamlit, Tailwind",
      "SQL, PostgreSQL, Supabase, Airflow",
      "Power BI, Pandas, NumPy, Excel"
    ]
  }
];

export const projects = [
  {
    title: "RAG Document Q&A System",
    description: "LangChain, Ollama, ChromaDB, Streamlit. Local LLM inference, PDF/TXT/CSV ingestion and semantic retrieval.",
    link: "https://github.com/Charan071/RAG-Document-Q-A-System",
    featured: true
  },
  {
    title: "Code Maestro — Local AI Code Assistant",
    description: "FastAPI + Next.js assistant with SSE streaming, multi-model backend and developer-grade UX.",
    link: "https://github.com/Charan071/Code-Assistant",
    featured: true
  },
  {
    title: "AI Bulletin Daily",
    description: "Automated AI news platform using Supabase, n8n, and Gemini summarization.",
    link: "https://github.com/Charan071/ai-bulletin-daily",
    featured: true
  }
];

export const automationAgents = [
  {
    title: "AI Inbox Automation Agent",
    description: "Automates email inbox tasks using n8n + Google Gemini + Gmail API. Includes workflow JSON and setup instructions.",
    link: "https://github.com/Charan071/my-n8n-workflows"
  },
  {
    title: "Onboarding Automation Agent",
    description: "Automates employee onboarding using Slack, Jira, and Entra ID. Includes workflows and helper scripts.",
    link: "https://github.com/Charan071/my-n8n-workflows"
  },
  {
    title: "RAG Knowledge Agent",
    description: "Retrieval-Augmented Generation workflow using n8n + Pinecone + OpenAI. Includes diagrams and setup notes.",
    link: "https://github.com/Charan071/my-n8n-workflows"
  }
];

export const experience = [
  {
    title: "Data Analyst Trainee",
    company: "Aimerz.ai",
    location: "Bengaluru, India",
    period: "Jan 2025 – Jul 2025",
    tools: "Python, SQL, Power BI",
    responsibilities: [
      "Automated multi-source data workflows, reducing manual effort by 40%.",
      "Built reusable data pipelines and dashboards for campaign insights.",
      "Developed ETL scripts that improved reporting speed and accuracy."
    ]
  },
  {
    title: "Product & Operations Intern",
    company: "SpriveApp",
    location: "Bengaluru, India",
    period: "Aug 2024 – Dec 2024",
    tools: "REST APIs, MySQL, Power BI",
    responsibilities: [
      "Built automated data workflows to streamline product analytics.",
      "Designed operational dashboards for user activation and retention.",
      "Conducted feature analysis and data validation to support product improvements."
    ]
  }
];

export const education = {
  degree: "Bachelor of Engineering (Information Science & Engineering)",
  institution: "CMR Institute of Technology, Bengaluru",
  period: "Dec 2020 – May 2024"
};

export const certifications = [
  "IBM: Python for Data Science, AI & Development",
  "Udemy: AI Engineer Agentic Track – The Complete Agent & MCP Course",
  "Accenture: Data Analytics & Visualization Job Simulation (Forage)"
];
