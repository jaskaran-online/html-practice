# Project Structure

## Directory Organization

```
├── css-selectors/           # Main CSS selectors learning hub
│   ├── 01-basic-selectors/  # Element, class, ID selectors
│   ├── 02-combinators/      # Descendant, child, sibling selectors
│   ├── 03-pseudo-classes/   # :hover, :focus, :nth-child, etc.
│   ├── 04-attribute-selectors/ # [attr], [attr="value"] patterns
│   ├── 05-advanced-selectors/  # Complex combinations & specificity
│   ├── 06-pseudo-elements/  # ::before, ::after, ::first-line
│   ├── index.html          # Navigation hub
│   └── style.css           # Shared styles
├── flexbox-mastery/        # Flexbox learning modules
│   ├── lessons/            # Individual flexbox lessons
│   ├── projects/           # Real-world flexbox projects
│   └── styles/             # Shared flexbox styles
├── css-practice/           # Hands-on coding exercises
│   ├── 01-blog-post/       # Basic selectors practice
│   ├── 02-navigation/      # Navigation menu styling
│   └── 03-contact-form/    # Form styling practice
├── postions-practice/      # CSS positioning examples
└── [planning-docs]/        # Todo app documentation
```

## File Naming Conventions

### HTML Files
- `index.html` - Main entry point for each section
- Descriptive names for standalone examples: `calculator.html`, `positions.html`

### CSS Files
- `style.css` - Main stylesheet for each module
- `main.css` - Shared/global styles when needed

### Directory Structure
- **Numbered prefixes** for learning modules: `01-basic-selectors/`
- **Descriptive names** for practice sections: `css-practice/`, `flexbox-mastery/`
- **Consistent pairing**: Each directory contains `index.html` + `style.css`

## Module Architecture

### Learning Modules Pattern
Each learning module follows this structure:
```
module-name/
├── index.html    # Interactive examples and explanations
├── style.css     # Module-specific styles
└── README.md     # Optional documentation
```

### Navigation Hierarchy
- **Root index.html** - Main hub linking to all sections
- **Section index.html** - Navigation within each learning area
- **Module pages** - Individual lessons with examples

## Code Organization Principles

### CSS Structure
- **CSS Custom Properties** at `:root` for theming
- **Component-based classes**: `.card`, `.hero`, `.navigation`
- **Utility classes** for common patterns
- **Responsive breakpoints** using mobile-first approach

### HTML Patterns
- **Semantic markup**: `<header>`, `<main>`, `<section>`, `<article>`
- **Accessibility attributes**: ARIA labels, keyboard navigation
- **Progressive enhancement**: Works without JavaScript

### Content Strategy
- **Self-contained modules** - each can be studied independently
- **Progressive complexity** - builds from basic to advanced concepts
- **Practical examples** - real-world use cases in each lesson