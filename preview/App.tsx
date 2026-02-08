import React, { useState } from 'react';
import { Button, Input, Card, Select, Checkbox, Radio, Textarea } from '../src';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-8">
      <header className="text-center text-white mb-12">
        <h1 className="text-5xl font-bold mb-2">React UI Component Library</h1>
        <p className="text-xl opacity-90">Preview and test all components</p>
      </header>

      <main className="max-w-7xl mx-auto">
        <section className="mb-12">
          <h2 className="text-white text-3xl font-semibold mb-6">Button Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Button Variants">
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="gradient">Gradient</Button>
              </div>
            </Card>

            <Card title="Button Sizes">
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
              </div>
            </Card>

            <Card title="Button States">
              <div className="flex flex-wrap gap-4 items-center">
                <Button isLoading={isLoading} onClick={handleButtonClick}>
                  {isLoading ? 'Loading...' : 'Click to Load'}
                </Button>
                <Button disabled>Disabled</Button>
              </div>
            </Card>
          </div>
          
          <div className="mt-6">
            <Card title="Interactive Examples" className="bg-gradient-to-br from-white to-gray-50">
              <div className="space-y-4">
                <p className="text-sm text-gray-600 mb-4">
                  Hover over buttons to see smooth animations, shadows, and shine effects
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="primary" size="large">Large Primary</Button>
                  <Button variant="gradient">Gradient Magic</Button>
                  <Button variant="outline" size="large">Outlined</Button>
                  <Button variant="ghost">Ghost Button</Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-white text-3xl font-semibold mb-6">Input Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card title="Small Size" variant="elevated">
              <Input
                label="Small Input"
                size="small"
                placeholder="Small size input"
              />
            </Card>

            <Card title="Medium Size" variant="elevated">
              <Input
                label="Medium Input"
                size="medium"
                placeholder="Medium size input"
              />
            </Card>

            <Card title="Large Size" variant="elevated">
              <Input
                label="Large Input"
                size="large"
                placeholder="Large size input"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card title="Input with Left Icon" variant="elevated">
              <Input
                label="Search"
                placeholder="Search..."
                leftIcon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
              />
            </Card>

            <Card title="Input with Right Icon" variant="elevated">
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
            </Card>
          </div>

          <div className="mt-6">
            <Card title="Input States Showcase" variant="elevated">
              <div className="space-y-5">
                <Input
                  label="Normal State - Hover and Focus"
                  placeholder="Hover to see shadow effect, focus to see ring"
                />
                <Input
                  label="Error State"
                  placeholder="This input has an error"
                  error="This field is required"
                />
                <Input
                  label="With Helper Text"
                  placeholder="Enter your information"
                  helperText="This is helpful information about the field"
                />
                <Input
                  label="Disabled State"
                  placeholder="Cannot interact"
                  disabled
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Small with Icon"
                    size="small"
                    placeholder="Search..."
                    leftIcon={
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    }
                  />
                  <Input
                    label="Large Input"
                    size="large"
                    placeholder="Large size for emphasis"
                  />
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-white text-3xl font-semibold mb-6">Card Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <Card title="Default Card" variant="default">
              This is a card with the default variant. It has a subtle shadow and clean design.
            </Card>

            <Card title="Elevated Card" variant="elevated">
              This card uses the elevated variant with a stronger shadow for more depth and prominence.
            </Card>

            <Card title="Outlined Card" variant="outlined">
              This card uses the outlined variant with a visible border for a more defined look.
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <Card title="Hoverable Card" hoverable>
              Hover over this card to see the smooth elevation effect. Perfect for interactive content.
            </Card>

            <Card title="Card with Footer" footer={<Button>Action</Button>}>
              This card has both a title and a footer with an action button. The footer has a subtle gradient background.
            </Card>

            <Card hoverable>
              This is a simple hoverable card without a title or footer. Just the content with hover effects.
            </Card>
          </div>

          <div className="mt-6">
            <Card 
              title="Feature Showcase" 
              variant="elevated" 
              hoverable
              footer={
                <div className="flex gap-2">
                  <Button variant="outline" size="small">Learn More</Button>
                  <Button variant="primary" size="small">Get Started</Button>
                </div>
              }
            >
              <div className="space-y-3">
                <p className="text-gray-700">
                  This card demonstrates all the new features:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                  <li>Modern rounded corners (rounded-2xl)</li>
                  <li>Enhanced shadows with depth</li>
                  <li>Gradient backgrounds for header and footer</li>
                  <li>Smooth hover animations</li>
                  <li>Better typography and spacing</li>
                </ul>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-white text-3xl font-semibold mb-6">Select Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
        </section>

        <section className="mb-12">
          <h2 className="text-white text-3xl font-semibold mb-6">Checkbox Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
        </section>

        <section className="mb-12">
          <h2 className="text-white text-3xl font-semibold mb-6">Radio Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
        </section>

        <section className="mb-12">
          <h2 className="text-white text-3xl font-semibold mb-6">Textarea Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
        </section>

        <section className="mb-12">
          <h2 className="text-white text-3xl font-semibold mb-6">Combined Example</h2>
          <div className="max-w-2xl mx-auto">
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
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
