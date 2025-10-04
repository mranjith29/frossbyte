"use client";

import { useEffect, useRef } from 'react';

export default function ExternalForm() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://eocampaign1.com/form/277d4368-a0f4-11f0-9232-b11b6b09a9fe.js';
    script.async = true;
    script.setAttribute('data-form', '277d4368-a0f4-11f0-9232-b11b6b09a9fe');

    const target = containerRef.current ?? document.body;
    target.appendChild(script);

    return () => {
      try {
        if (target && script.parentNode === target) target.removeChild(script);
      } catch (e) {
        // ignore cleanup errors
      }
    };
  }, []);

  return (
  <div className="flex justify-center px-4 pt-6 pb-2 mt-12 mb-6">
      <div className="w-full max-w-sm">
        <div className="w-full border-t border-b border-gray-200 dark:border-gray-700 px-3 pt-3 pb-2" ref={containerRef} id="form-container">
          {/* Form will be injected here */}
        </div>
      </div>
    </div>
  );
}
