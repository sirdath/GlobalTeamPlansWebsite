export interface Stat {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}

export const heroStats: Stat[] = [
  { value: '180+', numericValue: 180, suffix: '+', label: 'Countries Covered' },
  { value: '35M+', numericValue: 35, suffix: 'M+', label: 'Lives Supported' },
  { value: '50+', numericValue: 50, suffix: '+', label: 'Languages' },
  { value: '24/7', numericValue: 24, suffix: '/7', label: 'Support Available' },
];

export interface ImpactStat {
  value: number;
  label: string;
}

export const impactStats: ImpactStat[] = [
  { value: 50, label: 'Reduction in poor mental health ratings' },
  { value: 38, label: 'Drop in presenteeism hours' },
  { value: 42, label: 'Increase in good mental health ratings' },
];

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export const benefits: Benefit[] = [
  {
    title: 'Global Reach, Local Expertise',
    description: 'Worldwide access to qualified counsellors in multiple languages across 180+ markets.',
    icon: 'globe',
  },
  {
    title: 'Data-Driven Insights',
    description: 'Our dashboard equips HR teams with real-time insights, enabling targeted interventions and measuring program effectiveness.',
    icon: 'bar-chart-3',
  },
  {
    title: 'Clinical Governance',
    description: 'Accreditation and global governance ensure consistent quality for multinational employers.',
    icon: 'shield-check',
  },
  {
    title: 'Enhanced Employee Experience',
    description: 'Flexible counselling modalities and peer community enhance work wellbeing and best reward outcomes.',
    icon: 'heart',
  },
  {
    title: 'Crisis Response',
    description: '24/7 crisis-response capability protects employee safety and mitigates operational disruption.',
    icon: 'alert-triangle',
  },
  {
    title: 'GDPR Compliant',
    description: 'All service delivery operated under strict confidentiality with full GDPR compliance and data protection.',
    icon: 'lock',
  },
];

export interface Accreditation {
  title: string;
  description: string;
  icon: string;
}

export const accreditations: Accreditation[] = [
  {
    title: 'Council on Accreditation',
    description: 'Rigorous clinical governance and quality standards',
    icon: 'badge-check',
  },
  {
    title: 'ISO Certification',
    description: 'Dedicated account teams and 36-month contracts',
    icon: 'building',
  },
  {
    title: 'Security & Privacy',
    description: 'Serving brokers and consulting globally',
    icon: 'shield',
  },
];
