import React from 'react';
import FloatingCardGrid from '../components/FloatingCardGrid';
import { mockResources } from '../lib/supabase';

const LibraryPage: React.FC = () => {
  // Filter for books and sites
  const libraryResources = mockResources.filter(resource => 
    resource.category === 'book' || resource.category === 'site'
  );

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Education Library
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Curated collection of books, research papers, and educational websites 
            to deepen your understanding of AI in education.
          </p>
        </div>
      </section>

      {/* Library Resources Grid */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FloatingCardGrid 
            resources={libraryResources}
            allowedCategories={['book', 'site']}
            showFilters={true}
          />
        </div>
      </section>
    </div>
  );
};

export default LibraryPage;