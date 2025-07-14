# Project Structure

## Files and Directories

- 📄 COMPONENT_STRUCTURE.md
- 📄 MOCKUP.md
- 📄 README.md
- 📄 TODO_APP_PRD.md
- 📄 attribute-selector.html
- 📄 calculator.html
- 📁 class/
- 📄 combinatores.html
- 📁 css-practice/
  - 📁 01-blog-post/
    - 📄 index.html
    - 📄 style.css
  - 📁 02-navigation/
    - 📄 index.html
    - 📄 style.css
  - 📁 03-contact-form/
    - 📄 index.html
    - 📄 style.css
  - 📄 index.html
  - 📄 style.css
- 📁 css-selectors/
  - 📁 01-basic-selectors/
    - 📄 index.html
    - 📄 style.css
  - 📁 02-combinators/
    - 📄 index.html
    - 📄 style.css
  - 📁 03-pseudo-classes/
    - 📄 index.html
    - 📄 style.css
  - 📁 04-attribute-selectors/
    - 📄 index.html
    - 📄 style.css
  - 📁 05-advanced-selectors/
    - 📄 index.html
    - 📄 style.css
  - 📁 06-pseudo-elements/
    - 📄 index.html
    - 📄 style.css
  - 📄 index.html
  - 📄 style.css
- 📄 fonts.html
- 📄 positions.css
- 📄 positions.html
- 📁 postions-practice/
  - 📄 Absolute Positioned Tooltip.html
  - 📄 Fixed-Header.html
  - 📄 Image with Badge.html
  - 📄 Simple Overlay.html
  - 📄 Sticky Section Title.html
  - 📄 accordion-2.html
  - 📄 accordion.html
  - 📄 css-modal.html
  - 📄 css-tooltip.html
  - 📄 faq-toggle.html
  - 📄 image-gallery.html
  - 📄 key-concept.txt
  - 📄 nav-menu-links.html
  - 📄 nav-menu.html
  - 📄 tab-switcher.html
- 📄 pseudo-classes.html
- 📄 pseudo-elements.html
- 📄 todo-flow.png
- 📄 todos.json

## Project Structure Diagram

```mermaid
graph TD
    A[html-practice] --> B[css-practice]
    A --> C[css-selectors]
    A --> D[positions-practice]
    A --> E[class]
    A --> F[Individual Files]

    B --> B1[01-blog-post]
    B --> B2[02-navigation]
    B --> B3[03-contact-form]
    B --> B4[index.html]
    B --> B5[style.css]

    C --> C1[01-basic-selectors]
    C --> C2[02-combinators]
    C --> C3[03-pseudo-classes]
    C --> C4[04-attribute-selectors]
    C --> C5[05-advanced-selectors]
    C --> C6[06-pseudo-elements]
    C --> C7[index.html]
    C --> C8[style.css]

    D --> D1[Position Examples]
    D1 --> D2[Tooltips]
    D1 --> D3[Headers]
    D1 --> D4[Overlays]
    D1 --> D5[Accordions]
    D1 --> D6[Navigation]

    F --> F1[calculator.html]
    F --> F2[positions.html]
    F --> F3[fonts.html]
    F --> F4[Documentation Files]
```