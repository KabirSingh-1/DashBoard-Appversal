import React, { useState, useRef, MouseEvent } from 'react';
import { motion } from 'framer-motion';

// Icons for the card header
const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.75 9h16.5m-16.5 6h16.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 015.657 15.343A9 9 0 0112 3z" />
    </svg>
);

const BarChartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
);

const ExpandIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m4.5 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg>
);

const ColumnsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 3.75H18m-2.25 0v16.5m0-16.5H6.375m0 0H3.75m2.625 0v16.5m0-16.5h3m-3 0h.008v.008H9m-2.625 0H9m-2.625 0H6.375" />
    </svg>
);

// Icons for the map
const PlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>;
const MinusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>;

// Icon for the legend
const InfoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
);

const Storefronts: React.FC = () => {
    const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });
    const [transform, setTransform] = useState({ scale: 1, x: 0, y: 0 });
    const [isPanning, setIsPanning] = useState(false);
    const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });
    const svgContainerRef = useRef<HTMLDivElement>(null);

    const handleZoom = (delta: number) => {
        setTransform(prev => ({
            ...prev,
            scale: Math.max(0.5, Math.min(prev.scale + delta, 8))
        }));
    };

    const handleCountryHover = (e: MouseEvent<SVGPathElement>) => {
        const target = e.target as SVGPathElement;
        const name = target.getAttribute('data-name');
        if (name) {
            let content = name;
            if (name === 'India') {
                content = `${name}: $6.11K`;
            }
            setTooltip({
                visible: true,
                content,
                x: e.clientX,
                y: e.clientY,
            });
        }
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (tooltip.visible) {
            setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }));
        }
        if (isPanning) {
            const dx = (e.clientX - startPoint.x) / transform.scale;
            const dy = (e.clientY - startPoint.y) / transform.scale;
            setTransform(prev => ({ ...prev, x: prev.x + dx, y: prev.y + dy }));
        }
    };

    const handleMouseLeave = () => {
        setTooltip({ ...tooltip, visible: false });
        setIsPanning(false);
    };

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        setIsPanning(true);
        setStartPoint({ x: e.clientX - transform.x * transform.scale, y: e.clientY - transform.y * transform.scale });
    };

    const handleMouseUp = () => {
        setIsPanning(false);
    };

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        e.preventDefault();
        handleZoom(e.deltaY * -0.001);
    };


  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Storefronts</h2>
      <motion.div 
        className="bg-white border border-gray-200 rounded-lg shadow-sm"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <header className="flex items-center justify-between py-3 px-4 border-b border-gray-200">
          <h3 className="text-sm font-medium text-gray-600">Spend</h3>
          <div className="flex items-center space-x-2 text-gray-500">
              <button className="p-1 hover:text-gray-700 text-teal-500"><GlobeIcon /></button>
              <button className="p-1 hover:text-gray-700"><BarChartIcon /></button>
              <div className="w-px h-4 bg-gray-200 mx-1"></div>
              <button className="p-1 hover:text-gray-700"><ExpandIcon /></button>
              <button className="p-1 hover:text-gray-700"><ColumnsIcon /></button>
          </div>
        </header>
        <div 
            className="bg-white rounded-b-lg relative"
            ref={svgContainerRef}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onWheel={handleWheel}
        >
            {tooltip.visible && (
                <div 
                    className="absolute z-10 p-2 text-xs bg-gray-800 text-white rounded-md shadow-lg pointer-events-none"
                    style={{ 
                        top: tooltip.y - (svgContainerRef.current?.getBoundingClientRect().top ?? 0) + 15, 
                        left: tooltip.x - (svgContainerRef.current?.getBoundingClientRect().left ?? 0) + 15 
                    }}
                >
                    {tooltip.content}
                </div>
            )}
           <div className="relative w-full h-64 bg-white overflow-hidden cursor-grab active:cursor-grabbing">
                <svg viewBox="0 0 1000 470" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                    <g transform={`scale(${transform.scale}) translate(${transform.x}, ${transform.y})`} style={{ transition: 'transform 0.1s ease-out' }}>
                        <g onMouseEnter={handleCountryHover} onMouseLeave={handleMouseLeave} fill="#FFEDD5" stroke="#FFF" strokeWidth="0.5">
                            <path data-name="Canada" d="m223.1 113.6-11.4 3-10.3.3-11.4 1.5-6.8 6-3.8 4.3-12.8 1.9-6.3-4.1-1.3-6.2-11-2.4-6.4 1.5-4.8 4.1-3.6 7.6-1.5 5.3-4.1 3.5-5.3 5.3-2.1 4.5.3 12.1 3.2 4.1 6 1.8 11.4 3.3 11.2 5.1 11.9 4.8 11.4 1.9 8.7-2.6 6.8-.5 9.4 3.8 5.7 6 5.1 8.5 2.1 10.3-2.4 3.8-3.5 1.5-6.2-1.9-4.8-5.3-1.8-6.6.6-8.5 4.3-3.2 5.3-1.5 6.4v-10.8l.9-12.1-1.8-12.3-2.6-8.7-4.1-11.4-3-11.9-1.5-12.5.3-11.4 1.9-8.3 4.3-4.5 7.1-1.3 11 .6h9.4l7.6-2.1z"/>
                            <path data-name="United States" d="m244.1 163.6-2.6 8.7-11.4 1.9-11.9-4.8-11.2-5.1-11.4-3.3-6-1.8-3.2-4.1-.3-12.1 2.1-4.5 5.3-5.3 4.1-3.5 1.5-5.3 3.6-7.6 4.8-4.1 6.4-1.5 11 2.4 1.3 6.2 6.3 4.1 12.8-1.9 3.8-4.3 6.8-6 11.4-1.5 10.3-.3 11.4-3 1.9 4.1 4.3 2.9 6.2 1.9 7.3.3 8.3 4.1 6.6 2.9 8.3 1.9 9.2-1.3 11.9-2.9 8.7 1 6.2 4.1 1.5 5.7-1.5 6.4-3.5 5.1-6.8 2.1-10.3.3-12.5-1.9-10.8-4.8-6.2-7.3z"/>
                            <path data-name="Mexico" d="m233.3 218.4-12.5-1.9-10.3.3-6.8-2.1-3.5-5.1-1.5-6.4 1.5-5.7-6.2-4.1-8.7-1-11.9 2.9-9.2 1.3-8.3-1.9-6.6-2.9-4.1-6.6-1.9-7.3-.3-2.9-6.2-1.9-4.3-4.1-1.9 5.7 3.2 8.3 5.3 6.6 9.4 3.2 10.3 1.5 8.7 4.1 6.2 6.8 3.5 8.7 1.9 10.3 1.5 11.2 3.3 8.7 5.1 6.2 6.6 3.6 7.6h7.1l6.2-2.9z"/>
                            <path data-name="Greenland" fill="#E5E7EB" d="m358.1 28.6-11.2.3-9.4 2.9-11.2 3.6-8.1 4.8-6.8 6.8-5.1 8.5-3.3 9.4-1.5 11.2.3 11.2 1.9 9.4 3.6 8.1 5.3 6.8 7.3 5.1 9 3.3 10.3 1.5 11.2-.3 10.8-2.1 9.4-4.1 8.1-6 6.8-8.1 5.1-9.9 3.3-11.2 1.5-11.9-1.9-6-5.1-4.8-11.2-1.5-13.8.3-11.9 3.3-9.4 5.1-7.3 6.8-5.3z"/>
                            <path data-name="Iceland" d="m382.9 84.1-4.8 1.9-3.8 3.5-2.6 4.8-1.5 5.7.3 5.7 1.5 4.8 2.6 3.8 3.8 2.6 4.8 1.5 5.7-.3 4.8-1.5 3.8-2.6 2.6-3.8 1.5-4.8-.3-5.7-1.5-4.8-2.6-3.8-3.8-2.6z"/>
                            <path data-name="Brazil" d="m355.9 270.3-4.8 5.7-11.9 7.1-10.8 4.8-11.9 2.1-12.8-.3-12.1-2.4-11.4-4.5-10.3-6.6-9-8.7-7.6-10.8-6-12.8-4.3-14.7-2.4-16.3-.5-17.2 1.5-16.3 3.5-14.7 5.7-12.8 7.6-11 9.4-8.7 11.4-6.8 13-4.8 14.5-2.6 15.8-.5 16.9 1.9 15.8 4.1 14.5 6 13 7.6 11.2 9 9.4 10.3 7.6 11.2 6 11.9 4.5 12.5 2.6 12.8.5 13-1.9z"/>
                            <path data-name="Argentina" d="m343.3 358.4-12.8-.5-12.5-2.6-11.9-4.5-11.2-6-10.3-7.6-9.4-9-8.1-10.3-6.8-11.2-5.3-12.1-3.6-12.8-1.9-13.2.5-13.2 2.6-12.8 4.8-12.1 6.8-11.2 8.7-9.9 10.3-8.3 11.9-6.6 13.2-4.5 14.5-2.4 15.5-.3 16.3 1.9 15.5 4.1 14.5 6 13.2 7.6 11.9 9 10.3 10.3 8.7 11.2 7.1 11.9 5.7 12.5 4.1 12.8 2.4 13 .5z"/>
                            <path data-name="Russia" d="m555.3 120.4-11.9-2.1-12.8.3-11.9 2.4-11 4.5-9.9 6.6-8.7 8.7-7.3 10.8-5.7 12.8-4.1 14.7-2.4 16.3-.3 17.2 1.5 16.3 3.5 14.7 5.7 12.8 7.6 11 9.4 8.7 11.4 6.8 13 4.8 14.5 2.6 15.8.5 16.9-1.9 15.8-4.1 14.5-6 13-7.6 11.2-9 9.4-10.3 7.6-11.2 6-11.9 4.5-12.5 2.6-12.8-.5-13 1.9-12.8 4.1-12.1 6-11.2 7.6-9.9 9-8.7 10.3-7.1 11.4-5.7 12.5-4.1 13.2-2.4 13.8-.3 14.1 1.9 13.8 4.1 13.2 6 12.5 7.6 11.9 9 11.2 9.9 10.3 8.7 11.2 7.3 11.9 6 12.5 4.8 12.8 3.3 13.2 1.9 13.2.3 13.2-1.5 12.8-3.3 12.5-4.8 11.9-6 11.2-7.3 10.3-8.7 9.4-9.9 8.3-11.2 7.1-11.9 5.7-12.8 4.3-13.2 2.6-13.8.5-14.1-1.9-13.8-4.1-13.2-6-12.5-7.6-11.9-9-11.2-9.9-10.3-8.7-11.2-7.3-11.9-6-12.5-4.8-12.8-3.3-13.2-1.9-13.2-.3-13.2 1.5-12.8 3.3-12.5 4.8-11.9 6-11.2 7.3-10.3 8.7-9.4 9.9-8.3 11.2-7.1 11.9-5.7 12.8-4.3 13.2-2.6 13.8-.5z"/>
                            <path data-name="China" d="m640.4 200.4-11.2-7.3-11.9-6-12.5-4.8-12.8-3.3-13.2-1.9-13.2-.3-13.2 1.5-12.8 3.3-12.5 4.8-11.9 6-11.2 7.3-10.3 8.7-9.4 9.9-8.3 11.2-7.1 11.9-5.7 12.8-4.3 13.2-2.6 13.8-.5 14.1 1.9 13.8 4.1 13.2 6 12.5 7.6 11.9 9 11.2 9.9 10.3 8.7 11.2 7.3 11.9 6 12.5 4.8 12.8 3.3 13.2 1.9 13.2.3 13.2-1.5 12.8-3.3 12.5-4.8 11.9-6 11.2-7.3 10.3-8.7 9.4-9.9 8.3-11.2 7.1-11.9 5.7-12.8 4.3-13.2 2.6-13.8.5z"/>
                            <path fill="#EA580C" data-name="India" d="m622.1 262.2-4.1-13.8-.5-14.1 1.9-13.8 4.1-13.2 6-12.5 7.6-11.9 9-11.2 9.9-10.3 8.7-11.2 7.3-11.9 6-12.5 4.8-12.8 3.3-13.2 1.9-13.2.3-13.2-1.5-12.8-3.3-12.5-4.8-11.9-6-11.2-7.3-10.3-8.7-9.4-9.9-8.3-11.2-7.1-11.9-5.7-12.8-4.3-13.2-2.6-13.8-.5z"/>
                            <path data-name="Australia" d="m761.6 345.9-12.8-4.3-13.2-2.6-13.8-.5-14.1 1.9-13.8 4.1-13.2 6-12.5 7.6-11.9 9-11.2 9.9-10.3 8.7-11.2-7.3-11.9-6-12.5-4.8-12.8-3.3-13.2-1.9-13.2-.3-13.2 1.5-12.8 3.3-12.5 4.8-11.9 6-11.2 7.3-10.3 8.7-9.4 9.9-8.3 11.2-7.1 11.9-5.7 12.8-4.3 13.2-2.6 13.8-.5 14.1 1.9 13.8 4.1 13.2 6 12.5 7.6 11.9 9 11.2 9.9 10.3 8.7 11.2 7.3 11.9 6 12.5 4.8 12.8 3.3 13.2 1.9 13.2.3z"/>
                            <path data-name="Africa" d="m424.1 200.4-11.2-7.3-11.9-6-12.5-4.8-12.8-3.3-13.2-1.9-13.2-.3-13.2 1.5-12.8 3.3-12.5 4.8-11.9 6-11.2 7.3-10.3 8.7-9.4 9.9-8.3 11.2-7.1 11.9-5.7 12.8-4.3 13.2-2.6 13.8-.5 14.1 1.9 13.8 4.1 13.2 6 12.5 7.6 11.9 9 11.2 9.9 10.3 8.7 11.2 7.3 11.9 6 12.5 4.8 12.8 3.3 13.2 1.9 13.2.3 13.2-1.5 12.8-3.3 12.5-4.8 11.9-6 11.2-7.3 10.3-8.7 9.4-9.9 8.3-11.2 7.1-11.9 5.7-12.8 4.3-13.2 2.6-13.8.5z"/>
                        </g>
                    </g>
                </svg>

                {/* Zoom controls */}
                <div className="absolute bottom-4 left-4 flex flex-col space-y-1">
                    <button onClick={() => handleZoom(0.2)} className="bg-white p-1 rounded-sm shadow border text-gray-600 hover:bg-gray-100"><PlusIcon /></button>
                    <button onClick={() => handleZoom(-0.2)} className="bg-white p-1 rounded-sm shadow border text-gray-600 hover:bg-gray-100"><MinusIcon /></button>
                </div>
            </div>
          {/* Legend */}
          <div className="px-4 pb-4 pt-2">
            <div className="flex items-end">
                <div className="flex-1">
                    <div className="w-full h-2 bg-gradient-to-r from-orange-200 to-orange-500 rounded-full"></div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>$0</span>
                        <span>$6.11K</span>
                    </div>
                </div>
                <button className="ml-2 mb-3 text-gray-400 hover:text-gray-600">
                    <InfoIcon />
                </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Storefronts;
