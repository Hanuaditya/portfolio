export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  award?: string;
  category: string;
  summary: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  architectureOverview: string;
  deepDive: {
    challenge: string;
    architecture: string[];
    riskEngineOrPipeline: string[];
    decisions: string[];
    outcome: string;
  };
  mockupType: "graph" | "audio-video" | "terminal";
  links?: {
    demo?: string;
    github?: string;
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; proficiency?: string; icon?: string; highlighted?: boolean }[];
}

export interface Credential {
  id: string;
  type: "award" | "certification" | "intensive";
  title: string;
  issuer: string;
  date: string;
  prizeOrBadge?: string;
  highlight?: boolean;
  description: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  bullets: string[];
  technologies: string[];
}

export const PROFILE_DATA = {
  name: "Hanuma Aditya C",
  title: "Full-Stack AI Engineer",
  tagline: "Building scalable web applications, agentic AI workflows, and cloud-native systems.",
  location: "Bengaluru, Karnataka, India",
  timezone: "Asia/Kolkata (IST)",
  email: "hanu.adityal@gmail.com",
  phone: "+91 8296291265",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  status: "Available for Engineering Roles & AI Systems Projects",
  education: {
    degree: "Bachelor of Engineering (B.E.)",
    major: "Computer Science & Engineering",
    institution: "Sir M Visvesvaraya Institute of Technology (VTU)",
    location: "Bengaluru, India",
    cgpa: "8.5 / 10.0",
    expectedYear: "2027",
  },
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Autonomous Systems",
    description: "Agent development, RAG pipelines, graph reasoning, and production LLMs",
    skills: [
      { name: "LangGraph", highlighted: true },
      { name: "LangChain", highlighted: true },
      { name: "Generative AI", highlighted: true },
      { name: "Agent Development Kit", highlighted: true },
      { name: "Vertex AI", highlighted: true },
      { name: "FAISS Vector Search", highlighted: true },
      { name: "NetworkX Graph Theory", highlighted: true },
      { name: "WhisperX ASR", highlighted: false },
      { name: "PyMuPDF & OCR", highlighted: false },
      { name: "RapidFuzz Matching", highlighted: false },
    ],
  },
  {
    title: "Frontend Engineering",
    description: "Modern reactive web architectures, interactive canvas, and responsive design systems",
    skills: [
      { name: "React 19", highlighted: true },
      { name: "Next.js (App Router)", highlighted: true },
      { name: "TypeScript", highlighted: true },
      { name: "Tailwind CSS v4", highlighted: true },
      { name: "Framer Motion", highlighted: true },
      { name: "Server-Sent Events (SSE)", highlighted: false },
      { name: "HTML5 / Semantic Web", highlighted: false },
      { name: "CSS Architecture & Tokens", highlighted: false },
    ],
  },
  {
    title: "Backend, Cloud & Infrastructure",
    description: "Distributed backends, event streams, microservices, and multi-cloud infrastructure",
    skills: [
      { name: "Python / FastAPI", highlighted: true },
      { name: "Node.js & Express.js", highlighted: true },
      { name: "Supabase & PostgreSQL", highlighted: true },
      { name: "pgvector", highlighted: true },
      { name: "MongoDB Atlas", highlighted: true },
      { name: "AWS (S3, Lambda, EC2)", highlighted: true },
      { name: "Google Cloud Platform (GCP)", highlighted: true },
      { name: "Oracle Cloud (OCI)", highlighted: true },
      { name: "RESTful API Engineering", highlighted: false },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "unshell",
    number: "01",
    title: "Unshell",
    subtitle: "Autonomous AML & KYB Intelligence Graph",
    award: "Hackfest National Hackathon 2026 — 2nd Runner-Up (INR 30,000 Prize)",
    category: "Fintech Compliance & Graph AI",
    summary:
      "Enterprise fintech compliance platform that transforms raw UK company registration numbers into evidence-linked, verifiable corporate ownership graphs with automated risk scoring and human-in-the-loop regulatory SAR reporting.",
    stack: [
      "Python",
      "LangGraph",
      "FastAPI",
      "Express.js",
      "React",
      "FAISS",
      "NetworkX",
      "MongoDB Atlas",
      "Gemini API",
    ],
    metrics: [
      { label: "Ownership Traversal", value: "Sub-Second" },
      { label: "Deterministic Risk Vectors", value: "6 Engines" },
      { label: "Grounding Firewall Accuracy", value: "99.4%" },
      { label: "Prize Winner", value: "INR 30K" },
    ],
    architectureOverview:
      "Unshell combines an end-to-end multi-source data ingestion pipeline with a 4-stage RAG document comprehension pipeline (PyMuPDF, FAISS vector index, NVIDIA Mistral embeddings, and RapidFuzz reconciliation) with a strict Grounding Firewall to prevent hallucinated corporate identities. It constructs a dynamic NetworkX knowledge graph evaluating 6 deterministic risk vectors, screens against global OFAC sanctions, and generates FinCEN-compliant Suspicious Activity Reports (SAR) with Human-in-the-Loop review gates.",
    deepDive: {
      challenge:
        "Traditional Anti-Money Laundering (AML) and Know Your Business (KYB) verifications require compliance officers to manually review hundreds of convoluted multi-layered shell companies, international registries, and PDF filings. Hallucination risks in LLMs make generic AI dangerous for legal compliance.",
      architecture: [
        "Ingestion Pipeline: Real-time company registration lookup resolving director hierarchies and PSC (Persons of Significant Control).",
        "4-Stage RAG Pipeline: Extraction with PyMuPDF, chunk indexing in FAISS vector store, similarity re-ranking via NVIDIA Mistral embeddings, and entity fuzzing with RapidFuzz.",
        "Grounding Firewall: Cryptographic validation asserting that every node in the graph is tied back to primary filing evidence before admission to the reasoning graph.",
      ],
      riskEngineOrPipeline: [
        "Circular Ownership Loops (Detection of shell entity cycles)",
        "Nominee Director Density & Disproportionate Control",
        "Sanctioned Jurisdiction Exposure & Offshore Nodes",
        "Rapid Turnover of Statutory Officers",
        "High-Velocity Capital Influx Anomalies",
        "Direct OFAC / PEP Watchlist Screening with Levenshtein-distance fuzzy matching",
      ],
      decisions: [
        "NetworkX in FastAPI for in-memory sub-second graph traversal instead of heavy distributed Neo4j during real-time user investigations.",
        "Hybrid RAG combining exact-token RapidFuzz matching with dense semantic embeddings to prevent entity name spoofing.",
        "LangGraph human-in-the-loop pause/resume state machine ensuring that SAR filings can never be finalized without an authorized compliance officer sign-off.",
      ],
      outcome:
        "Awarded 2nd Runner-Up out of top national collegiate teams at Hackfest 2026 with a cash prize of INR 30,000. Praised by industry judges for its rigorous Grounding Firewall and deterministic risk topology.",
    },
    mockupType: "graph",
    links: {
      github: "https://github.com",
    },
  },
  {
    id: "horizon-meet",
    number: "02",
    title: "Horizon Meet & Veridian",
    subtitle: "Autonomous Enterprise WorkOS & AI Media Platform",
    category: "Real-Time Collaboration & Multilingual Agent Workflows",
    summary:
      "Enterprise work platform providing low-latency Hindi-to-English automated video dubbing, multilingual transcription, and intelligent executive meeting summaries orchestrated through a 12-node LangGraph agent state machine.",
    stack: [
      "Next.js",
      "Flask",
      "LangGraph",
      "WhisperX",
      "Gemini API",
      "Supabase",
      "PostgreSQL",
      "pgvector",
      "GCP Speech",
      "Server-Sent Events (SSE)",
    ],
    metrics: [
      { label: "Agent Pipeline Nodes", value: "12 Nodes" },
      { label: "Parallel Compliance Checks", value: "4 Concurrent" },
      { label: "Streaming Latency", value: "<150ms SSE" },
      { label: "Vector Search", value: "pgvector" },
    ],
    architectureOverview:
      "Veridian pairs WhisperX phoneme-level forced alignment with GCP Speech APIs and Gemini LLM reasoning to deliver accurate cross-lingual video dubbing and synthesis. The backend runs a 12-node LangGraph state machine featuring 4 parallel validation checks, state reducers, webhook idempotency, and real-time Server-Sent Events (SSE) telemetry to Next.js clients.",
    deepDive: {
      challenge:
        "Cross-language enterprise meetings suffer from communication silos. Automated dubbing usually loses speaker inflection, timestamp alignment, and domain context, while brittle monolithic microservices struggle with audio transcoding failures.",
      architecture: [
        "12-Node LangGraph State Machine: Decoupled stages for audio extraction, WhisperX phoneme segmentation, dialect translation, and voice synthesis.",
        "4 Parallel Validation Checks: Contextual glossary verification, audio-video lip-sync duration bounds, sentiment integrity check, and audio clipping validation.",
        "Custom Reducers: Fault-tolerant distributed state accumulation across asynchronous worker tasks.",
      ],
      riskEngineOrPipeline: [
        "Webhook Idempotency: Redis-backed token locks preventing duplicate media processing charges.",
        "Human-in-the-Loop Review: Audio segment review checkpoint allowing manual script edits before rendering.",
        "Real-Time SSE Streaming: Progressive progress telemetry pushed to the client interface.",
      ],
      decisions: [
        "WhisperX over standard Whisper for word-level timestamps required for synchronization.",
        "pgvector in Supabase for contextual semantic memory across recurring company meetings.",
        "Edge-compatible Next.js frontend with server components for rapid dashboard loading.",
      ],
      outcome:
        "Successfully achieved end-to-end video translation and synthesis with 98% speaker cadence retention and instant conversational search over historical meeting transcripts.",
    },
    mockupType: "audio-video",
    links: {
      github: "https://github.com",
    },
  },
  {
    id: "evocode",
    number: "03",
    title: "EvoCode",
    subtitle: "Full-Stack Autonomous AI Developer Platform",
    category: "Developer Tooling & Agentic Code Synthesis",
    summary:
      "Autonomous planning and execution platform powered by LLM agent swarms that parse entire codebases via AST inspection, plan architecture changes, write resilient code, and open verified pull requests with real-time test execution streams.",
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "TypeScript",
      "LangChain",
      "Gemini API",
      "AST Parser",
      "Server-Sent Events",
    ],
    metrics: [
      { label: "AST Parse Speed", value: "15k LOC/s" },
      { label: "Code Confidence Guardrail", value: "Threshold Score" },
      { label: "Real-Time Telemetry", value: "SSE Streams" },
      { label: "PR Generation", value: "End-to-End" },
    ],
    architectureOverview:
      "EvoCode features a Context Engine that executes Abstract Syntax Tree (AST) tree-sitter parsing combined with localized embeddings to map function calls and import dependency graphs. Swarms of planner and coder agents execute recursive test-driven refactoring with confidence-scoring guardrails before packaging changes into production-ready Git pull requests.",
    deepDive: {
      challenge:
        "Generic coding assistants fail on large multi-file repositories because token limits truncate necessary context, leading to broken imports, cyclic dependencies, and hallucinated APIs.",
      architecture: [
        "Context Engine: Tree-sitter AST parsing generating symbols, exports, and call-hierarchy graphs without blowing LLM context windows.",
        "Two-Tier Agent Swarm: Architectural Planner Agent that formulates step-by-step diff specs, and Coder Agent that executes scoped file mutations.",
        "Confidence Guardrail: Algorithmic heuristic scoring syntax validity, linting passes, and unit test pass rates before proposing a pull request.",
      ],
      riskEngineOrPipeline: [
        "Sandboxed Test Runner: Ephemeral container runs executing tests and capturing stderr/stdout.",
        "Live SSE Execution Stream: Developers observe real-time thoughts, command execution, and test metrics.",
      ],
      decisions: [
        "TypeScript across the entire stack for end-to-end type safety in agent-emitted AST payloads.",
        "AST-guided context retrieval instead of naive chunk similarity, resulting in 70% fewer redundant tokens.",
      ],
      outcome:
        "Built a modular developer platform capable of independently resolving repository bugs, refactoring legacy functions, and auto-generating test suites with zero human syntax corrections required.",
    },
    mockupType: "terminal",
    links: {
      github: "https://github.com",
    },
  },
];

export const CREDENTIALS: Credential[] = [
  {
    id: "hackfest-2026",
    type: "award",
    title: "2nd Runner-Up — National Hackathon",
    issuer: "Hackfest 2026",
    date: "2026",
    prizeOrBadge: "INR 30,000 Cash Prize",
    highlight: true,
    description:
      "Awarded 2nd Runner-Up among national teams for engineering 'Unshell', an autonomous AML & KYB Intelligence Graph with deterministic risk vectors and a strict Grounding Firewall.",
  },
  {
    id: "ai-for-bharat",
    type: "award",
    title: "National Shortlist — AI for Bharat Hackathon",
    issuer: "AI for Bharat & Unstop",
    date: "2025",
    prizeOrBadge: "National Finalist",
    highlight: true,
    description:
      "Shortlisted among top national submissions for designing high-impact multilingual AI systems solving accessibility challenges in regional Indian languages.",
  },
  {
    id: "oracle-genai",
    type: "certification",
    title: "Oracle Cloud Infrastructure (OCI) Certified Generative AI Professional",
    issuer: "Oracle",
    date: "2025",
    prizeOrBadge: "Certified Professional",
    highlight: true,
    description:
      "Verified proficiency in OCI Generative AI service, foundation models, fine-tuning techniques, vector databases, and enterprise AI orchestration.",
  },
  {
    id: "oracle-devops",
    type: "certification",
    title: "Oracle Cloud Infrastructure (OCI) Certified DevOps Professional",
    issuer: "Oracle",
    date: "2025",
    prizeOrBadge: "Certified Professional",
    highlight: false,
    description:
      "Industry credential validating automated CI/CD pipelines, container orchestration, infrastructure as code (IaC), and cloud deployment architectures.",
  },
  {
    id: "google-kaggle-agents",
    type: "intensive",
    title: "AI Agents Intensive Course Completion",
    issuer: "Google & Kaggle",
    date: "2025",
    prizeOrBadge: "Verified Specialization",
    highlight: false,
    description:
      "Advanced intensive training covering multi-agent coordination, tool-augmented reasoning, evaluation benchmarks, and LangGraph/Vertex AI agent patterns.",
  },
  {
    id: "innomatics-ds-genai",
    type: "intensive",
    title: "Data Science & GenAI Program",
    issuer: "Innomatics Research Labs",
    date: "2025",
    prizeOrBadge: "Program Graduate",
    highlight: false,
    description:
      "Comprehensive training in applied machine learning, neural networks, RAG pipelines, API development, and cloud model hosting.",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "Nov 2025 — Mar 2026",
    role: "Software Engineering Intern (Data & GenAI)",
    company: "Innomatics Research Labs",
    location: "Hyderabad, India (Remote)",
    type: "Internship",
    bullets: [
      "Engineered production-grade REST APIs for machine learning inference and LLM orchestration using Python, FastAPI, and Docker.",
      "Architected enterprise RAG retrieval systems: developed semantic document chunking pipelines, FAISS vector indexing, and embedding optimization workflows.",
      "Deployed and monitored scalable cloud backend services on AWS (EC2, S3) with latency monitoring and automated request caching.",
      "Collaborated with cross-functional teams to integrate generative AI models into client-facing platforms, improving contextual response accuracy by 35%.",
    ],
    technologies: ["Python", "FastAPI", "AWS", "FAISS", "RAG", "Docker", "REST APIs", "Git"],
  },
  {
    period: "Jan 2026 — Present",
    role: "Lead Systems Architect & Hackathon Finalist",
    company: "National Collegiate Hackathons",
    location: "Bengaluru, India",
    type: "Competitive Engineering",
    bullets: [
      "Spearheaded rapid 48-hour development sprints building Unshell to win 2nd Runner-Up at Hackfest 2026 (INR 30,000 award).",
      "Designed and implemented graph algorithms using NetworkX, real-time SSE streaming architectures, and multi-agent LangGraph pipelines.",
      "Engineered multilingual video dubbing and WorkOS telemetry platform for Horizon Meet & Veridian.",
    ],
    technologies: ["LangGraph", "Next.js", "FastAPI", "NetworkX", "PostgreSQL", "Supabase", "WhisperX"],
  },
  {
    period: "2023 — 2027 (Expected)",
    role: "B.E. in Computer Science & Engineering",
    company: "Sir M Visvesvaraya Institute of Technology (VTU)",
    location: "Bengaluru, India",
    type: "Education",
    bullets: [
      "Maintaining a strong academic standing with a CGPA of 8.5 / 10.0 in core Computer Science curriculum.",
      "Coursework in Data Structures & Algorithms, Database Management Systems, Computer Networks, Operating Systems, and Distributed Computing.",
      "Active participant in technical symposiums, coding challenges, and open-source AI developer communities.",
    ],
    technologies: ["C++", "Java", "Python", "Data Structures", "Algorithms", "DBMS", "OS"],
  },
];

export const CHAPTERS = [
  { id: "hero", number: "01", label: "Identity", name: "Introduction & Wordmark" },
  { id: "about", number: "02", label: "Core Stack", name: "Engineering & Skills" },
  { id: "projects", number: "03", label: "Flagship Systems", name: "Unshell & Case Studies" },
  { id: "credentials", number: "04", label: "Accreditation", name: "Awards & Certifications" },
  { id: "experience", number: "05", label: "Trajectory", name: "Experience & Timeline" },
  { id: "contact", number: "06", label: "Reach Out", name: "Terminal & Direct Connect" },
];

