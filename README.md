# React UI Component Library

A comprehensive, reusable React UI component library built with Tailwind CSS that can be installed and used across multiple projects.

## Installation

```bash
npm install @your-org/react-ui
# or
yarn add @your-org/react-ui
# or
pnpm add @your-org/react-ui
```

## Usage

### Import Components

```tsx
import { Button, Input, Card } from '@your-org/react-ui';
import '@your-org/react-ui/styles';
```

### Example

```tsx
import React from 'react';
import { Button, Input, Card } from '@your-org/react-ui';
import '@your-org/react-ui/styles';

function App() {
  return (
    <div>
      <Card title="Welcome" footer={<Button>Submit</Button>}>
        <Input label="Email" placeholder="Enter your email" />
        <Button variant="primary" size="large">
          Click Me
        </Button>
      </Card>
    </div>
  );
}
```

## Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
<Button variant="primary" size="medium" isLoading={false}>
  Click Me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'danger' | 'outline' (default: 'primary')
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `isLoading`: boolean (default: false)
- All standard button HTML attributes

### Input

A form input component with label, error, and helper text support.

```tsx
<Input 
  label="Email" 
  placeholder="Enter email"
  error="Invalid email"
  helperText="We'll never share your email"
/>
```

**Props:**
- `label`: string (optional)
- `error`: string (optional)
- `helperText`: string (optional)
- `fullWidth`: boolean (default: false)
- All standard input HTML attributes

### Card

A card container component with header, body, and footer sections.

```tsx
<Card title="Card Title" footer={<Button>Action</Button>}>
  Card content goes here
</Card>
```

**Props:**
- `title`: string (optional)
- `footer`: React.ReactNode (optional)
- All standard div HTML attributes

## Development

### Setup

```bash
npm install
```

### Build

```bash
npm run build

```

### Preview Components

Start the preview server to see and test all components in the browser:

```bash
npm run preview:dev
```

This will start a development server at `http://localhost:3000` where you can:
- See all components in action
- Test different variants and states
- View component combinations
- Hot reload on code changes

### Preview Production Build

Preview the production build:

```bash
npm run build
npm run preview
```

### Development Mode (Library Build)

Watch mode for building the library:

```bash
npm run dev
```

### Type Checking

```bash
npm run type-check
```

## Publishing

1. Update the version in `package.json`
2. Build the library: `npm run build`
3. Publish to npm: `npm publish`

## Local Development in Other Projects

To use this library locally in other projects during development:

```bash
# In the library directory
npm link

# In your project directory
npm link @your-org/react-ui
```

## Requirements

- React 18.0.0 or higher
- React DOM 18.0.0 or higher
