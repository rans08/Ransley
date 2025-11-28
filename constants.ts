import { PlatformData, ChartDataPoint } from './types';

// Palette derived from the document (Blue Dart / DHL style + Corporate)
export const COLORS = {
  instagram: '#E1306C',
  facebook: '#1877F2',
  linkedin: '#0A66C2',
  x: '#000000',
  primary: '#D40511', // DHL Red
  secondary: '#FFCC00', // DHL Yellow
  slate: '#64748b',
};

// Data extracted from the PDF pages
export const PLATFORM_DATA: Record<string, PlatformData> = {
  instagram: {
    name: 'Instagram',
    color: COLORS.instagram,
    metrics: [
      { label: 'Followers', value: '12,402', change: '3.2%', isPositive: true },
      { label: 'Interactions', value: '5.8k', change: '58.1%', isPositive: true },
      { label: 'Views', value: '412k', change: '25.9%', isPositive: true },
      { label: 'Posts', value: 21, change: '', isPositive: true },
    ],
    bestPost: {
      title: 'Most Viewed: Celebratory Leadership Post',
      stats: ['17.2k Views', '228 Likes', '8 Shares'],
      description: 'Celebratory posts highlighting leadership get good engagement.',
    },
    takeaways: [
      'No giveaways in Oct; recommended for future to boost engagement.',
      'Real/human posts spiked metrics significantly.',
      'Active times: Tue/Wed/Fri 6-9 PM.',
    ]
  },
  facebook: {
    name: 'Facebook',
    color: COLORS.facebook,
    metrics: [
      { label: 'Followers', value: '65.1k', change: '0.4%', isPositive: true },
      { label: 'Interactions', value: '20k', change: '142%', isPositive: true },
      { label: 'Views', value: '284k', change: '54%', isPositive: true },
      { label: 'Conversations', value: 240, change: '14%', isPositive: true },
    ],
    bestPost: {
      title: 'Best Performance: Bijwasan DVC',
      stats: ['53.1k Views', '7.1k Engagement', '1253 Likes'],
      description: 'Outperformed all others. Visual capability showcases work best.',
    },
    takeaways: [
      'Top 3 posts focused on celebration, milestones, or striking visuals.',
      'Topical posts (e.g., Breast Cancer Awareness) had low engagement.',
    ]
  },
  linkedin: {
    name: 'LinkedIn',
    color: COLORS.linkedin,
    metrics: [
      { label: 'New Follows', value: '16,390', change: '2.3%', isPositive: true },
      { label: 'Reactions', value: '3,839', change: '35%', isPositive: true },
      { label: 'Impressions', value: '204k', change: '25.9%', isPositive: true },
      { label: 'Unique Visitors', value: '17,009', change: '-15.9%', isPositive: false },
    ],
    bestPost: {
      title: 'Highest ER: Green Ground Hub Launch',
      stats: ['30.3% ER', '162 Likes', '6 Reposts'],
      description: 'Full-size images with clear takeaways drive engagement.',
    },
    takeaways: [
      'Celebratory and leadership posts perform excellently.',
      'Polls work well for Reach (19.3k Reach on poll).',
      'Need strategy to reverse dropping visitor count (-15.9%).',
    ]
  },
  x: {
    name: 'X (Twitter)',
    color: COLORS.x,
    metrics: [
      { label: 'Est. Engagement', value: '184', change: '', isPositive: true },
      { label: 'Est. Impressions', value: '3,468', change: '', isPositive: true },
    ],
    bestPost: {
      title: 'Diwali Festival Post',
      stats: ['3.4k Impressions', '70 Comments', '4 Likes'],
      description: 'Nationwide festival + visually appealing video worked best.',
    },
    takeaways: [
      'Premium subscription required for full analytics.',
      'Free version only allows per-post insights.',
    ]
  }
};

// Calculated for graphs based on PDF data
export const VIEWS_DATA: ChartDataPoint[] = [
  { name: 'Instagram', value: 412000 },
  { name: 'Facebook', value: 284000 },
  { name: 'LinkedIn', value: 204000 }, // Using impressions as proxy for views comparison
];

export const GROWTH_DATA = [
  { name: 'Insta Views', current: 412, previous: 327 }, // Derived from +25.9%
  { name: 'FB Views', current: 284, previous: 184 },   // Derived from +54%
  { name: 'LI Impress.', current: 204, previous: 162 }, // Derived from +25.9%
];
