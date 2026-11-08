# TheQMLGuy: a world, not a portfolio

My personal website. Home is an avatar you can interact with. Its actions open portals into the rest of the site. The first one leads to the **Knowledge Base**: everything I write, by hand.

## Run it

```bash
npm install
npm run dev
```

## Write in the Knowledge Base

Add a Markdown file to `src/content/kb/`. See `src/content/kb/_HOW-TO-WRITE.md` for the frontmatter.

## Design

The current look is a deliberate placeholder. `DESIGN_PROMPT.md` is the brief for an evolutionary design exploration (5 rounds, 20 finalists). The chosen option's tokens replace `src/styles/tokens.css`, its avatar replaces `src/components/Avatar.astro`, and its portal replaces `src/scripts/portal.ts`.

## Map

| Piece | File |
|---|---|
| Avatar's actions | `src/components/actions.ts` |
| Avatar | `src/components/Avatar.astro` |
| Portal effect | `src/scripts/portal.ts` + `.portal` in `src/styles/global.css` |
| Design tokens | `src/styles/tokens.css` |
| Knowledge Base entries | `src/content/kb/*.md` |
