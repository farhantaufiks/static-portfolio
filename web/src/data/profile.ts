// Everything the page says about Farhan lives here, so copy edits never touch markup.

export const profile = {
  name: "Farhan Taufik Syaban",
  short: "Farhan",
  tagline: "Earth Science & Computer Science",
  role: "Software engineer, Core Team at eDOT (Nabati Group)",
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
  { value: "5 yrs", label: "shipping production systems" },
  { value: "Go", label: "most days, Next.js for the web" },
  { value: "12", label: "repos I work across, with Claude Code" },
  { value: "0", label: "new Sonar issues per merge" },
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
      "A green test can be vacuous. I mutation-test: break the code on purpose and make sure the test actually fails. Especially for code an AI wrote.",
  },
  {
    field: "Reservoir characterisation",
    fieldText:
      "Porosity, saturation, permeability. Get them right, because the modelling geologist and the geophysicist build on your numbers.",
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
    title: "Software Engineer, Core Team",
    org: "eDOT · PT. Elektronik Distribusi Otomatisasi Terkemuka, Nabati Group",
    lith: "sandstone",
    lithLabel: "Sandstone: porous, permeable, where the production is",
    weight: 6,
    points: [
      "Core Team: the platform every other product stands on. Identity and SSO, SpiceDB permissions, subscriptions and packages, payments, wallet, notifications. Mostly Go now, Next.js for the web.",
      "Right hand to the tech lead: I write the technical plans and runbooks, break the work into reviewable merge requests, and run releases with the team, DevOps included.",
      "Multi-tenant provisioning and data migration, payment and wallet services, package install and rollback flows on a relationship-based permission model.",
      "Production investigation with metrics and logs: evidence first, then the fix, then a check that the fix held.",
      "Earlier: lead on the notification engine; logistics platform from the ERD up; Logistics ↔ Food integration; B2B flows across Nabati companies; SAP → SaaS migrations; an internal Python SDK.",
    ],
    tags: ["Go", "Next.js", "NestJS", "MongoDB", "SpiceDB", "RabbitMQ", "Redis", "gRPC", "Grafana / Loki", "SonarQube"],
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
      "Interpreted well logs together with core and geochemistry data: density, pore pressure, electrical and acoustic properties, radioactivity.",
      "My results went to the modelling geologist, who combined them with the geophysicist's data to build the reservoir model. The data is mine to get right; the model depends on it.",
      "Derived sand-shale ratio, porosity and water saturation to estimate reserves; field data and research for a hydrocarbon study of the Bogor Basin.",
    ],
    tags: ["Petrophysics", "Well-log analysis", "Geochemistry", "Rock physics"],
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
    kicker: "Go · Next.js · MongoDB · runbooks",
    title: "Multi-tenant provisioning",
    text: "Provisioning and migrating companies between products, with bulk runs and de-duplication. Released in phases with the tech lead and DevOps, each step checked before the next one starts.",
  },
  {
    kicker: "Go · SpiceDB · RabbitMQ",
    title: "Permissions & packages",
    text: "Install, upgrade and rollback of product packages and add-ons, with access kept consistent across services when a subscription changes.",
  },
  {
    kicker: "Go · payment gateway · idempotent callbacks",
    title: "Payments & wallet",
    text: "Payment-gateway callbacks and wallet rules, with tests mutation-checked so a green run really means the branch ran.",
  },
  {
    kicker: "Grafana · Loki · Mimir · MongoDB",
    title: "Production forensics",
    text: "Following metrics, logs and data until the root cause is proven, not guessed. Evidence first, then the fix, then a check that it held.",
  },
  {
    kicker: "Go · MongoDB · Novu · Firebase · dkron",
    title: "Notification engine",
    text: "Company-wide notifications across business units. I wrote the planning doc (data model, flows, API spec) and led the build.",
  },
  {
    kicker: "Go · Redis · scheduler + cron fallback",
    title: "SAP → SaaS migrations",
    text: "Business-critical data moved out of SAP with Redis idempotency flags, so a rerun never duplicates a record. Big-bang and scheduled loads.",
  },
  {
    kicker: "Worker pools · message queues",
    title: "100k-row imports in minutes",
    text: "Spreadsheet imports of 100k+ records per batch for user segmentation. Concurrent, but throttled so the servers stay healthy.",
  },
  {
    kicker: "NestJS · MySQL · Google Maps · S3",
    title: "Logistics platform & B2B",
    text: "Built from the ERD up, then made the fulfilment provider for Food Distribution and for sister companies across Nabati Group.",
  },
  {
    kicker: "Petrophysics · well logs · geochemistry",
    title: "Bogor Basin study",
    text: "Porosity, water saturation and sand-shale ratio from well logs, core and geochemistry, feeding the geological model that estimated hydrocarbon potential. Plus raw field data collection.",
  },
];

export const toolbox = [
  {
    name: "Geoscience",
    items: ["Petrophysics", "Well-log interpretation", "Core & geochemistry analysis", "Porosity / Sw / sand-shale", "Rock physics", "Field acquisition"],
  },
  {
    name: "Backend & data",
    items: ["Go (daily)", "TypeScript / NestJS", "Python", "MongoDB", "MySQL · PostgreSQL", "SpiceDB", "Redis · RabbitMQ", "REST · gRPC"],
  },
  {
    name: "Web",
    items: ["Next.js", "React", "React Native", "Astro"],
  },
  {
    name: "AI, quality & ops",
    items: ["Claude Code: memory, skills, MCP", "SonarQube · mutation tests", "Grafana · Loki · Mimir", "GitLab CI · YouTrack", "nginx · Linux · WireGuard"],
  },
];

// What Farhan built around Claude Code, from his own instructions and project memory.
export const harness = [
  {
    title: "Rules learned from incidents",
    text: "When something goes wrong, I don't just fix it. I write the rule down so the agent never repeats it. Same for model routing, secrets, and anything outward-facing.",
  },
  {
    title: "Memory across 12 repos",
    text: "100+ notes on how each service and environment really behaves, which tool output can mislead, and how the team reviews and merges.",
  },
  {
    title: "Skills for repeat operations",
    text: "Chores that span several systems, written once as skills so they run the same way every time.",
  },
  {
    title: "Skip-proof runbooks",
    text: "One action per step. Expected output and a STOP rule under each. Releases run from a shared live tracker that the tech lead, DevOps and I update together.",
  },
];

export const verify = [
  "\"All tests pass\" only counts from the real exit code, never from a summarised log.",
  "Mutation-test critical paths: break the code on purpose, make sure a test goes red.",
  "Check the match count before trusting a benchmark. A probe on zero rows measures nothing.",
  "Zero new Sonar issues per merge. Every AI-review finding gets a fix, or a reply with file:line evidence.",
  "Production is read-only for the agent. Anything outward-facing waits for my yes.",
];

export const sameSession = [
  "Audited my 2021 site and patched every CVE: upgraded to Next 16 and Tailwind 4, cleaned up data.",
  "Moved it to a static export, so a 1 GB VPS serves both sites with nginx and no Node process.",
  "Hardened the server: TLS renewal, ports 80/443 only through Cloudflare, firewall changes with an automatic rollback timer.",
  "Tunnelled through CGNAT with WireGuard to host a Minecraft server for friends on an old laptop at home.",
  "Household ad-blocking DNS: found the ISP hijacking port 53 and Apple's relay bypassing it. Test score went from 13/132 to 127/132.",
  "Split the repo into two sites, built this one, deployed it, then sent the first draft back (see the 2 prompts above).",
];
