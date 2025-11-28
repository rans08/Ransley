export interface Metric {
  label: string;
  value: string | number;
  change?: string; // e.g., "+3.2%"
  isPositive?: boolean;
  prefix?: string;
  suffix?: string;
}

export interface PlatformData {
  name: string;
  color: string;
  metrics: Metric[];
  bestPost?: {
    title: string;
    stats: string[];
    description: string;
  };
  takeaways?: string[];
}

export interface ChartDataPoint {
  name: string;
  value: number;
  prevValue?: number;
}