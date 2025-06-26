import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import LanguageToggle from './LanguageToggle';
import SearchModal from './SearchModal';
import { getCurrentLanguage, getTranslation } from '../lib/i18n';

const AdvancedHeaderPTBR: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const currentLang = getCurrentLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const getNavItems = () => {
    const baseItems = [
      { label: getTranslation(currentLang, 'nav.home'), href: '/', icon: '🏠' },
      { label: getTranslation(currentLang, 'nav.tools'), href: '/tools', icon: '🤖' },
      { label: getTranslation(currentLang, 'nav.exploreTools'), href: 'https://ai-teachers.pro/tools', icon: '🚀', external: true },
      { label: getTranslation(currentLang, 'nav.learn'), href: '/learn', icon: '📚' },
      { label: getTranslation(currentLang, 'nav.library'), href: '/library', icon: '📖' },
      { label: getTranslation(currentLang, 'nav.videos'), href: '/videos', icon: '🎥' },
      { label: getTranslation(currentLang, 'nav.about'), href: '/about', icon: 'ℹ️' },
      { label: getTranslation(currentLang, 'nav.bookResources'), href: '/book-resources', icon: '📚' }
    ];

    return baseItems.map(item => ({
      ...item,
      href: item.external ? item.href : (currentLang === 'pt-br' ? `/pt-br${item.href}` : item.href)
    }));
  };

  const navItems = getNavItems();

  const headerVariants = {
    top: {
      backgroundColor: "rgba(255, 255, 255, 0)",
      backdropFilter: "blur(0px)",
      borderBottom: "1px solid transparent",
      padding: "1.25rem 0"
    },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(229, 231, 235, 0.3)",
      padding: "0.875rem 0",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        animate={isScrolled ? "scrolled" : "top"}
        className="fixed top-0 left-0 right-0 z-50 dark:bg-gray-900/95 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to={currentLang === 'pt-br' ? '/pt-br' : '/'} className="flex items-center space-x-3">
                <motion.div 
                  className="relative w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center overflow-hidden shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 4px 20px rgba(34, 197, 94, 0.3)",
                      "0 4px 20px rgba(59, 130, 246, 0.3)",
                      "0 4px 20px rgba(34, 197, 94, 0.3)",
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <svg className="w-6 h-6 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </motion.div>
                
                <div className="hidden sm:block">
                  <h1 className="text-lg font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    AI Teacher Pro
                  </h1>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.external ? (
                    <a
                      href={item.href}
                      className="relative px-3 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-1.5 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <span className="text-xs">{item.icon}</span>
                      <span>{item.label}</span>
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-1.5 text-sm ${
                        location.pathname === item.href
                          ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-md'
                          : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <span className="text-xs">{item.icon}</span>
                      <span>{item.label}</span>
                      
                      {location.pathname === item.href && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg -z-10"
                          layoutId="navbar-active"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              {/* Search Button */}
              <motion.button
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </motion.button>

              <LanguageToggle />
              <DarkModeToggle />

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                  </svg>
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0, 
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700"
        >
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ x: -50, opacity: 0 }}
                animate={{ 
                  x: isMenuOpen ? 0 : -50, 
                  opacity: isMenuOpen ? 1 : 0 
                }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                {item.external ? (
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 px-3 py-2.5 rounded-lg font-medium transition-all duration-200 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span>{item.label}</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                      location.pathname === item.href
                        ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default AdvancedHeaderPTBR;