# @cloudvisionapps/react-ui

[![GitHub release](https://img.shields.io/github/v/release/CloudVisionApps/ReactUI)](https://github.com/CloudVisionApps/ReactUI/releases)
[![GitHub package workflow](https://img.shields.io/github/actions/workflow/status/CloudVisionApps/ReactUI/publish.yml?label=publish)](https://github.com/CloudVisionApps/ReactUI/actions/workflows/publish.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Production-ready React UI components built with TypeScript and Tailwind CSS.
Use this package to ship consistent, accessible interfaces faster across multiple apps.

## Why @cloudvisionapps/react-ui

- Ready-to-use components for common product UI patterns
- TypeScript-first API with editor autocomplete and static safety
- Tailwind CSS styling model for fast customization
- Lightweight integration with simple install + import flow

## Links

- [GitHub Releases](https://github.com/CloudVisionApps/ReactUI/releases)
- [Source code](https://github.com/CloudVisionApps/ReactUI)
- [Issue tracker](https://github.com/CloudVisionApps/ReactUI/issues)

## Screenshots

![Screenshot 1](https://raw.githubusercontent.com/CloudVisionApps/ReactUI/main/screenshots/screenshot1.png)
## Requirements

- React 19+
- React DOM 19+

## Installation

This package is published from GitHub Packages.

```bash
npm config set @cloudvisionapps:registry https://npm.pkg.github.com
npm install @cloudvisionapps/react-ui
```

```bash
yarn add @cloudvisionapps/react-ui
```

```bash
pnpm add @cloudvisionapps/react-ui
```

## Quick Start

Import components and include the library styles in your app (e.g. in your root layout or `main.tsx`):

```tsx
import { Button, Card, Input } from '@cloudvisionapps/react-ui';
import '@cloudvisionapps/react-ui/styles';

function App() {
  return (
    <Card title="Welcome" footer={<Button>Submit</Button>}>
      <Input label="Email" placeholder="Enter your email" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

You can also import only what you need from the package entry point.

## Components

| Component | Description |
|-----------|-------------|
| Accordion | Collapsible content sections |
| Alert | Inline messages and notifications |
| Avatar | User or entity image/initials |
| Badge | Labels and status indicators |
| Breadcrumb | Navigation path |
| Button | Actions with variants and loading state |
| Card | Container with optional title and footer |
| Checkbox | Boolean form control |
| Divider | Visual separator |
| EmptyState | Placeholder when there is no content |
| Footer | Page footer with links and columns |
| Hero | Hero / landing section |
| Input | Text input with label and validation |
| Link | Styled link |
| Modal | Dialog overlay |
| Navigation | Top or side navigation |
| Pagination | Page navigation controls |
| Progress | Progress bar |
| Radio | Single choice from a group |
| Select | Dropdown selection |
| Skeleton | Loading placeholder |
| Spinner | Loading indicator |
| Switch | Toggle control |
| Table | Table with TableHead, TableBody, TableRow, TableHeader, TableCell |
| Tabs | Tabbed content (Tabs, TabPanel) |
| Textarea | Multi-line text input |
| Tooltip | Hover/popover hint |

All components are typed (TypeScript) and accept standard HTML attributes where relevant.

### Example: Button

```tsx
<Button variant="primary" size="medium" isLoading={false}>
  Save
</Button>
```

- **variant:** `'primary' | 'secondary' | 'danger' | 'outline'`
- **size:** `'small' | 'medium' | 'large'`
- **isLoading:** `boolean`

### Example: Input

```tsx
<Input
  label="Email"
  placeholder="you@example.com"
  error="Invalid email"
  helperText="We never share your email."
/>
```

### Example: Table

```tsx
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from '@cloudvisionapps/react-ui';

<Table>
  <TableHead>
    <TableRow>
      <TableHeader>Name</TableHeader>
      <TableHeader>Status</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Alice</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Type check
npm run type-check

# Run component preview (dev server)
npm run preview:dev
```

The preview app runs at `http://localhost:3000` so you can try all components and variants.

**Watch mode (rebuild on change):**

```bash
npm run dev
```

**Preview production build:**

```bash
npm run build && npm run preview
```

## Using the library in another project (local)

From this repo:

```bash
npm link
```

From your app:

```bash
npm link @cloudvisionapps/react-ui
```

## Publishing

Releases are now set up for GitHub Packages and GitHub Releases.

### Automatic release

Run one of these commands locally:

```bash
npm run release:patch
npm run release:minor
npm run release:major
```

Each command will:

1. bump the version in the package manifest,
2. create a Git tag like v2.0.1,
3. push the tag to GitHub,
4. trigger the workflow that builds the library, publishes it to GitHub Packages, and creates a GitHub Release.

### Manual publish

If you want to publish manually, authenticate with a token that has package permissions and then run:

```bash
export NODE_AUTH_TOKEN=YOUR_GITHUB_TOKEN
npm run build
npm publish
```

## License

MIT
