
import React from 'react';
import { motion } from 'framer-motion';

interface TabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="px-4 border-b border-gray-200">
      <nav className="-mb-px flex space-x-6" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${
              activeTab === tab
                ? 'font-semibold text-gray-800'
                : 'text-gray-500 hover:text-gray-700'
            } relative whitespace-nowrap py-3 px-1 border-b-2 text-sm border-transparent`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-orange-500 rounded-full"
                layoutId="underline"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Tabs;
