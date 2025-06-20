import React from 'react';
import FloatingCardGrid from '../components/FloatingCardGrid';
import { mockResources } from '../lib/supabase';

const LearnPage: React.FC = () => {
  // Filter for courses and certifications
  const learningResources = mockResources.filter(resource => 
    resource.category === 'course' || resource.category === 'certification'
  );

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Learn AI for Education
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Professional development courses and certifications to help you master 
            artificial intelligence in educational settings.
          </p>
        </div>
      </section>

      {/* Learning Resources Grid */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FloatingCardGrid 
            resources={learningResources}
            allowedCategories={['course', 'certification']}
            showFilters={true}
          />
        </div>
      </section>
    </div>
  );
};

export default LearnPage;