import { useEffect, useRef } from 'react';

/**
 * Custom React hook for WCAG 2.1 compliant focus management and keyboard trapping inside modal dialogs.
 * 
 * - Traps Tab / Shift+Tab navigation strictly inside the container
 * - Automatically moves focus to the first focusable element when opened
 * - Restores focus to the trigger element when the modal is closed
 * - Closes modal on Escape key press
 */
export function useFocusTrap(isOpen, onClose) {
  const containerRef = useRef(null);
  const previousActiveElementRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Remember the previously active element to restore focus on exit
    previousActiveElementRef.current = document.activeElement;

    const container = containerRef.current;
    if (!container) return;

    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled]):not([type="hidden"])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ');

    // Find all focusable children inside container
    const getFocusableElements = () => {
      if (!container) return [];
      return Array.from(container.querySelectorAll(focusableSelectors)).filter(
        (el) => el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length > 0
      );
    };

    // Auto-focus the first element (or close button/input) with a microtask delay
    const timer = setTimeout(() => {
      const focusables = getFocusableElements();
      if (focusables.length > 0) {
        // Prefer the first input or primary button if available, or first element
        const preferred = focusables.find(
          (el) => el.tagName === 'INPUT' || el.classList.contains('btn-auth-primary-submit') || el.classList.contains('btn-exam-proceed')
        );
        (preferred || focusables[0]).focus();
      } else {
        container.focus();
      }
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        if (onClose) onClose();
        return;
      }

      if (e.key !== 'Tab') return;

      const focusables = getFocusableElements();
      if (focusables.length === 0) {
        e.preventDefault();
        return;
      }

      const firstElement = focusables[0];
      const lastElement = focusables[focusables.length - 1];

      if (e.shiftKey) {
        // Shift + Tab: Cycle backwards
        if (document.activeElement === firstElement || !container.contains(document.activeElement)) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab: Cycle forwards
        if (document.activeElement === lastElement || !container.contains(document.activeElement)) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown);
      // Restore focus to the element that was focused before opening the modal
      if (previousActiveElementRef.current && typeof previousActiveElementRef.current.focus === 'function') {
        try {
          previousActiveElementRef.current.focus();
        } catch {
          // Ignore if the element is no longer in the DOM
        }
      }
    };
  }, [isOpen, onClose]);

  return containerRef;
}
