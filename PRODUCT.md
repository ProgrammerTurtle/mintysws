# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Teens aged 13–18, anywhere in the world. No prior hardware experience is
assumed — the audience spans complete beginners through advanced builders, and
the program is designed so both can finish.

They arrive already busy, often mid-way through long-running, high-stress
personal projects. The job they are hiring Mint for is a short, low-stakes
hardware build they can actually finish and feel good about shipping.

## Product Purpose

Mint is a Hack Club YSWS ("you ship, we ship") program. A participant builds a
hardware project that fits inside a real Altoids tin and journals the design
process publicly on GitHub. Hack Club provides the tin itself and a $75 grant
to fund the parts.

Success is a teen completing and shipping a finished physical build in a short
timeframe, with a public record of how they got there.

## Positioning

The entire brief is two fixed constraints — a real Altoids tin's interior
volume and $75 — and everything else is left open. Two properties distinguish
it from a general "build something" grant:

- **The constraint is physical and verifiable.** The envelope is a real object
  a participant can hold, not a rules document.
- **The grant is paid up front to fund the build**, not reimbursed or awarded
  on completion, so cost is not a barrier to starting.

## Operating Context

- Participants work in a public GitHub repository and log progress in a
  `JOURNAL.md` file. No timelapses or screen recordings are required.
- Questions and community happen in the `#mint` channel in the Hack Club
  Slack.
- Submission is a **design** submission, not a finished build: the participant
  ships a design plus its journal via a hosted Fillout form, and the tin and
  grant follow. There is no separate place to submit a completed build.
- "Ship it" means shipping the design, in the Hack Club sense of shipping.
- The build envelope is the footprint of a real Altoids tin:
  3.75" × 2.375" × 0.8".

## Capabilities and Constraints

- **Build envelope:** 3.75" × 2.375" × 0.8". The project must be contained
  within the tin.
- **Grant:** $75, issued *before* the build to pay for parts.
- **Also provided:** the physical Altoids tin to build inside.
- **Intake:** a design for a project that fits the envelope, plus a GitHub
  journal of the design process. Funding follows the design submission, so a
  participant never fronts the cost.
- **Deliverables from the participant:** ultimately a built project that fits
  the envelope, with the journal kept public.
- **Eligibility:** any teen aged 13–18, worldwide. Hack Club membership is not
  a precondition.
- **Timeline:** ongoing. No deadline, no cohort window, no stated cap.
- **Undecided:** the live Fillout form URL. The site currently renders a
  "form not connected" placeholder in its place
  (`src/components/Submit.astro`, `FORM_URL`).
- **Sequence:** plan, design, journal the design process, then ship the design
  for funding and receive the tin. Building happens after funding lands.
- **Undecided:** how long review takes, and what the approval criteria are.
  That a design submission is what triggers funding is settled; the timing and
  bar for saying yes are not.

## Brand Commitments

- The program is named **Mint**.
- It is a **Hack Club** YSWS. The organization is written "Hack Club" — never
  "Hackclub", "hack club", or "HackClub".
- "You ship, we ship" is the established framing of the exchange.
- **Required of every Hack Club YSWS site, not optional:** the footer must link
  the Hack Club Privacy Policy and Terms and Conditions
  (https://hackclub.com/privacy-and-terms) and the Fulfillment bounty
  (https://forms.hackclub.com/bounty). These are compliance links; do not prune
  them as footer clutter.

## Evidence on Hand

- `public/altoids-tin.png` — photograph of an open Altoids tin (480×480,
  ~40% transparent padding). `public/altoids-tin-trimmed.png` is the cropped
  422×311 derivative currently used on the site.
- Three real third-party builds cited as proof the envelope is achievable:
  a [pocket synthesizer](https://www.instructables.com/Pocket-Sized-Synthesizer/),
  [pi-tin](https://jackw01.github.io/pi-tin/), and an
  [Altoids tin mini cyberdeck](https://hackaday.io/project/205598-altoids-tin-mini-cyberdeck).
  These are other people's projects, not Mint submissions.
- **Absent — must not be fabricated:** there are no Mint participant
  submissions, testimonials, completion counts, press mentions, or partner
  logos. The program has no track record to cite yet.

## Product Principles

1. **Finishable beats impressive.** The program exists as an antidote to
   long-running projects that wear people down. Anything that raises the cost
   of finishing works against it.
2. **The constraint is the product.** The tin and the $75 are what make Mint
   interesting. Loosening either dissolves the idea.
3. **Remove cost as a barrier.** Funding arrives before the build, not after,
   so a teen without money can still start.
4. **Low ceremony.** A `JOURNAL.md` is the whole documentation burden. No
   timelapses, no video, no process theatre.
5. **Beginners and advanced builders are both first-class.** The envelope is
   the only floor; neither audience is the secondary one.

## Accessibility & Inclusion

No accessibility standard has been set by the user as a product requirement.
The site is currently built and verified against **WCAG AA** contrast, with
reduced-motion support and keyboard focus states — recorded here as the
working standard in practice, not as a confirmed product commitment.
