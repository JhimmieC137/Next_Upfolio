"use client"
import React, { useEffect, useState, useRef, RefObject } from 'react';

interface ScrollProgressBarProps {
  barHeight: string;  // Height of the progress bar
  barWidth: string;   // Width of the progress bar
  parentRef: RefObject<HTMLDivElement>
}

const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({ barHeight, barWidth, parentRef}) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (): void => {
    const container = containerRef.current;
    if (container) {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      setScrollPosition(scrollPercent);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: 'relative',
        //   top: '50%',
        //   right: '20px',
          width: barWidth,
          height: barHeight,
          backgroundColor: '#f3f3f3',
          borderRadius: '10px',
          overflow: 'hidden',
          transform: 'translateY(0%)',
        }}
      >
        <div
          style={{
            width: '100%',
            height: `${scrollPosition}%`,
            backgroundColor: '#4caf50',
            position: 'absolute',
            // bottom: 0,
            transition: 'height 0.2s ease',
          }}
        ></div>
      </div>
    </>
  );
};

export default ScrollProgressBar;
