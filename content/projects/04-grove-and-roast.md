---
title: "Grove & Roast"
description: "A single-page coffee and pour-over gear storefront with a state-driven cart drawer, accessible accordion FAQ, and fluid typography — built with pure HTML5, CSS3, and vanilla JavaScript."
tags: ["HTML5", "CSS3", "JavaScript", "Accessibility", "Responsive Design"]
image: "/projects/grove-and-roast.png"
---

A lightweight storefront built with no frameworks or build steps. The interactive cart drawer is managed entirely client-side with a single-source-of-truth `renderCart()` function, while the FAQ accordion, newsletter form, and full keyboard navigation are all hand-rolled in vanilla JS. CSS Grid and Flexbox drive a fluid layout that scales smoothly from mobile to a 4-column desktop view using `clamp()` typography, and product photography is paired with original SVG artwork that falls back automatically if an image request fails. Accessibility was a first-class concern throughout: `aria-live` announcements, synced `aria-hidden`/`aria-expanded` states on the drawer, screen-reader text equivalents, and `prefers-reduced-motion` support.
