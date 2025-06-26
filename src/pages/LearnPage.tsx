import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { coursesData, getFeaturedCourses, getCoursesByLevel, searchCourses } from '../data/coursesData';
import { aiToolsData, aiToolCategories } from '../data/aiToolsData';

const LearnPage: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredCourses = getFeaturedCourses();
  
  const getFilteredCourses = () => {
    let courses = selectedLevel === 'all' ? coursesData : getCoursesByLevel(selectedLevel);
    
    if (searchQuery) {
      courses = courses.filter(course => 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    return courses;
  };

  const filteredCourses = getFilteredCourses();

  const CourseCard: React.FC<{ course: any; featured?: boolean }> = ({ course, featured = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`glass-card p-6 h-full flex flex-col hover:shadow-xl transition-all duration-300 ${
        featured ? 'ring-2 ring-purple-400 ring-opacity-50' : ''
      }`}
    >
      {featured && (
        <div className="mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            ✨ Featured
          </span>
        </div>
      )}
      
      <div className="mb-4">
        <img 
          src={course.coverImage} 
          alt={course.title}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      
      <div className="flex-1">
        <div className="mb-2">
          <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
            {course.provider} • {course.platform}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {course.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {course.description}
        </p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {course.tags.slice(0, 3).map((tag: string, index: number) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <div>⏱️ {course.duration}</div>
            <div>💰 {course.cost}</div>
          </div>
          <div className={`px-2 py-1 text-xs rounded-full font-medium ${
            course.level === 'beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
            course.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
            'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
          }`}>
            {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
          </div>
        </div>
        
        <a
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
        >
          Start Learning
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </motion.div>
  );

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Learn AI for Education
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Professional development courses and certifications to help you master 
            artificial intelligence in educational settings.
          </p>
          
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-0 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <svg className="absolute right-3 top-3 w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      {featuredCourses.length > 0 && !searchQuery && (
        <section className="py-12 bg-purple-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Featured Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} featured={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter Tabs */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              {[
                { key: 'all', label: 'All Levels' },
                { key: 'beginner', label: 'Beginner' },
                { key: 'intermediate', label: 'Intermediate' },
                { key: 'advanced', label: 'Advanced' }
              ].map((level) => (
                <button
                  key={level.key}
                  onClick={() => setSelectedLevel(level.key as any)}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                    selectedLevel === level.key
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {level.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                No courses found matching your criteria.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <p className="text-gray-600 dark:text-gray-300">
                  Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
                  {selectedLevel !== 'all' && ` for ${selectedLevel} level`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* AI Tools Quick Access Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Essential AI Tools for Teachers
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Explore our comprehensive collection of {aiToolsData.length}+ AI tools specifically 
              curated for educational use. From lesson planning to student assessment.
            </p>
          </div>
          
          {/* Featured Tools Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {aiToolsData.slice(0, 3).map((tool) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                  <p className="text-green-100 text-sm line-clamp-2">{tool.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tool.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-white/20 text-white rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={tool.url}
                  className="inline-flex items-center text-white hover:text-green-200 transition-colors duration-200"
                >
                  Try Tool
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
          
          {/* Tool Categories */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {aiToolCategories.map((category) => (
              <div key={category.id} className="text-center">
                <div className="bg-white/20 rounded-lg p-4 mb-2">
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <div className="text-white font-medium text-sm">{category.name}</div>
                  <div className="text-green-200 text-xs">{category.tools.length} tools</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/tools"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200"
            >
              Explore All AI Tools
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Teaching?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Start with any of these carefully curated courses and join thousands of educators 
            already using AI to enhance their teaching practice.
          </p>
          <a
            href="/about"
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200"
          >
            Learn More About AI Teacher Pro
          </a>
        </div>
      </section>
    </div>
  );
};

export default LearnPage;