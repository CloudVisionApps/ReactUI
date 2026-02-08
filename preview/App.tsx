import React, { useState, useEffect, useRef } from 'react';
import { Button, Input, Card, Select, Checkbox, Radio, Textarea, Navigation, Hero, Footer, Modal, Badge, Avatar, Tabs, TabPanel, Accordion, Alert, Tooltip } from '../src';
import { Sidebar } from './components/Sidebar';
import { ExampleWithCode } from './components/ExampleWithCode';
import { examples } from './examples';
import { useTheme } from './useTheme';

function App() {
  const [activeSection, setActiveSection] = useState('navigation');
  const [theme, setTheme] = useTheme();
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Navigation</h1>
              <p className="text-gray-600 dark:text-zinc-400">Navigation bar component with macOS-inspired styling.</p>
            </div>

            <ExampleWithCode title="Default Navigation" code={examples.navigation.default.code}>
              <examples.navigation.default.Component />
            </ExampleWithCode>
            <ExampleWithCode title="Transparent Navigation" code={examples.navigation.transparent.code}>
              <examples.navigation.transparent.Component />
            </ExampleWithCode>
            <ExampleWithCode title="Solid Navigation" code={examples.navigation.solid.code}>
              <examples.navigation.solid.Component />
            </ExampleWithCode>
          </div>
        );

      case 'hero':
        return (
          <div className="space-y-8" data-section-id="hero" ref={(el) => (sectionRefs.current['hero'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Hero Sections</h1>
              <p className="text-gray-600 dark:text-zinc-400">Hero section components for landing pages and marketing.</p>
            </div>

            <ExampleWithCode title="Default Hero" code={examples.hero.default.code}>
              <examples.hero.default.Component />
            </ExampleWithCode>
            <ExampleWithCode title="Centered Hero" code={examples.hero.centered.code}>
              <examples.hero.centered.Component />
            </ExampleWithCode>
            <ExampleWithCode title="Split Hero" code={examples.hero.split.code}>
              <examples.hero.split.Component />
            </ExampleWithCode>
          </div>
        );

      case 'footer':
        return (
          <div className="space-y-8" data-section-id="footer" ref={(el) => (sectionRefs.current['footer'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Footer</h1>
              <p className="text-gray-600 dark:text-zinc-400">Footer component with links and social media integration.</p>
            </div>

            <ExampleWithCode title="Default Footer" code={examples.footer.default.code}>
              <examples.footer.default.Component />
            </ExampleWithCode>
            <ExampleWithCode title="Minimal Footer" code={examples.footer.minimal.code}>
              <examples.footer.minimal.Component />
            </ExampleWithCode>
          </div>
        );

      case 'buttons':
        return (
          <div className="space-y-8" data-section-id="buttons" ref={(el) => (sectionRefs.current['buttons'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Buttons</h1>
              <p className="text-gray-600 dark:text-zinc-400">Interactive button components with multiple variants and states.</p>
            </div>

            <div className="space-y-6">
              <ExampleWithCode title="Variants" code={examples.buttons.variants.code} defaultShowCode>
                <examples.buttons.variants.Component />
              </ExampleWithCode>
              <ExampleWithCode title="Sizes" code={examples.buttons.sizes.code}>
                <examples.buttons.sizes.Component />
              </ExampleWithCode>
              <ExampleWithCode title="States" code={examples.buttons.states.code}>
                <examples.buttons.states.Component />
              </ExampleWithCode>
              <ExampleWithCode title="Interactive Examples" code={examples.buttons.interactive.code}>
                <examples.buttons.interactive.Component />
              </ExampleWithCode>
            </div>
          </div>
        );

      case 'inputs':
        return (
          <div className="space-y-8" data-section-id="inputs" ref={(el) => (sectionRefs.current['inputs'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Inputs</h1>
              <p className="text-gray-600 dark:text-zinc-400">Text input fields with validation, helper text, and icon support.</p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ExampleWithCode title="Basic Input" code={examples.inputs.basic.code}>
                  <examples.inputs.basic.Component />
                </ExampleWithCode>
                <ExampleWithCode title="Input with Helper Text" code={examples.inputs.withHelperText.code}>
                  <examples.inputs.withHelperText.Component />
                </ExampleWithCode>
                <ExampleWithCode title="Input with Error" code={examples.inputs.withError.code}>
                  <examples.inputs.withError.Component />
                </ExampleWithCode>
                <ExampleWithCode title="Disabled Input" code={examples.inputs.disabled.code}>
                  <examples.inputs.disabled.Component />
                </ExampleWithCode>
              </div>

            <ExampleWithCode title="Sizes" code={examples.inputs.sizes.code}>
              <examples.inputs.sizes.Component />
            </ExampleWithCode>
            <ExampleWithCode title="With Icons" code={examples.inputs.withIcons.code}>
              <examples.inputs.withIcons.Component />
            </ExampleWithCode>
            </div>
          </div>
        );

      case 'selects':
        return (
          <div className="space-y-8" data-section-id="selects" ref={(el) => (sectionRefs.current['selects'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Selects</h1>
              <p className="text-gray-600 dark:text-zinc-400">Dropdown select components with custom styling.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ExampleWithCode title="Basic Select" code={examples.selects.basic.code}>
                <examples.selects.basic.Component />
              </ExampleWithCode>
              <ExampleWithCode title="Select with Error" code={examples.selects.withError.code}>
                <examples.selects.withError.Component />
              </ExampleWithCode>
              <ExampleWithCode title="Select Sizes" code={examples.selects.sizes.code}>
                <examples.selects.sizes.Component />
              </ExampleWithCode>
              <ExampleWithCode title="Disabled Select" code={examples.selects.disabled.code}>
                <examples.selects.disabled.Component />
              </ExampleWithCode>
            </div>
          </div>
        );

      case 'checkboxes':
        return (
          <div className="space-y-8" data-section-id="checkboxes" ref={(el) => (sectionRefs.current['checkboxes'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Checkboxes</h1>
              <p className="text-gray-600 dark:text-zinc-400">Checkbox components with multiple sizes and states.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ExampleWithCode title="Basic Checkboxes" code={examples.checkboxes.basic.code}>
                <examples.checkboxes.basic.Component />
              </ExampleWithCode>
              <ExampleWithCode title="Checkbox States" code={examples.checkboxes.states.code}>
                <examples.checkboxes.states.Component />
              </ExampleWithCode>
              <ExampleWithCode title="Checkbox Sizes" code={examples.checkboxes.sizes.code}>
                <examples.checkboxes.sizes.Component />
              </ExampleWithCode>
              <ExampleWithCode title="Checkbox with Error" code={examples.checkboxes.withError.code}>
                <examples.checkboxes.withError.Component />
              </ExampleWithCode>
            </div>
          </div>
        );

      case 'radios':
        return (
          <div className="space-y-8" data-section-id="radios" ref={(el) => (sectionRefs.current['radios'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Radio Buttons</h1>
              <p className="text-gray-600 dark:text-zinc-400">Radio button components for single selection.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ExampleWithCode title="Radio Group" code={examples.radios.group.code}>
                <examples.radios.group.Component />
              </ExampleWithCode>
              <ExampleWithCode title="Radio States" code={examples.radios.states.code}>
                <examples.radios.states.Component />
              </ExampleWithCode>
              <ExampleWithCode title="Radio Sizes" code={examples.radios.sizes.code}>
                <examples.radios.sizes.Component />
              </ExampleWithCode>
              <ExampleWithCode title="Radio with Error" code={examples.radios.withError.code}>
                <examples.radios.withError.Component />
              </ExampleWithCode>
            </div>
          </div>
        );

      case 'textareas':
        return (
          <div className="space-y-8" data-section-id="textareas" ref={(el) => (sectionRefs.current['textareas'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Textareas</h1>
              <p className="text-gray-600 dark:text-zinc-400">Multi-line text input components.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ExampleWithCode title="Basic Textarea" code={examples.textareas.basic.code}>
                <examples.textareas.basic.Component />
              </ExampleWithCode>
              <ExampleWithCode title="Textarea with Helper Text" code={examples.textareas.withHelperText.code}>
                <examples.textareas.withHelperText.Component />
              </ExampleWithCode>
              <ExampleWithCode title="Textarea with Error" code={examples.textareas.withError.code}>
                <examples.textareas.withError.Component />
              </ExampleWithCode>
              <ExampleWithCode title="Textarea Sizes" code={examples.textareas.sizes.code}>
                <examples.textareas.sizes.Component />
              </ExampleWithCode>
            </div>
          </div>
        );

      case 'cards':
        return (
          <div className="space-y-8" data-section-id="cards" ref={(el) => (sectionRefs.current['cards'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Cards</h1>
              <p className="text-gray-600 dark:text-zinc-400">Container components with header, body, and footer sections. Use stats, feature, app, and benefit cards to build dashboards and landing pages.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Variants</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ExampleWithCode title="Default Card" code={examples.cards.default.code}>
                  <examples.cards.default.Component />
                </ExampleWithCode>
                <ExampleWithCode title="Elevated Card" code={examples.cards.elevated.code}>
                  <examples.cards.elevated.Component />
                </ExampleWithCode>
                <ExampleWithCode title="Outlined Card" code={examples.cards.outlined.code}>
                  <examples.cards.outlined.Component />
                </ExampleWithCode>
                <ExampleWithCode title="Hoverable Card" code={examples.cards.hoverable.code}>
                  <examples.cards.hoverable.Component />
                </ExampleWithCode>
                <ExampleWithCode title="Card with Footer" code={examples.cards.withFooter.code}>
                  <examples.cards.withFooter.Component />
                </ExampleWithCode>
                <Card hoverable>
                  Simple hoverable card without title or footer.
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Stats Cards</h2>
              <p className="text-gray-600 dark:text-zinc-400 mb-4">Show key metrics at a glance. Ideal for dashboards and reports.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card variant="elevated" className="border-l-4 border-l-[#6366F1]">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[13px] font-medium text-gray-500 dark:text-zinc-400 uppercase tracking-wide">Revenue</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">$24,891</p>
                      <p className="text-[12px] text-green-600 font-medium mt-1">+12% vs last month</p>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-[#6366F1]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                  </div>
                </Card>
                <Card variant="elevated" className="border-l-4 border-l-[#10B981]">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[13px] font-medium text-gray-500 dark:text-zinc-400 uppercase tracking-wide">Users</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">8,492</p>
                      <p className="text-[12px] text-green-600 font-medium mt-1">+8% vs last month</p>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </div>
                  </div>
                </Card>
                <Card variant="elevated" className="border-l-4 border-l-[#F59E0B]">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[13px] font-medium text-gray-500 dark:text-zinc-400 uppercase tracking-wide">Orders</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">1,284</p>
                      <p className="text-[12px] text-gray-500 dark:text-zinc-400 font-medium mt-1">No change</p>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                    </div>
                  </div>
                </Card>
                <Card variant="elevated" className="border-l-4 border-l-[#EF4444]">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[13px] font-medium text-gray-500 dark:text-zinc-400 uppercase tracking-wide">Bounce rate</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">42%</p>
                      <p className="text-[12px] text-red-600 font-medium mt-1">−3% vs last month</p>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-[#EF4444]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Feature Cards (with Icons)</h2>
              <p className="text-gray-600 dark:text-zinc-400 mb-4">Highlight product features or steps with an icon, title, and short description.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card variant="elevated" hoverable>
                  <div className="w-12 h-12 rounded-ui-lg bg-[#6366F1]/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="text-[15px] font-semibold text-gray-900 dark:text-white mb-2">Fast & lightweight</h3>
                  <p className="text-[13px] text-gray-600 dark:text-zinc-400 leading-relaxed">Components are tree-shakeable and optimized so your bundle stays small and your app loads quickly.</p>
                </Card>
                <Card variant="elevated" hoverable>
                  <div className="w-12 h-12 rounded-ui-lg bg-[#10B981]/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <h3 className="text-[15px] font-semibold text-gray-900 dark:text-white mb-2">Accessible by default</h3>
                  <p className="text-[13px] text-gray-600 dark:text-zinc-400 leading-relaxed">Focus management, ARIA attributes, and keyboard navigation built in so everyone can use your UI.</p>
                </Card>
                <Card variant="elevated" hoverable>
                  <div className="w-12 h-12 rounded-ui-lg bg-[#F59E0B]/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                  </div>
                  <h3 className="text-[15px] font-semibold text-gray-900 dark:text-white mb-2">Easy to customize</h3>
                  <p className="text-[13px] text-gray-600 dark:text-zinc-400 leading-relaxed">Design tokens for colors, radius, and shadow. Override with Tailwind or your own theme.</p>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">App / Product Cards</h2>
              <p className="text-gray-600 dark:text-zinc-400 mb-4">Use for app listings, integrations, or product tiles. Clear icon, name, description, and CTA.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card variant="elevated" hoverable footer={<Button variant="ghost" size="small">Open app</Button>}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#6366F1] to-indigo-600 flex items-center justify-center text-white font-bold text-lg">R</div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-gray-900">Reports</h3>
                      <p className="text-[12px] text-gray-500 dark:text-zinc-400">Analytics & insights</p>
                    </div>
                  </div>
                  <p className="text-[13px] text-gray-600 dark:text-zinc-400">View dashboards, export CSV, and schedule reports for your team.</p>
                </Card>
                <Card variant="elevated" hoverable footer={<Button variant="ghost" size="small">Configure</Button>}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#10B981] to-emerald-600 flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-gray-900">Settings</h3>
                      <p className="text-[12px] text-gray-500 dark:text-zinc-400">Account & preferences</p>
                    </div>
                  </div>
                  <p className="text-[13px] text-gray-600 dark:text-zinc-400">Manage profile, security, notifications, and billing in one place.</p>
                </Card>
                <Card variant="elevated" hoverable footer={<Button variant="ghost" size="small">View docs</Button>}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F59E0B] to-amber-600 flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-gray-900">Documentation</h3>
                      <p className="text-[12px] text-gray-500 dark:text-zinc-400">Guides & API reference</p>
                    </div>
                  </div>
                  <p className="text-[13px] text-gray-600 dark:text-zinc-400">Get started, integrate APIs, and find code samples for every component.</p>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Benefit Cards</h2>
              <p className="text-gray-600 dark:text-zinc-400 mb-4">Explain why your product or UI library helps. Clear headline + short benefit for end users.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card variant="outlined" className="text-center">
                  <div className="w-14 h-14 rounded-full bg-[#6366F1]/10 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                  </div>
                  <h3 className="text-[15px] font-semibold text-gray-900 dark:text-white mb-2">Ship faster</h3>
                  <p className="text-[13px] text-gray-600 dark:text-zinc-400">Pre-built, accessible components mean less custom code and quicker launches. Focus on your product, not reinventing buttons and forms.</p>
                </Card>
                <Card variant="outlined" className="text-center">
                  <div className="w-14 h-14 rounded-full bg-[#10B981]/10 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-[15px] font-semibold text-gray-900 dark:text-white mb-2">Consistent UX</h3>
                  <p className="text-[13px] text-gray-600 dark:text-zinc-400">One design system across your app. Users learn once and feel at home in every screen—fewer support tickets and higher satisfaction.</p>
                </Card>
                <Card variant="outlined" className="text-center">
                  <div className="w-14 h-14 rounded-full bg-[#F59E0B]/10 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                  </div>
                  <h3 className="text-[15px] font-semibold text-gray-900 dark:text-white mb-2">Your brand, your rules</h3>
                  <p className="text-[13px] text-gray-600 dark:text-zinc-400">Tokens for colors, typography, and radius. Tweak once and the whole UI updates—no hunting through component files.</p>
                </Card>
                <Card variant="outlined" className="text-center">
                  <div className="w-14 h-14 rounded-full bg-[#EF4444]/10 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <h3 className="text-[15px] font-semibold text-gray-900 dark:text-white mb-2">Accessible for everyone</h3>
                  <p className="text-[13px] text-gray-600 dark:text-zinc-400">Focus states, ARIA, and keyboard nav built in. Meet WCAG without extra work and include more users from day one.</p>
                </Card>
              </div>
            </div>
          </div>
        );

      case 'badges':
        return (
          <div className="space-y-8" data-section-id="badges" ref={(el) => (sectionRefs.current['badges'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Badges</h1>
              <p className="text-gray-600 dark:text-zinc-400">Badge components for labels, status indicators, and notifications.</p>
            </div>

            <ExampleWithCode title="Variants" code={examples.badges.variants.code}>
              <examples.badges.variants.Component />
            </ExampleWithCode>
            <ExampleWithCode title="Sizes" code={examples.badges.sizes.code}>
              <examples.badges.sizes.Component />
            </ExampleWithCode>
          </div>
        );

      case 'avatars':
        return (
          <div className="space-y-8" data-section-id="avatars" ref={(el) => (sectionRefs.current['avatars'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Avatars</h1>
              <p className="text-gray-600 dark:text-zinc-400">Avatar components for user profiles and images.</p>
            </div>

            <ExampleWithCode title="Sizes" code={examples.avatars.sizes.code}>
              <examples.avatars.sizes.Component />
            </ExampleWithCode>
            <ExampleWithCode title="With Status" code={examples.avatars.withStatus.code}>
              <examples.avatars.withStatus.Component />
            </ExampleWithCode>
          </div>
        );

      case 'alerts':
        return (
          <div className="space-y-8" data-section-id="alerts" ref={(el) => (sectionRefs.current['alerts'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Alerts</h1>
              <p className="text-gray-600 dark:text-zinc-400">Alert components for notifications and messages.</p>
            </div>

            <ExampleWithCode title="Variants" code={examples.alerts.variants.code}>
              <examples.alerts.variants.Component />
            </ExampleWithCode>
            <ExampleWithCode title="Dismissible" code={examples.alerts.dismissible.code}>
              <examples.alerts.dismissible.Component />
            </ExampleWithCode>
          </div>
        );

      case 'modals':
        return (
          <div className="space-y-8" data-section-id="modals" ref={(el) => (sectionRefs.current['modals'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Modals</h1>
              <p className="text-gray-600 dark:text-zinc-400">Modal dialog components for overlays and confirmations.</p>
            </div>

            <ExampleWithCode title="Modal Examples" code={examples.modals.basic.code}>
              <examples.modals.basic.Component />
            </ExampleWithCode>
          </div>
        );

      case 'tabs':
        return (
          <div className="space-y-8" data-section-id="tabs" ref={(el) => (sectionRefs.current['tabs'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Tabs</h1>
              <p className="text-gray-600 dark:text-zinc-400">Tab components for organizing content into sections.</p>
            </div>

            <ExampleWithCode title="Default Tabs" code={examples.tabs.default.code}>
              <examples.tabs.default.Component />
            </ExampleWithCode>
            <ExampleWithCode title="Pills Variant" code={examples.tabs.pills.code}>
              <examples.tabs.pills.Component />
            </ExampleWithCode>
          </div>
        );

      case 'accordions':
        return (
          <div className="space-y-8" data-section-id="accordions" ref={(el) => (sectionRefs.current['accordions'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Accordions</h1>
              <p className="text-gray-600 dark:text-zinc-400">Accordion components for collapsible content sections.</p>
            </div>

            <ExampleWithCode title="Single Open" code={examples.accordions.singleOpen.code}>
              <examples.accordions.singleOpen.Component />
            </ExampleWithCode>
            <ExampleWithCode title="Multiple Open" code={examples.accordions.multipleOpen.code}>
              <examples.accordions.multipleOpen.Component />
            </ExampleWithCode>
          </div>
        );

      case 'tooltips':
        return (
          <div className="space-y-8" data-section-id="tooltips" ref={(el) => (sectionRefs.current['tooltips'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Tooltips</h1>
              <p className="text-gray-600 dark:text-zinc-400">Tooltip components for additional information on hover.</p>
            </div>

            <ExampleWithCode title="Tooltip Examples" code={examples.tooltips.positions.code}>
              <examples.tooltips.positions.Component />
            </ExampleWithCode>
          </div>
        );

      case 'examples':
        return (
          <div className="space-y-8" data-section-id="examples" ref={(el) => (sectionRefs.current['examples'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Examples</h1>
              <p className="text-gray-600 dark:text-zinc-400">Real-world examples combining multiple components.</p>
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
    <div className="flex min-h-screen bg-gray-50 dark:bg-zinc-950 transition-colors">
      <Sidebar activeSection={activeSection} onSectionChange={scrollToSection} theme={theme} onThemeChange={setTheme} />
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
