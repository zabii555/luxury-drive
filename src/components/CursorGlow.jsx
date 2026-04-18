import { useEffect, useState } from 'react';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Default cursor visible hai — kuch nahi karna */}
      {/* Background glow effect */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255,107,53,0.08) 0%, rgba(255,107,53,0) 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: `translate(${position.x - 150}px, ${position.y - 150}px)`,
          transition: 'transform 0.08s ease',
          zIndex: 999,
        }}
      />
    </>
  );
};

export default CursorGlow;