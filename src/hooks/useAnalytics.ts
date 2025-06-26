import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const useAnalytics = () => {
  const location = useLocation();

  // Track page views
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  const trackPageView = (path: string) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: path,
      });
    }

    // Custom analytics
    console.log('📊 Page View:', path);
  };

  const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }

    // Custom analytics
    console.log('📊 Event:', { action, category, label, value });
  };

  const trackResourceClick = (resourceId: string, resourceTitle: string, category: string) => {
    trackEvent({
      action: 'resource_click',
      category: 'Resources',
      label: `${category}:${resourceTitle}`,
    });
  };

  const trackSearchQuery = (query: string, resultsCount: number) => {
    trackEvent({
      action: 'search',
      category: 'Search',
      label: query,
      value: resultsCount,
    });
  };

  const trackNewsClick = (articleId: string, articleTitle: string) => {
    trackEvent({
      action: 'news_click',
      category: 'AI News',
      label: articleTitle,
    });
  };

  const trackQRGenerate = (resourceId: string, resourceTitle: string) => {
    trackEvent({
      action: 'qr_generate',
      category: 'Sharing',
      label: resourceTitle,
    });
  };

  const trackNewsletterSignup = (email: string) => {
    trackEvent({
      action: 'newsletter_signup',
      category: 'Engagement',
      label: 'Footer Newsletter',
    });
  };

  return {
    trackEvent,
    trackResourceClick,
    trackSearchQuery,
    trackNewsClick,
    trackQRGenerate,
    trackNewsletterSignup,
  };
};

// Performance monitoring
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      // CLS (Cumulative Layout Shift)
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          console.log('📊 CLS:', (entry as any).value);
        }
      }).observe({ entryTypes: ['layout-shift'] });

      // LCP (Largest Contentful Paint)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('📊 LCP:', lastEntry.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // FID (First Input Delay)
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          console.log('📊 FID:', (entry as any).processingStart - entry.startTime);
        }
      }).observe({ entryTypes: ['first-input'] });
    }

    // Monitor bundle size
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      console.log('📊 Network:', {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
      });
    }
  }, []);
};