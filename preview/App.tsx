import React, { useState, useEffect, useRef } from 'react';
import { Button, Input, Card, Select, Checkbox, Radio, Textarea, Navigation, Hero, Footer, Modal, Badge, Avatar, Tabs, TabPanel, Accordion, Alert, Tooltip } from '../src';
import { Sidebar } from './components/Sidebar';
import { RightSidebar } from './components/RightSidebar';
import { ExampleWithCode } from './components/ExampleWithCode';
import { Section } from './components/Section';
import { examples } from './examples';
import { useTheme } from './useTheme';
import { useThemeConfig } from './useThemeConfig';

function App() {
  const [activeSection, setActiveSection] = useState('navigation');
  const [theme, setTheme] = useTheme();
  const [themeConfig, setThemeConfig, resetThemeConfig] = useThemeConfig();
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

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
          <Section sectionId="navigation" ref={(el) => (sectionRefs.current['navigation'] = el)}>
            <ExampleWithCode title="Default Navigation" code={examples.navigation.default.code}>
              <examples.navigation.default.Component />
            </ExampleWithCode>
            <ExampleWithCode title="Transparent Navigation" code={examples.navigation.transparent.code}>
              <examples.navigation.transparent.Component />
            </ExampleWithCode>
            <ExampleWithCode title="Solid Navigation" code={examples.navigation.solid.code}>
              <examples.navigation.solid.Component />
            </ExampleWithCode>
            <ExampleWithCode title="With Icons" code={examples.navigation.withIcons.code}>
              <examples.navigation.withIcons.Component />
            </ExampleWithCode>
            <ExampleWithCode title="With CTA" code={examples.navigation.withCta.code}>
              <examples.navigation.withCta.Component />
            </ExampleWithCode>
            <ExampleWithCode title="Sticky" code={examples.navigation.sticky.code}>
              <examples.navigation.sticky.Component />
            </ExampleWithCode>
            <ExampleWithCode title="With User Menu" code={examples.navigation.withUserMenu.code}>
              <examples.navigation.withUserMenu.Component />
            </ExampleWithCode>
          </Section>
        );

      case 'hero':
        return (
          <Section sectionId="hero" ref={(el) => (sectionRefs.current['hero'] = el)}>
            <ExampleWithCode title="Default Hero" code={examples.hero.default.code}>
              <examples.hero.default.Component />
            </ExampleWithCode>
            <ExampleWithCode title="Centered Hero" code={examples.hero.centered.code}>
              <examples.hero.centered.Component />
            </ExampleWithCode>
            <ExampleWithCode title="Split Hero" code={examples.hero.split.code}>
              <examples.hero.split.Component />
            </ExampleWithCode>
          </Section>
        );

      case 'footer':
        return (
          <Section sectionId="footer" ref={(el) => (sectionRefs.current['footer'] = el)}>
            <ExampleWithCode title="Default Footer" code={examples.footer.default.code}>
              <examples.footer.default.Component />
            </ExampleWithCode>
            <ExampleWithCode title="Minimal Footer" code={examples.footer.minimal.code}>
              <examples.footer.minimal.Component />
            </ExampleWithCode>
          </Section>
        );

      case 'buttons':
        return (
          <Section sectionId="buttons" ref={(el) => (sectionRefs.current['buttons'] = el)}>
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
          </Section>
        );

      case 'inputs':
        return (
          <Section sectionId="inputs" ref={(el) => (sectionRefs.current['inputs'] = el)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </Section>
        );

      case 'selects':
        return (
          <Section sectionId="selects" ref={(el) => (sectionRefs.current['selects'] = el)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </Section>
        );

      case 'checkboxes':
        return (
          <Section sectionId="checkboxes" ref={(el) => (sectionRefs.current['checkboxes'] = el)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </Section>
        );

      case 'radios':
        return (
          <Section sectionId="radios" ref={(el) => (sectionRefs.current['radios'] = el)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </Section>
        );

      case 'textareas':
        return (
          <Section sectionId="textareas" ref={(el) => (sectionRefs.current['textareas'] = el)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </Section>
        );

      case 'cards':
        return (
          <Section sectionId="cards" ref={(el) => (sectionRefs.current['cards'] = el)}>
            <div>
              <h2 className="text-xl font-semibold text-fg mb-4">Variants</h2>
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
              <h2 className="text-xl font-semibold text-fg mb-4">Stats Cards</h2>
              <p className="text-fg-muted mb-4">Show key metrics at a glance. Ideal for dashboards and reports.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card variant="elevated" className="border-l-4 border-l-[#6366F1]">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[13px] font-medium text-fg-muted uppercase tracking-wide">Revenue</p>
                      <p className="text-2xl font-bold text-fg mt-1">$24,891</p>
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
                      <p className="text-[13px] font-medium text-fg-muted uppercase tracking-wide">Users</p>
                      <p className="text-2xl font-bold text-fg mt-1">8,492</p>
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
                      <p className="text-[13px] font-medium text-fg-muted uppercase tracking-wide">Orders</p>
                      <p className="text-2xl font-bold text-fg mt-1">1,284</p>
                      <p className="text-[12px] text-fg-muted font-medium mt-1">No change</p>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                    </div>
                  </div>
                </Card>
                <Card variant="elevated" className="border-l-4 border-l-[#EF4444]">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[13px] font-medium text-fg-muted uppercase tracking-wide">Bounce rate</p>
                      <p className="text-2xl font-bold text-fg mt-1">42%</p>
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
              <h2 className="text-xl font-semibold text-fg mb-4">Feature Cards (with Icons)</h2>
              <p className="text-fg-muted mb-4">Highlight product features or steps with an icon, title, and short description.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card variant="elevated" hoverable>
                  <div className="w-12 h-12 rounded-ui-lg bg-[#6366F1]/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="text-[15px] font-semibold text-fg mb-2">Fast & lightweight</h3>
                  <p className="text-[13px] text-fg-muted leading-relaxed">Components are tree-shakeable and optimized so your bundle stays small and your app loads quickly.</p>
                </Card>
                <Card variant="elevated" hoverable>
                  <div className="w-12 h-12 rounded-ui-lg bg-[#10B981]/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <h3 className="text-[15px] font-semibold text-fg mb-2">Accessible by default</h3>
                  <p className="text-[13px] text-fg-muted leading-relaxed">Focus management, ARIA attributes, and keyboard navigation built in so everyone can use your UI.</p>
                </Card>
                <Card variant="elevated" hoverable>
                  <div className="w-12 h-12 rounded-ui-lg bg-[#F59E0B]/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                  </div>
                  <h3 className="text-[15px] font-semibold text-fg mb-2">Easy to customize</h3>
                  <p className="text-[13px] text-fg-muted leading-relaxed">Design tokens for colors, radius, and shadow. Override with Tailwind or your own theme.</p>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-fg mb-4">App / Product Cards</h2>
              <p className="text-fg-muted mb-4">Use for app listings, integrations, or product tiles. Clear icon, name, description, and CTA.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card variant="elevated" hoverable footer={<Button variant="ghost" size="small">Open app</Button>}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#6366F1] to-indigo-600 flex items-center justify-center text-white font-bold text-lg">R</div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-fg">Reports</h3>
                      <p className="text-[12px] text-fg-muted">Analytics & insights</p>
                    </div>
                  </div>
                  <p className="text-[13px] text-fg-muted">View dashboards, export CSV, and schedule reports for your team.</p>
                </Card>
                <Card variant="elevated" hoverable footer={<Button variant="ghost" size="small">Configure</Button>}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#10B981] to-emerald-600 flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-fg">Settings</h3>
                      <p className="text-[12px] text-fg-muted">Account & preferences</p>
                    </div>
                  </div>
                  <p className="text-[13px] text-fg-muted">Manage profile, security, notifications, and billing in one place.</p>
                </Card>
                <Card variant="elevated" hoverable footer={<Button variant="ghost" size="small">View docs</Button>}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F59E0B] to-amber-600 flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-fg">Documentation</h3>
                      <p className="text-[12px] text-fg-muted">Guides & API reference</p>
                    </div>
                  </div>
                  <p className="text-[13px] text-fg-muted">Get started, integrate APIs, and find code samples for every component.</p>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-fg mb-4">Benefit Cards</h2>
              <p className="text-fg-muted mb-4">Explain why your product or UI library helps. Clear headline + short benefit for end users.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card variant="outlined" className="text-center">
                  <div className="w-14 h-14 rounded-full bg-[#6366F1]/10 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                  </div>
                  <h3 className="text-[15px] font-semibold text-fg mb-2">Ship faster</h3>
                  <p className="text-[13px] text-fg-muted">Pre-built, accessible components mean less custom code and quicker launches. Focus on your product, not reinventing buttons and forms.</p>
                </Card>
                <Card variant="outlined" className="text-center">
                  <div className="w-14 h-14 rounded-full bg-[#10B981]/10 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-[15px] font-semibold text-fg mb-2">Consistent UX</h3>
                  <p className="text-[13px] text-fg-muted">One design system across your app. Users learn once and feel at home in every screen—fewer support tickets and higher satisfaction.</p>
                </Card>
                <Card variant="outlined" className="text-center">
                  <div className="w-14 h-14 rounded-full bg-[#F59E0B]/10 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                  </div>
                  <h3 className="text-[15px] font-semibold text-fg mb-2">Your brand, your rules</h3>
                  <p className="text-[13px] text-fg-muted">Tokens for colors, typography, and radius. Tweak once and the whole UI updates—no hunting through component files.</p>
                </Card>
                <Card variant="outlined" className="text-center">
                  <div className="w-14 h-14 rounded-full bg-[#EF4444]/10 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <h3 className="text-[15px] font-semibold text-fg mb-2">Accessible for everyone</h3>
                  <p className="text-[13px] text-fg-muted">Focus states, ARIA, and keyboard nav built in. Meet WCAG without extra work and include more users from day one.</p>
                </Card>
              </div>
            </div>
          </Section>
        );

      case 'badges':
        return (
          <Section sectionId="badges" ref={(el) => (sectionRefs.current['badges'] = el)}>
            <ExampleWithCode title="Variants" code={examples.badges.variants.code}>
              <examples.badges.variants.Component />
            </ExampleWithCode>
            <ExampleWithCode title="Sizes" code={examples.badges.sizes.code}>
              <examples.badges.sizes.Component />
            </ExampleWithCode>
          </Section>
        );

      case 'avatars':
        return (
          <Section sectionId="avatars" ref={(el) => (sectionRefs.current['avatars'] = el)}>
            <ExampleWithCode title="Sizes" code={examples.avatars.sizes.code}>
              <examples.avatars.sizes.Component />
            </ExampleWithCode>
            <ExampleWithCode title="With Status" code={examples.avatars.withStatus.code}>
              <examples.avatars.withStatus.Component />
            </ExampleWithCode>
          </Section>
        );

      case 'alerts':
        return (
          <Section sectionId="alerts" ref={(el) => (sectionRefs.current['alerts'] = el)}>
            <ExampleWithCode title="Variants" code={examples.alerts.variants.code}>
              <examples.alerts.variants.Component />
            </ExampleWithCode>
            <ExampleWithCode title="Dismissible" code={examples.alerts.dismissible.code}>
              <examples.alerts.dismissible.Component />
            </ExampleWithCode>
          </Section>
        );

      case 'modals':
        return (
          <Section sectionId="modals" ref={(el) => (sectionRefs.current['modals'] = el)}>
            <ExampleWithCode title="Modal Examples" code={examples.modals.basic.code}>
              <examples.modals.basic.Component />
            </ExampleWithCode>
          </Section>
        );

      case 'tabs':
        return (
          <Section sectionId="tabs" ref={(el) => (sectionRefs.current['tabs'] = el)}>
            <ExampleWithCode title="Default Tabs" code={examples.tabs.default.code}>
              <examples.tabs.default.Component />
            </ExampleWithCode>
            <ExampleWithCode title="Pills Variant" code={examples.tabs.pills.code}>
              <examples.tabs.pills.Component />
            </ExampleWithCode>
          </Section>
        );

      case 'accordions':
        return (
          <Section sectionId="accordions" ref={(el) => (sectionRefs.current['accordions'] = el)}>
            <ExampleWithCode title="Single Open" code={examples.accordions.singleOpen.code}>
              <examples.accordions.singleOpen.Component />
            </ExampleWithCode>
            <ExampleWithCode title="Multiple Open" code={examples.accordions.multipleOpen.code}>
              <examples.accordions.multipleOpen.Component />
            </ExampleWithCode>
          </Section>
        );

      case 'tooltips':
        return (
          <Section sectionId="tooltips" ref={(el) => (sectionRefs.current['tooltips'] = el)}>
            <ExampleWithCode title="Tooltip Examples" code={examples.tooltips.positions.code}>
              <examples.tooltips.positions.Component />
            </ExampleWithCode>
          </Section>
        );

      case 'breadcrumbs':
        return (
          <Section sectionId="breadcrumbs" ref={(el) => (sectionRefs.current['breadcrumbs'] = el)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ExampleWithCode title="Default" code={examples.breadcrumbs.default.code}>
                <examples.breadcrumbs.default.Component />
              </ExampleWithCode>
              <ExampleWithCode title="Custom Separator" code={examples.breadcrumbs.withSeparator.code}>
                <examples.breadcrumbs.withSeparator.Component />
              </ExampleWithCode>
            </div>
          </Section>
        );

      case 'spinners':
        return (
          <Section sectionId="spinners" ref={(el) => (sectionRefs.current['spinners'] = el)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ExampleWithCode title="Default" code={examples.spinners.default.code}>
                <examples.spinners.default.Component />
              </ExampleWithCode>
              <ExampleWithCode title="Sizes" code={examples.spinners.sizes.code}>
                <examples.spinners.sizes.Component />
              </ExampleWithCode>
            </div>
          </Section>
        );

      case 'progress':
        return (
          <Section sectionId="progress" ref={(el) => (sectionRefs.current['progress'] = el)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ExampleWithCode title="Default" code={examples.progress.default.code}>
                <examples.progress.default.Component />
              </ExampleWithCode>
              <ExampleWithCode title="Variants" code={examples.progress.variants.code}>
                <examples.progress.variants.Component />
              </ExampleWithCode>
              <ExampleWithCode title="With Label" code={examples.progress.withLabel.code}>
                <examples.progress.withLabel.Component />
              </ExampleWithCode>
            </div>
          </Section>
        );

      case 'switches':
        return (
          <Section sectionId="switches" ref={(el) => (sectionRefs.current['switches'] = el)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ExampleWithCode title="Default" code={examples.switches.default.code}>
                <examples.switches.default.Component />
              </ExampleWithCode>
              <ExampleWithCode title="With Label" code={examples.switches.withLabel.code}>
                <examples.switches.withLabel.Component />
              </ExampleWithCode>
              <ExampleWithCode title="Sizes" code={examples.switches.sizes.code}>
                <examples.switches.sizes.Component />
              </ExampleWithCode>
            </div>
          </Section>
        );

      case 'dividers':
        return (
          <Section sectionId="dividers" ref={(el) => (sectionRefs.current['dividers'] = el)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ExampleWithCode title="Horizontal" code={examples.dividers.default.code}>
                <examples.dividers.default.Component />
              </ExampleWithCode>
              <ExampleWithCode title="With Label" code={examples.dividers.withLabel.code}>
                <examples.dividers.withLabel.Component />
              </ExampleWithCode>
              <ExampleWithCode title="Vertical" code={examples.dividers.vertical.code}>
                <examples.dividers.vertical.Component />
              </ExampleWithCode>
            </div>
          </Section>
        );

      case 'skeletons':
        return (
          <Section sectionId="skeletons" ref={(el) => (sectionRefs.current['skeletons'] = el)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ExampleWithCode title="Default" code={examples.skeletons.default.code}>
                <examples.skeletons.default.Component />
              </ExampleWithCode>
              <ExampleWithCode title="Card Skeleton" code={examples.skeletons.card.code}>
                <examples.skeletons.card.Component />
              </ExampleWithCode>
            </div>
          </Section>
        );

      case 'pagination':
        return (
          <Section sectionId="pagination" ref={(el) => (sectionRefs.current['pagination'] = el)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ExampleWithCode title="Default" code={examples.pagination.default.code}>
                <examples.pagination.default.Component />
              </ExampleWithCode>
              <ExampleWithCode title="Compact" code={examples.pagination.compact.code}>
                <examples.pagination.compact.Component />
              </ExampleWithCode>
            </div>
          </Section>
        );

      case 'table':
        return (
          <div className="space-y-8" data-section-id="table" ref={(el) => (sectionRefs.current['table'] = el)}>
            <div>
              <h1 className="text-4xl font-bold text-fg mb-2">Table</h1>
              <p className="text-fg-muted">Data tables with header, body, and optional striped or bordered styling.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ExampleWithCode title="Default" code={examples.table.default.code}>
                <examples.table.default.Component />
              </ExampleWithCode>
              <ExampleWithCode title="Striped" code={examples.table.striped.code}>
                <examples.table.striped.Component />
              </ExampleWithCode>
            </div>
          </div>
        );

      case 'link':
        return (
          <Section sectionId="link" ref={(el) => (sectionRefs.current['link'] = el)}>
            <ExampleWithCode title="Variants" code={examples.link.default.code}>
              <examples.link.default.Component />
            </ExampleWithCode>
          </Section>
        );

      case 'emptyState':
        return (
          <Section sectionId="emptyState" ref={(el) => (sectionRefs.current['emptyState'] = el)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ExampleWithCode title="Default" code={examples.emptyState.default.code}>
                <examples.emptyState.default.Component />
              </ExampleWithCode>
              <ExampleWithCode title="With Icon" code={examples.emptyState.withIcon.code}>
                <examples.emptyState.withIcon.Component />
              </ExampleWithCode>
            </div>
          </Section>
        );

      case 'appDesigns':
        return (
          <Section sectionId="appDesigns" ref={(el) => (sectionRefs.current['appDesigns'] = el)}>
            <ExampleWithCode title="Music Player" code={examples.appDesigns.musicPlayer.code}>
              <examples.appDesigns.musicPlayer.Component />
            </ExampleWithCode>
            <ExampleWithCode title="User Card" code={examples.appDesigns.userCard.code}>
              <examples.appDesigns.userCard.Component />
            </ExampleWithCode>
            <ExampleWithCode title="User Profile" code={examples.appDesigns.userProfile.code}>
              <examples.appDesigns.userProfile.Component />
            </ExampleWithCode>
            <ExampleWithCode title="Pricing Cards" code={examples.appDesigns.pricingCards.code}>
              <examples.appDesigns.pricingCards.Component />
            </ExampleWithCode>
          </Section>
        );

      case 'examples':
        return (
          <Section sectionId="examples" ref={(el) => (sectionRefs.current['examples'] = el)}>
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
                  <label className="text-sm font-semibold text-fg mb-2 block">
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
          </Section>
        );

      default:
        return null;
    }
  };

  const sections = ['navigation', 'hero', 'buttons', 'badges', 'avatars', 'alerts', 'modals', 'tabs', 'accordions', 'tooltips', 'breadcrumbs', 'spinners', 'progress', 'switches', 'dividers', 'skeletons', 'pagination', 'table', 'link', 'emptyState', 'appDesigns', 'inputs', 'selects', 'checkboxes', 'radios', 'textareas', 'cards', 'footer', 'examples'];

  return (
    <div className="relative min-h-screen">
      <style>{`[data-preview-content] .border { border-width: var(--ui-border-width) !important; }`}</style>
      {/* Dark background + Cartesian grid (graph-paper style) */}
      <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="absolute inset-0 bg-zinc-950 dark:bg-black" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(80, 80, 83, 0.2) 0%, transparent 70%)',
          }}
        />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          {/* Vertical lines (x = constant) */}
          {Array.from({ length: 31 }, (_, i) => {
            const x = i * 5;
            return (
              <line key={`v-${i}`} x1={x} y1="0" x2={x} y2="100" stroke="rgba(63, 63, 70, 0.05)" strokeWidth="0.1" fill="none" />
            );
          })}
          {/* Horizontal lines (y = constant) */}
          {Array.from({ length: 31 }, (_, i) => {
            const y = i * 5;
            return (
              <line key={`h-${i}`} x1="0" y1={y} x2="100" y2={y} stroke="rgba(63, 63, 70, 0.05)" strokeWidth="0.1" fill="none" />
            );
          })}
        </svg>
      </div>
      <Sidebar
        activeSection={activeSection}
        onSectionChange={scrollToSection}
      />
      <main className="relative z-10 flex-1 min-h-screen pl-64 pr-64" data-preview-content>
        <div className="min-h-screen border-l border-r border-border">
          <div className="max-w-4xl mx-auto py-14 px-8">
          {sections.map((sectionId) => (
            <div key={sectionId} className="mb-20 last:mb-14">
              {renderSection(sectionId)}
            </div>
          ))}
          </div>
        </div>
      </main>
      <RightSidebar
        theme={theme}
        onThemeChange={setTheme}
        themeConfig={themeConfig}
        onThemeConfigChange={setThemeConfig}
        onThemeConfigReset={resetThemeConfig}
      />
    </div>
  );
}

export default App;
