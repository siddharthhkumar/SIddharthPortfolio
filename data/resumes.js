// Six role-specific resumes, grouped into two tracks.
//
// The first group is the one being applied for; the second is the rest of the
// range. Regrouping changes which document a recruiter reaches for first, and
// nothing else: every file below already existed, and none of the copy inside
// them is written here.
//
// Each `file` must exist in public/resumes/ — see the README note in that folder.

export const resumeGroups = [
  {
    id: 'analytics-product',
    label: 'Data, Business & Product Resumes',
    blurb:
      'Specialized résumés for data-driven roles: SQL analytics, BI dashboards, business insights, and product management across analytics, data science, and product operations.',
    resumes: [
      {
        id: 'data-analyst',
        role: 'Data Analyst',
        downloadLabel: 'Data & Analytics Resume',
        targets: 'Data Analyst · BI Analyst · Reporting Analyst · MIS Executive',
        when:
          'Best for SQL and Excel-focused roles: data extraction, ETL pipelines, Power BI dashboards, KPI reporting, and data quality.',
        file: '/resumes/siddharth-data-analyst.pdf',
      },
      {
        id: 'business-analyst-mis',
        role: 'Business Analyst / MIS',
        downloadLabel: 'Business Analyst Resume',
        targets: 'Business Analyst · Business Data Analyst · Insights Analyst',
        when:
          'Ideal for roles analyzing business performance: trend identification, stakeholder reporting, performance metrics, and data-driven recommendations.',
        file: '/resumes/siddharth-business-analyst-mis.pdf',
      },
      {
        id: 'product-manager',
        role: 'Product Manager / APM',
        downloadLabel: 'Product Manager Resume',
        targets: 'APM · Product Analyst · Associate PM · Product Operations',
        when:
          'Perfect for product-focused positions: problem discovery, feature roadmap, user research, prototyping, and cross-functional leadership.',
        file: '/resumes/siddharthpm.pdf',
      },
    ],
  },
  {
    id: 'growth-operations',
    label: 'Growth, Marketing & Operations Resumes',
    blurb:
      'Tailored résumés for marketing and growth roles: digital marketing strategy, audience growth, SEO content, social media campaigns, and operational execution.',
    resumes: [
      {
        id: 'social-media-manager',
        role: 'Digital Marketing & Community Manager',
        downloadLabel: 'Digital Marketing Resume',
        targets: 'Digital Marketing · Social Media Manager · Community Lead',
        when:
          'Ideal for marketing and growth roles: social media strategy, campaign management, audience growth, community engagement, and marketing analytics.',
        file: '/resumes/SiddharthKumarDM.pdf',
      },
      {
        id: 'seo-content-writer',
        role: 'SEO & Content Strategist',
        downloadLabel: 'SEO & Content Resume',
        targets: 'SEO Content Writer · Content Strategist · Digital Copywriter',
        when:
          'Perfect for content-focused positions: SEO optimization, keyword research, blog strategy, content calendars, and digital storytelling.',
        file: '/resumes/siddharth-seo-content-writer.pdf',
      },
      {
        id: 'operations',
        role: 'Operations Analyst',
        downloadLabel: 'Operations Resume',
        targets: 'Operations Analyst · Business Operations · Programme Operations',
        when:
          'Best for operations roles: process optimization, workflow management, KPI tracking, supply chain, and operational efficiency.',
        file: '/resumes/siddharth-operations.pdf',
      },
    ],
  },
]

export const resumes = resumeGroups.flatMap((g) => g.resumes)

export default resumeGroups
