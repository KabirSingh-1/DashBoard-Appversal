
import React from 'react';
import Header from './Header';
import Summary from './Summary';
import Storefronts from './Storefronts';
import Trends from './Trends';
import TopList from './TopList';
import BiggestChanges from './BiggestChanges';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Summary />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <Storefronts />
          <Trends />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <TopList />
          <BiggestChanges />
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
