import { useEffect } from "react";

// Activates .reveal elements as they scroll into view
export const useRevealOnScroll = () => {
  useEffect(() => {
    const activate = (el: Element) => el.classList.add("in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activate(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    const observe = () => {
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
        observer.observe(el);
      });
    };

    // Initial pass
    requestAnimationFrame(observe);

    // Watch for dynamically added elements
    const mutation = new MutationObserver(observe);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);
};
