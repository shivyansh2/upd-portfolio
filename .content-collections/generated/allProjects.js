
export default [
  {
    "title": "Authentic Indian Flavours",
    "description": "A five-screen mobile food-delivery concept designed in Figma, covering discovery, dish details, cart management, checkout, and order confirmation.",
    "tags": [
      "Figma",
      "Mobile UI",
      "User Flow",
      "UI/UX"
    ],
    "image": "/projects/food-app.png",
    "content": "The interface uses warm neutrals, deep culinary reds, and clear reusable controls to make the ordering journey easy to follow from first browse to final confirmation.",
    "_meta": {
      "filePath": "01-food-delivery-app.md",
      "fileName": "01-food-delivery-app.md",
      "directory": ".",
      "extension": "md",
      "path": "01-food-delivery-app"
    }
  },
  {
    "title": "AI-Powered Resume Parser",
    "description": "An end-to-end resume parsing pipeline: a Python NLP backend extracts and structures candidate data, served via REST API to a drag-and-drop React interface for reviewing and editing the results.",
    "tags": [
      "Python",
      "spaCy",
      "NLP",
      "REST API"
    ],
    "image": "/projects/resume-parser.png",
    "content": "The backend ingests uploaded PDF and DOCX resumes, cleans the unstructured text, and uses custom layout segmentation with Named Entity Recognition (NER) to extract candidate details, skills, and work history. Extracted entities are serialized into a structured JSON schema and delivered through a REST API to a React frontend, where parsed fields are grouped clearly and can be reviewed or edited across desktop and mobile layouts.",
    "_meta": {
      "filePath": "02-ai-resume-parser.md",
      "fileName": "02-ai-resume-parser.md",
      "directory": ".",
      "extension": "md",
      "path": "02-ai-resume-parser"
    }
  },
  {
    "title": "Personal Portfolio Website",
    "description": "A fast, content-driven portfolio built with React, TanStack Start, and Tailwind CSS, using type-safe Markdown collections for projects, education, and resume data.",
    "tags": [
      "React",
      "TanStack Start",
      "Tailwind CSS",
      "TypeScript"
    ],
    "image": "/projects/portfolio-website.png",
    "content": "This site itself: a server-rendered React app built on TanStack Start and TanStack Router, styled with Tailwind CSS v4, and backed by Content Collections for schema-validated Markdown content (projects, education, resume). Pages are statically pre-rendered where possible and deployed on Netlify for fast, reliable delivery. The design system uses a warm paper-and-rust palette with Fraunces and Manrope typography to give the interface a distinct, editorial feel rather than a generic template look.",
    "_meta": {
      "filePath": "03-portfolio-website.md",
      "fileName": "03-portfolio-website.md",
      "directory": ".",
      "extension": "md",
      "path": "03-portfolio-website"
    }
  },
  {
    "title": "Grove & Roast",
    "description": "A single-page coffee and pour-over gear storefront with a state-driven cart drawer, accessible accordion FAQ, and fluid typography — built with pure HTML5, CSS3, and vanilla JavaScript.",
    "tags": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Accessibility",
      "Responsive Design"
    ],
    "image": "/projects/grove-and-roast.png",
    "content": "A lightweight storefront built with no frameworks or build steps. The interactive cart drawer is managed entirely client-side with a single-source-of-truth `renderCart()` function, while the FAQ accordion, newsletter form, and full keyboard navigation are all hand-rolled in vanilla JS. CSS Grid and Flexbox drive a fluid layout that scales smoothly from mobile to a 4-column desktop view using `clamp()` typography, and product photography is paired with original SVG artwork that falls back automatically if an image request fails. Accessibility was a first-class concern throughout: `aria-live` announcements, synced `aria-hidden`/`aria-expanded` states on the drawer, screen-reader text equivalents, and `prefers-reduced-motion` support.",
    "_meta": {
      "filePath": "04-grove-and-roast.md",
      "fileName": "04-grove-and-roast.md",
      "directory": ".",
      "extension": "md",
      "path": "04-grove-and-roast"
    }
  }
]