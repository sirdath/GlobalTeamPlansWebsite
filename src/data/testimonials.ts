export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Global Team Plans transformed our employee wellbeing programme. The 24/7 multilingual support has been invaluable for our international workforce.',
    name: 'Sarah Mitchell',
    title: 'Head of People & Culture',
    company: 'Fortune 500 Technology Company',
  },
  {
    quote: 'The analytics dashboard gives us real insights into programme effectiveness. We saw a measurable reduction in absenteeism within the first year.',
    name: 'James Chen',
    title: 'VP Human Resources',
    company: 'Global Financial Services Firm',
  },
  {
    quote: 'Implementation across 40+ countries was seamless. Their local expertise combined with global reach is unmatched in the industry.',
    name: 'Maria Rodriguez',
    title: 'Chief People Officer',
    company: 'International Manufacturing Group',
  },
  {
    quote: 'The digital wellbeing platform exceeded our expectations. Employee engagement with mental health resources increased by over 60%.',
    name: 'David Okafor',
    title: 'Global Benefits Director',
    company: 'Multinational Consulting Firm',
  },
];
