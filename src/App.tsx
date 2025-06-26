import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AdvancedHeader from './components/AdvancedHeader';
import AdvancedHeaderPTBR from './components/AdvancedHeaderPTBR';
import Footer from './components/Footer';

// English Pages
import HomePage from './pages/HomePage';
import ToolsPage from './pages/ToolsPage';
import LearnPage from './pages/LearnPage';
import LibraryPage from './pages/LibraryPage';
import VideosPage from './pages/VideosPage';
import AboutPage from './pages/AboutPage';
import BookResourcesPage from './pages/BookResourcesPage';

// Portuguese Pages
import HomePagePTBR from './pages/pt-br/HomePage';
import ToolsPagePTBR from './pages/pt-br/ToolsPage';
import LearnPagePTBR from './pages/pt-br/LearnPage';
import LibraryPagePTBR from './pages/pt-br/LibraryPage';
import VideosPagePTBR from './pages/pt-br/VideosPage';
import AboutPagePTBR from './pages/pt-br/AboutPage';
import BookResourcesPagePTBR from './pages/pt-br/BookResourcesPage';

// Portuguese Chapter Pages
import PlatformsPagePTBR from './pages/pt-br/chapter-pages/PlatformsPage';
import PlanningToolkitPagePTBR from './pages/pt-br/chapter-pages/PlanningToolkitPage';

import AnimatedBackground from './components/AnimatedBackground';
import AnimatedBackgroundPTBR from './components/AnimatedBackgroundPTBR';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import { useToast } from './components/ToastNotification';
import { useAnalytics, usePerformanceMonitoring } from './hooks/useAnalytics';
import { getCurrentLanguage } from './lib/i18n';
import './styles/globals.css';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { ToastContainer } = useToast();
  const currentLang = getCurrentLanguage();
  
  // Analytics and performance monitoring
  useAnalytics();
  usePerformanceMonitoring();

  // Handle redirection from #catalogue to /tools
  useEffect(() => {
    const handleCatalogueRedirect = () => {
      const currentPath = window.location.pathname;
      const currentHash = window.location.hash;
      
      // Check for #catalogue in URL (from any path)
      if (currentHash === '#catalogue') {
        // Clear the hash from URL
        window.history.replaceState(null, '', currentPath);
        
        // Navigate to tools page based on current language
        if (currentPath.startsWith('/pt-br') || currentLang === 'pt-br') {
          navigate('/pt-br/tools', { replace: true });
        } else {
          navigate('/tools', { replace: true });
        }
      }
      
      // Also handle direct /hub#catalogue URLs
      if (currentPath.includes('/hub') && currentHash === '#catalogue') {
        window.history.replaceState(null, '', currentPath.replace('/hub', ''));
        
        if (currentPath.startsWith('/pt-br') || currentLang === 'pt-br') {
          navigate('/pt-br/tools', { replace: true });
        } else {
          navigate('/tools', { replace: true });
        }
      }
    };
    
    // Run on mount
    handleCatalogueRedirect();
    
    // Also listen for hash changes
    window.addEventListener('hashchange', handleCatalogueRedirect);
    
    return () => {
      window.removeEventListener('hashchange', handleCatalogueRedirect);
    };
  }, [navigate, currentLang]);

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.98,
      y: 10,
      filter: 'blur(10px)',
    },
    in: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
    },
    out: {
      opacity: 0,
      scale: 1.02,
      y: -10,
      filter: 'blur(10px)',
    }
  };

  const pageTransition = {
    type: "tween",
    ease: [0.4, 0, 0.2, 1],
    duration: 0.4
  };

  // Determine which header and background to show based on language
  const Header = currentLang === 'pt-br' ? AdvancedHeaderPTBR : AdvancedHeader;
  const Background = currentLang === 'pt-br' ? AnimatedBackgroundPTBR : AnimatedBackground;

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
        {/* Global Animated Background */}
        <Background />
        
        {/* Advanced Header */}
        <Header />
        
        {/* Main content with advanced page transitions */}
        <main className="relative z-10 pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="min-h-screen"
            >
              <Routes location={location}>
                {/* English Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/tools" element={<ToolsPage />} />
                <Route path="/learn" element={<LearnPage />} />
                <Route path="/library" element={<LibraryPage />} />
                <Route path="/videos" element={<VideosPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/book-resources" element={<BookResourcesPage />} />
                
                {/* Redirect routes for legacy URLs */}
                <Route path="/hub" element={<ToolsPage />} />
                
                {/* English Book-specific routes */}
                <Route path="/platforms" element={<BookResourcesPage />} />
                <Route path="/chapter3_ex1" element={<BookResourcesPage />} />
                <Route path="/chapter3_ex2" element={<BookResourcesPage />} />
                <Route path="/chapter3_ex3" element={<BookResourcesPage />} />
                <Route path="/chapter3_ex4" element={<BookResourcesPage />} />
                <Route path="/chapter3_ex5" element={<BookResourcesPage />} />
                <Route path="/chapter3_ex6" element={<BookResourcesPage />} />
                <Route path="/chapter3_ex7" element={<BookResourcesPage />} />
                <Route path="/planning-toolkit" element={<BookResourcesPage />} />
                <Route path="/chapter5_ex1" element={<BookResourcesPage />} />
                <Route path="/education-discounts" element={<BookResourcesPage />} />
                <Route path="/chapter6-ess-prompt" element={<BookResourcesPage />} />
                <Route path="/chapter6-bolt" element={<BookResourcesPage />} />
                <Route path="/chapter6-lovable" element={<BookResourcesPage />} />
                <Route path="/chapter6-base44" element={<BookResourcesPage />} />
                <Route path="/chapter6-create" element={<BookResourcesPage />} />
                <Route path="/chapter6-replit" element={<BookResourcesPage />} />
                <Route path="/chapter6-manus" element={<BookResourcesPage />} />
                <Route path="/chapter6-resources" element={<BookResourcesPage />} />
                <Route path="/ethics-resources" element={<BookResourcesPage />} />
                <Route path="/future-ready" element={<BookResourcesPage />} />

                {/* Portuguese Routes */}
                <Route path="/pt-br" element={<HomePagePTBR />} />
                <Route path="/pt-br/tools" element={<ToolsPagePTBR />} />
                <Route path="/pt-br/learn" element={<LearnPagePTBR />} />
                <Route path="/pt-br/library" element={<LibraryPagePTBR />} />
                <Route path="/pt-br/videos" element={<VideosPagePTBR />} />
                <Route path="/pt-br/about" element={<AboutPagePTBR />} />
                <Route path="/pt-br/book-resources" element={<BookResourcesPagePTBR />} />

                {/* Redirect routes for legacy URLs */}
                <Route path="/pt-br/hub" element={<ToolsPagePTBR />} />

                {/* Portuguese Book-specific routes */}
                <Route path="/pt-br/platforms" element={<PlatformsPagePTBR />} />
                <Route path="/pt-br/chapter3-ex1" element={<BookResourcesPagePTBR />} />
                <Route path="/pt-br/chapter3-ex2" element={<BookResourcesPagePTBR />} />
                <Route path="/pt-br/chapter3-ex3" element={<BookResourcesPagePTBR />} />
                <Route path="/pt-br/chapter3-ex4" element={<BookResourcesPagePTBR />} />
                <Route path="/pt-br/chapter3-ex5" element={<BookResourcesPagePTBR />} />
                <Route path="/pt-br/chapter3-ex6" element={<BookResourcesPagePTBR />} />
                <Route path="/pt-br/chapter3-ex7" element={<BookResourcesPagePTBR />} />
                <Route path="/pt-br/planning-toolkit" element={<PlanningToolkitPagePTBR />} />
                <Route path="/pt-br/chapter5-ex1" element={<BookResourcesPagePTBR />} />
                <Route path="/pt-br/education-discounts" element={<BookResourcesPagePTBR />} />
                <Route path="/pt-br/chapter6-ess-prompt" element={<BookResourcesPagePTBR />} />
                <Route path="/pt-br/chapter6-bolt" element={<BookResourcesPagePTBR />} />
                <Route path="/pt-br/chapter6-lovable" element={<BookResourcesPagePTBR />} />
                <Route path="/pt-br/chapter6-base44" element={<BookResourcesPagePTBR />} />
                <Route path="/pt-br/chapter6-create" element={<BookResourcesPagePTBR />} />
                <Route path="/pt-br/chapter6-replit" element={<BookResourcesPagePTBR />} />
                <Route path="/pt-br/chapter6-manus" element={<BookResourcesPagePTBR />} />
                <Route path="/pt-br/chapter6-resources" element={<BookResourcesPagePTBR />} />
                <Route path="/pt-br/ethics-resources" element={<BookResourcesPagePTBR />} />
                <Route path="/pt-br/future-ready" element={<BookResourcesPagePTBR />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer with entrance animation */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative z-10"
        >
          <Footer />
        </motion.div>

        {/* Toast Notifications */}
        <ToastContainer />
        
        {/* Performance Monitor (development/poor performance) */}
        <PerformanceMonitor />
      </div>
    </ErrorBoundary>
  );
}

export default App;