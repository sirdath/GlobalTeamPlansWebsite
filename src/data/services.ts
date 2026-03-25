export interface Service {
  title: string;
  description: string;
  icon: string;
  type: 'crisis' | 'counselling' | 'digital' | 'worklife' | 'community' | 'analytics';
  features: string[];
}

export const services: Service[] = [
  {
    title: '24/7 Crisis Support',
    description: 'Immediate access to qualified counsellors via phone and video in multiple languages for critical incidents and emergencies.',
    icon: 'phone',
    type: 'crisis',
    features: [
      'Crisis & critical incident support',
      'Workplace violence response',
      'Disaster management',
    ],
  },
  {
    title: 'Structured Counselling',
    description: 'Flexible counselling modalities including in-person, virtual, and telephone services for comprehensive mental health support.',
    icon: 'message-circle',
    type: 'counselling',
    features: [
      '1:1, 1:4, or 1:10 counselling services',
      'Anxiety, depression, stress management',
      'Addiction and anger management',
    ],
  },
  {
    title: 'Digital Wellbeing Platform',
    description: 'Consumer-grade app experience with self-guided CBT programmes, digital content library, and Total Wellbeing Solver.',
    icon: 'monitor',
    type: 'digital',
    features: [
      'Complete digital CBT programmes',
      'Resource library & modules',
      'Multimedia risk assessments',
    ],
  },
  {
    title: 'WorkLife Solutions',
    description: 'Comprehensive support covering legal, financial, health coaching, and family care services.',
    icon: 'briefcase',
    type: 'worklife',
    features: [
      'Legal & financial guidance',
      'Child & elder care support',
      'Nutritional counselling',
    ],
  },
  {
    title: 'OurHealth Community',
    description: 'Private, anonymous peer-to-peer forum in 30 languages with professional moderation and global reach.',
    icon: 'users',
    type: 'community',
    features: [
      'Anonymous peer support',
      'Professional moderation',
      'Global reach & advocacy',
    ],
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time insights and reporting for HR teams with utilisation tracking and ROI measurement.',
    icon: 'pie-chart',
    type: 'analytics',
    features: [
      'Utilisation & participation metrics',
      'Employee insight tracking',
      'Demographic trend analysis',
    ],
  },
];
