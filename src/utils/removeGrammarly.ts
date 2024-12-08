'use client';

export function removeGrammarlyAttributes() {
  if (typeof window !== 'undefined') {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          const node = mutation.target as HTMLElement;
          if (node.hasAttribute('data-gr-ext-installed') || 
              node.hasAttribute('data-new-gr-c-s-check-loaded')) {
            node.removeAttribute('data-gr-ext-installed');
            node.removeAttribute('data-new-gr-c-s-check-loaded');
          }
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ['data-gr-ext-installed', 'data-new-gr-c-s-check-loaded']
    });

    return () => observer.disconnect();
  }
}