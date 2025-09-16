
import React from 'react';
import { motion } from 'framer-motion';
import { MenuIcon } from '../constants';

const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M-7.5 12h18" />
  </svg>
);

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

const PdfIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
);

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6"
    >
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Overview dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">A consolidated view of your app efficiency by storefronts and key metrics.</p>
      </div>
      <div className="flex items-center space-x-2 mt-4 sm:mt-0">
        <button className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
          <PdfIcon className="w-4 h-4 mr-2 text-red-500"/>
          Pdf Name
          <ChevronDownIcon className="w-4 h-4 ml-2 text-gray-400"/>
        </button>
        <button className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
          <CalendarIcon className="w-5 h-5 mr-2 text-gray-500" />
          Last 7 Days Jul 5 - Jul 11, 2025
        </button>
        <button className="p-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
          <MenuIcon className="w-5 h-5"/>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
