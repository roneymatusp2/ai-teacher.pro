import React from 'react';
import { motion } from 'framer-motion';
import { Course } from '../data/courses';

interface CourseCardProps {
  course: Course;
  isPortuguese?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, isPortuguese = false }) => {
  const getLevelColor = (level: Course['level']) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'advanced':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    }
  };

  const getCategoryIcon = (category: Course['category']) => {
    switch (category) {
      case 'university':
        return '🎓';
      case 'tech-giant':
        return '💻';
      case 'education-platform':
        return '📚';
      case 'organization':
        return '🏛️';
      case 'open-source':
        return '🔓';
    }
  };

  const title = isPortuguese ? course.titlePT : course.title;
  const description = isPortuguese ? course.descriptionPT : course.description;
  const duration = isPortuguese ? course.durationPT : course.duration;
  const cost = isPortuguese ? course.costPT : course.cost;
  const features = isPortuguese ? course.featuresPT : course.features;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{getCategoryIcon(course.category)}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(course.level)}`}>
                {isPortuguese ? 
                  (course.level === 'beginner' ? 'Iniciante' : 
                   course.level === 'intermediate' ? 'Intermediário' : 'Avançado') 
                  : course.level.charAt(0).toUpperCase() + course.level.slice(1)}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {course.provider} • {course.platform}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3 mb-4">
          {description}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-600 dark:text-gray-400">{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-600 dark:text-gray-400">{cost}</span>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="px-6 pb-4 flex-1">
        <div className="space-y-2">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
            </div>
          ))}
          {features.length > 3 && (
            <span className="text-sm text-gray-500 dark:text-gray-500 italic">
              +{features.length - 3} {isPortuguese ? 'mais recursos' : 'more features'}
            </span>
          )}
        </div>
      </div>

      {/* Action Button */}
      <div className="p-6 pt-4 mt-auto">
        <a
          href={course.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
        >
          {isPortuguese ? 'Acessar Curso' : 'Access Course'}
        </a>
      </div>
    </motion.div>
  );
};

export default CourseCard;