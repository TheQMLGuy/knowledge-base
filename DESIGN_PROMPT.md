# Prompt for Claude Design — "TheQMLGuy's World"

> Paste everything below the line into Claude Design.

---

## Who this is for

I'm **TheQMLGuy**. I don't want a portfolio. I'm building **a world**: a personal website that works like a place you visit, not a CV you scroll. I work across quantum machine learning, neural network architecture, logic (Boolean to fuzzy to modal to quantum), compilers and IDEs, and teaching in the style of 3Blue1Brown. I build my own tools because existing ones bore me. The site has to feel like it came from that kind of mind: precise, curious, slightly unreasonable, and impossible to confuse with anyone else's.

## What the site is

1. **Home = an avatar you can interact with.** No hero section, no "Hi, I'm…", no grid of project cards. Someone lands and meets a character: a living presence that reacts to the cursor, idles, notices you, and offers **actions**.
2. **Actions are how you move around.** Each action is a verb the avatar can do with you. The first and most important one is **"Enter the Knowledge Base"**. Later ones might be "Show me what you're building", "Play with a toy", "Who are you?", "Surprise me". Show at least 4 so I can see how the system scales.
3. **Portal transitions.** Choosing an action does not load a page. It **opens a portal**, and the visitor goes through it into the next space. The portal is a key part of the identity, not decoration. Every option must design its own portal: how it opens, what it looks like mid-transition, how the new space settles in, and how you get back.
4. **The Knowledge Base.** My own long-form writing: essays, derivations, notes, mental models. I write all of it myself, by hand, in Markdown. It needs long-read typography that holds up for 5,000-word pieces with math (KaTeX), code, diagrams and footnotes. It also needs an index that feels like exploring a territory, not reading a blog list.

## What I want from you

**A design system and colour scheme. Don't hand me one answer: run an evolutionary search and give me the final 20 survivors to pick from.**

### Hard rule: no generic

Kill anything on sight that looks like:
- dark navy + purple/blue gradient "tech" glow, glassmorphism cards, neon cyberpunk
- "developer portfolio" templates: terminal hero, typing animation, bento grids, floating blobs
- Inter/Geist + slate grey + one accent colour
- any Dribbble trend from the last 3 years without a reason that's specific to me
- a 3D-blob avatar, Memoji-style avatar, or chatbot bubble pretending to be an avatar

If an option could be swapped onto another person's site without anyone noticing, it fails.

### The process: at least 5 rounds of survival of the fittest

Show your work for every round. I want to see the evolution, not just the result.

**Round 0: Spawn (at least 60 seeds).**
Make wildly divergent seeds. Spread them deliberately across these axes, and at least one seed must push each axis to its extreme:
- *Material / medium:* paper, ink, oscilloscope phosphor, blueprint, chalk on slate, risograph, stained glass, circuit board, darkroom film, embroidery, ceramic glaze, LCD segments, topographic maps, specimen labels, anything unexpected
- *Era:* medieval manuscript → 1960s NASA → 1980s Soviet computing → 2090 → timeless
- *Emotional register:* austere, playful, sacred, menacing, tender, absurd
- *Light:* light-first, dark-first, light that changes with time of day, a site that "powers on"
- *Typography:* a voice. Serif scholar, grotesk engineer, monospace machine, handwritten, a custom or variable-font trick
- *Avatar form:* abstract (a waveform, a qubit on a Bloch sphere, a lattice, a single glyph), creature, a portrait made of the content itself, a machine, a light, a shadow
- *Portal mechanic:* tear, fold, zoom into a pixel, fall through a page, refract, phase-shift, wireframe dissolve, ink bleed, a door made of the destination's own content

Give each seed one line: name, palette (hex), type pairing, avatar idea, portal idea.

**Rounds 1–5: Select → Mutate → Crossbreed → Kill.**
Each round:
1. **Score** every survivor from 1 to 5 on this fitness function:
   - **Unmistakability:** could only be mine
   - **Avatar life:** would people actually play with it for 30 seconds?
   - **Portal wow:** would someone screen-record the transition and send it to a friend?
   - **Reading endurance:** can I read a 5,000-word derivation in it without fatigue? Contrast passes WCAG AA for body text.
   - **System coherence:** do colour, type, motion and shape feel like one organism?
   - **Buildability:** works on the web with CSS/SVG/Canvas/WebGL at 60fps on a mid-range phone, and respects `prefers-reduced-motion`
2. **Kill** the bottom ~40% and give a one-line cause of death for each.
3. **Mutate** each survivor: push one trait further than feels safe.
4. **Crossbreed** at least 3 pairs of strong survivors into hybrids. Say which parents each came from.
5. **Introduce 3 wildcards** in rounds 1–3 (fresh mutants that never existed before) so the population doesn't converge too early.
6. Watch for convergence: if two survivors become too similar, merge them or kill one.

Population goal: ~60 → ~45 → ~35 → ~28 → ~23 → **final 20**.

### What each of the final 20 must include

For every finalist, give a **visual board** plus these specs:
1. **Name + one-sentence soul** (what this world *is*)
2. **Lineage:** which seeds and crossbreeds it came from
3. **Colour tokens:** `--bg`, `--surface`, `--ink`, `--ink-muted`, `--accent`, `--accent-2`, `--portal`, `--link`, `--code-bg`, and a light *and* dark variant (or a strong reason it only has one), with contrast ratios
4. **Type system:** display / body / mono / math faces (Google Fonts or other free fonts), with a scale and line-heights for long reads
5. **Shape and texture language:** radii, borders, grain, grid, iconography style
6. **Motion language:** easing curves, durations, idle behaviour
7. **The avatar:** what it is, its idle loop, how it reacts to the cursor and clicks, how it presents its actions
8. **The portal:** a storyboard in 3 to 5 frames, from open to transit to arrival to return
9. **Three mock screens:** (a) home with avatar and actions, (b) mid-portal frame, (c) a Knowledge Base article with a heading, body, an equation, a code block and a footnote
10. **The risk:** what could make this one fail or feel tacky, and how to avoid it

### Final deliverable

- The 20 finalists, ranked, with their scores across all 6 fitness criteria
- A family tree / evolution diagram of the 5 rounds
- Mark your own favourite and the one you think is the **biggest gamble**. Make sure at least 3 of the 20 are risky enough that they scare you a little.

Surprise me. If something feels too safe, it's probably already dead.
