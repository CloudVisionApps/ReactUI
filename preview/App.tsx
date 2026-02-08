import React, { useState, useEffect, useRef } from 'react';
import { Button, Input, Card, Select, Checkbox, Radio, Textarea, Navigation, Hero, Footer, Modal, Badge, Avatar, Tabs, TabPanel, Accordion, Alert, Tooltip } from '../src';
import { Sidebar } from './components/Sidebar';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('navigation');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [alertVisible, setAlertVisible] = useState(true);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section-id');
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = sectionRefs.current[sectionId];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  const renderSection = (sectionId: string) => {
    switch (sectionId) {
      case 'navigation':
        return (
          <div className="space-y-8" data-section-id="navigation" ref={(el) => (sectionRefs.current['navigation'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Navigation</h1>
              <p className="text-gray-600">Navigation bar component with macOS-inspired styling.</p>
            </div>

            <Card title="Default Navigation" variant="elevated">
              <div className="space-y-4">
                <Navigation
                  logo={<span className="text-lg font-semibold text-[#1D1D1F]">React UI</span>}
                  items={[
                    { label: 'Home', href: '#', active: true },
                    { label: 'Components', href: '#' },
                    { label: 'Documentation', href: '#' },
                    { label: 'About', href: '#' },
                  ]}
                  variant="default"
                />
              </div>
            </Card>

            <Card title="Transparent Navigation" variant="elevated">
              <div className="space-y-4">
                <Navigation
                  logo={<span className="text-lg font-semibold text-[#1D1D1F]">React UI</span>}
                  items={[
                    { label: 'Home', href: '#' },
                    { label: 'Products', href: '#' },
                    { label: 'Services', href: '#' },
                    { label: 'Contact', href: '#', active: true },
                  ]}
                  variant="transparent"
                />
              </div>
            </Card>

            <Card title="Solid Navigation" variant="elevated">
              <div className="space-y-4">
                <Navigation
                  logo={<span className="text-lg font-semibold text-[#1D1D1F]">React UI</span>}
                  items={[
                    { label: 'Dashboard', href: '#' },
                    { label: 'Settings', href: '#' },
                    { label: 'Profile', href: '#', active: true },
                  ]}
                  variant="solid"
                />
              </div>
            </Card>
          </div>
        );

      case 'hero':
        return (
          <div className="space-y-8" data-section-id="hero" ref={(el) => (sectionRefs.current['hero'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Hero Sections</h1>
              <p className="text-gray-600">Hero section components for landing pages and marketing.</p>
            </div>

            <Card title="Default Hero" variant="elevated">
              <div className="overflow-hidden rounded-lg">
                <Hero
                  title="Build Beautiful UIs"
                  subtitle="React Component Library"
                  description="Create stunning user interfaces with our macOS-inspired component library. Clean, modern, and accessible."
                  primaryAction={{
                    label: 'Get Started',
                    onClick: () => console.log('Get Started clicked'),
                  }}
                  secondaryAction={{
                    label: 'Learn More',
                    onClick: () => console.log('Learn More clicked'),
                  }}
                />
              </div>
            </Card>

            <Card title="Centered Hero" variant="elevated">
              <div className="overflow-hidden rounded-lg">
                <Hero
                  variant="centered"
                  title="Welcome to React UI"
                  description="A comprehensive component library designed with macOS aesthetics in mind. Build faster, design better."
                  primaryAction={{
                    label: 'Start Building',
                    onClick: () => console.log('Start Building clicked'),
                  }}
                />
              </div>
            </Card>

            <Card title="Split Hero" variant="elevated">
              <div className="overflow-hidden rounded-lg">
                <Hero
                  variant="split"
                  title="Modern Design System"
                  subtitle="macOS Inspired"
                  description="Every component is carefully crafted to match the macOS design language. Clean, minimal, and beautiful."
                  primaryAction={{
                    label: 'Explore Components',
                    onClick: () => console.log('Explore clicked'),
                  }}
                  secondaryAction={{
                    label: 'View Docs',
                    onClick: () => console.log('Docs clicked'),
                  }}
                />
              </div>
            </Card>
          </div>
        );

      case 'footer':
        return (
          <div className="space-y-8" data-section-id="footer" ref={(el) => (sectionRefs.current['footer'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Footer</h1>
              <p className="text-gray-600">Footer component with links and social media integration.</p>
            </div>

            <Card title="Default Footer" variant="elevated">
              <div className="overflow-hidden rounded-lg">
                <Footer
                  columns={[
                    {
                      title: 'Product',
                      links: [
                        { label: 'Features', href: '#' },
                        { label: 'Pricing', href: '#' },
                        { label: 'Documentation', href: '#' },
                        { label: 'Changelog', href: '#' },
                      ],
                    },
                    {
                      title: 'Company',
                      links: [
                        { label: 'About', href: '#' },
                        { label: 'Blog', href: '#' },
                        { label: 'Careers', href: '#' },
                        { label: 'Contact', href: '#' },
                      ],
                    },
                    {
                      title: 'Legal',
                      links: [
                        { label: 'Privacy', href: '#' },
                        { label: 'Terms', href: '#' },
                        { label: 'Security', href: '#' },
                      ],
                    },
                    {
                      title: 'Resources',
                      links: [
                        { label: 'Support', href: '#' },
                        { label: 'Community', href: '#' },
                        { label: 'API', href: '#' },
                      ],
                    },
                  ]}
                  socialLinks={[
                    { label: 'Twitter', href: 'https://twitter.com' },
                    { label: 'GitHub', href: 'https://github.com' },
                    { label: 'LinkedIn', href: 'https://linkedin.com' },
                  ]}
                  copyright="© 2024 React UI. All rights reserved."
                />
              </div>
            </Card>

            <Card title="Minimal Footer" variant="elevated">
              <div className="overflow-hidden rounded-lg">
                <Footer
                  variant="minimal"
                  columns={[
                    {
                      title: 'Quick Links',
                      links: [
                        { label: 'Home', href: '#' },
                        { label: 'About', href: '#' },
                        { label: 'Contact', href: '#' },
                      ],
                    },
                  ]}
                  copyright="© 2024 React UI"
                />
              </div>
            </Card>
          </div>
        );

      case 'buttons':
        return (
          <div className="space-y-8" data-section-id="buttons" ref={(el) => (sectionRefs.current['buttons'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Buttons</h1>
              <p className="text-gray-600">Interactive button components with multiple variants and states.</p>
            </div>

            <Card title="Variants" variant="elevated">
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="gradient">Gradient</Button>
              </div>
            </Card>

            <Card title="Sizes" variant="elevated">
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
              </div>
            </Card>

            <Card title="States" variant="elevated">
              <div className="flex flex-wrap gap-4 items-center">
                <Button isLoading={isLoading} onClick={handleButtonClick}>
                  {isLoading ? 'Loading...' : 'Click to Load'}
                </Button>
                <Button disabled>Disabled</Button>
              </div>
            </Card>

            <Card title="Interactive Examples" variant="elevated">
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary" size="large">Large Primary</Button>
                <Button variant="gradient">Gradient Magic</Button>
                <Button variant="outline" size="large">Outlined</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </Card>
          </div>
        );

      case 'inputs':
        return (
          <div className="space-y-8" data-section-id="inputs" ref={(el) => (sectionRefs.current['inputs'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Inputs</h1>
              <p className="text-gray-600">Text input fields with validation, helper text, and icon support.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="Basic Input" variant="elevated">
                <Input
                  label="Email Address"
                  placeholder="Enter your email"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </Card>

              <Card title="Input with Helper Text" variant="elevated">
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                  helperText="Must be at least 8 characters"
                />
              </Card>

              <Card title="Input with Error" variant="elevated">
                <Input
                  label="Username"
                  placeholder="Enter username"
                  error="Username is already taken"
                />
              </Card>

              <Card title="Disabled Input" variant="elevated">
                <Input
                  label="Disabled Field"
                  placeholder="This field is disabled"
                  disabled
                  value="Cannot edit this"
                />
              </Card>
            </div>

            <Card title="Sizes" variant="elevated">
              <div className="space-y-4">
                <Input label="Small" size="small" placeholder="Small size input" />
                <Input label="Medium" size="medium" placeholder="Medium size input" />
                <Input label="Large" size="large" placeholder="Large size input" />
              </div>
            </Card>

            <Card title="With Icons" variant="elevated">
              <div className="space-y-4">
                <Input
                  label="Search"
                  placeholder="Search..."
                  leftIcon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  }
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  rightIcon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                />
              </div>
            </Card>
          </div>
        );

      case 'selects':
        return (
          <div className="space-y-8" data-section-id="selects" ref={(el) => (sectionRefs.current['selects'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Selects</h1>
              <p className="text-gray-600">Dropdown select components with custom styling.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="Basic Select" variant="elevated">
                <Select
                  label="Choose an option"
                  options={[
                    { value: '', label: 'Select...' },
                    { value: '1', label: 'Option 1' },
                    { value: '2', label: 'Option 2' },
                    { value: '3', label: 'Option 3' },
                  ]}
                />
              </Card>

              <Card title="Select with Error" variant="elevated">
                <Select
                  label="Required Field"
                  error="This field is required"
                  options={[
                    { value: '', label: 'Select...' },
                    { value: '1', label: 'Option 1' },
                  ]}
                />
              </Card>

              <Card title="Select Sizes" variant="elevated">
                <div className="space-y-4">
                  <Select
                    label="Small"
                    size="small"
                    options={[
                      { value: '1', label: 'Small select' },
                    ]}
                  />
                  <Select
                    label="Large"
                    size="large"
                    options={[
                      { value: '1', label: 'Large select' },
                    ]}
                  />
                </div>
              </Card>

              <Card title="Disabled Select" variant="elevated">
                <Select
                  label="Disabled"
                  disabled
                  options={[
                    { value: '1', label: 'Cannot select' },
                  ]}
                />
              </Card>
            </div>
          </div>
        );

      case 'checkboxes':
        return (
          <div className="space-y-8" data-section-id="checkboxes" ref={(el) => (sectionRefs.current['checkboxes'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Checkboxes</h1>
              <p className="text-gray-600">Checkbox components with multiple sizes and states.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="Basic Checkboxes" variant="elevated">
                <div className="space-y-3">
                  <Checkbox label="Accept terms and conditions" />
                  <Checkbox label="Subscribe to newsletter" defaultChecked />
                  <Checkbox label="Enable notifications" />
                </div>
              </Card>

              <Card title="Checkbox States" variant="elevated">
                <div className="space-y-3">
                  <Checkbox label="Normal checkbox" />
                  <Checkbox label="Checked by default" defaultChecked />
                  <Checkbox label="Disabled checkbox" disabled />
                  <Checkbox label="Disabled checked" disabled defaultChecked />
                </div>
              </Card>

              <Card title="Checkbox Sizes" variant="elevated">
                <div className="space-y-3">
                  <Checkbox label="Small checkbox" size="small" />
                  <Checkbox label="Medium checkbox" size="medium" defaultChecked />
                  <Checkbox label="Large checkbox" size="large" />
                </div>
              </Card>

              <Card title="Checkbox with Error" variant="elevated">
                <Checkbox
                  label="Required checkbox"
                  error="You must accept this"
                />
              </Card>
            </div>
          </div>
        );

      case 'radios':
        return (
          <div className="space-y-8" data-section-id="radios" ref={(el) => (sectionRefs.current['radios'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Radio Buttons</h1>
              <p className="text-gray-600">Radio button components for single selection.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="Radio Group" variant="elevated">
                <div className="space-y-3">
                  <Radio name="option" label="Option 1" value="1" defaultChecked />
                  <Radio name="option" label="Option 2" value="2" />
                  <Radio name="option" label="Option 3" value="3" />
                </div>
              </Card>

              <Card title="Radio States" variant="elevated">
                <div className="space-y-3">
                  <Radio name="state" label="Normal radio" value="1" />
                  <Radio name="state" label="Selected radio" value="2" defaultChecked />
                  <Radio name="state" label="Disabled radio" value="3" disabled />
                  <Radio name="state" label="Disabled selected" value="4" disabled defaultChecked />
                </div>
              </Card>

              <Card title="Radio Sizes" variant="elevated">
                <div className="space-y-3">
                  <Radio name="size" label="Small radio" size="small" value="1" />
                  <Radio name="size" label="Medium radio" size="medium" value="2" defaultChecked />
                  <Radio name="size" label="Large radio" size="large" value="3" />
                </div>
              </Card>

              <Card title="Radio with Error" variant="elevated">
                <Radio
                  name="error"
                  label="Required selection"
                  error="Please select an option"
                  value="1"
                />
              </Card>
            </div>
          </div>
        );

      case 'textareas':
        return (
          <div className="space-y-8" data-section-id="textareas" ref={(el) => (sectionRefs.current['textareas'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Textareas</h1>
              <p className="text-gray-600">Multi-line text input components.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="Basic Textarea" variant="elevated">
                <Textarea
                  label="Message"
                  placeholder="Enter your message here..."
                  rows={4}
                />
              </Card>

              <Card title="Textarea with Helper Text" variant="elevated">
                <Textarea
                  label="Description"
                  placeholder="Describe something..."
                  helperText="Maximum 500 characters"
                  rows={5}
                />
              </Card>

              <Card title="Textarea with Error" variant="elevated">
                <Textarea
                  label="Comments"
                  placeholder="Your comments..."
                  error="This field is required"
                  rows={4}
                />
              </Card>

              <Card title="Textarea Sizes" variant="elevated">
                <div className="space-y-4">
                  <Textarea
                    label="Small"
                    size="small"
                    rows={3}
                    placeholder="Small textarea"
                  />
                  <Textarea
                    label="Large"
                    size="large"
                    rows={3}
                    placeholder="Large textarea"
                  />
                </div>
              </Card>
            </div>
          </div>
        );

      case 'cards':
        return (
          <div className="space-y-8" data-section-id="cards" ref={(el) => (sectionRefs.current['cards'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Cards</h1>
              <p className="text-gray-600">Container components with header, body, and footer sections.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card title="Default Card" variant="default">
                This is a card with the default variant. It has a subtle shadow and clean design.
              </Card>

              <Card title="Elevated Card" variant="elevated">
                This card uses the elevated variant with a stronger shadow for more depth and prominence.
              </Card>

              <Card title="Outlined Card" variant="outlined">
                This card uses the outlined variant with a visible border for a more defined look.
              </Card>

              <Card title="Hoverable Card" hoverable>
                Hover over this card to see the smooth elevation effect. Perfect for interactive content.
              </Card>

              <Card title="Card with Footer" footer={<Button>Action</Button>}>
                This card has both a title and a footer with an action button.
              </Card>

              <Card hoverable>
                This is a simple hoverable card without a title or footer. Just the content with hover effects.
              </Card>
            </div>
          </div>
        );

      case 'badges':
        return (
          <div className="space-y-8" data-section-id="badges" ref={(el) => (sectionRefs.current['badges'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Badges</h1>
              <p className="text-gray-600">Badge components for labels, status indicators, and notifications.</p>
            </div>

            <Card title="Variants" variant="elevated">
              <div className="flex flex-wrap gap-4 items-center">
                <Badge variant="default">Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge> 
                <Badge variant="info">Info</Badge>
              </div>
            </Card>

            <Card title="Sizes" variant="elevated">
              <div className="flex flex-wrap gap-4 items-center">
                <Badge size="small">Small</Badge>
                <Badge size="medium">Medium</Badge>
                <Badge size="large">Large</Badge>
              </div>
            </Card>
          </div>
        );

      case 'avatars':
        return (
          <div className="space-y-8" data-section-id="avatars" ref={(el) => (sectionRefs.current['avatars'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Avatars</h1>
              <p className="text-gray-600">Avatar components for user profiles and images.</p>
            </div>

            <Card title="Sizes" variant="elevated">
              <div className="flex flex-wrap gap-4 items-center">
                <Avatar name="John Doe" size="small" />
                <Avatar name="Jane Smith" size="medium" />
                <Avatar name="Bob Johnson" size="large" />
                <Avatar name="Alice Brown" size="xlarge" />
              </div>
            </Card>

            <Card title="With Status" variant="elevated">
              <div className="flex flex-wrap gap-4 items-center">
                <Avatar name="Online User" status="online" />
                <Avatar name="Offline User" status="offline" />
                <Avatar name="Away User" status="away" />
                <Avatar name="Busy User" status="busy" />
              </div>
            </Card>
          </div>
        );

      case 'alerts':
        return (
          <div className="space-y-8" data-section-id="alerts" ref={(el) => (sectionRefs.current['alerts'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Alerts</h1>
              <p className="text-gray-600">Alert components for notifications and messages.</p>
            </div>

            <Card title="Variants" variant="elevated">
              <div className="space-y-4">
                <Alert variant="info" title="Information">
                  This is an informational alert message.
                </Alert>
                <Alert variant="success" title="Success">
                  Your action was completed successfully!
                </Alert>
                <Alert variant="warning" title="Warning">
                  Please review this important information.
                </Alert>
                <Alert variant="danger" title="Error">
                  Something went wrong. Please try again.
                </Alert>
              </div>
            </Card>

            <Card title="Dismissible" variant="elevated">
              {alertVisible && (
                <Alert variant="info" onClose={() => setAlertVisible(false)}>
                  This alert can be dismissed by clicking the close button.
                </Alert>
              )}
            </Card>
          </div>
        );

      case 'modals':
        return (
          <div className="space-y-8" data-section-id="modals" ref={(el) => (sectionRefs.current['modals'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Modals</h1>
              <p className="text-gray-600">Modal dialog components for overlays and confirmations.</p>
            </div>

            <Card title="Modal Examples" variant="elevated">
              <div className="space-y-4">
                <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
                <Modal
                  isOpen={modalOpen}
                  onClose={() => setModalOpen(false)}
                  title="Example Modal"
                  footer={
                    <>
                      <Button variant="outline" onClick={() => setModalOpen(false)}>Cancel</Button>
                      <Button variant="primary" onClick={() => setModalOpen(false)}>Confirm</Button>
                    </>
                  }
                >
                  <p className="text-[#86868B] text-[13px]">
                    This is an example modal dialog. You can add any content here.
                  </p>
                </Modal>
              </div>
            </Card>
          </div>
        );

      case 'tabs':
        return (
          <div className="space-y-8" data-section-id="tabs" ref={(el) => (sectionRefs.current['tabs'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Tabs</h1>
              <p className="text-gray-600">Tab components for organizing content into sections.</p>
            </div>

            <Card title="Default Tabs" variant="elevated">
              <Tabs
                items={[
                  { label: 'Overview', value: 'overview' },
                  { label: 'Settings', value: 'settings' },
                  { label: 'Profile', value: 'profile' },
                ]}
                defaultValue="overview"
              >
                <TabPanel value="overview">
                  <p className="text-[#86868B] text-[13px]">This is the overview tab content.</p>
                </TabPanel>
                <TabPanel value="settings">
                  <p className="text-[#86868B] text-[13px]">This is the settings tab content.</p>
                </TabPanel>
                <TabPanel value="profile">
                  <p className="text-[#86868B] text-[13px]">This is the profile tab content.</p>
                </TabPanel>
              </Tabs>
            </Card>

            <Card title="Pills Variant" variant="elevated">
              <Tabs
                variant="pills"
                items={[
                  { label: 'Home', value: 'home' },
                  { label: 'About', value: 'about' },
                  { label: 'Contact', value: 'contact' },
                ]}
                defaultValue="home"
              >
                <TabPanel value="home">
                  <p className="text-[#86868B] text-[13px]">Home content here.</p>
                </TabPanel>
                <TabPanel value="about">
                  <p className="text-[#86868B] text-[13px]">About content here.</p>
                </TabPanel>
                <TabPanel value="contact">
                  <p className="text-[#86868B] text-[13px]">Contact content here.</p>
                </TabPanel>
              </Tabs>
            </Card>
          </div>
        );

      case 'accordions':
        return (
          <div className="space-y-8" data-section-id="accordions" ref={(el) => (sectionRefs.current['accordions'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Accordions</h1>
              <p className="text-gray-600">Accordion components for collapsible content sections.</p>
            </div>

            <Card title="Single Open" variant="elevated">
              <Accordion
                items={[
                  {
                    title: 'What is React UI?',
                    value: '1',
                    content: 'React UI is a comprehensive component library designed with macOS aesthetics in mind.',
                  },
                  {
                    title: 'How do I install it?',
                    value: '2',
                    content: 'You can install React UI using npm or yarn package managers.',
                  },
                  {
                    title: 'Is it free to use?',
                    value: '3',
                    content: 'Yes, React UI is completely free and open source.',
                  },
                ]}
              />
            </Card>

            <Card title="Multiple Open" variant="elevated">
              <Accordion
                allowMultiple
                items={[
                  {
                    title: 'Feature 1',
                    value: '1',
                    content: 'This is the first feature description.',
                  },
                  {
                    title: 'Feature 2',
                    value: '2',
                    content: 'This is the second feature description.',
                  },
                  {
                    title: 'Feature 3',
                    value: '3',
                    content: 'This is the third feature description.',
                  },
                ]}
              />
            </Card>
          </div>
        );

      case 'tooltips':
        return (
          <div className="space-y-8" data-section-id="tooltips" ref={(el) => (sectionRefs.current['tooltips'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Tooltips</h1>
              <p className="text-gray-600">Tooltip components for additional information on hover.</p>
            </div>

            <Card title="Tooltip Examples" variant="elevated">
              <div className="flex flex-wrap gap-4 items-center">
                <Tooltip content="This is a tooltip on top" position="top">
                  <Button>Hover me (Top)</Button>
                </Tooltip>
                <Tooltip content="This is a tooltip on bottom" position="bottom">
                  <Button>Hover me (Bottom)</Button>
                </Tooltip>
                <Tooltip content="This is a tooltip on left" position="left">
                  <Button>Hover me (Left)</Button>
                </Tooltip>
                <Tooltip content="This is a tooltip on right" position="right">
                  <Button>Hover me (Right)</Button>
                </Tooltip>
              </div>
            </Card>
          </div>
        );

      case 'examples':
        return (
          <div className="space-y-8" data-section-id="examples" ref={(el) => (sectionRefs.current['examples'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Examples</h1>
              <p className="text-gray-600">Real-world examples combining multiple components.</p>
            </div>

            <Card
              title="Contact Form"
              variant="elevated"
              footer={
                <div className="flex gap-2 justify-end">
                  <Button variant="outline">Cancel</Button>
                  <Button variant="primary">Submit</Button>
                </div>
              }
            >
              <div className="flex flex-col gap-4">
                <Input
                  label="Name"
                  placeholder="Your name"
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                />
                <Select
                  label="Subject"
                  options={[
                    { value: '', label: 'Select a subject...' },
                    { value: 'support', label: 'Support' },
                    { value: 'sales', label: 'Sales' },
                    { value: 'other', label: 'Other' },
                  ]}
                />
                <Textarea
                  label="Message"
                  placeholder="Your message..."
                  rows={5}
                />
                <Checkbox
                  label="I agree to the terms and conditions"
                />
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">
                    Preferred Contact Method
                  </label>
                  <div className="space-y-2">
                    <Radio name="contact" label="Email" value="email" defaultChecked />
                    <Radio name="contact" label="Phone" value="phone" />
                    <Radio name="contact" label="SMS" value="sms" />
                  </div>
                </div>
              </div>
            </Card>

            <Card
              title="Login Form"
              variant="elevated"
              footer={
                <div className="flex gap-2 justify-end">
                  <Button variant="outline">Cancel</Button>
                  <Button variant="primary">Login</Button>
                </div>
              }
            >
              <div className="flex flex-col gap-4">
                <Input
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                />
                <Checkbox
                  label="Remember me"
                />
              </div>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  const sections = ['navigation', 'hero', 'buttons', 'badges', 'avatars', 'alerts', 'modals', 'tabs', 'accordions', 'tooltips', 'inputs', 'selects', 'checkboxes', 'radios', 'textareas', 'cards', 'footer', 'examples'];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeSection={activeSection} onSectionChange={scrollToSection} />
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {sections.map((sectionId) => (
            <div key={sectionId}>
              {renderSection(sectionId)}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
