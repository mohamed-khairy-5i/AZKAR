import React, { useState, useEffect, useMemo } from 'react';
import { AzkarCategory, Zikr } from '../types';
import ZikrCard from './ZikrCard';
import ProgressBar from './ProgressBar';
import { BackArrowIcon } from './icons';

interface AzkarViewProps {
  category: AzkarCategory;
  onBack: () => void;
}

const AzkarView: React.FC<AzkarViewProps> = ({ category, onBack }) => {
  const [counts, setCounts] = useState<Record<number, number>>({});

  useEffect(() => {
    const initialCounts = category.azkar.reduce((acc, zikr) => {
      acc[zikr.id] = zikr.count;
      return acc;
    }, {} as Record<number, number>);
    setCounts(initialCounts);
  }, [category]);

  const handleDecrement = (zikrId: number) => {
    setCounts(prevCounts => ({
      ...prevCounts,
      [zikrId]: Math.max(0, prevCounts[zikrId] - 1)
    }));
  };

  const { progress, total, completed } = useMemo(() => {
    // FIX: Explicitly type the accumulator in reduce to prevent type inference issues.
    const total = category.azkar.reduce((sum: number, zikr) => sum + zikr.count, 0);
    // FIX: Explicitly type the accumulator in reduce to prevent type inference issues.
    const remaining = Object.values(counts).reduce((sum: number, count) => sum + count, 0);
    const completed = total - remaining;
    const progress = total > 0 ? (completed / total) * 100 : 0;
    return { progress, total, completed };
  }, [counts, category.azkar]);

  return (
    <div className="max-w-3xl mx-auto pb-8">
        <header className="sticky top-0 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm z-10 p-4 flex items-center justify-between shadow-sm">
            <button
            onClick={onBack}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Back to categories"
            >
            <BackArrowIcon className="w-6 h-6 text-gray-600 dark:text-gray-300 transform -scale-x-100" />
            </button>
            <h1 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 font-amiri">{category.title}</h1>
            <div className="w-8"></div>
        </header>
        
        <div className="p-4">
            <div className="mb-6">
                <ProgressBar progress={progress} />
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                {completed} / {total}
                </p>
            </div>

            <div className="space-y-4">
            {category.azkar.map((zikr) => (
                <ZikrCard
                key={zikr.id}
                zikr={zikr}
                currentCount={counts[zikr.id] || 0}
                onDecrement={() => handleDecrement(zikr.id)}
                />
            ))}
            </div>
        </div>
    </div>
  );
};

export default AzkarView;
