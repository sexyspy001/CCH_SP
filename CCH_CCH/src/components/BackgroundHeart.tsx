import { useEffect, useRef } from 'react';

export default function BackgroundHeart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const points: {x: number, y: number, z: number, size: number}[] = [];
    let attempts = 0;
    
    // Generate points for the 3D heart
    while (points.length < 2000 && attempts < 200000) {
      const eqX = (Math.random() - 0.5) * 3;
      const eqY = (Math.random() - 0.5) * 3;
      const eqZ = (Math.random() - 0.5) * 3;
      
      // 3D Heart equation
      const val = Math.pow(eqX * eqX + 2.25 * eqY * eqY + eqZ * eqZ - 1, 3) - eqX * eqX * eqZ * eqZ * eqZ - 0.1125 * eqY * eqY * eqZ * eqZ * eqZ;
      
      // Only keep points near the surface of the heart
      if (val < 0 && val > -0.4) {
        points.push({ 
          x: eqX, 
          y: eqZ, // eqZ is UP
          z: eqY, // eqY is DEPTH
          size: Math.random() * 2 + 0.5 
        });
      }
      attempts++;
    }

    let angleX = 0;
    let angleY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let time = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / width) * 2 - 1;
      mouseY = (e.clientY / height) * 2 - 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);
      
      // Target angles based on mouse position and time (auto-rotation)
      const targetAngleY = mouseX * Math.PI * 0.5 + time * 0.5;
      const targetAngleX = mouseY * Math.PI * 0.2;

      // Smooth interpolation
      angleY += (targetAngleY - angleY) * 0.05;
      angleX += (targetAngleX - angleX) * 0.05;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Scale based on screen size
      const scale = Math.min(width, height) * 0.3;
      const centerX = width / 2;
      const centerY = height / 2;

      // Project 3D points to 2D screen
      const projectedPoints = points.map(p => {
        // Rotate around Y axis
        let x1 = p.x * cosY - p.z * sinY;
        let y1 = p.y;
        let z1 = p.x * sinY + p.z * cosY;

        // Rotate around X axis
        let x2 = x1;
        let y2 = y1 * cosX - z1 * sinX;
        let z2 = y1 * sinX + z1 * cosX;

        // Breathing effect (pulsing)
        const breathScale = 1 + Math.sin(time * 3) * 0.03;

        return {
          screenX: centerX + x2 * scale * breathScale,
          screenY: centerY - y2 * scale * breathScale, // -y2 because screen Y goes down
          depth: z2,
          size: p.size
        };
      });

      // Sort by depth for proper rendering (painters algorithm)
      projectedPoints.sort((a, b) => a.depth - b.depth);

      // Draw points
      projectedPoints.forEach(p => {
        // Calculate size and opacity based on depth
        const depthNormalized = (p.depth + 1.5) / 3; // roughly 0 to 1
        const size = Math.max(0.1, p.size * (depthNormalized * 1.5 + 0.5));
        const alpha = Math.max(0.05, depthNormalized * 0.8);

        ctx.fillStyle = `rgba(234, 88, 12, ${alpha})`; // Tailwind orange-600
        ctx.beginPath();
        ctx.arc(p.screenX, p.screenY, size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ opacity: 0.15 }}
    />
  );
}
