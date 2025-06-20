import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import AdvancedHeader from './components/AdvancedHeader';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ToolsPage from './pages/ToolsPage';
import LearnPage from './pages/LearnPage';
import LibraryPage from './pages/LibraryPage';
import VideosPage from './pages/VideosPage';
import AboutPage from './pages/AboutPage';
import BookResourcePage from './pages/BookResourcePage';
import AnimatedBackground from './components/AnimatedBackground';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import { useToast } from './components/ToastNotification';
import { useAnalytics, usePerformanceMonitoring } from './hooks/useAnalytics';
import './styles/globals.css';

function App() {
  const location = useLocation();
  const { ToastContainer } = useToast();
  
  // Analytics and performance monitoring
  useAnalytics();
  usePerformanceMonitoring();

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

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
        {/* Global Animated Background */}
        <AnimatedBackground />
        
        {/* Advanced Header */}
        <AdvancedHeader />
        
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
                <Route path="/" element={<HomePage />} />
                <Route path="/tools" element={<ToolsPage />} />
                <Route path="/learn" element={<LearnPage />} />
                <Route path="/library" element={<LibraryPage />} />
                <Route path="/videos" element={<VideosPage />} />
                <Route path="/about" element={<AboutPage />} />
                {/* Book exclusive resources - hidden routes */}
                <Route path="/*" element={<BookResourcePage />} />
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