// Everything the page says about Farhan lives here, so copy edits never touch markup.

export const profile = {
  name: "Farhan Taufik Syaban",
  short: "Farhan",
  tagline: "Earth Science & Computer Science",
  role: "Fullstack developer, backend-heavy, at eDOT (Nabati Group)",
  location: "Bandung, Indonesia",
  coords: "6°55′S 107°37′E",
  email: "farhantaufiks@gmail.com",
  cv: "/CV_Farhan_Taufik_Syaban_Geo-Data_Scientist.pdf",
  manmade: "https://manmade.farhantaufiks.com",
  links: {
    github: "https://github.com/farhantaufiks",
    linkedin: "https://linkedin.com/in/farhan-taufik-92174a130/",
  },
};

export const stats = [
  { value: "5 yrs", label: "shipping production software" },
  { value: "1+ yr", label: "petrophysics & field geology" },
  { value: "100k+", label: "records per batch, in minutes" },
  { value: "daily", label: "Claude Code since Mar 2025" },
];

// "Same instincts, different depth": each pair maps a geoscience habit to the engineering one.
export const parallels = [
  {
    field: "Well logs",
    fieldText:
      "Gamma ray, resistivity, density. You read curves from a hole you can't see into and work out what's down there.",
    prod: "Service logs",
    prodText:
      "Loki queries, Grafana panels, traces. Same job: read signals from a system you can't open up and find what's wrong.",
  },
  {
    field: "Stratigraphy",
    fieldText:
      "Layers are laid down in order, and no bed shows up twice. Get the sequence wrong and every interpretation above it is wrong.",
    prod: "Data migrations",
    prodText:
      "Moving SAP data into an in-house SaaS follows the same rule: ordered loads, idempotency flags, and nothing written twice.",
  },
  {
    field: "Core samples",
    fieldText:
      "Nobody trusts a reservoir estimate that hasn't been checked against real rock from the well.",
    prod: "Tests",
    prodText:
      "Nobody should trust a change that hasn't been checked against real cases. That includes the code an AI writes for me.",
  },
  {
    field: "Reservoir characterisation",
    fieldText:
      "Porosity, saturation, permeability. You describe the container properly before you estimate what's in it.",
    prod: "Data modelling",
    prodText:
      "ERD and API spec before code. I write the planning doc first, so other engineers can build against it.",
  },
];

// Youngest on top, like a real stratigraphic column. `ma` = thickness weight.
export type Lithology = "sandstone" | "siltstone" | "shale" | "coal" | "basement";

export const strata: {
  years: string;
  title: string;
  org: string;
  lith: Lithology;
  lithLabel: string;
  weight: number;
  points: string[];
  tags?: string[];
}[] = [
  {
    years: "2021 – now",
    title: "Fullstack Developer (backend-heavy)",
    org: "eDOT · PT. Elektronik Distribusi Otomatisasi Terkemuka, Nabati Group",
    lith: "sandstone",
    lithLabel: "Sandstone: porous, permeable, where the production is",
    weight: 5,
    points: [
      "Design and ship REST APIs end to end, from ERD to production, across Logistics, Food Distribution and core internal services. Go and NestJS on MySQL and MongoDB.",
      "Lead engineer (under the tech lead) on the company notification engine: Go, MongoDB, self-hosted Novu and Firebase, dkron scheduling.",
      "Run large SAP → in-house SaaS migrations, both big-bang and scheduled, with idempotent, fault-tolerant pipelines.",
      "Built the Logistics ↔ Food integration that made our own logistics a fulfilment provider, and a B2B flow linking sister companies in the Nabati Group.",
      "Contribute to eSuite (Finance & Accounting, Inventory, Back Office) and maintain an internal Python SDK.",
    ],
    tags: ["Go", "NestJS", "MongoDB", "MySQL", "Redis", "RabbitMQ", "gRPC", "Python"],
  },
  {
    years: "2021",
    title: "Frontend Developer",
    org: "Pandatech · PT Panda Advis Teknologi",
    lith: "siltstone",
    lithLabel: "Siltstone: thin bed, fine grain",
    weight: 1,
    points: [
      "Features for a fitness platform on iOS, Android and a web CMS, plus the influencer platform Vybes. Reusable React / React Native components on Ant Design.",
    ],
    tags: ["React", "React Native", "Ant Design"],
  },
  {
    years: "2021",
    title: "Full Stack JavaScript, Hacktiv8",
    org: "Unconformity · grade 100.47, Teacher's Award",
    lith: "shale",
    lithLabel: "Angular unconformity: geology ends, software begins",
    weight: 0,
    points: [],
  },
  {
    years: "2020 – 2021",
    title: "Petrophysicist & Research Assistant",
    org: "Pusat Studi Energi, Universitas Padjadjaran",
    lith: "shale",
    lithLabel: "Shale: fine layers, read closely",
    weight: 2,
    points: [
      "Characterised oil and gas reservoirs from well-log and core data: density, pore pressure, electrical and acoustic properties, radioactivity.",
      "Derived sand-shale ratio, porosity and water saturation to estimate reserves; field data and research for a hydrocarbon study of the Bogor Basin.",
    ],
    tags: ["Petrophysics", "Well logs", "Rock physics"],
  },
  {
    years: "2019 – 2020",
    title: "Junior Geologist",
    org: "PT. Berkat Banjar Mandiri · East Kalimantan",
    lith: "coal",
    lithLabel: "Coal seam: literally",
    weight: 1,
    points: [
      "Field supervision for coal exploration: generating the geological data that decides where to drill next.",
    ],
    tags: ["Field geology", "Coal exploration"],
  },
  {
    years: "2015 – 2019",
    title: "B.Eng. Geological Engineering",
    org: "Universitas Padjadjaran · GPA 3.60",
    lith: "basement",
    lithLabel: "Basement: everything above rests on it",
    weight: 2,
    points: ["Member of SM-IAGI and GEMA."],
  },
];

export const work = [
  {
    kicker: "Go · MongoDB · Novu · Firebase · dkron",
    title: "Notification engine",
    text: "Company-wide notifications across business units. I wrote the planning doc (data model, flows, API spec) and led the build.",
  },
  {
    kicker: "Go · Redis · scheduler + cron fallback",
    title: "SAP → SaaS migrations",
    text: "Business-critical data moved out of SAP with Redis idempotency flags, so a rerun never duplicates a record. Works for big-bang and scheduled loads.",
  },
  {
    kicker: "Worker pools · message queues · channels",
    title: "100k-row imports in minutes",
    text: "Spreadsheet imports of 100k+ records per batch for user segmentation. Concurrent, but throttled so the servers stay healthy.",
  },
  {
    kicker: "NestJS · MySQL · Google Maps · S3",
    title: "Logistics platform",
    text: "Built from the ERD up. Later connected to Food Distribution so our logistics became the fulfilment provider, which cut reliance on third-party couriers.",
  },
  {
    kicker: "Inter-company workflow",
    title: "B2B logistics for Nabati Group",
    text: "A flow that lets sister companies such as Kaldu Sari Nabati and Pinus Merah Abadi ship through the same platform.",
  },
  {
    kicker: "Petrophysics · well logs",
    title: "Bogor Basin study",
    text: "Porosity, water saturation and sand-shale ratio from well logs to estimate hydrocarbon potential, plus raw field data collection.",
  },
];

export const toolbox = [
  {
    name: "Geoscience",
    items: ["Petrophysics", "Well-log & core analysis", "Porosity / Sw / sand-shale", "Rock physics", "Field acquisition"],
  },
  {
    name: "Backend & data",
    items: ["Go", "TypeScript / NestJS", "Python", "MongoDB", "MySQL · PostgreSQL · Oracle", "Redis · RabbitMQ", "REST · gRPC", "ETL & migrations"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "React Native", "Astro"],
  },
  {
    name: "AI & ops",
    items: ["Claude Code (daily)", "Grafana · Loki", "nginx · Linux", "WireGuard", "Git · CI"],
  },
];

export const claudeWork = [
  "Codebase research before a change: tracing one request across Go and NestJS services.",
  "Production investigation: Loki and Grafana queries, read-only database checks, cross-referenced with merge requests.",
  "Drafts of MR descriptions, review replies and tickets. I decide what ships.",
  "Model routing: a small model for mechanical fetching, the strongest one for judgement and anything that writes.",
  "Guardrails written as instructions it follows: no secrets in tickets, confirm before anything outward-facing.",
];

export const sameSession = [
  "Patched every npm CVE in my old site (Next 16, Tailwind 4) and removed what was left of the template I forked it from.",
  "Turned it into a static export so a 1 GB VPS serves it with nginx alone; a daily cron refreshes the GitHub repos.",
  "Renewed TLS, limited ports 80/443 to Cloudflare, removed PM2 and old Node versions.",
  "Ran a WireGuard tunnel from the VPS to an old laptop at home, behind CGNAT, so friends can join my Minecraft server.",
  "Set up AdGuard Home for the household, and found out why the iPhone ignored it (Apple's private relay).",
];
