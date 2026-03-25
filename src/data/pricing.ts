export interface PricingTier {
  name: string;
  subtitle: string;
  priceYearly: number;
  priceMonthly: string;
  currency: string;
  features: string[];
  popular: boolean;
  cta: string;
}

export const pricing: PricingTier[] = [
  {
    name: 'Global Level 1',
    subtitle: 'Core EAP Services',
    priceYearly: 10,
    priceMonthly: '0.83',
    currency: '£',
    features: [
      '5 structured counselling sessions',
      '24/7/365 helpline support',
      'Digital wellbeing tools',
      'Access to new platform services',
      'Basic reporting dashboard',
    ],
    popular: false,
    cta: 'Get Started with Level 1',
  },
  {
    name: 'Global Level 2',
    subtitle: 'Enhanced EAP Services',
    priceYearly: 17,
    priceMonthly: '1.42',
    currency: '£',
    features: [
      '5 structured counselling sessions',
      'Full digital wellbeing suite',
      'Advanced analytics & insights',
      'In-country local access',
      'OurHealth Community access',
      'Dedicated account management',
    ],
    popular: true,
    cta: 'Choose Level 2 Plan',
  },
];

export const pricingNote =
  '* Rates exclusive of VAT. Organisations above 3,000 employees receive tailored pricing with special terms.';
