// @ts-nocheck

export const studio = {
  name: 'Grind PT Studio',
  tagline: 'Your Goals. Your Coach. Your Results.',
  address: { street: '1210 S Lamar Blvd', city: 'Austin', state: 'TX', zip: '78704' },
  phone: '(512) 555-0347',
  email: 'hello@grindptstudio.com',
  hours: {
    'Mon – Fri': '6:00 AM – 9:00 PM',
    'Saturday': '7:00 AM – 5:00 PM',
    'Sunday': 'By Appointment',
  },
  social: { instagram: '#', tiktok: '#' },
};

export const stats = [
  { value: '500', unit: '+', label: 'Transformations' },
  { value: '1:1', unit: '', label: 'Private Sessions' },
  { value: '92', unit: '%', label: 'Goal Achievement' },
  { value: '7', unit: '+', label: 'Expert Trainers' },
];

export const instructors = [
  {
    name: 'Brianna Cole',
    specialty: 'Weight Loss & Nutrition',
    bio: 'NASM-CPT & certified nutrition coach. Brianna has guided 200+ clients through sustainable fat loss without fad diets or unsustainable restrictions.',
    image: 'https://images.unsplash.com/photo-1609899537878-48970c985bab?w=600&h=750&fit=crop&q=80',
    years: '7',
    focus: ['Fat Loss', 'Habit Coaching', 'Nutrition'],
  },
  {
    name: 'Devon Marks',
    specialty: 'Muscle Building & Strength',
    bio: 'ISSA-certified trainer and competitive bodybuilder. Devon writes science-based hypertrophy programs for clients looking to build serious muscle.',
    image: 'https://images.unsplash.com/photo-1613845205776-56c8b9a9f85a?w=600&h=750&fit=crop&q=80',
    years: '9',
    focus: ['Hypertrophy', 'Strength', 'Body Recomp'],
  },
  {
    name: 'Samantha Lee',
    specialty: 'Pre/Post Natal & Mobility',
    bio: 'Specialist in women\'s fitness, pre/post natal training, and corrective exercise. Samantha creates safe, effective programs at every life stage.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=750&fit=crop&q=80',
    years: '6',
    focus: ['Pre-Natal', 'Mobility', 'Wellness'],
  },
];

export const classes = [
  {
    name: '1:1 Private',
    description: 'Fully personalized coaching sessions. Your program, your pace, undivided attention from a certified trainer.',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop&q=80',
    tag: 'Most Popular',
  },
  {
    name: 'Semi-Private',
    description: 'Train with a partner. Same personalized programming, split between 2 clients for better value.',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&q=80',
    tag: 'Best Value',
  },
  {
    name: 'Virtual Coaching',
    description: 'Live Zoom sessions with full program delivery, check-ins, and accountability from wherever you are.',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&h=400&fit=crop&q=80',
    tag: 'Anywhere',
  },
  {
    name: 'Transformation Pack',
    description: '12-week intensive. Weekly sessions + nutrition coaching + body comp tracking. Full guided transformation.',
    duration: '12 wk',
    image: 'https://images.unsplash.com/photo-1571019613531-7f2ccafe24ef?w=600&h=400&fit=crop&q=80',
    tag: 'Signature',
  },
];

export const testimonials = [
  {
    name: 'Ashley Turner',
    title: 'Lost 28 lbs in 14 weeks',
    quote: 'Brianna didn\'t just help me lose weight — she changed how I think about food and fitness forever. The 1:1 attention makes all the difference.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'Marcus Gill',
    title: 'Gained 15 lbs lean mass',
    quote: 'Devon\'s programming is legit. I\'ve been working out for 5 years with mediocre results. In 6 months at Grind I completely transformed.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
  },
  {
    name: 'Jen Ortega',
    title: 'Post-natal recovery client',
    quote: 'Samantha got me back to my pre-pregnancy strength safely. I had zero confidence after having my second child and she rebuilt it completely.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80',
  },
];

export const pricing = [
  {
    name: 'Starter',
    price: '$280',
    period: '/ 4 sessions',
    highlight: false,
    cta: 'Get Started',
    features: ['4 × 1:1 sessions', 'Initial assessment', 'Custom workout plan', 'WhatsApp check-ins'],
  },
  {
    name: 'Transform',
    price: '$499',
    period: '/ month',
    highlight: true,
    cta: 'Start Transforming',
    features: ['8 × 1:1 sessions/mo', 'Nutrition coaching', 'Weekly progress review', 'App access', 'Unlimited messaging'],
  },
  {
    name: '12-Week Elite',
    price: '$1,199',
    period: 'total',
    highlight: false,
    cta: 'Apply Now',
    features: ['24 sessions total', 'Meal planning', 'Body comp tracking', 'Weekly video calls', 'Priority booking'],
  },
];

export const koriva = {
  gymSlug: 'grind-pt',
  baseUrl: 'https://app.codegyms.com',
};
