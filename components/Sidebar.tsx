import React from 'react';
import { motion } from 'framer-motion';
import { sidebarIcons, bottomSidebarIcons } from '../constants';

const Sidebar: React.FC = () => {
  const [active, setActive] = React.useState('gauge');

  const iconVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  return (
    <aside
      className="w-16 text-white flex flex-col items-center justify-between py-4 border-l-2 border-sky-400"
      style={{ backgroundColor: '#FF5722' }}
    >
      <div className="flex flex-col items-center space-y-6 w-full">
        <div className="p-2">
          <div className="h-10 w-10 bg-white rounded-full"></div>
        </div>
        <nav className="flex flex-col items-center space-y-2 w-full px-2">
          {sidebarIcons.map((item, i) => (
            <motion.button
              key={item.id}
              custom={i}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              onClick={() => setActive(item.id)}
              className={`p-3 rounded-lg w-full transition-colors duration-200`}
              style={active === item.id ? { backgroundColor: '#FF8A65' } : {}}
            >
              <div className="h-6 w-6 mx-auto">{item.icon}</div>
            </motion.button>
          ))}
        </nav>
      </div>
      <div className="flex flex-col items-center space-y-2 w-full px-2">
         {bottomSidebarIcons.map((item, i) => (
            <motion.button
              key={item.id}
              custom={i + sidebarIcons.length}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              className="p-3 rounded-lg w-full hover:bg-white/20 transition-colors duration-200"
            >
              <div className="h-6 w-6 mx-auto">{item.icon}</div>
            </motion.button>
          ))}
      </div>
    </aside>
  );
};

export default Sidebar;