
import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-y-auto">
        <Dashboard />
      </main>
    </div>
  );
};

export default App;
