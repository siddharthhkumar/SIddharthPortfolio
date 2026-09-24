// Five role-specific resumes, grouped into two tracks.
//
// The first group is the one being applied for; the second is available but
// not leading. Regrouping changes which document a recruiter reaches for
// first, and nothing else: every file below already existed, and none of the
// copy inside them is written here.
//
// A sixth résumé — Digital Marketing & Community Manager — used to sit in
// the second group, linked to SiddharthKumarDM.pdf. That file (and its
// earlier working name, siddharth-social-media-manager.pdf) is no longer in
// public/resumes/ — deleted outside of an edit here, per git status. Rather
// than link a dead PDF, that card was removed. Re-add it once a real file
// exists again; see public/resumes/README.md for the expected filename.
//
// `tone` is the same five-discipline colour used everywhere else on the page
// (data / product / research / growth / people) — not a new system, just this
// file joining the one that already marks the Ledger rows, the Selected Work
// margin and the hero's spine. A résumé filed under "Data" and the ledger row
// it backs up are the same blue on purpose.
//
// Each `file` must exist in public/resumes/ — see the README note in that folder.

export const resumeGroups = [
  {
    id: 'content-product-operations',
    label: 'Content, Product & Operations Résumés',
    blurb:
      'Role-specific résumés for the roles being applied for — SEO content writing, product management and prototyping, and business operations.',
    resumes: [
      {
        id: 'seo-content-writer',
        tone: 'growth',
        disciplineLabel: 'Content',
        role: 'SEO & Content Strategist',
        downloadLabel: 'SEO & Content Resume',
        targets: 'SEO Content Writer · Content Strategist · Digital Copywriter',
        when:
          'Perfect for content-focused positions: SEO optimization, keyword research, blog strategy, content calendars, and digital storytelling.',
        file: '/resumes/siddharth-seo-content-writer.pdf',
      },
      {
        id: 'product-manager',
        tone: 'product',
        disciplineLabel: 'Product',
        role: 'Product Manager / APM',
        downloadLabel: 'Product Manager Resume',
        targets: 'APM · Product Analyst · Associate PM · Product Operations',
        when:
          'Perfect for product-focused positions: problem discovery, feature roadmap, user research, prototyping, and cross-functional leadership.',
        file: '/resumes/siddharthpm.pdf',
      },
      {
        id: 'operations',
        tone: 'people',
        disciplineLabel: 'Operations',
        role: 'Operations Analyst',
        downloadLabel: 'Operations & Business Resume',
        targets: 'Operations Analyst · Business Operations · Programme Operations',
        when:
          'Best for operations roles: process optimization, workflow management, KPI tracking, supply chain, and operational efficiency.',
        file: '/resumes/siddharth-operations.pdf',
      },
    ],
  },
  {
    id: 'data-analytics',
    label: 'Data & Analytics Résumés',
    blurb:
      'Available on request rather than leading — SQL, Excel, Power BI and business-analysis fundamentals behind the work above.',
    resumes: [
      {
        id: 'data-analyst',
        tone: 'data',
        disciplineLabel: 'Data',
        role: 'Data Analyst',
        downloadLabel: 'Data & Analytics Resume',
        targets: 'Data Analyst · BI Analyst · Reporting Analyst · MIS Executive',
        when:
          'Best for SQL and Excel-focused roles: data extraction, ETL pipelines, Power BI dashboards, KPI reporting, and data quality.',
        file: '/resumes/siddharth-data-analyst.pdf',
      },
      {
        id: 'business-analyst-mis',
        tone: 'data',
        disciplineLabel: 'Data',
        role: 'Business Analyst / MIS',
        downloadLabel: 'Business Analyst Resume',
        targets: 'Business Analyst · Business Data Analyst · Insights Analyst',
        when:
          'Ideal for roles analyzing business performance: trend identification, stakeholder reporting, performance metrics, and data-driven recommendations.',
        file: '/resumes/siddharth-business-analyst-mis.pdf',
      },
    ],
  },
]

export const resumes = resumeGroups.flatMap((g) => g.resumes)

export default resumeGroups
