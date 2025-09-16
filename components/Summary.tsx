
import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import type { RootState } from '../app/store';
import type { SummaryCardData } from '../types';

const SummaryCard: React.FC<SummaryCardData> = ({ title, value, change, changeType }) => {
  const getChangeColor = () => {
    switch (changeType) {
      case 'positive': return 'text-green-500';
      case 'negative': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white p-4">
      <p className="text-xs text-gray-500">{title}</p>
      <p className="text-2xl font-semibold text-gray-800 mt-1">{value}</p>
      <div className={`text-xs mt-1 ${getChangeColor()}`}>
        {changeType !== 'neutral' && (change > 0 ? `+${change.toFixed(2)}%` : `${change.toFixed(2)}%`)}
        {changeType === 'neutral' && `${change.toFixed(0)}%`}
      </div>
    </div>
  );
};

const Summary: React.FC = () => {
  const summaryData = useSelector((state: RootState) => state.dashboard.summary);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Total Summary</h2>
        <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 border border-gray-200 rounded-lg overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
        {summaryData.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className={`${index < summaryData.length - 1 ? 'border-r border-gray-200' : ''}`}>
                <SummaryCard {...item} />
            </motion.div>
        ))}
        </motion.div>
    </div>
  );
};

export default Summary;
