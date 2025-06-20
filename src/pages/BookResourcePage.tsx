import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Download, ExternalLink, Users, Video, FileText, Settings } from 'lucide-react';
import { findResourceByPath } from '../data/bookResources';

const BookResourcePage: React.FC = () => {
  const { '*': path } = useParams();
  const [resource, setResource] = useState(findResourceByPath('/' + path));

  useEffect(() => {
    const foundResource = findResourceByPath('/' + path);
    setResource(foundResource);
  }, [path]);

  if (!resource) {
    return <Navigate to="/" replace />;
  }

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'guide':
        return <FileText className="w-5 h-5" />;
      case 'tool':
        return <Settings className="w-5 h-5" />;
      case 'template':
        return <Download className="w-5 h-5" />;
      case 'video':
        return <Video className="w-5 h-5" />;
      case 'community':
        return <Users className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center gap-2 text-purple-600">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-medium">Book Exclusive Resource</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Resource Header */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="mb-4">
              <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                {resource.chapter}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{resource.title}</h1>
            <p className="text-xl text-gray-600">{resource.description}</p>
          </div>

          {/* Overview Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{resource.content.overview}</p>
          </div>

          {/* Features Grid */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resource.content.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resource.content.resources.map((res, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                      {getResourceIcon(res.type)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{res.title}</h3>
                      <p className="text-gray-600 mb-4">{res.description}</p>
                      {res.url && (
                        <a
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
                        >
                          <span>Access Resource</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Get the Complete Book</h3>
              <p className="text-lg mb-6 opacity-90">
                Access all exclusive resources and unlock the full potential of AI in your teaching
              </p>
              <a
                href="https://ai-teachers.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                <span>Learn More About the Book</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default BookResourcePage;