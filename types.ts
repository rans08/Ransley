export interface Metric {
  label: string;
  value: string | number;
  change?: string; // e.g., "+3.2%"
  isPositive?: boolean;
  prefix?: string;
  suffix?: string;
}

export interface ContentHighlight {
  title: string;
  stats: string[];
  description: string;
  type: 'post' | 'video' | 'poll' | 'info';
}

export interface PlatformData {
  name: string;
  color: string;
  metrics: Metric[];
  contentHighlights?: ContentHighlight[];
  takeaways?: string[];
  note?: string; // For platform specific warnings/notes (like X)
}

export interface ChartDataPoint {
  name: string;
  value: number;
  prevValue?: number;
}