# Contributing to Matka Frontend

Thank you for your interest in contributing to Matka Frontend! This document provides guidelines and information for contributors.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Git

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/yourusername/matka-frontend.git
   cd matka-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Guidelines

### Code Style

- Follow the existing code style and formatting
- Use TypeScript for all new code
- Follow React best practices
- Use functional components with hooks
- Write meaningful component and function names

### File Naming

- Use PascalCase for component files (e.g., `UserProfile.tsx`)
- Use camelCase for utility files (e.g., `apiHelpers.ts`)
- Use kebab-case for CSS files (e.g., `user-profile.css`)

### Component Structure

```tsx
import React from "react";
import "./ComponentName.css";

interface ComponentNameProps {
  // Define props here
}

const ComponentName: React.FC<ComponentNameProps> = ({ prop1, prop2 }) => {
  // Component logic here

  return <div className="component-name">{/* JSX content */}</div>;
};

export default ComponentName;
```

### Testing

- Write tests for new components and functions
- Ensure all tests pass before submitting a PR
- Run the test suite locally: `npm test`

### Linting

- Run the linter before committing: `npm run lint`
- Fix any linting errors before submitting a PR

## Pull Request Process

1. Ensure your code follows the project's style guidelines
2. Update documentation if necessary
3. Add tests for new functionality
4. Ensure all tests pass
5. Update the README.md if you're adding new features
6. Submit a pull request with a clear description of changes

### Pull Request Template

```markdown
## Description

Brief description of what this PR accomplishes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] All tests pass
- [ ] New tests added for new functionality
- [ ] Manual testing completed

## Checklist

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Code commented where necessary
- [ ] Documentation updated
```

## Issues

### Reporting Bugs

- Use the bug report template
- Provide detailed steps to reproduce
- Include browser/OS information
- Add screenshots if applicable

### Feature Requests

- Use the feature request template
- Describe the feature clearly
- Explain why this feature would be useful
- Provide examples if possible

## Code Review

- All PRs require at least one review
- Address review comments promptly
- Be respectful and constructive in reviews
- Ask questions if something is unclear

## Getting Help

- Check existing documentation
- Search existing issues
- Ask questions in discussions
- Contact maintainers if needed

## License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project.

Thank you for contributing to Matka Frontend!



