'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Cursor() {
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Fast movement for the white dot
  const dotX = useSpring(x, {
    stiffness: 1500,
    damping: 80,
  });

  const dotY = useSpring(y, {
    stiffness: 1500,
    damping: 80,
  });

  // Slow movement for the outer ring
  const ringX = useSpring(x, {
    stiffness: 300,
    damping: 30,
  });

  const ringY = useSpring(y, {
    stiffness: 300,
    damping: 30,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    const hoverElements = document.querySelectorAll('a, button, .cursor-hover');

    const handleEnter = () => {
      setHovering(true);
    };

    const handleLeave = () => {
      setHovering(false);
    };

    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);

      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, [x, y]);
  return (
    <>
      {/* White dot */}
      <motion.div
        className="
          fixed
          top-0
          left-0
          h-2
          w-2
          rounded-full
          bg-white
          pointer-events-none
          z-[9999]
        "
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Outer circle */}
      <motion.div
        className="
            fixed
            top-0
            left-0
            w-8
            h-8
            rounded-full
            border
            border-white/40
            pointer-events-none
            z-[9998]
        "
        animate={{
          scale: hovering ? 2 : 1,
          borderColor: hovering
            ? 'rgba(59,130,246,0.8)'
            : 'rgba(255,255,255,0.4)',
        }}
        transition={{
          duration: 0.25,
          ease: 'easeOut',
        }}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
