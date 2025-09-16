
import React from 'react';
import { useSelector } from 'react-redux';
import Tabs from './ui/Tabs';
import type { RootState } from '../app/store';
import { motion } from 'framer-motion';

const StatusIndicator: React.FC = () => (
  <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500"></span>
);

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

const BiggestChanges: React.FC = () => {
  const changesData = useSelector((state: RootState) => state.dashboard.biggestChanges);
  const tabs = ['Campaigns', 'Ad Groups', 'Keywords', 'Ads'];
  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Biggest Changes</h2>
      <motion.div 
        className="bg-white border border-gray-200 rounded-lg shadow-sm"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="px-6 py-3 border-b border-gray-200">
            <button className="flex items-center text-sm font-medium text-gray-800 hover:text-gray-600">
                <span>Spend</span>
                <ChevronDownIcon className="w-4 h-4 ml-1.5 text-gray-400"/>
            </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody>
              {changesData.map((item, index) => (
                <motion.tr 
                  key={item.id} 
                  className="border-b border-gray-200 last:border-b-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <StatusIndicator />
                      <div>
                        <div className="font-medium text-gray-800">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.location}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-l border-r border-gray-200 w-1/3">
                    <div className="w-full">
                      <motion.div
                        className={`h-4 rounded-sm ${item.barColor}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${item.barPercentage}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div>
                      <div className="font-medium text-gray-800">{item.value}</div>
                      <div className="text-xs text-green-500">+{item.change.toFixed(2)}%</div>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default BiggestChanges;
