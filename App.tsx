
import React, { useState } from 'react';
import { AzkarCategory } from './types';
import { AZKAR_CATEGORIES } from './data/azkar';
import CategorySelection from './components/CategorySelection';
import AzkarView from './components/AzkarView';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<AzkarCategory | null>(null);

  const handleSelectCategory = (category: AzkarCategory) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen">
      {selectedCategory ? (
        <AzkarView category={selectedCategory} onBack={handleBackToCategories} />
      ) : (
        <>
          <header className="py-6 px-4 md:px-8 bg-white dark:bg-gray-800 shadow-md">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-emerald-700 dark:text-emerald-400 font-amiri">أذكار المسلم</h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mt-1">حصنك اليومي من الذكر</p>
          </header>
          <main className="p-4 md:p-8">
            <CategorySelection categories={AZKAR_CATEGORIES} onSelectCategory={handleSelectCategory} />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
