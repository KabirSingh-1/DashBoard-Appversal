import { createSlice } from '@reduxjs/toolkit';
import type { DashboardState } from '../../types';

const initialState: DashboardState = {
  summary: [
    { title: 'Conversions ROAS', value: '0.00%', change: 0, changeType: 'neutral' },
    { title: 'Conversions ROAS', value: '$6,109.89', change: 27.42, changeType: 'positive' },
    { title: 'Conversions ROAS', value: '0.00%', change: 0, changeType: 'neutral' },
    { title: 'Conversions ROAS', value: '$2,101', change: 0, changeType: 'neutral' },
    { title: 'Conversions ROAS', value: '$2.91', change: 0, changeType: 'neutral' },
    { title: 'Conversions ROAS', value: '0', change: 0, changeType: 'neutral' },
    { title: 'Conversions ROAS', value: '$0.00', change: 0, changeType: 'neutral' },
  ],
  trends: [
    { name: '5 July', orange: 1500, yLabel: '$27.42%' },
    { name: '5 July', orange: 3800, yLabel: '$27.42%' },
    { name: '5 July', orange: 5800, yLabel: '$27.42%' },
    { name: '5 July', orange: 4500, yLabel: '$27.42%' },
    { name: '5 July', orange: 3000, yLabel: '$27.42%' },
    { name: '5 July', orange: 2500, blue: 2500, yLabel: '$27.42%' },
    { name: '5 July', blue: 4000, yLabel: '$27.42%' },
  ],
  topList: [
    { id: 1, name: 'Discovery (LOC)', location: 'India', spend: '$6,109.89', spendChange: 27.42, installs: '$44', installsChange: 27.42, conversions: '0.00%', conversionsChange: 0, status: 'positive' },
    { id: 2, name: 'Competitor (LOC)', location: 'India', spend: '$6,109.89', spendChange: 27.42, installs: '$121', installsChange: 27.42, conversions: '0.00%', conversionsChange: 0, status: 'positive' },
    { id: 3, name: 'Today tab (LOC)', location: 'India', spend: '$6,109.89', spendChange: 27.42, installs: '$44', installsChange: 0, conversions: '0.00%', conversionsChange: 0, status: 'positive' },
    { id: 4, name: 'Branding (LOC)', location: 'India', spend: '$6,109.89', spendChange: 27.42, installs: '$44', installsChange: 0, conversions: '0.00%', conversionsChange: 0, status: 'positive' },
  ],
  biggestChanges: [
    { id: 1, name: 'Discovery (LOC)', location: 'India', value: '$6,109.89', change: 27.42, barPercentage: 100, barColor: 'bg-orange-400' },
    { id: 2, name: 'Competitor (LOC)', location: 'India', value: '$6,109.89', change: 27.42, barPercentage: 80, barColor: 'bg-orange-400' },
    { id: 3, name: 'Today tab (LOC)', location: 'India', value: '$6,109.89', change: 27.42, barPercentage: 40, barColor: 'bg-yellow-400' },
    { id: 4, name: 'Branding (LOC)', location: 'India', value: '$6,109.89', change: 27.42, barPercentage: 20, barColor: 'bg-yellow-400' },
  ]
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
});

export default dashboardSlice.reducer;