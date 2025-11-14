// Scroll-triggered animation utility
// Auto-triggers fade-in-from-left animations when elements come into view

export function initScrollAnimations() {
  if (typeof window === 'undefined') return;

  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px', // Start animation slightly before element is in view
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Optional: Stop observing after animation triggers
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with animate-on-scroll class
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  animateElements.forEach((element) => {
    observer.observe(element);
  });

  return observer;
}

// Alternative: Add animation class to specific selectors
export function animateOnScroll(selector: string) {
  if (typeof window === 'undefined') return;

  const elements = document.querySelectorAll(selector);
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay based on index
        setTimeout(() => {
          entry.target.classList.add('fade-in-left');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach((element) => {
    observer.observe(element);
  });
}

// Usage Examples:
// 
// Add to any component:
// <div className="animate-on-scroll">Content here</div>
//
// Or target specific elements:
// animateOnScroll('h1, h2, h3, p, .card');

