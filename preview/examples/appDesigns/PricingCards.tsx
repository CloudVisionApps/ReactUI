import React from 'react';
import { Card, Button } from '../../../src';

const plans = [
  {
    name: 'Starter',
    price: '$9',
    period: '/month',
    description: 'For individuals and side projects.',
    features: ['Up to 3 projects', '1 GB storage', 'Email support', 'Basic analytics'],
    cta: 'Get started',
    variant: 'secondary' as const,
    featured: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing teams and professionals.',
    features: ['Unlimited projects', '10 GB storage', 'Priority support', 'Advanced analytics', 'API access', 'Custom domains'],
    cta: 'Start free trial',
    variant: 'primary' as const,
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    description: 'For large teams and organizations.',
    features: ['Everything in Pro', 'Unlimited storage', 'Dedicated support', 'SSO & SAML', 'Audit logs', 'SLA 99.9%'],
    cta: 'Contact sales',
    variant: 'outline' as const,
    featured: false,
  },
];

export default function PricingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
      {plans.map((plan) => (
        <Card
          key={plan.name}
          variant="elevated"
          className={plan.featured ? 'ring-2 ring-primary shadow-ui-lg relative' : ''}
        >
          {plan.featured && (
            <div className="absolute top-0 left-0 right-0 py-1.5 bg-primary text-white text-center text-[12px] font-semibold rounded-t-[11px]">
              Most popular
            </div>
          )}
          <div className={`p-6 ${plan.featured ? 'pt-10' : ''}`}>
            <h3 className="text-lg font-bold text-fg">{plan.name}</h3>
            <div className="mt-2 flex items-baseline gap-0.5">
              <span className="text-3xl font-bold text-fg">{plan.price}</span>
              <span className="text-fg-muted text-sm">{plan.period}</span>
            </div>
            <p className="text-[13px] text-fg-muted mt-2">{plan.description}</p>
            <ul className="mt-5 space-y-2.5">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-[13px] text-fg">
                  <svg className="w-4 h-4 text-success flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <Button variant={plan.variant} size="medium" className="w-full mt-6">
              {plan.cta}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
