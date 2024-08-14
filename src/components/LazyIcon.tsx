import React, { useEffect, useRef, useState } from 'react'

interface LazyIconProps {
  children: React.ReactNode
}


const LazyIcon: React.FC<LazyIconProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (iconRef.current) {
      observer.observe(iconRef.current);
    }

    return () => {
      if (iconRef.current) {
        observer.unobserve(iconRef.current);
      }
    };
  }, []);

  return <div ref={iconRef} className="icon-container">{isVisible ? children : null}</div>;
};

export default LazyIcon