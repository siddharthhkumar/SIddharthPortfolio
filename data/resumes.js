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
      'Role-specific résumés tailored for analytical and product roles — interpreting data, tracking KPIs, and guiding product prototypes.',
    resumes: [
      {
        id: 'data-analyst',
        role: 'Data Analyst',
        downloadLabel: 'Data & Analytics Resume',
        targets: 'Data Analyst · BI Analyst · Reporting Analyst · MIS Executive',
        when:
          'Use for roles centred on SQL, Excel, and Power BI — data cleaning, KPI tracking, and interactive dashboards.',
        file: '/resumes/siddharth-data-analyst.pdf',
      },
      {
        id: 'business-analyst-mis',
        role: 'Business Analyst / MIS',
        downloadLabel: 'Business Analyst Resume',
        targets: 'Business Analyst · Business Data Analyst · Insights Analyst',
        when:
          'Use for roles interpreting business performance — finding trends, answering stakeholder questions, and generating insights.',
        file: '/resumes/siddharth-business-analyst-mis.pdf',
      },
      {
        id: 'product-manager',
        role: 'Product Manager / APM',
        downloadLabel: 'Product Manager Resume',
        targets: 'APM · Product Analyst · Associate PM · Product Operations',
        when:
          'Use for roles calling for problem framing, prototyping, and cross-functional feature execution.',
        file: '/resumes/siddharthpm.pdf',
      },
    ],
  },
  {
    id: 'growth-operations',
    label: 'Growth, Marketing & Operations Resumes',
    blurb:
      'Role-specific résumés tailored for digital marketing, audience growth, content strategy, and operations tracking.',
    resumes: [
      {
        id: 'social-media-manager',
        role: 'Digital Marketing & Community Manager',
        downloadLabel: 'Digital Marketing Resume',
        targets: 'Digital Marketing · Social Media Manager · Community Lead',
        when:
          'Use for roles focused on audience growth, campaign planning, A/B tested messaging, and digital engagement.',
        file: '/resumes/SiddharthKumarDM.pdf',
      },
      {
        id: 'seo-content-writer',
        role: 'SEO & Content Strategist',
        downloadLabel: 'SEO & Content Resume',
        targets: 'SEO Content Writer · Content Strategist · Digital Copywriter',
        when:
          'Use for roles requiring SEO blogs, research writing, content campaigns, and digital storytelling.',
        file: '/resumes/siddharth-seo-content-writer.pdf',
      },
      {
        id: 'operations',
        role: 'Operations Analyst',
        downloadLabel: 'Operations Resume',
        targets: 'Operations Analyst · Business Operations · Programme Operations',
        when:
          'Use for roles executing operational processes — KPI monitoring, logistics tracking, and workflow efficiency.',
        file: '/resumes/siddharth-operations.pdf',
      },
    ],
  },
]

export const resumes = resumeGroups.flatMap((g) => g.resumes)

export default resumeGroups
