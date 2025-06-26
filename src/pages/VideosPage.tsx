import React from 'react';
import FloatingCardGrid from '../components/FloatingCardGrid';
import { mockResources } from '../lib/supabase';

const VideosPage: React.FC = () => {
  // Filter for YouTube videos
  const videoResources = mockResources.filter(resource => resource.category === 'youtube');

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Education Videos
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Watch expert tutorials, case studies, and insights about implementing 
            artificial intelligence in educational environments.
          </p>
        </div>
      </section>

      {/* Video Resources Grid */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FloatingCardGrid 
            resources={videoResources}
            allowedCategories={['youtube']}
            showFilters={true}
          />
        </div>
      </section>
    </div>
  );
};

export default VideosPage;