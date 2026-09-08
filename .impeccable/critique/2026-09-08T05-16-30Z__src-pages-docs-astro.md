---
target: docs
total_score: 27
max_score: 32
na_heuristics: 7,9
p0_count: 0
p1_count: 1
timestamp: 2026-09-08T05-16-30Z
slug: src-pages-docs-astro
---
# Critique — Mint docs (/docs)

Method: dual-agent (A: design review · B: detector + browser evidence)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | No scroll-spy / active-section state in the on-page nav. |
| 2 | Match System / Real World | 4 | Plain language, real tin dimensions, "you ship, we ship" expanded. |
| 3 | User Control and Freedom | 3 | No "back to top" after the 9-item FAQ; strands mobile readers. |
| 4 | Consistency and Standards | 3 | Two answers to "how do I submit?"; step 5 withholds timing FAQ commits to. |
| 5 | Error Prevention | 3 | Dead "submission form" reference. |
| 6 | Recognition Rather Than Recall | 4 | Everything visible; FAQ fully expanded. |
| 7 | Flexibility and Efficiency | n/a | Pure read surface. |
| 8 | Aesthetic and Minimalist Design | 4 | Only drag is cross-section repetition. |
| 9 | Error Recovery | n/a | No error states. |
| 10 | Help and Documentation | 3 | The two load-bearing answers (where to submit, approval/timing) are the vaguest copy. |
| **Total** | | **27/32** | **Good (84%)** |

(H7 and H9 n/a; max renormalized to 32.)

## Design Specificity Verdict

LLM: Strongly authored for this product — vintage print-ad world carried across every surface (aged cream stock + paper texture, Bungee Inline heads, signal/amber/mint tube-colour plate rotation as wayfinding, ▸ markers, "01–06" neon-tube numerals). The FAQ is the one block where the product world thins to a plain <dl>.

Deterministic scan: detect.mjs --json → [], exit 0, clean. Zero findings — no mechanical craft violations. Corroborates the review: every issue is a design/content judgment, not code craft. Console: 0 errors, nothing new.

Agreement: A named a11y a strength; B verified clean h1→h2→h3 outline, anchors resolve to real section ids, FAQ is genuine dl/dt/dd, links rel-guarded. False positive pre-empted: Chrome maps dl→generic in the a11y tree — a browser quirk, not a defect.

## Overall Impression

Confident, on-brand, a11y-solid read surface that does comprehension well then fumbles the moment that matters: step 4 "Submit your design" provides no way to submit. Biggest opportunity = give that climax a real destination.

## What's Working

1. A11y fundamentals genuinely well done (landmarks, aria-hidden decoration, <ol> sequence semantics, focus rings, scroll-margin-top on :target). Detector-confirmed.
2. Palette-as-structure: each section's --tube colour recurs in H2 + nav sibling + numerals = wayfinding, not decoration.
3. Reading ergonomics authored (52–68ch measures, text-pretty/balance, justify scoped to sm+ to avoid 375px river-gaps).

## Priority Issues

[P1] "How to submit" has no way to submit. Step 4 "the Mint submission form" is plain text, not a link; no submit CTA on the page; header Submit jumps to the HOME page #submit anchor. Fix: render step 4 as a real primary CTA; until the URL exists point it at #mint with "opens soon — watch #mint"; make header Submit and this step share one destination. Command: /impeccable clarify (or layout).

[P2] Stale/contradictory review timing. Step 5 source comment says timing "deliberately NOT stated" but FAQ now commits to "up to 1 week." Fix: surface "up to a week" in step 5, delete the stale comment. Command: /impeccable clarify.

[P2] Cross-section redundancy. Tin dimensions ×3, "$75" ~×5, "design not a finished build" ×4. Fix: each section one job (guidelines=rules, steps=sequence, FAQ=edge cases); hoist dimensions into one constant. Command: /impeccable distill.

[P3] No skip-to-content link despite <main id="main">. Fix: visually-hidden focus-visible skip link first in header/layout. Command: /impeccable harden.

[P3] "Deadline TBD." reads as placeholder. Fix: frame openness warmly, point to #mint. Command: /impeccable clarify.

## Persona Red Flags

Jordan (first-timer teen): ungloss'd "custom PCB"/"breadboard" in the Low-complexity-floor card; step 4 dead-end → tries header Submit → bounced to home page, unsure if submitted.

Sam (a11y/keyboard/SR): no skip link; on-page nav gives no current-section feedback; FAQ dt's have no ids for deep-linking.

Casey (mobile): long + front-loaded with repeated facts; no back-to-top after FAQ; submit dead-end worse here (header Submit is the only CTA and it leaves the page).

## Minor Observations

- Body copy uses text-phosphor-dim (L≈0.44) not full phosphor for sustained reading — passes AA, worth a conscious check.
- Intro paragraphs larger on mobile than desktop (text-lg → sm:text-base); confirm deliberate.
- Eligibility "13–18" is max-lg:hidden in header; docs page states age only in FAQ #1 on mobile.
- FAQ not linkable per question (no per-dt anchors).

## Questions to Consider

1. Should a submit CTA sit pinned near the H1 rather than appearing (unfulfilled) at step 4?
2. Is this three sections, or rules + FAQ with "how to submit" as a numbered strip inside — killing the redundancy?
3. Would one "yes vs not-yet" example do more for confidence than reassurance sentences?
4. Hide undecided facts, or name them as "coming — watch #mint" so the page reads current not unfinished?
