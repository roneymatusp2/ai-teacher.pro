import React from 'react';
import FloatingCardGrid from '../components/FloatingCardGrid';
import { mockResources } from '../lib/supabase';

const ToolsPage: React.FC = () => {
  // Filter for AI tools only
  const aiTools = mockResources.filter(resource => resource.category === 'ai_tool');

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Tools for Teachers
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Discover cutting-edge artificial intelligence tools designed specifically for educators. 
            Transform your teaching practice with technology that actually works.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FloatingCardGrid 
            resources={aiTools}
            allowedCategories={['ai_tool']}
            showFilters={true}
          />
        </div>
      </section>
    </div>
  );
};

export default ToolsPage;