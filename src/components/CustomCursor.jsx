import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isBig, setIsBig] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const cursorRxSpring = useSpring(cursorX, { damping: 15, stiffness: 100, mass: 1 });
  const cursorRySpring = useSpring(cursorY, { damping: 15, stiffness: 100, mass: 1 });

  useEffect(() => {
    // Check if device is mobile or touch-based
    if (window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches) {
      setIsMobile(true);
      return; // Don't attach listeners
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.hover-big')
      ) {
        setIsBig(true);
      } else {
        setIsBig(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          zIndex: 99999,
          pointerEvents: 'none',
          width: isBig ? 56 : 12,
          height: isBig ? 56 : 12,
          borderRadius: '50%',
          background: 'var(--accent)',
          left: 0,
          top: 0,
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          mixBlendMode: 'difference',
          transition: 'width 0.15s, height 0.15s'
        }}
      />
      <motion.div
        style={{
          position: 'fixed',
          zIndex: 99998,
          pointerEvents: 'none',
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1.5px solid rgba(232,255,71,.4)',
          left: 0,
          top: 0,
          x: cursorRxSpring,
          y: cursorRySpring,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isBig ? 0 : 1,
          transition: 'opacity 0.2s'
        }}
      />
    </>
  );
}
