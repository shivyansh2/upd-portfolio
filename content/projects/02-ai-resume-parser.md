---
title: "AI-Powered Resume Parser"
description: "An end-to-end resume parsing pipeline: a Python NLP backend extracts and structures candidate data, served via REST API to a drag-and-drop React interface for reviewing and editing the results."
tags: ["Python", "spaCy", "NLP", "REST API"]
image: "/projects/resume-parser.png"
---

The backend ingests uploaded PDF and DOCX resumes, cleans the unstructured text, and uses custom layout segmentation with Named Entity Recognition (NER) to extract candidate details, skills, and work history. Extracted entities are serialized into a structured JSON schema and delivered through a REST API to a React frontend, where parsed fields are grouped clearly and can be reviewed or edited across desktop and mobile layouts.

