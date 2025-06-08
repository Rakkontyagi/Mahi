import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  delay?: number;
  duration?: number;
  className?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  className = ''
}) => {
  const getInitial = () => {
    switch (direction) {
      case 'down': return { y: -50, opacity: 0 };
      case 'left': return { x: 50, opacity: 0 };
      case 'right': return { x: -50, opacity: 0 };
      case 'scale': return { scale: 0.8, opacity: 0 };
      case 'fade': return { opacity: 0 };
      default: return { y: 50, opacity: 0 };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case 'scale': return { scale: 1, opacity: 1 };
      case 'fade': return { opacity: 1 };
      default: return { x: 0, y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      {children}
    </motion.div>
  );
};

// Cursor follower component
export const CursorFollower: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);
  const cursorRef = React.useRef<HTMLDivElement>(null);
  const animationFrameId = React.useRef<number | null>(null);

  React.useEffect(() => {
    // Check for touch device only on client-side after mount
    const touchCheck = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touchCheck);
    if (touchCheck) {
      setIsVisible(false); // Ensure it's not visible on touch devices
      return; // Don't attach mouse listeners
    }

    let lastPosition = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      lastPosition = { x: e.clientX, y: e.clientY };
      if (!animationFrameId.current) {
        animationFrameId.current = requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.left = `${lastPosition.x}px`;
            cursorRef.current.style.top = `${lastPosition.y}px`;
            setIsVisible(true); // Make visible on first move after potential initial hide
          }
          animationFrameId.current = null;
        });
      }
    };

    const handleMouseEnter = () => {
      if (!isTouchDevice) setIsVisible(true);
    };
    const handleMouseLeave = () => {
      if (!isTouchDevice) setIsVisible(false);
    };

    const handleElementHover = (e: Event) => {
      if (isTouchDevice) return;
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [role="button"], .hoverable')) {
        setIsHovering(true);
      }
    };

    const handleElementLeave = () => setIsHovering(false);

    if (isTouchDevice) return; // Don't add listeners if it's a touch device

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter); // Track mouse entering window
    document.addEventListener('mouseleave', handleMouseLeave); // Track mouse leaving window
    document.addEventListener('mouseover', handleElementHover);
    document.addEventListener('mouseout', handleElementLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseout', handleElementLeave);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isTouchDevice]); // Re-run if isTouchDevice changes (though it shouldn't after initial check)

  if (isTouchDevice) {
    return null; // Don't render anything on touch devices
  }

  return (
    <motion.div
      ref={cursorRef}
      className={`fixed pointer-events-none z-50 mix-blend-difference transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0' // Control visibility via opacity for smoother transitions
      }`}
      style={{ transform: 'translate(-50%, -50%)', willChange: 'left, top' }} // Hint browser for optimization
      animate={{
        scale: isHovering ? 2 : 1,
        backgroundColor: isHovering ? '#ffffff' : 'rgba(255, 255, 255, 0.5)'
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div className="w-4 h-4 bg-white rounded-full" />
    </motion.div>
  );
};