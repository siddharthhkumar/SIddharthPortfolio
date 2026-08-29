// Six role-specific resumes, grouped into two tracks.
// Each `file` must exist in public/resumes/ — see the README note in that folder.

export const resumeGroups = [
  {
    id: 'data-analytics',
    label: 'Data & Analytics',
    blurb:
      'For roles where the job is to work with business and operational data, define the metrics and make the numbers usable.',
    resumes: [
      {
        id: 'data-analyst',
        role: 'Data Analyst',
        targets: 'Data Analyst · Reporting Analyst · BI Analyst · MIS Executive',
        when:
          'Use this when the role centres on SQL, Excel and Power BI — cleaning data, tracking KPIs and turning recurring reporting into dashboards people rely on.',
        file: '/resumes/siddharth-data-analyst.pdf',
      },
      {
        id: 'business-analyst-mis',
        role: 'Business Analyst / MIS',
        targets: 'Business Analyst · Business Data Analyst · Insights Analyst',
        when:
          'Use this when the role is about interpreting business performance — finding trends, answering stakeholder questions and turning analysis into recommendations.',
        file: '/resumes/siddharth-business-analyst-mis.pdf',
      },
      {
        id: 'operations',
        role: 'Operations',
        targets: 'Operations Analyst · Business Operations · Programme Operations',
        when:
          'Use this when the role runs on process and execution — monitoring KPIs, tracking operational performance, and keeping teams and programmes moving.',
        file: '/resumes/siddharth-operations.pdf',
      },
    ],
  },
  {
    id: 'product-growth',
    label: 'Product & Growth',
    blurb:
      'For roles where the job is to shape what gets built, or to grow the audience that uses it.',
    resumes: [
      {
        id: 'product-manager',
        role: 'Product Manager / APM',
        targets: 'APM · Product Analyst · Associate PM · Product Operations',
        when:
          'Use this when the role calls for problem identification, prototyping and cross-functional execution — leading a build and defining how the product should work for the person using it.',
        file: '/resumes/siddharth-product-manager.pdf',
      },
      {
        id: 'social-media-manager',
        role: 'Social Media Manager',
        targets: 'Social Media Manager · Community Manager · Digital Content Executive',
        when:
          'Use this when the role owns an audience — community building, campaign planning, content production and messaging tested against real engagement data.',
        file: '/resumes/siddharth-social-media-manager.pdf',
      },
      {
        id: 'seo-content-writer',
        role: 'SEO & Content Writer',
        targets: 'SEO Content Writer · Content Writer · Content Strategist',
        when:
          'Use this when the role is writing — SEO blogs, social copy, scripts and long-form research turned into clear, audience-focused content.',
        file: '/resumes/siddharth-seo-content-writer.pdf',
      },
    ],
  },
]

export const resumes = resumeGroups.flatMap((g) => g.resumes)

export default resumeGroups
