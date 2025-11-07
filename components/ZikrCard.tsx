
import React from 'react';
import { Zikr } from '../types';

interface ZikrCardProps {
  zikr: Zikr;
  currentCount: number;
  onDecrement: () => void;
}

const ZikrCard: React.FC<ZikrCardProps> = ({ zikr, currentCount, onDecrement }) => {
  const isCompleted = currentCount === 0;

  return (
    <div
      className={`relative rounded-xl shadow-md transition-all duration-300 ${
        isCompleted
          ? 'bg-emerald-50 dark:bg-emerald-900/30 opacity-60'
          : 'bg-white dark:bg-gray-800'
      }`}
    >
      <div className="p-5">
        <p className="font-amiri text-2xl md:text-3xl leading-relaxed text-right text-gray-800 dark:text-gray-100 mb-4">
          {zikr.arabic_text}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-right font-amiri italic">
          {zikr.virtue}
        </p>
         <p className="text-xs text-gray-400 dark:text-gray-500 mt-4 text-left">
          {zikr.translation}
        </p>
      </div>

      <div
        className={`px-5 py-3 border-t border-gray-100 dark:border-gray-700/50 flex justify-center items-center ${
            isCompleted ? 'cursor-default' : 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50'
        }`}
        onClick={!isCompleted ? onDecrement : undefined}
      >
        <div className="relative flex items-center justify-center w-16 h-16">
            <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                    className="text-gray-200 dark:text-gray-700"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    strokeWidth="3"
                ></path>
                <path
                    className="text-amber-500"
                    strokeDasharray={`${(currentCount / zikr.count) * 100}, 100`}
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    strokeWidth="3"
                    strokeLinecap="round"
                    transform="rotate(-90 18 18)"
                ></path>
            </svg>
            <span className="absolute text-xl font-bold text-gray-700 dark:text-gray-200">
                {currentCount}
            </span>
        </div>
      </div>
      
      {isCompleted && (
        <div className="absolute inset-0 bg-black/10 dark:bg-black/20 rounded-xl pointer-events-none"></div>
      )}
    </div>
  );
};

export default ZikrCard;
