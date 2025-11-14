// Scroll-based animation handler for luxury fade-in effects
// This makes elements animate into view as you scroll

export function initScrollAnimations() {
  if (typeof window === 'undefined') return;

  // Create Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          // Optional: Stop observing after animation (one-time animation)
          // observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: '0px 0px -50px 0px', // Start animation slightly before fully visible
    }
  );

  // Observe all elements with scroll-animate class
  const animateElements = document.querySelectorAll('.scroll-animate');
  animateElements.forEach((el) => observer.observe(el));

  // Also handle animate-on-scroll class (legacy support)
  const legacyElements = document.querySelectorAll('.animate-on-scroll');
  const legacyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  legacyElements.forEach((el) => legacyObserver.observe(el));
}

// Auto-initialize on DOM ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
  } else {
    initScrollAnimations();
  }
}

