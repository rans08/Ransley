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
    contentHighlights: [
      {
        title: 'Best Performing Post',
        type: 'video',
        stats: ['7.8k Views', '3.8% ER', '385 Likes'],
        description: 'Video planned specifically for audience retention performed best across all engagement metrics.',
      },
      {
        title: 'Best Performing Video',
        type: 'video',
        stats: ['11k Views', '2.9% ER', '96 Shares'],
        description: 'Visually appealing short format reels (Map animation) work well for brand recall.',
      }
    ],
    takeaways: [
      'No giveaways in Oct; recommended for future to boost engagement.',
      'Real/human posts spiked metrics significantly vs templates.',
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
    contentHighlights: [
      {
        title: 'Best Performing Post',
        type: 'post',
        stats: ['53.1k Views', '7.1k Engmnt', '1253 Likes'],
        description: 'Inauguration post outperformed DVCs. High community interest in milestones.',
      },
      {
        title: 'Best Video Content',
        type: 'video',
        stats: ['19.2k Views', '854 Engmnt', '43 Shares'],
        description: 'Showcasing capability (Road Networks) reinforces what Blue Dart stands for.',
      }
    ],
    takeaways: [
      'Top 3 posts focused on celebration, milestones, or striking visuals.',
      'Topical posts (e.g., Breast Cancer Awareness) had low engagement compared to core business updates.',
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
    contentHighlights: [
      {
        title: 'Highest Engagement Rate',
        type: 'post',
        stats: ['30.3% ER', '162 Likes', '6 Reposts'],
        description: 'Green Hub Launch: Full size images with business takeaways drive professional engagement.',
      },
      {
        title: 'Highest Reach (Poll)',
        type: 'poll',
        stats: ['19.3k Reach', '953 Votes', '72 Likes'],
        description: 'Interactive posts like Polls intrigue the audience and maximize feed visibility.',
      }
    ],
    takeaways: [
      'Celebratory and leadership posts perform excellently.',
      'Strategy needed to reverse dropping unique visitor count (-15.9%).',
      'Polls are highly effective for Reach.',
    ]
  },
  x: {
    name: 'X (Twitter)',
    color: COLORS.x,
    metrics: [
      { label: 'Est. Engagement', value: '184', change: '', isPositive: true },
      { label: 'Est. Impressions', value: '3,468', change: '', isPositive: true },
      { label: 'Likes (Top Post)', value: '4', change: '', isPositive: true },
      { label: 'Comments (Top Post)', value: '70', change: '', isPositive: true },
    ],
    contentHighlights: [
      {
        title: 'Top Content: Diwali Video',
        type: 'video',
        stats: ['3.4k Impressions', '70 Comments', '184 Engmnt'],
        description: 'Nationwide festival content + visually appealing video format worked best.',
      },
      {
        title: 'Platform Analytics',
        type: 'info',
        stats: ['Premium Req.', 'Limited Data'],
        description: 'Premium subscription required for dashboard. Current insights are per-post only.',
      }
    ],
    takeaways: [
      'Premium subscription required for full professional dashboard.',
      'Visual/Festival content drove the majority of interactions.',
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