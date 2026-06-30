# Miami Psychiatric Services — Landing Page

TMS & Spravato® inquiry landing page for [Miami Psychiatric Services](https://www.mps-miami.com/).

## Quick Start

```bash
cd miami-psychiatric-services
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Logo Placement

Place your client-provided logo at:

```
public/images/logo.png
```

The header, footer, and Open Graph metadata all reference this file. Recommended size: **at least 280×112 px** (transparent PNG). The current file is a placeholder downloaded from the live site — replace it with the attached brand asset when ready.

## Project Structure

| Path | Purpose |
|------|---------|
| `src/content/en.ts` | All English copy (translation-ready) |
| `src/components/` | Page sections and inquiry form |
| `public/images/` | Logo, TMS, Spravato, team, and clinic photos |
| `COPY-FOR-TRANSLATION.md` | Developer copy export (section keys for `es.ts`) |
| `English-Copy-for-Spanish-Translation.md` | **Client-facing** doc to share for Spanish translation |

## CTAs

- **Primary (header):** Phone call — `(754) 289-4005`
- **Secondary:** Inquiry form in hero and contact section

## Bilingual Design

Copy lives in `src/content/en.ts` and `src/content/es.ts`. The navbar **EN / ES** switcher toggles language (preference saved in the browser). The inquiry form is embedded from GoHighLevel and remains in English until a Spanish form is configured in GHL.

## Form Integration

The inquiry form is embedded from GoHighLevel (4TMS) in `src/components/InquiryForm.tsx`. To use a different form, update the iframe `src` and `data-form-id` in that component.

## Build for Production

```bash
npm run build
npm start
```

## Brand Colors

| Token | Hex |
|-------|-----|
| Blue | `#014BB6` |
| Navy | `#061281` |
| Cyan accent | `#8AF6FF` |
| Orange accent | `#D95511` |

## Assets

Images were sourced from the client's Squarespace site. Replace or supplement as needed in `public/images/`.
