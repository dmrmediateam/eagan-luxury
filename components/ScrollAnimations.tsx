'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // Function to initialize and observe elements
    const initializeAnimations = () => {
      // Create Intersection Observer for smooth scroll animations
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            }
          });
        },
        {
          threshold: 0.05, // Trigger when 5% visible (more sensitive)
          rootMargin: '0px 0px -50px 0px', // Reduced from -80px for better triggering
        }
      );

      // Support for legacy animate-on-scroll class
      const legacyObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      // Observe all elements that need scroll animations
      const elementsToAnimate = document.querySelectorAll('.scroll-animate');
      const legacyElements = document.querySelectorAll('.animate-on-scroll');

      // Immediately trigger animations for elements already in viewport
      elementsToAnimate.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInViewport) {
          // Add a small delay to ensure smooth appearance
          setTimeout(() => {
            el.classList.add('in-view');
          }, 100);
        }
        
        observer.observe(el);
      });

      legacyElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInViewport) {
          setTimeout(() => {
            el.classList.add('is-visible');
          }, 100);
        }
        
        legacyObserver.observe(el);
      });

      // MutationObserver to watch for dynamically added elements
      const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
              const element = node as Element;
              
              // Check if the added node itself needs animation
              if (element.classList.contains('scroll-animate')) {
                const rect = element.getBoundingClientRect();
                const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isInViewport) {
                  setTimeout(() => {
                    element.classList.add('in-view');
                  }, 100);
                }
                observer.observe(element);
              }
              
              if (element.classList.contains('animate-on-scroll')) {
                const rect = element.getBoundingClientRect();
                const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isInViewport) {
                  setTimeout(() => {
                    element.classList.add('is-visible');
                  }, 100);
                }
                legacyObserver.observe(element);
              }
              
              // Check children of the added node
              const childElements = element.querySelectorAll('.scroll-animate');
              const legacyChildElements = element.querySelectorAll('.animate-on-scroll');
              
              childElements.forEach((child) => {
                const rect = child.getBoundingClientRect();
                const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isInViewport) {
                  setTimeout(() => {
                    child.classList.add('in-view');
                  }, 100);
                }
                observer.observe(child);
              });
              
              legacyChildElements.forEach((child) => {
                const rect = child.getBoundingClientRect();
                const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isInViewport) {
                  setTimeout(() => {
                    child.classList.add('is-visible');
                  }, 100);
                }
                legacyObserver.observe(child);
              });
            }
          });
        });
      });

      // Start observing the document body for changes
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });

      // Cleanup function
      return () => {
        observer.disconnect();
        legacyObserver.disconnect();
        mutationObserver.disconnect();
      };
    };

    // Small delay to ensure DOM is fully ready after route change
    const timeoutId = setTimeout(() => {
      const cleanup = initializeAnimations();
      
      // Store cleanup function for later use
      return cleanup;
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname]); // Re-run whenever the route changes

  return null; // This component doesn't render anything
}
