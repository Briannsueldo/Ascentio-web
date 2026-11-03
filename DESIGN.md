# Ascentio redesign direction

## Content and positioning

Ascentio is an Argentine engineering company that designs, develops and operates high-availability systems for aerospace, industrial, energy and telecommunications sectors. The website retains the company's published focus on redundancy, contingency and business continuity; six service disciplines; space engineering since 2008; mission control, science-data, planning, simulation, systems engineering and maritime-intelligence work; public project and mission references; the stated mission, vision and values; published offices and contact channels; social channels; and the Certipedia quality-mark reference. The English and Spanish copy remains available. The contact form prepares a `mailto:` draft and does not send data to a site backend.

No new customers, certifications, metrics, project claims or partnerships were added. The four photographs are contextual editorial images from NASA/Wikimedia Commons, captioned and credited in the interface. They do not document Ascentio work.

## Subject-specific idea

Ascentio’s published mission path—from spacecraft and payload telemetry through the ground segment to mission operations—is the page’s visual connective device. A single animated signal travels a geometric route between the three labels. The path is an illustration of the mission architecture described on the site, not live telemetry.

The work index changes the selected published case description by keyboard or click. It intentionally has no case-specific photographs or unsupported performance data.

## Taste direction and decisions

- Primary authority: `design-taste-frontend` Taste Skill, direction **Type and nothing else**, seed `1846546744`.
- The composition follows its sparse, type-led hero, broad negative space, large editorial typography, wide side-fact copy, quiet project ledger, poster-like capabilities, and prominent contact close.
- The generator’s palette was not used because its available redraws introduced mustard/lime. The user explicitly required black, white and neutral gray. The implemented palette is `#050505`, `#171717`, `#FFFFFF`, `#F5F5F5`, and restrained gray `#A1A1AA`.
- Typography: Chivo for display and reading text; sans-serif labels remain legible and compact without a second display face. The scale uses fluid display type, restrained section headings, and 14–20px reading text.
- The layout alternates a sparse pale hero, black mission path, light capability ledger, pale history field, white project index, black company section, and black contact close. The image panels have different proportions and offset alignments.
- Noise is a local SVG `feTurbulence` texture at very low opacity on dark sections. It is static and pointer-transparent; no GIF request or extra package is needed.
- Animated Beam from UI Layouts was inspected. Its source imports `motion/react` and a project-specific `cn` helper with a demo icon bundle. The route’s relevant behavior was recreated in a small local SVG with no dependency or sample icon pack. A white SVG pulse moves from spacecraft to ground segment to operations; `prefers-reduced-motion` disables it.
- UI Layouts Noise documentation/source were inspected. The demo relies on a bundled `/noise.gif` and opacity control; the site uses the documented grain-overlay purpose via a local SVG filter instead.
- A NASA video-library search returned an NISAR mission video over four minutes long, plus a longer send-off video. Neither suited a restrained background loop, so the page uses still images and the original diagram instead of shipping a heavy, unrelated autoplay clip.

## Layout and interaction

- Maximum content width: 1440px; desktop gutters scale from 5.55vw, reducing to 22px on mobile.
- Breakpoints: 900px and 640px. Desktop uses deliberate asymmetry; mobile reflows all layouts into a readable single column.
- Navigation keeps the current page anchors and responsive menu. Language toggle switches English/Spanish. Mission service content remains intact, work rows have keyboard and click selection, map/social/email links retain their destinations, and form submission opens a prefilled email draft.
- The mobile menu is a native button with an expanded state. All interactions have visible focus styling; the SVG mission diagram has a title and description; content photos have descriptive alt text and lazy-load below the first view.

## Image sources

See [ASSET_CREDITS.md](ASSET_CREDITS.md) for image details and licenses. Original Ascentio site images remain in the repository for historical context but are not referenced by the redesign.
