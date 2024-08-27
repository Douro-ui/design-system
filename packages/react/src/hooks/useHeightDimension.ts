import React, { useEffect, useState, useRef } from 'react';

export const useHeightDimension = (
  isExpanded: boolean,
): { height: string; contentRef: React.RefObject<HTMLDivElement> } => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (contentRef.current) {
        setHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : '0px');
      }
    });

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, [isExpanded]);

  return { height, contentRef };
};
