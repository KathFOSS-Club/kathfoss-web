# Contributing to KathFOSS Web Project

Thank you for your interest in contributing to our project! This document provides guidelines and examples to help you contribute effectively.

## Table of Contents

1. [Folder Structure](#folder-structure)
2. [Creating New Pages](#creating-new-pages)
3. [Adding Components](#adding-components)
4. [Defining Functions](#defining-functions)
5. [Best Practices](#best-practices)

## Folder Structure

```bash
├── public/            # Static assets (e.g., images, fonts)
├── src/
│   ├── app/           # Next.js App Router
│   │   ├── components/ # Reusable React components
│   │   │   ├── ParticleAnimation/ # Particle animations
│   │   │   ├── ui/               # Smaller reusable components like buttons
│   │   │   └── layout/           # Layout components for the application
│   │   ├── events/     # Event-specific pages
│   │   ├── layout.tsx  # Application-wide layout
│   │   └── page.tsx    # Root page
│   ├── config/        # Configuration files and settings
│   ├── lib/           # Reusable libraries and helper functions
│   ├── styles/        # Global and component-specific styles
│   └── types/         # TypeScript type definitions
├── .eslintrc.js       # Linting configuration
├── next.config.js     # Next.js configuration
├── package.json       # Dependencies and scripts
└── README.md          # Project overview
```

## Creating New Pages

### Steps:

1. Create a new folder in `app/`. For example: `app/events`
2. Create a new file with a .tsx extension. For example, page.tsx.
3. Add the following boilerplate code:

```bash
import React from 'react';

export default function EventPage() {
  return (
    <div>
      <h1>Example Page</h1>
      <p>Welcome to the Example Page!</p>
    </div>
  );
};
```

## Adding Components

### Steps

1. Navigate to the src/app/components/ directory.
2. Determine the type of component you are adding:
   - If the components is a layout component then create a file in /component/layout
   - If the components is a smaller component like button then create a file in /component/ui
3. If the component requires css then create one in the format `MyComponent.module.css`.

`MyComponent.tsx`

```bash
import React from 'react';
import styles from './MyComponent.module.css';

interface MyComponentProps {
  title: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return <div className={styles.container}>{title}</div>;
};

export default MyComponent;
```

`MyComponent.module.css`

```bash
.container {
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
}
```

### Notes:

- Components should be reusable and modular.
- Use TypeScript for type safety.
- Follow the BEM naming convention for CSS classes.

## Defining Functions:

1. **Use camelCase for function names:** This means the first word starts with a lowercase letter, and each subsequent word starts with an uppercase letter. Example: calculateSum, fetchDataFromApi.

2. **Use descriptive names:** The function name should clearly explain what the function does. Avoid vague names like `handle` or `doStuff`, and prefer names like `calculateTotalPrice`, `filterActiveUsers`, or `formatDate`.

## Best Practices

1. **Code Consistency:** Follow the ESLint and Prettier configurations.

2. **Use TypeScript:** Define proper types for props, state, and variables.

3. **Document Your Code:** Add comments for complex logic.

4. **Testing:** Write tests for components and utilities.

5. **Accessibility:** Ensure all components are accessible (e.g., proper ARIA attributes).

6. **Performance:** Optimize for performance (e.g., lazy loading, memoization).
