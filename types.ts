export interface SummaryCardData {
  title: string;
  value: string;
  change: number;
  changeType: 'positive' | 'negative' | 'neutral';
}

export interface TrendData {
  name: string;
  orange?: number;
  blue?: number;
  yLabel: string;
}

export interface TopListItem {
  id: number;
  name: string;
  location: string;
  spend: string;
  spendChange: number;
  installs: string;
  installsChange: number;
  conversions: string;
  conversionsChange: number;
  status: 'positive' | 'negative' | 'neutral';
}

export interface BiggestChangeItem {
  id: number;
  name: string;
  location: string;
  value: string;
  change: number;
  barPercentage: number;
  barColor: string;
}

export interface DashboardState {
  summary: SummaryCardData[];
  trends: TrendData[];
  topList: TopListItem[];
  biggestChanges: BiggestChangeItem[];
}