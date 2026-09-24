// The knowledge base behind "Ask me anything."
//
// Every entry is either the FAQ verbatim (already written for exactly this —
// see the note at the top of faq.js) or assembled from fields that already
// exist in projects.js, skills.js, research.js and thinking.js. Nothing here
// is typed fresh; it is the same discipline Selected.js uses — pull by id,
// so the chat answer and the page it is describing can never drift apart.

import { faqs } from './faq'
import projects from './projects'
import { skillGroups } from './skills'
import research from './research'
import { thinking } from './thinking'

// FAQ, tagged so free-text questions can find each answer from more than one
// phrasing. The tags are search terms, not new claims — they point at words
// already inside the paired answer.
// Order and length must match data/faq.js exactly — both arrays are walked
// by position, not id.
const faqTags = [
  ['who', 'about', 'introduce', 'bio', 'background', 'siddharth', 'yourself'],
  ['seo', 'content', 'writing', 'writer', 'blog', 'copywriting', 'content strategy', 'jumpy jargons'],
  ['digital marketing', 'social media', 'marketing', 'campaign', 'community', 'gdsc', 'audience', 'founded', 'leadership'],
  ['role', 'job', 'hire', 'looking', 'career', 'position', 'apply', 'opportunity'],
  ['education', 'degree', 'college', 'university', 'study', 'gbu', 'btech', 'school', 'academic'],
  ['tools', 'stack', 'sql', 'excel', 'power bi', 'python', 'tech', 'software', 'technology', 'use'],
  ['project', 'build', 'built', 'gnosis', 'documind', 'app', 'made', 'portfolio', 'shipped'],
  ['research', 'paper', 'study', 'stress', 'publish', 'ml', 'machine learning', 'thesis'],
  ['experience', 'work', 'intern', 'internship', 'company', 'brightrays', 'history', 'job'],
  ['contact', 'email', 'phone', 'reach', 'linkedin', 'github', 'connect', 'hire'],
]
const faqTones = ['people', 'growth', 'growth', 'growth', 'people', 'data', 'product', 'research', 'data', 'people']
const faqCategories = [
  'About', 'SEO & Content', 'Digital Marketing', 'Career goals', 'Education', 'Toolkit', 'Projects', 'Research', 'Experience', 'Contact',
]

const faqEntries = faqs.map((f, i) => ({
  id: `faq-${i}`,
  q: f.q,
  a: f.a,
  tags: faqTags[i] || [],
  tone: faqTones[i] || 'data',
  category: faqCategories[i] || 'General',
}))

// One deep-dive per project — built from the same fields Selected.js reads,
// so a chat answer about Gnosis AI can never say something the case study
// does not.
const projectEntries = projects.map((p) => ({
  id: `project-${p.id}`,
  q: `Tell me about ${p.name}.`,
  a: `${p.subtitle}. ${p.built} Built with ${p.stack.slice(0, 6).join(', ')}. ${p.outcome}`,
  tags: [p.name.toLowerCase(), p.id.replace('-', ' '), ...(p.disciplines || []).map((d) => d.toLowerCase())],
  tone: 'product',
  category: p.name,
}))

// One per skill group — the caption plus the actual list, not a summary of
// either.
const skillEntries = skillGroups.map((g) => ({
  id: `skill-${g.id}`,
  q: `What ${g.title.toLowerCase()} skills do you have?`,
  a: `${g.caption} Specifically: ${g.skills.join(', ')}.`,
  tags: [g.title.toLowerCase(), ...g.skills.map((s) => s.toLowerCase())],
  tone: g.id === 'growth' ? 'growth' : g.id === 'data' ? 'data' : 'product',
  category: g.title,
}))

// The research finding, in the exact wording the paper is quoted with
// elsewhere on the page (Hero's Tally, the Ledger, the case study).
const researchFinding = {
  id: 'research-finding',
  q: 'What did your research actually find?',
  a: research.finding,
  tags: ['finding', 'result', 'xgboost', 'disagree', 'misjudge', '32', '110', 'accuracy', 'conclusion'],
  tone: 'research',
  category: 'Research finding',
}

const thinkingEntry = {
  id: 'thinking',
  q: 'How do you actually approach a problem?',
  a: `${thinking.title} ${thinking.lede}`,
  tags: ['approach', 'think', 'thinking', 'process', 'methodology', 'philosophy', 'method', 'mindset'],
  tone: 'data',
  category: 'How I think',
}

export const knowledgeBase = [
  ...faqEntries,
  ...projectEntries,
  ...skillEntries,
  researchFinding,
  thinkingEntry,
]

// A short, varied starting set — one from each register, so the first thing
// a visitor sees is the width of what is here, not five variations on one
// question.
export const starterQuestions = [
  'Who is Siddharth Kumar?',
  'What SEO and content writing experience does Siddharth Kumar have?',
  'What digital marketing and social media experience does Siddharth Kumar have?',
  'Tell me about Gnosis AI.',
  'What roles is Siddharth Kumar targeting?',
]

/**
 * Score every entry against a free-text query and return the best match, or
 * null if nothing clears the threshold. Simple substring/word overlap — no
 * model, no network call, nothing that could answer with something not in
 * the record.
 */
export function findAnswer(query) {
  const q = query.toLowerCase().trim()
  if (!q) return null

  const words = q.split(/\s+/).filter((w) => w.length > 2)
  let best = null
  let bestScore = 0

  for (const entry of knowledgeBase) {
    const haystack = `${entry.q} ${entry.tags.join(' ')}`.toLowerCase()
    let score = 0

    if (q.length > 3 && haystack.includes(q)) score += 6
    for (const w of words) {
      if (haystack.includes(w)) score += 1
    }

    if (score > bestScore) {
      bestScore = score
      best = entry
    }
  }

  return bestScore > 0 ? best : null
}

export default knowledgeBase
