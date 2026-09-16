---
name: optimize
description: Audits and optimizes websites, applications, algorithms, content, performance, SEO, accessibility, and technical implementation without unnecessary rewrites.
---

# Professional Optimization Skill

Use this skill when improving performance, SEO, accessibility, code quality, algorithms, content effectiveness, or technical efficiency.

## Core Principle

Do not optimize blindly.

First measure or inspect the current implementation.

Identify the actual bottleneck before changing code.

Prefer measurable improvements over cosmetic changes.

Do not rewrite working systems without a concrete reason.

## 1. Inspect

Before optimizing, inspect:

- architecture
- relevant source files
- package.json
- dependencies
- network requests
- rendering strategy
- API calls
- data flow
- images and assets
- styles
- scripts
- existing performance configuration
- SEO metadata
- accessibility implementation

Understand how the existing system works.

## 2. Establish a Baseline

When possible, determine the current state before changing anything.

Check relevant metrics such as:

- build success
- bundle size
- page load behavior
- Core Web Vitals
- Lighthouse results
- accessibility issues
- SEO issues
- API response time
- algorithm complexity

Do not invent performance measurements.

## 3. Frontend Optimization

Look for:

- unnecessary client components
- unnecessary JavaScript
- excessive re-renders
- unnecessary state
- expensive calculations
- oversized dependencies
- inefficient imports
- large images
- layout shifts
- blocking resources
- unnecessary API requests
- duplicated requests
- poor caching
- inefficient animations

Prefer server-side rendering and server components where appropriate for the architecture.

Do not convert components between server/client unnecessarily.

## 4. Next.js Optimization

For Next.js applications, consider:

- App Router architecture
- Server Components
- Client Components
- dynamic imports
- image optimization
- font loading
- metadata
- route-level behavior
- caching
- static generation
- revalidation
- streaming where appropriate

Use the existing architecture rather than introducing complexity without benefit.

## 5. Algorithm Optimization

For algorithmic work:

1. Understand the input constraints.
2. Identify the current complexity.
3. Find the actual bottleneck.
4. Consider alternative data structures.
5. Improve time complexity where meaningful.
6. Improve space complexity where meaningful.
7. Test edge cases.
8. Benchmark when useful.

Always state meaningful complexity changes.

Example:

O(n²) → O(n log n)

Do not optimize code simply to make it look more sophisticated.

## 6. API and Data Optimization

Inspect:

- redundant requests
- excessive payload size
- unnecessary database queries
- sequential requests that can be parallelized
- missing caching
- inefficient pagination
- unnecessary data fetching
- error handling
- timeout behavior

Do not introduce caching that can cause stale or incorrect data without understanding the requirements.

## 7. SEO Optimization

Inspect:

- title
- meta description
- canonical URLs
- Open Graph metadata
- robots directives
- sitemap
- semantic HTML
- heading hierarchy
- internal links
- structured data where appropriate
- image alt text
- crawlability
- page performance

SEO optimization must remain natural and user-focused.

Avoid:

- keyword stuffing
- hidden text
- spammy pages
- duplicate content
- meaningless metadata

## 8. Content Optimization

When optimizing website content:

- understand search intent
- improve clarity
- remove unnecessary filler
- improve information hierarchy
- strengthen headings
- improve readability
- preserve brand voice
- make claims specific and supportable

Do not fabricate statistics, credentials, achievements, testimonials, or facts.

## 9. Accessibility Optimization

Check:

- semantic HTML
- keyboard navigation
- focus states
- color contrast
- accessible names
- labels
- alt text
- ARIA usage
- heading structure
- reduced motion
- touch targets

Prefer native HTML semantics before adding ARIA.

## 10. Visual Performance

For interactive websites, pay special attention to:

- canvas rendering
- animation loops
- scroll listeners
- mouse/touch events
- expensive DOM operations
- forced layouts
- excessive effects
- large media
- GPU-heavy animations

For canvas or animation-heavy components, avoid unnecessary work every frame.

Use throttling, requestAnimationFrame, visibility checks, or other appropriate techniques when justified.

## 11. Dependency Discipline

Before adding a dependency:

- determine whether the functionality already exists
- check whether a lightweight solution is sufficient
- understand the dependency's cost
- avoid duplicate libraries

Do not add packages merely for convenience.

## 12. Verification

After optimization:

1. Run the relevant checks.
2. Build the application.
3. Re-test the affected functionality.
4. Compare against the baseline when measurements are available.
5. Check for regressions.
6. Inspect the final diff.

An optimization that breaks functionality is not an optimization.

## 13. Safety

Never:

- remove functionality merely to improve a metric
- disable security checks
- disable accessibility
- remove error handling
- hide warnings
- falsify performance measurements
- delete user data
- modify production infrastructure without approval

## Final Report

Report:

### Bottleneck
What was actually causing the problem.

### Changes
What was changed.

### Impact
Measured improvement when available.

### Verification
What tests, builds, audits, or benchmarks were run.

### Trade-offs
Any meaningful trade-offs introduced.

### Remaining
What could still be improved.