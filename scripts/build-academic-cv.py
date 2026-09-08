"""Build bilingual, two-page academic CVs from verified public profile content."""
from pathlib import Path
import re
from html import escape
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.pagesizes import A4

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public' / 'cv'
OUT.mkdir(parents=True, exist_ok=True)
FONT = Path('/System/Library/Fonts/Supplemental')
pdfmetrics.registerFont(TTFont('Arial', str(FONT / 'Arial.ttf')))
pdfmetrics.registerFont(TTFont('ArialBold', str(FONT / 'Arial Bold.ttf')))
pdfmetrics.registerFontFamily('Arial', normal='Arial', bold='ArialBold', italic='Arial', boldItalic='ArialBold')
pdfmetrics.registerFont(TTFont('CJK', str(FONT / 'Arial Unicode.ttf')))
pdfmetrics.registerFontFamily('CJK', normal='CJK', bold='CJK', italic='CJK', boldItalic='CJK')
source = (ROOT / 'app/components/AcademicHome.tsx').read_text()
block = source.split('const publications: Publication[] = [', 1)[1].split('\n];', 1)[0]
pubs = []
for item in re.findall(r'\{(.*?)\n  \}', block, re.S):
    get = lambda key: re.search(r'\b' + key + r': "([^"]*)"', item).group(1)
    pubs.append(dict(title=get('title'), journal=get('journal'), year=get('yearEn'),
                     href=get('href'), role=get('roleEn'),
                     authors=re.findall(r'"([^"]+)"', re.search(r'authors: \[(.*?)\]', item).group(1))))

def build(zh):
    font = 'CJK' if zh else 'Arial'
    style = ParagraphStyle('body', fontName=font, fontSize=9.3 if zh else 9.4,
                           leading=14.1, textColor=colors.HexColor('#263238'), spaceAfter=5,
                           wordWrap='CJK' if zh else None)
    heading = ParagraphStyle('heading', parent=style, fontName=font if zh else 'ArialBold',
                             fontSize=11.2, leading=16, spaceBefore=11, spaceAfter=5,
                             textColor=colors.HexColor('#254E60'))
    small = ParagraphStyle('small', parent=style, fontSize=8.5, leading=12, spaceAfter=7)
    title = ParagraphStyle('title', parent=heading, fontSize=25, leading=31, spaceBefore=0)
    story = []
    def p(text, kind=style): story.append(Paragraph(text, kind))
    def h(cn, en): p(cn if zh else en, heading)
    def item(cn, en): p(cn if zh else en)
    p('王秀玲 | Xiuling Wang' if zh else 'XIULING WANG', title)
    item('气候梯度 · 环境微生物生态 · 生态统计', 'Climate gradients · Environmental microbial ecology · Ecological statistics')
    p('<a href="mailto:wang.xiuling@outlook.com" color="#254E60">wang.xiuling@outlook.com</a> | '
      '<a href="https://xiuling-wang.pages.dev/" color="#254E60">Academic website</a> | '
      '<a href="https://orcid.org/0000-0002-8006-7162" color="#254E60">ORCID: 0000-0002-8006-7162</a>', small)
    item('现居中国，可全职开展新项目；申请博士后及相关科研岗位。',
         'Based in China; available for full-time research. Seeking postdoctoral and related research roles.')
    h('研究简介', 'RESEARCH PROFILE')
    item('研究气候梯度、土壤深度与环境条件如何影响微生物群落及功能潜力。博士阶段参与跨机构 EarthShape 计划，以智利干旱至湿润梯度为研究系统，结合 iDNA/eDNA、扩增子与宏基因组数据开展一项连贯的土壤微生物生态研究，形成细菌、古菌与功能基因三篇论文。已发表7篇同行评议论文，其中4篇为第一或共同第一作者、3篇为通讯作者。',
         'Environmental microbial ecologist studying how climate gradients, soil depth and environmental conditions shape microbial communities and functional potential. Doctoral research within the multi-institutional EarthShape programme uses Chilean arid-to-humid systems and iDNA/eDNA, amplicon and metagenomic data. This integrated research programme forms three papers on bacteria, archaea and functional genes. Seven peer-reviewed publications, including four first/co-first-author and three corresponding-author papers.')
    h('研究经历与国际合作', 'RESEARCH EXPERIENCE & INTERNATIONAL COLLABORATION')
    item('<b>博士研究人员 | GFZ，德国波茨坦 | 2019–2025</b>',
         '<b>Doctoral Researcher | GFZ, Potsdam, Germany | 2019–2025</b>')
    item('围绕智利气候梯度与深层土壤开展分子实验、群落统计、环境关联分析与论文写作；优化低生物量土壤 DNA 提取流程。宏基因组工作侧重下游分类与功能数据整合、统计分析和生态解释，上游生物信息处理由合作者完成。',
         'Conducted molecular experiments, community statistics, environmental analyses and manuscript writing across Chilean climate gradients and deep soils; optimised low-biomass soil DNA extraction. Metagenomic contributions focus on downstream taxonomic and functional data integration, statistics and ecological interpretation, using upstream bioinformatics produced by collaborators.')
    item('通过跨机构 EarthShape 项目积累德国与智利科研协作经验，与原合作同事保持联系。熟悉跨气候带研究的样品、数据与协作流程，可为后续比较研究对接相关研究人员。导师：Dirk Wagner；第二导师：Thomas Friedl；研究指导：Lars Ganzert。',
         'Built experience in German-Chilean research collaboration through EarthShape, including coordination of samples, data and analyses. Maintains contacts with former collaborators that can support future comparative research. Supervisor: Dirk Wagner; second supervisor: Thomas Friedl; research mentor: Lars Ganzert.')
    item('<b>合作研究与科研指导 | 2025–2026</b> 支持土壤 DNA 分级研究与食用菌表面微生物群落研究，承担研究设计、统计分析、论文修订和通讯作者工作。',
         '<b>Collaborative research & scientific mentoring | 2025–2026.</b> Contributed study design, statistical analysis, manuscript revision and corresponding-author work to soil DNA-fraction and mushroom-surface microbiome studies.')
    item('<b>科研实习 | 上海市农业科学院食用菌研究所 | 2018–2019</b> 研究贮藏温度与食用菌表面细菌群落变化。',
         '<b>Research Intern | Institute of Edible Fungi, Shanghai Academy of Agricultural Sciences | 2018–2019.</b> Studied storage temperature and mushroom-associated bacterial communities.')
    h('教育经历与博士进度', 'EDUCATION & DOCTORAL STATUS')
    item('<b>2019–至今：波茨坦大学，博士在读</b>，研究在 GFZ 开展，学位尚未授予。主体研究和综合章节初稿已完成；古菌论文已投稿，宏基因组完整稿件已完成并继续修订。后续论文与学位收尾可与新项目并行。',
         '<b>2019–present: Doctoral studies, University of Potsdam</b>; research at GFZ; degree not yet awarded. Substantive research and the thesis synthesis draft are complete. The archaeal paper is submitted and the full metagenomic manuscript is being revised. Remaining manuscript and degree completion can proceed alongside a new full-time project.')
    item('2016–2019：石河子大学，生态学硕士；2011–2015：郑州师范学院，地理学学士。',
         '2016–2019: MSc in Ecology, Shihezi University.<br/>2011–2015: BSc in Geography, Zhengzhou Normal University.')
    h('技术与语言', 'METHODS & LANGUAGES')
    item('R：数据整理、多变量统计、群落与环境关联分析、可视化及可复现流程。二代测序相关分析：16S/ITS 扩增子与宏基因组下游分析。实验：低生物量 DNA 提取、iDNA/eDNA 分离、PCR、qPCR。中文母语；英语科研交流。',
         'R: data wrangling, multivariate statistics, community-environment analyses, visualisation and reproducible workflows. NGS: 16S/ITS amplicons and downstream metagenomics. Laboratory: low-biomass DNA extraction, iDNA/eDNA separation, PCR and qPCR. Chinese (native); English (research communication).')
    story.append(PageBreak())
    h('已发表论文', 'PEER-REVIEWED PUBLICATIONS')
    item('7篇；以下按发表时间排列。', 'Seven publications, listed in reverse chronological order.')
    roles = ['唯一通讯作者', '第一及共同通讯作者', '共同通讯作者', '第一作者', '共同第一作者', '第一作者', '第二作者']
    roles_en = ['Sole corresponding author', 'First and co-corresponding author', 'Co-corresponding author', 'First author', 'Co-first author', 'First author', 'Second author']
    for i, pub in enumerate(pubs[2:]):
        authors = pub['authors']
        authorline = ', '.join(authors) if len(authors) <= 4 else ', '.join(authors[:2]) + ', et al.'
        authorline = escape(authorline).replace('Xiuling Wang', '<b>Xiuling Wang</b>').replace('Xiu-Ling Wang', '<b>Xiu-Ling Wang</b>')
        p(f'{i+1}. {authorline} ({pub["year"]}). {escape(pub["title"])}. '
          f'<i>{escape(pub["journal"])}</i>. '
          f'<a href="{pub["href"]}" color="#254E60">DOI / Article</a><br/>'
          f'<font color="#254E60">{roles[i] if zh else roles_en[i]}</font>', small)
    h('已投稿与待投稿稿件', 'SUBMITTED MANUSCRIPT & WORK IN PREPARATION')
    for i, pub in enumerate(pubs[:2]):
        status = ('已投稿 Applied Soil Ecology（2026年9月）' if i == 0 else '完整稿件已完成；拟投稿 Geoderma') if zh else ('Submitted to Applied Soil Ecology (September 2026)' if i == 0 else 'Full manuscript drafted; target journal: Geoderma')
        authors = escape(', '.join(pub['authors'])).replace('Xiuling Wang', '<b>Xiuling Wang</b>')
        p(f'{authors}. {escape(pub["title"])}.<br/><font color="#254E60">{status}</font>', small)
    def footer(canvas, doc):
        canvas.setFont(font, 8)
        canvas.setFillColor(colors.HexColor('#667780'))
        canvas.drawString(42, 25, 'Xiuling Wang | 2026-09-08')
        canvas.drawRightString(A4[0]-42, 25, str(doc.page))
    target = OUT / f'Xiuling_Wang_CV_{"ZH" if zh else "EN"}.pdf'
    SimpleDocTemplate(str(target), pagesize=A4, rightMargin=42, leftMargin=42,
                      topMargin=34, bottomMargin=39, title='Xiuling Wang - Academic CV',
                      author='Xiuling Wang').build(story, onFirstPage=footer, onLaterPages=footer)
    print(target)

build(False)
build(True)
