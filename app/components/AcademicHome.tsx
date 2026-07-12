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

const siteUrl = "https://xiuling-wang.github.io/";

const copy = {
  zh: {
    nav: { profile: "简历", publications: "研究成果", background: "履历", contact: "联系" },
    top: "返回顶部",
    qr: "扫描二维码打开网站",
    role: "Soil Microbial Ecologist · Open to New Opportunities",
    hello: "Hi，我是秀玲。",
    focus: "我在土壤微生物和数据之间工作。",
    intro: "研究气候、土壤深度和植物如何塑造微生物群落，也把实验、统计与可复现的数据分析连接成完整的研究流程。",
    explore: "查看研究成果",
    profile: "简介",
    profileText: [
      "我的研究经历连接地理学、生态学、生物化学与微生物组数据科学。博士阶段在波茨坦大学和德国亥姆霍兹地学研究中心（GFZ）开展研究，聚焦智利沿海气候梯度及 0–200 cm 土壤剖面的细菌群落。",
      "我能够独立推进实验设计、低生物量样品 DNA 提取、qPCR 与测序准备，并完成微生物群落分析、统计建模、网络分析、科学可视化和论文写作。",
    ],
    requestCv: "索取完整简历",
    facts: [
      ["专业背景", "生物化学博士 · 生态学硕士 · 地理学学士"],
      ["国际项目", "DFG EarthShape · 德国—智利 · 2018–2025"],
      ["工作语言", "中文（母语）· 英语"],
    ],
    research: "研究方向",
    researchIntro: "从环境梯度到微生物响应，关注能够解释、复现并经得住检验的生态学证据。",
    project: "主要项目",
    projectTitle: "德国—智利 EarthShape BIOSOILS 合作项目",
    projectText: "参与跨气候区深层土壤研究，围绕气候、土壤深度与微生物群落开展实验和数据分析；优化低生物量土壤 DNA 提取方案，相关流程被 GFZ 实验室采用。",
    projectLink: "查看项目介绍",
    publications: "学术成果",
    publicationsIntro: "论文与在审稿件按当前状态列出；期刊指标注明对应的 JCR 年份。",
    background: "履历",
    education: "教育经历",
    experience: "研究经历",
    skills: "技能",
    skillsIntro: "实验、数据与 AI 智能体协同的研究工作流。",
    contact: "合作与联系",
    contactText: "欢迎就研究合作、数据分析岗位、联合项目及未来学生机会联系。",
    updated: "网站更新：2026.07",
    rights: "© 2026 王秀玲",
  },
  en: {
    nav: { profile: "Profile", publications: "Research", background: "Experience", contact: "Contact" },
    top: "Back to top",
    qr: "Scan to open this website",
    role: "Soil Microbial Ecologist · Open to New Opportunities",
    hello: "Hi, I’m Xiuling.",
    focus: "I work at the intersection of soil microbiomes and data.",
    intro: "I study how climate, soil depth, and plants shape microbial communities, connecting experiments, statistics, and reproducible data analysis into complete research workflows.",
    explore: "Explore my research",
    profile: "Profile",
    profileText: [
      "My research connects geography, ecology, biochemistry, and microbiome data science. During my PhD at the University of Potsdam and the GFZ German Research Centre for Geosciences, I investigated bacterial communities across Chilean climate gradients and soil profiles from 0 to 200 cm.",
      "I can independently lead research from experimental design, low-biomass soil DNA extraction, qPCR, and sequencing preparation to community analysis, statistical modelling, network analysis, scientific visualisation, and manuscript writing.",
    ],
    requestCv: "Request my full CV",
    facts: [
      ["Background", "PhD in Biochemistry · MSc in Ecology · BSc in Geography"],
      ["International project", "DFG EarthShape · Germany–Chile · 2018–2025"],
      ["Languages", "Chinese (native) · English"],
    ],
    research: "Research Areas",
    researchIntro: "From environmental gradients to microbial responses, I focus on ecological evidence that is interpretable, reproducible, and robust.",
    project: "Selected Project",
    projectTitle: "Germany–Chile EarthShape BIOSOILS Project",
    projectText: "I contributed to deep-soil research across climate zones, linking climate, soil depth, and microbial communities through experiments and data analysis. I also optimised a low-biomass soil DNA extraction workflow adopted by the GFZ laboratory.",
    projectLink: "View the project",
    publications: "Publications & Manuscripts",
    publicationsIntro: "Published papers and manuscripts are listed by current status, with the relevant JCR metric year stated for each journal.",
    background: "Experience",
    education: "Education",
    experience: "Research Experience",
    skills: "Skills",
    skillsIntro: "Research workflows integrating laboratory work, data, and AI agents.",
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
];

const publications = [
  {
    yearZh: "返修中", yearEn: "IN REVISION", roleZh: "一作", roleEn: "FIRST AUTHOR", statusZh: "小修已返 · 待接收", statusEn: "MINOR REVISION RETURNED · AWAITING DECISION",
    title: "Rhizosphere fungal communities of four Ferula species in their native habitats in northern Xinjiang",
    journal: "Rhizosphere", metricZh: "JCR 2025 · IF 3.5 · Q1", metricEn: "JCR 2025 · IF 3.5 · Q1", href: "https://www.sciencedirect.com/journal/rhizosphere",
  },
  {
    yearZh: "审稿中", yearEn: "IN REVIEW", roleZh: "通讯", roleEn: "CORRESPONDING AUTHOR", statusZh: "大修返修", statusEn: "MAJOR REVISION",
    title: "Depth-dependent differences between direct total DNA and an intracellular-DNA-enriched fraction in bulk-soil bacterial and fungal communities of a Lonicera japonica field",
    journal: "BMC Microbiology", metricZh: "JCR 2025 · IF 5.4 · Q1", metricEn: "JCR 2025 · IF 5.4 · Q1", href: "https://link.springer.com/journal/12866",
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
    icon: Bot,
    zhTitle: "AI 智能体与研究工作流",
    enTitle: "AI agents & research workflows",
    zhText: "Codex 资深用户，熟练使用 Claude Code 与 ChatGPT；擅长复杂任务拆解、智能体协作、提示设计、结果校验和长流程维护。",
    enText: "Advanced Codex user with extensive experience in Claude Code and ChatGPT; skilled in task decomposition, agent collaboration, prompting, output validation, and long-running workflows.",
    tags: ["Codex", "Claude Code", "ChatGPT", "Agent workflows"],
  },
  {
    icon: Code2,
    zhTitle: "R 语言与 AI 辅助编程",
    enTitle: "R & AI-assisted programming",
    zhText: "约 5 年 R 使用经验（2021–至今），覆盖数据整理、统计建模、微生物群落分析和可视化；目前主要采用 AI 协作开发，同时保留方法判断、调试与复现能力。",
    enText: "Around five years of R experience (2021–present) across data wrangling, statistical modelling, microbial community analysis, and visualisation. I now work primarily through AI-assisted development while retaining methodological judgement, debugging, and reproducibility skills.",
    tags: ["R", "tidyverse", "ggplot2", "Reproducible analysis"],
  },
  {
    icon: BarChart3,
    zhTitle: "统计与微生物组数据分析",
    enTitle: "Statistics & microbiome data",
    zhText: "熟悉 SPSS、群落与网络分析、多变量统计和科学可视化，能够从原始数据推进到论文级结果。",
    enText: "Experienced with SPSS, community and network analyses, multivariate statistics, and scientific visualisation from raw data to publication-ready results.",
    tags: ["SPSS", "Community analysis", "Networks", "Visualisation"],
  },
  {
    icon: Microscope,
    zhTitle: "微生物生态实验",
    enTitle: "Microbial ecology laboratory work",
    zhText: "低生物量土壤 DNA 提取、PCR、qPCR、文库准备、微生物分离培养，以及 16S、ITS 与宏基因组研究流程。",
    enText: "Low-biomass soil DNA extraction, PCR, qPCR, library preparation, microbial isolation and cultivation, and 16S, ITS, and metagenomic workflows.",
    tags: ["16S", "ITS", "Metagenomics", "qPCR"],
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
    <main lang={isZh ? "zh-CN" : "en"} className={isZh ? "locale-zh" : "locale-en"}>
      <header className="site-header">
        <div className="brand-zone">
          <a className="qr-link" href="#site-qr-modal" aria-label={t.qr} title={t.qr}>
            <img src="/site-qr.svg" alt="" />
          </a>
          <a className="wordmark" href="#top" aria-label={t.top}>
            <span>Xiuling Wang</span>
            <small>soil · microbes · data</small>
          </a>
        </div>
        <nav aria-label={isZh ? "主导航" : "Main navigation"}>
          <a href="#profile">{t.nav.profile}</a>
          <a href="#publications">{t.nav.publications}</a>
          <a href="#background">{t.nav.background}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Language">
            <a className={isZh ? "active" : ""} href="/" lang="zh-CN">中文</a>
            <span>/</span>
            <a className={!isZh ? "active" : ""} href="/en" lang="en">EN</a>
          </div>
          <a className="nav-cta" href="mailto:wang.xiuling@outlook.com">{isZh ? "联系我" : "Contact"} <ArrowUpRight size={14} /></a>
        </div>
      </header>

      <div className="qr-modal" id="site-qr-modal" role="dialog" aria-modal="true" aria-label={t.qr}>
        <a className="qr-modal-backdrop" href="#top" aria-label={isZh ? "关闭二维码" : "Close QR code"} />
        <div className="qr-modal-card">
          <a className="qr-modal-close" href="#top" aria-label={isZh ? "关闭二维码" : "Close QR code"}>×</a>
          <img src="/site-qr.svg" alt={t.qr} />
          <p>{isZh ? "手机扫描，打开个人主页" : "Scan with your phone to open the website"}</p>
          <a className="qr-direct-link" href={siteUrl}>{siteUrl.replace("https://", "")} <ArrowUpRight size={14} /></a>
        </div>
      </div>

      <section className="hero" id="top">
        <figure className="hero-photo">
          <img src="/xiuling-mountains.jpg" alt={isZh ? "王秀玲在山间的照片" : "Xiuling Wang in the mountains"} />
          <figcaption>{isZh ? "从野外样地到可复现的数据" : "from field sites to reproducible data"}</figcaption>
        </figure>
        <div className="hero-copy">
          <p className="hero-kicker"><span /> {t.role}</p>
          <h1>{t.hello}</h1>
          <p className="hero-focus">{t.focus}</p>
          <p className="hero-lead">{t.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href="#publications">{t.explore} <ArrowDown size={15} /></a>
            <a className="button secondary" href="https://orcid.org/0000-0002-8006-7162" target="_blank" rel="noreferrer">ORCID <ArrowUpRight size={15} /></a>
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
            <a href="https://www.gfz.de/en/press/news/details/earthshape-german-chilean-research-project-enters-second-phase" target="_blank" rel="noreferrer">{t.projectLink} <ExternalLink size={14} /></a>
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
          <p>{t.publicationsIntro}</p>
        </div>
        <div className="publication-list" aria-label={isZh ? "学术成果列表" : "Publications and manuscripts"}>
          {publications.map((publication, index) => (
            <a href={publication.href} target="_blank" rel="noreferrer" key={publication.title}>
              <span className="publication-count">{String(index + 1).padStart(2, "0")}</span>
              <div className="publication-main">
                <div className="publication-topline">
                  <span>{isZh ? publication.yearZh : publication.yearEn}</span>
                  <b>{isZh ? publication.roleZh : publication.roleEn}</b>
                  {publication.statusZh && <em>{isZh ? publication.statusZh : publication.statusEn}</em>}
                </div>
                <h3>{publication.title}</h3>
                <div className="publication-details"><span>{publication.journal}</span><strong>{isZh ? publication.metricZh : publication.metricEn}</strong></div>
              </div>
              <ArrowUpRight className="publication-arrow" size={20} aria-hidden="true" />
            </a>
          ))}
        </div>
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
        <p className="contact-label"><span /> {t.contact}</p>
        <h2>{t.contactText}</h2>
        <div className="contact-row">
          <a className="contact-email" href="mailto:wang.xiuling@outlook.com">wang.xiuling@outlook.com <ArrowUpRight size={22} /></a>
          <div className="profile-links">
            {profiles.map((profile) => <a href={profile.href} target="_blank" rel="noreferrer" key={profile.label}>{profile.label} <ArrowUpRight size={13} /></a>)}
          </div>
        </div>
      </section>

      <footer>
        <p>{t.rights}</p>
        <p>{t.updated}</p>
        <a href="#top">{t.top} ↑</a>
      </footer>
    </main>
  );
}
