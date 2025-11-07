
import React from 'react';
import { AzkarCategory } from '../types';

interface CategorySelectionProps {
  categories: AzkarCategory[];
  onSelectCategory: (category: AzkarCategory) => void;
}

const CategorySelection: React.FC<CategorySelectionProps> = ({ categories, onSelectCategory }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category)}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-right hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
        >
          <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 font-amiri">{category.title}</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">{category.description}</p>
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;
