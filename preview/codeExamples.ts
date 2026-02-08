/**
 * Code snippets for the preview app.
 *
 * How to add a new example:
 * 1. Add a key and code string here, e.g. sectionName: { exampleName: `...code...` }
 * 2. In App.tsx wrap the live demo: <ExampleWithCode title="..." code={codeExamples.sectionName.exampleName}>...</ExampleWithCode>
 * 3. Users can "Show code" and "Copy" from the preview.
 */
export const codeExamples = {
  buttons: {
    variants: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="gradient">Gradient</Button>`,
    sizes: `<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`,
    states: `<Button isLoading={isLoading} onClick={handleClick}>
  {isLoading ? 'Loading...' : 'Click to Load'}
</Button>
<Button disabled>Disabled</Button>`,
    interactive: `<Button variant="primary" size="large">Large Primary</Button>
<Button variant="gradient">Gradient Magic</Button>
<Button variant="outline" size="large">Outlined</Button>
<Button variant="ghost">Ghost Button</Button>`,
  },
  inputs: {
    basic: `<Input
  label="Email Address"
  placeholder="Enter your email"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`,
    withHelperText: `<Input
  label="Password"
  type="password"
  placeholder="Enter password"
  helperText="Must be at least 8 characters"
/>`,
    withError: `<Input
  label="Username"
  placeholder="Enter username"
  error="Username is already taken"
/>`,
    disabled: `<Input
  label="Disabled Field"
  placeholder="This field is disabled"
  disabled
  value="Cannot edit this"
/>`,
  },
  cards: {
    default: `<Card title="Card Title" variant="default">
  Card content goes here.
</Card>`,
    withFooter: `<Card title="Card Title" footer={<Button>Action</Button>}>
  Card content.
</Card>`,
  },
  badges: {
    variants: `<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="info">Info</Badge>`,
    sizes: `<Badge size="small">Small</Badge>
<Badge size="medium">Medium</Badge>
<Badge size="large">Large</Badge>`,
  },
  alerts: {
    info: `<Alert variant="info" title="Information">
  This is an informational message.
</Alert>`,
    success: `<Alert variant="success" title="Success">
  Your action was completed successfully!
</Alert>`,
  },
  tabs: {
    default: `<Tabs
  items={[
    { label: 'Overview', value: 'overview' },
    { label: 'Settings', value: 'settings' },
  ]}
  defaultValue="overview"
>
  <TabPanel value="overview">Overview content</TabPanel>
  <TabPanel value="settings">Settings content</TabPanel>
</Tabs>`,
  },
} as const;

export type CodeExampleKey = keyof typeof codeExamples;
