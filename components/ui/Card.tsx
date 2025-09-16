
import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
}

const InfoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
);
const MaximizeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m4.5 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg>
);
const RefreshIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.18-3.185m-3.18-3.182l-3.182 3.182m0 0a8.25 8.25 0 01-11.664 0l-3.18-3.185" />
    </svg>
);


const Card: React.FC<CardProps> = ({ title, subTitle, children }) => {
  return (
    <motion.div 
        className="bg-white border border-gray-200 rounded-lg shadow-sm"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
    >
      <header className="flex items-center justify-between p-4 border-b border-gray-200">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          {subTitle && <p className="text-sm text-gray-500">{subTitle}</p>}
        </div>
        <div className="flex items-center space-x-2 text-gray-400">
            <button className="p-1 hover:text-gray-600"><RefreshIcon className="w-5 h-5"/></button>
            <button className="p-1 hover:text-gray-600"><MaximizeIcon className="w-5 h-5"/></button>
            <button className="p-1 hover:text-gray-600"><InfoIcon className="w-5 h-5"/></button>
        </div>
      </header>
      <div className="bg-white rounded-b-lg">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
