# Technology Stack

## Core Technologies

- **HTML5**: Semantic markup with modern standards
- **CSS3**: Modern CSS features including Flexbox, Grid, custom properties
- **Vanilla JavaScript**: Interactive functionality and animations
- **React** (planned): For the Todo App component

## Build System

This is a **static HTML/CSS project** with no build process required.

### Development Workflow
```bash
# No installation required - just open files in browser
open index.html

# For local development server (optional)
python -m http.server 8000
# or
npx serve .
```

## Code Standards

### CSS Architecture
- **CSS Custom Properties**: Extensive use of CSS variables for theming
- **BEM-like Naming**: Semantic class names (`.card`, `.hero-title`, `.section-description`)
- **Mobile-First**: Responsive design with progressive enhancement
- **Modern CSS**: Flexbox, Grid, animations, and transitions

### File Organization
- Each module/lesson has its own `index.html` and `style.css`
- Shared styles use consistent naming conventions
- Modular CSS with clear separation of concerns

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **CSS3 Features**: Full support for modern selectors and properties
- **Graceful Degradation**: Fallbacks for older browsers where needed

## Dependencies

### External Resources
- **Google Fonts**: Inter font family
- **No CSS Frameworks**: Pure CSS implementation
- **No JavaScript Libraries**: Vanilla JS only

### Planned Dependencies (Todo App)
- React
- Tailwind CSS
- Zustand or React Context API
- Local Storage API