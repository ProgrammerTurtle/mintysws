---
target: docs
total_score: 27
max_score: 32
na_heuristics: 7,9
p0_count: 0
p1_count: 0
timestamp: 2026-09-08T05-43-58Z
slug: src-pages-docs-astro
---
# Critique — Mint docs (/docs) — re-run

Method: dual-agent (A: design review · B: detector + browser evidence)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | No active-section state on the on-page nav as you scroll. |
| 2 | Match System / Real World | 4 | Teen-plain language; YSWS decoded inline. |
| 3 | User Control and Freedom | 3 | Skip link/deep-links/back-to-top strong; 9 FAQ answers always expanded, no collapse. |
| 4 | Consistency and Standards | 4 | Up from 3 — submit destination unified with header; palette-per-section consistent. |
| 5 | Error Prevention | 3 | "Order matters" lead-in pre-empts build-before-funding. |
| 6 | Recognition Rather Than Recall | 3 | Tin envelope is text-only; no scale reference. |
| 7 | Flexibility and Efficiency | n/a | Static read. |
| 8 | Aesthetic and Minimalist Design | 4 | Deduped, restrained. |
| 9 | Error Recovery | n/a | No error states. |
| 10 | Help and Documentation | 3 | Comprehensive but FAQ not heading-navigable; "Deadline TBD" dangles. |
| **Total** | | **27/32** | **Good (84%)** |

Number held at 27/32 but composition improved: last run had a P1 blocker (submit dead-end) + two P2s, ALL resolved; this run has no P0/P1. Score flat only because fixing consistency (H4 3->4) was offset by a new lower-severity angle (H6 4->3, text-only envelope). Traded a blocker for a nitpick.

## Design Specificity Verdict

LLM: Decisively authored for this product — real constraints (TIN constant, $75, JOURNAL.md, "you ship, we ship", #mint) + committed vintage-ad world. Passes before detector.

Deterministic scan: detect.mjs --json -> [], exit 0, clean. Console: 0 errors, nothing new.

Agreement: Assessment B confirmed all 11 structural/a11y checks PASS (heading order, anchors, skip link first + reveals, CTA/header share /mintysws/#submit, main tabindex, back-to-top, 9 FAQ deep-link ids). Two false positives pre-empted: FAQ dt ids read null (they're on the wrapper div), and skip-link reveal needs real window focus to demonstrate (automation artifact).

## Overall Impression

Blocking issue gone; confident, accessible, on-brand handbook. One theme worth another pass: the FAQ — most-scanned section, least navigable (dl of dt/dd, not headings -> heading-nav skips all 9 to the footer; mobile long always-open scroll). Native details/summary fixes SR navigability, keyboard access, and mobile length at once.

## What's Working

1. Deduplication with intent, honored (TIN constant, shared SUBMIT_URL; each section one job).
2. A11y fundamentals thoughtful (skip link, min-h-11, aria-hidden decoration, :target scroll-margin, <ol> order semantics, reduced-motion without killing focus).
3. Palette-per-section does real wayfinding (signal/amber/mint across headings, nav, numerals).

## Priority Issues

[P2] FAQ not navigable by heading or list. Questions are dt inside div-wrapped dl (not headings); div wrappers collapse term/definition semantics to generic. SR heading-nav jumps FAQ H2 -> footer, skipping all 9; mobile = 9 always-open answers, no collapse. Fix: native details/summary disclosures (JS-free, focusable/announced, solves mobile length) OR make each question an h3; preserve per-question ids + :target. Command: /impeccable harden.

[P3] Age eligibility 13–18 disappears on mobile. Header "For teens 13–18" is max-lg:hidden (relies on home hero); docs masthead has no eligibility line, so mobile deep-linkers see no age gate until FAQ Q1. Fix: one-line kicker in docs masthead or guidelines intro. Command: /impeccable clarify.

[P3] Duplicate accessible name "Submit your design" (step 4 h3 == CTA link). Indistinguishable in SR links/heading list on the key control. Fix: distinct CTA accessible name ("Go to the submission form"). Command: /impeccable clarify.

No P0/P1: nothing broken, misleading, or blocking.

## Persona Red Flags

Jordan (first-timer): reads well; CTA is behind him mid-page and page ends on Back to top (must hunt upward); CTA lands on home #submit not a form (expected).

Sam (a11y/keyboard/SR): guidelines/steps clean; FAILS at FAQ (heading-nav skips all questions; duplicate CTA/heading name ambiguity).

Casey (mobile): top excellent at 375px; FAQ length is the issue (9 always-open, no collapse, nav only reaches section tops). details fix helps most.

## Minor Observations

- No scroll-spy/active state on on-page nav (tolerable for 3 sections).
- Step 5 "usually within a week" vs FAQ "up to 1 week" — align wording.
- "Deadline TBD" reads unfinished; warmer framing would reassure (user's deliberate call).
- Consider a lighter "Ready? Submit" link at the very end for full-scroll readers.

## Questions to Consider

1. Should the primary CTA also appear at the very end?
2. Would native details disclosures serve every persona at once, or does collapsing hide answers a first-timer should absorb passively?
3. Would one small scale reference beat the raw dimensions on a page about physical size?
