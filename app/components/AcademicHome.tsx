import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Bot,
  Code2,
  Database,
  Dna,
  ExternalLink,
  Microscope,
  Network,
  TerminalSquare,
} from "lucide-react";

type Locale = "zh" | "en";

const siteUrl = "https://xiuling-wang.pages.dev/";

const copy = {
  zh: {
    nav: { profile: "简历", publications: "研究成果", background: "履历", contact: "联系" },
    top: "返回顶部",
    qr: "扫描二维码打开网站",
    role: "Microbial Ecologist · Open to New Opportunities",
    hello: "Hi，我是秀玲",
    focus: "气候 · 深度 · 宿主微生物组",
    intro: "结合野外生态、分子方法、统计建模与可复现计算分析，理解细菌和真菌群落如何组装、变化并发挥作用。",
    explore: "查看研究成果",
    profile: "简介",
    profileText: [
      "我的研究经历连接地理学、生态学、生物化学与微生物组数据科学。博士阶段在波茨坦大学和德国亥姆霍兹地学研究中心（GFZ）开展研究，重点研究智利气候梯度与深层土壤微生物群落，同时开展根际、食用菌表面细菌与真菌群落研究。",
      "我能够独立推进实验设计、低生物量样品 DNA 提取、qPCR 与测序准备，并完成微生物群落分析、统计建模、网络分析、科学可视化和论文写作。未来也希望将研究兴趣延伸到牙菌斑等人体相关微生物群落及跨环境综述。",
    ],
    requestCv: "索取完整简历",
    facts: [
      ["专业背景", "生物化学博士 · 生态学硕士 · 地理学学士"],
      ["国际项目", "DFG EarthShape · 德国—智利 · 2018–2025"],
      ["工作语言", "中文（母语）· 英语"],
    ],
    research: "研究方向",
    researchIntro: "从土壤、根际和食用菌到更广泛的宿主相关环境，研究微生物群落如何形成、变化并发挥作用。",
    project: "主要项目",
    projectTitle: "德国—智利 EarthShape BIOSOILS 合作项目",
    projectText: "参与跨气候区深层土壤研究，围绕气候、土壤深度与微生物群落开展实验和数据分析；优化低生物量土壤 DNA 提取方案，相关流程被 GFZ 实验室采用。",
    projectLink: "查看项目介绍",
    publications: "学术成果",
    background: "履历",
    education: "教育经历",
    experience: "研究经历",
    skills: "技能",
    skillsIntro: "微生物组分析、统计建模、实验方法与 AI 辅助的可复现研究流程。",
    contact: "合作与联系",
    contactText: "欢迎就研究合作、数据分析岗位、联合项目及未来学生机会联系。",
    updated: "网站更新：2026.07",
    rights: "© 2026 Xiuling Wang",
  },
  en: {
    nav: { profile: "Profile", publications: "Research", background: "Experience", contact: "Contact" },
    top: "Back to top",
    qr: "Scan to open this website",
    role: "Microbial Ecologist · Open to New Opportunities",
    hello: "Hi, I’m Xiuling",
    focus: "Climate · depth · host microbiomes",
    intro: "I integrate field ecology, molecular approaches, statistical modelling, and reproducible computation to understand how bacterial and fungal communities assemble, change, and function.",
    explore: "Explore my research",
    profile: "Profile",
    profileText: [
      "My research connects geography, ecology, biochemistry, and microbiome data science. During my PhD at the University of Potsdam and the GFZ German Research Centre for Geosciences, I focused on microbial communities across Chilean climate gradients and deep-soil profiles, alongside work on rhizosphere and edible-mushroom bacterial and fungal communities.",
      "I can independently lead research from experimental design, low-biomass DNA extraction, qPCR, and sequencing preparation to community analysis, statistical modelling, network analysis, scientific visualisation, and manuscript writing. I am also interested in future work on human-associated communities such as dental plaque and in cross-environment reviews.",
    ],
    requestCv: "Request my full CV",
    facts: [
      ["Background", "PhD in Biochemistry · MSc in Ecology · BSc in Geography"],
      ["International project", "DFG EarthShape · Germany–Chile · 2018–2025"],
      ["Languages", "Chinese (native) · English"],
    ],
    research: "Research Areas",
    researchIntro: "From soils, rhizospheres, and edible fungi to broader host-associated environments, I study how microbial communities assemble, change, and function.",
    project: "Selected Project",
    projectTitle: "Germany–Chile EarthShape BIOSOILS Project",
    projectText: "I contributed to deep-soil research across climate zones, linking climate, soil depth, and microbial communities through experiments and data analysis. I also optimised a low-biomass soil DNA extraction workflow adopted by the GFZ laboratory.",
    projectLink: "View the project",
    publications: "Publications & Manuscripts",
    background: "Experience",
    education: "Education",
    experience: "Research Experience",
    skills: "Skills",
    skillsIntro: "Microbiome analysis, statistical modelling, laboratory methods, and reproducible workflows accelerated by AI.",
    contact: "Contact & Collaboration",
    contactText: "I welcome conversations about research collaborations, data-focused roles, joint projects, and future student opportunities.",
    updated: "Website updated: 2026.07",
    rights: "© 2026 Xiuling Wang",
  },
} as const;

const researchAreas = [
  {
    number: "01",
    zhTitle: "气候梯度与深层土壤微生物",
    enTitle: "Climate gradients & deep-soil microbiomes",
    zhDetail: "沿智利干旱至湿润梯度，研究气候、土壤深度与理化性质如何共同塑造细菌群落。",
    enDetail: "Investigating how climate, soil depth, and physicochemical properties jointly shape bacterial communities across Chile’s arid-to-humid gradient.",
  },
  {
    number: "02",
    zhTitle: "活体与遗迹微生物群落",
    enTitle: "Living and relic microbial communities",
    zhDetail: "分离胞内 DNA（iDNA）与胞外 DNA（eDNA），提高低生物量环境中群落生态解释的准确性。",
    enDetail: "Separating intracellular DNA (iDNA) from extracellular DNA (eDNA) to improve ecological inference in low-biomass environments.",
  },
  {
    number: "03",
    zhTitle: "根际与食品微生物生态",
    enTitle: "Rhizosphere & food microbiology",
    zhDetail: "从药用植物根际群落到食用菌保鲜，研究微生物群落与植物、环境及生产过程的联系。",
    enDetail: "Connecting microbial communities with plants, environments, and production processes, from medicinal-plant rhizospheres to mushroom preservation.",
  },
  {
    number: "04",
    zhTitle: "真菌与跨环境微生物组",
    enTitle: "Fungi & cross-environment microbiomes",
    zhDetail: "关注真菌、食用菌及牙菌斑等不同环境中的微生物群落，作为未来研究与综述方向。",
    enDetail: "Extending future research and review interests to fungi, edible mushrooms, dental plaque, and microbial communities across contrasting environments.",
  },
];

const publications = [
  {
    yearZh: "审稿中", yearEn: "IN REVIEW", roleZh: "通讯", roleEn: "CORRESPONDING AUTHOR", statusZh: "大修已返 · 待决定", statusEn: "MAJOR REVISION RETURNED · AWAITING DECISION",
    title: "Depth-dependent differences between direct total DNA and an intracellular-DNA-enriched fraction in bulk-soil bacterial and fungal communities of a Lonicera japonica field",
    journal: "BMC Microbiology", metricZh: "JCR 2025 · IF 5.4 · Q1", metricEn: "JCR 2025 · IF 5.4 · Q1", href: "https://link.springer.com/journal/12866",
  },
  {
    yearZh: "2026", yearEn: "2026", roleZh: "一作 & 通讯", roleEn: "FIRST & CORRESPONDING AUTHOR",
    title: "Rhizosphere fungal communities of four Ferula species in their native habitats in northern Xinjiang",
    authors: ["Xiuling Wang", "Gaodu Liang", "Li Zhuang"],
    journal: "Rhizosphere · 101421 · DOI 10.1016/j.rhisph.2026.101421", metricZh: "JCR 2025 · IF 3.9 · Q1", metricEn: "JCR 2025 · IF 3.9 · Q1", href: "https://doi.org/10.1016/j.rhisph.2026.101421",
  },
  {
    yearZh: "2026", yearEn: "2026", roleZh: "通讯", roleEn: "CORRESPONDING AUTHOR",
    title: "Mechanical Damage Modulates Bacterial and Fungal Succession on the Surface of Hypsizygus marmoreus During Refrigerated Storage",
    journal: "Microorganisms · 14(4) · 762", metricZh: "JCR 2025 · IF 4.7 · Q2", metricEn: "JCR 2025 · IF 4.7 · Q2", href: "https://doi.org/10.3390/microorganisms14040762",
  },
  {
    yearZh: "2024", yearEn: "2024", roleZh: "一作", roleEn: "FIRST AUTHOR",
    title: "The effects of climate and soil depth on living and dead bacterial communities along a longitudinal gradient in Chile",
    journal: "Science of the Total Environment · 945 · 173846", metricZh: "JCR 2024（发表年度）· IF 8.0 · Q1", metricEn: "JCR 2024 (PUBLICATION YEAR) · IF 8.0 · Q1", href: "https://doi.org/10.1016/j.scitotenv.2024.173846",
  },
  {
    yearZh: "2019", yearEn: "2019", roleZh: "一作", roleEn: "FIRST AUTHOR",
    title: "Low Temperature (15 °C) Reduces Bacterial Diversity and Prolongs the Preservation Time of Volvariella volvacea",
    journal: "Microorganisms · 7(10) · 475", metricZh: "JCR 2025 · IF 4.7 · Q2", metricEn: "JCR 2025 · IF 4.7 · Q2", href: "https://doi.org/10.3390/microorganisms7100475",
  },
  {
    yearZh: "2018", yearEn: "2018", roleZh: "一作", roleEn: "FIRST AUTHOR",
    title: "Bacterial diversity and community structure in the rhizosphere of four Ferula species",
    journal: "Scientific Reports · 8 · 5345", metricZh: "JCR 2025 · IF 4.9 · Q1", metricEn: "JCR 2025 · IF 4.9 · Q1", href: "https://doi.org/10.1038/s41598-018-22802-y",
  },
  {
    yearZh: "2016", yearEn: "2016", roleZh: "二作", roleEn: "SECOND AUTHOR",
    title: "A unique mountainous vertical distribution patterns and related environmental interpretation – a case study on the northern slope of the Ili River Valley",
    journal: "Pakistan Journal of Botany · 48(5) · 1877–1886", metricZh: "JCR 2025 · IF 1.1 · Q3", metricEn: "JCR 2025 · IF 1.1 · Q3", href: "https://www.pakbs.org/pjbot/PDFs/48%285%29/14.pdf",
  },
];

const skills = [
  {
    icon: BarChart3,
    zhTitle: "统计与微生物组数据分析",
    enTitle: "Statistics & microbiome data",
    zhText: "熟悉 SPSS、群落与网络分析、多变量统计和科学可视化，能够从原始数据推进到论文级结果。",
    enText: "Experienced with SPSS, community and network analyses, multivariate statistics, and scientific visualisation from raw data to publication-ready results.",
    tags: ["SPSS", "Community analysis", "Networks", "Visualisation"],
  },
  {
    icon: Code2,
    zhTitle: "R 语言与可复现计算分析",
    enTitle: "R & reproducible computation",
    zhText: "约 5 年 R 使用经验（2021–至今），覆盖数据整理、统计建模、微生物群落分析和可视化；目前主要采用 AI 协作开发，同时保留方法判断、调试与复现能力。",
    enText: "Around five years of R experience (2021–present) across data wrangling, statistical modelling, microbial community analysis, and visualisation. I now work primarily through AI-assisted development while retaining methodological judgement, debugging, and reproducibility skills.",
    tags: ["R", "tidyverse", "ggplot2", "Reproducible analysis"],
  },
  {
    icon: Microscope,
    zhTitle: "微生物生态实验",
    enTitle: "Microbial ecology laboratory work",
    zhText: "低生物量土壤 DNA 提取、PCR、qPCR、文库准备、微生物分离培养，以及 16S、ITS 与宏基因组研究流程。",
    enText: "Low-biomass soil DNA extraction, PCR, qPCR, library preparation, microbial isolation and cultivation, and 16S, ITS, and metagenomic workflows.",
    tags: ["16S", "ITS", "Metagenomics", "qPCR"],
  },
  {
    icon: Bot,
    zhTitle: "计算工作流与 AI 辅助研究",
    enTitle: "Computational workflows & AI-assisted research",
    zhText: "Codex 资深用户，熟练使用 Claude Code 与 ChatGPT；擅长复杂任务拆解、智能体协作、提示设计、结果校验和长流程维护。",
    enText: "Advanced Codex user with extensive experience in Claude Code and ChatGPT; skilled in task decomposition, agent collaboration, prompting, output validation, and long-running workflows.",
    tags: ["Codex", "Claude Code", "ChatGPT", "Agent workflows"],
  },
];

const profiles = [
  { label: "ORCID", href: "https://orcid.org/0000-0002-8006-7162" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=aKF3abwAAAAJ&hl=en" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/xiuling-wang-001ab718b/" },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/Xiuling-Wang" },
  { label: "GitHub", href: "https://github.com/Xiuling-Wang" },
];

function SkillCard({ skill, locale }: { skill: (typeof skills)[number]; locale: Locale }) {
  const Icon = skill.icon;
  return (
    <article className="skill-card">
      <div className="skill-icon" aria-hidden="true"><Icon size={25} strokeWidth={1.8} /></div>
      <h3>{locale === "zh" ? skill.zhTitle : skill.enTitle}</h3>
      <p>{locale === "zh" ? skill.zhText : skill.enText}</p>
      <div className="skill-tags">{skill.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </article>
  );
}

export default function AcademicHome({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const isZh = locale === "zh";

  return (
    <div lang={isZh ? "zh-CN" : "en"} className={isZh ? "locale-zh" : "locale-en"}>
      <a className="skip-link" href="#main-content">{isZh ? "跳到主要内容" : "Skip to main content"}</a>
      <header className="site-header">
        <div className="brand-zone">
          <button className="qr-link qr-popover-trigger" type="button" popoverTarget="site-qr-popover" popoverTargetAction="show" aria-controls="site-qr-popover" aria-haspopup="dialog" aria-label={t.qr} title={t.qr}>
            <img src="/site-qr.svg" alt="" width={56} height={56} />
          </button>
          <a className="qr-link qr-fallback-trigger" href="#site-qr-popover" aria-label={t.qr} title={t.qr}>
            <img src="/site-qr.svg" alt="" width={56} height={56} />
          </a>
          <a className="wordmark" href="#top" aria-label={`Xiuling Wang — ${t.top}`}>
            <span>Xiuling Wang</span>
            <small>microbes · ecology · data</small>
          </a>
        </div>
        <nav aria-label={isZh ? "主导航" : "Main navigation"}>
          <a href="#profile">{t.nav.profile}</a>
          <a href="#publications">{t.nav.publications}</a>
          <a href="#background">{t.nav.background}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" role="group" aria-label="Language">
            <a className={isZh ? "active" : ""} href="/" lang="zh-CN" aria-current={isZh ? "page" : undefined}>中文</a>
            <span>/</span>
            <a className={!isZh ? "active" : ""} href="/en/" lang="en" aria-current={!isZh ? "page" : undefined}>EN</a>
          </div>
          <a className="nav-cta" href="mailto:wang.xiuling@outlook.com">{isZh ? "联系我" : "Contact"} <ArrowUpRight size={14} /></a>
        </div>
      </header>

      <div className="qr-modal" id="site-qr-popover" popover="auto" role="dialog" aria-label={t.qr}>
        <a className="qr-fallback-backdrop" href="#top" aria-label={isZh ? "关闭二维码" : "Close QR code"} />
        <div className="qr-modal-card">
          <button className="qr-modal-close" type="button" popoverTarget="site-qr-popover" popoverTargetAction="hide" aria-label={isZh ? "关闭二维码" : "Close QR code"} autoFocus>×</button>
          <a className="qr-fallback-close" href="#top" aria-label={isZh ? "关闭二维码" : "Close QR code"}>×</a>
          <img src="/site-qr.svg" alt={t.qr} width={330} height={330} />
          <p>{isZh ? "手机扫描，打开个人主页" : "Scan with your phone to open the website"}</p>
          <a className="qr-direct-link" href={siteUrl}>{siteUrl.replace("https://", "")} <ArrowUpRight size={14} /></a>
        </div>
      </div>

      <main id="main-content" tabIndex={-1}>
        <section className="hero" id="top">
          <figure className="hero-photo">
            <img src="/xiuling-mountains.webp" alt={isZh ? "王秀玲在山间的照片" : "Xiuling Wang in the mountains"} width={1350} height={1800} fetchPriority="high" decoding="async" />
          </figure>
          <div className="hero-copy">
            <p className="hero-kicker"><span /> <span className="kicker-text">{t.role}</span></p>
            <h1>{t.hello} <span className="hero-sprout" aria-hidden="true">🌱</span></h1>
            <p className="hero-focus">{t.focus}</p>
            <p className="hero-lead">{t.intro}</p>
            <div className="hero-actions">
              <a className="button primary" href="#publications">{t.explore} <ArrowDown size={15} /></a>
              <a className="button secondary" href="https://orcid.org/0000-0002-8006-7162" target="_blank" rel="noopener noreferrer">ORCID <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>

      <section className="profile section" id="profile">
        <div className="section-title"><span>01</span><h2>{t.profile}</h2></div>
        <div className="profile-grid">
          <div className="profile-copy">
            {t.profileText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <a className="text-link" href="mailto:wang.xiuling@outlook.com?subject=CV%20request%20-%20Xiuling%20Wang">{t.requestCv} <ArrowUpRight size={15} /></a>
          </div>
          <div className="fact-list">
            {t.facts.map(([label, value]) => <article key={label}><span>{label}</span><strong>{value}</strong></article>)}
          </div>
        </div>
      </section>

      <section className="research section" id="research">
        <div className="section-heading">
          <div className="section-title"><span>02</span><h2>{t.research}</h2></div>
          <p>{t.researchIntro}</p>
        </div>
        <div className="research-list">
          {researchAreas.map((area) => (
            <article key={area.number}>
              <span className="research-number">{area.number}</span>
              <h3>{isZh ? area.zhTitle : area.enTitle}</h3>
              <p>{isZh ? area.zhDetail : area.enDetail}</p>
              <Network size={24} aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="selected-project section" id="project">
        <div className="section-title"><span>03</span><h2>{t.project}</h2></div>
        <article className="earthshape-card">
          <div className="earthshape-copy">
            <p>EARTHSHAPE · DFG · 2018–2025</p>
            <h3>{t.projectTitle}</h3>
            <span>{t.projectText}</span>
            <div className="project-tags"><b>iDNA / eDNA</b><b>16S rRNA</b><b>0–200 cm</b><b>Germany–Chile</b></div>
            <a href="https://www.gfz.de/en/press/news/details/earthshape-german-chilean-research-project-enters-second-phase" target="_blank" rel="noopener noreferrer">{t.projectLink} <ExternalLink size={14} /></a>
          </div>
          <div className="climate-visual" aria-hidden="true">
            <div className="climate-labels"><span>ARID</span><span>HUMID</span></div>
            <div className="climate-line"><i /><i /><i /><i /><i /></div>
            <div className="soil-depth"><span>0 cm</span><i /><i /><i /><strong>200 cm</strong></div>
            <div className="climate-caption">climate × depth × microbes</div>
          </div>
        </article>
      </section>

      <section className="publications section" id="publications">
        <div className="section-heading publication-heading">
          <div className="section-title"><span>04</span><h2>{t.publications}</h2></div>
        </div>
        <ol className="publication-list" aria-label={isZh ? "学术成果列表" : "Publications and manuscripts"}>
          {publications.map((publication, index) => (
            <li key={publication.title} className={publication.statusZh ? "publication-manuscript" : undefined}>
              <a href={publication.href} target="_blank" rel="noopener noreferrer">
                <span className="publication-count">{String(index + 1).padStart(2, "0")}</span>
                <div className="publication-main">
                  <div className="publication-topline">
                    <span>{isZh ? publication.yearZh : publication.yearEn}</span>
                    <b>{isZh ? publication.roleZh : publication.roleEn}</b>
                    {publication.statusZh && <em>{isZh ? publication.statusZh : publication.statusEn}</em>}
                  </div>
                  <h3>{publication.title}</h3>
                  {publication.authors && (
                    <p className="publication-authors" aria-label={isZh ? "作者" : "Authors"}>
                      {publication.authors.map((author, authorIndex) => (
                        <span key={author}>{authorIndex > 0 && ", "}{author === "Xiuling Wang" ? <strong>{author}</strong> : author}</span>
                      ))}
                    </p>
                  )}
                  <div className="publication-details"><span>{publication.journal}</span><strong>{isZh ? publication.metricZh : publication.metricEn}</strong></div>
                </div>
                <ArrowUpRight className="publication-arrow" size={20} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="background section" id="background">
        <div className="section-title"><span>05</span><h2>{t.background}</h2></div>
        <div className="timeline-grid">
          <div>
            <p className="timeline-label">{t.education}</p>
            <article><time>2019–2025</time><div><h3>{isZh ? "生物化学博士" : "PhD in Biochemistry"}</h3><p>{isZh ? "波茨坦大学 · 博士研究在德国亥姆霍兹地学研究中心（GFZ）开展" : "University of Potsdam · doctoral research at the GFZ German Research Centre for Geosciences"}</p></div></article>
            <article><time>2016–2019</time><div><h3>{isZh ? "生态学硕士" : "MSc in Ecology"}</h3><p>{isZh ? "石河子大学 · 微生物生态" : "Shihezi University · microbial ecology"}</p></div></article>
            <article><time>2011–2015</time><div><h3>{isZh ? "地理学学士" : "BSc in Geography"}</h3><p>{isZh ? "郑州师范学院" : "Zhengzhou Normal University"}</p></div></article>
          </div>
          <div>
            <p className="timeline-label">{t.experience}</p>
            <article><time>2019–2025</time><div><h3>{isZh ? "博士研究人员" : "Doctoral Researcher"}</h3><p>{isZh ? "德国亥姆霍兹地学研究中心（GFZ）· 地球微生物学 · 波茨坦" : "GFZ German Research Centre for Geosciences · Geomicrobiology · Potsdam"}</p></div></article>
            <article><time>2018–2019</time><div><h3>{isZh ? "科研实习" : "Research Intern"}</h3><p>{isZh ? "上海市农业科学院食用菌研究所" : "Institute of Edible Fungi, Shanghai Academy of Agricultural Sciences"}</p></div></article>
          </div>
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="section-heading">
          <div className="section-title"><span>06</span><h2>{t.skills}</h2></div>
          <p>{t.skillsIntro}</p>
        </div>
        <div className="skills-grid">{skills.map((skill) => <SkillCard key={skill.enTitle} skill={skill} locale={locale} />)}</div>
        <div className="platform-strip" aria-label="Platforms and methods">
          <span><TerminalSquare size={18} /> Codex</span><span><Bot size={18} /> Claude Code</span><span><Bot size={18} /> ChatGPT</span><span><Code2 size={18} /> R</span><span><BarChart3 size={18} /> SPSS</span><span><Database size={18} /> Microbiome data</span><span><Dna size={18} /> 16S / ITS</span>
        </div>
      </section>

      <section className="contact section" id="contact">
        <p className="contact-label"><span /> <span className="contact-label-text">{t.contact} <span className="contact-wave" aria-hidden="true">👋</span></span></p>
        <h2>{t.contactText}</h2>
        <div className="contact-row">
          <a className="contact-email" href="mailto:wang.xiuling@outlook.com">wang.xiuling@outlook.com <ArrowUpRight size={22} /></a>
          <div className="profile-links">
            {profiles.map((profile) => <a href={profile.href} target="_blank" rel="noopener noreferrer" key={profile.label}>{profile.label} <ArrowUpRight size={13} /></a>)}
          </div>
        </div>
      </section>
      </main>

      <footer>
        <p>{t.rights}</p>
        <p>{t.updated}</p>
        <a href="#top">{t.top} ↑</a>
      </footer>
    </div>
  );
}
