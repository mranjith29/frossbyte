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
    <div className="flex justify-center px-4">
      <div ref={containerRef} id="form-container" className="w-full max-w-sm p-4">
        {/* Form will be injected here */}
      </div>
    </div>
  );
}
