import React from 'react';
import { useSelector } from 'react-redux';
import Tabs from './ui/Tabs';
import type { RootState } from '../app/store';
import { motion } from 'framer-motion';

// Icons
const StatusIndicator: React.FC = () => (
  <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500"></span>
);

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

const SortDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-4-4m4 4l4-4" />
    </svg>
);


const TopList: React.FC = () => {
  const topListData = useSelector((state: RootState) => state.dashboard.topList);
  const tabs = ['Campaigns', 'Ad Groups', 'Keywords', 'Ads'];
  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Top List</h2>
      <motion.div
        className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 w-2/5"></th>
                <th className="px-3 py-3 font-medium text-gray-800 text-left">
                   <button className="flex items-center text-sm font-medium hover:text-gray-600">
                        <SortDownIcon className="w-4 h-4 mr-1 text-gray-500"/>
                        <span>Spend</span>
                        <ChevronDownIcon className="w-3 h-3 ml-1.5 text-gray-400"/>
                    </button>
                </th>
                <th className="px-3 py-3 font-medium text-gray-800 text-left">
                    <button className="flex items-center text-sm font-medium hover:text-gray-600">
                        <span>Installs</span>
                        <ChevronDownIcon className="w-3 h-3 ml-1.5 text-gray-400"/>
                    </button>
                </th>
                <th className="px-3 py-3 font-medium text-gray-800 text-left">
                    <button className="flex items-center text-sm font-medium hover:text-gray-600">
                        <span>Conver...</span>
                        <ChevronDownIcon className="w-3 h-3 ml-1.5 text-gray-400"/>
                    </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {topListData.map((item, index) => (
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
                  <td className="px-6 py-4 text-center border-l border-gray-200 bg-orange-50">
                    <div className="font-semibold text-gray-800">{item.spend}</div>
                    <div className="text-xs text-gray-500">+{item.spendChange.toFixed(2)}%</div>
                  </td>
                  <td className="px-6 py-4 text-center border-l border-gray-200 bg-cyan-50">
                    <div className="font-semibold text-gray-800">{item.installs}</div>
                    <div className="text-xs text-gray-500">
                      {item.installsChange > 0 ? `+${item.installsChange.toFixed(2)}%` : `${item.installsChange.toFixed(0)}%`}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center border-l border-gray-200 bg-white">
                    <div className="font-semibold text-gray-800">{item.conversions}</div>
                    <div className="text-xs text-gray-500">{item.conversionsChange.toFixed(0)}%</div>
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

export default TopList;