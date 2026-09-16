---
name: build
description: Builds and implements website and software features professionally from requirements through implementation, testing, debugging, optimization, and verification.
---

# Professional Build Skill

Use this skill when building a new feature, page, component, functionality, integration, or significant software change.

## Workflow

### 1. Understand

Understand exactly what is being requested.

Identify:

- expected behavior
- affected parts of the application
- technical constraints
- existing conventions
- potential edge cases

Do not start coding blindly.

### 2. Inspect

Inspect the existing project before making changes.

Check:

- project structure
- package.json
- relevant components
- existing utilities
- styles
- API routes
- data models
- configuration
- existing tests

Reuse existing architecture where appropriate.

### 3. Plan

For non-trivial tasks, create a short implementation plan.

Identify:

- files to modify
- files to create
- dependencies
- implementation approach
- verification strategy

### 4. Implement

Implement the complete feature.

Write production-quality code.

Prefer:

- reusable components
- clean architecture
- strong typing where applicable
- accessible UI
- responsive design
- maintainable code
- minimal dependencies

Do not modify unrelated functionality.

### 5. Test

Run the relevant project checks.

Use the project's existing scripts when available.

Examples:

- npm run lint
- npm test
- npm run build

For UI work, run the application and verify the actual interface when browser tools are available.

### 6. Debug

If something fails:

1. Read the actual error.
2. Locate the source.
3. Determine the root cause.
4. Fix the root cause.
5. Run the failed check again.
6. Run relevant regression checks.

Do not stop after the first error.

Do not hide errors by disabling tests or removing functionality.

### 7. Optimize

After functionality works, look for obvious problems involving:

- unnecessary renders
- unnecessary API requests
- duplicated logic
- poor loading behavior
- excessive bundle size
- inefficient algorithms
- accessibility problems
- responsive issues

Only make meaningful optimizations.

Do not introduce complexity without benefit.

### 8. Verify

Before declaring completion:

- verify the feature works
- verify the build
- verify relevant tests
- verify UI behavior where applicable
- inspect the final changes

Never claim successful verification unless it was actually performed.

## Completion Report

When finished, report:

### Implemented
What was built.

### Files Changed
Important files modified or created.

### Verification
Tests, builds, and checks actually run.

### Remaining
Anything that still requires attention.