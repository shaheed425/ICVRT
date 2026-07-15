import React from 'react';

export default function FloatingBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blob 1 - Top Left Royal Blue */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary/15 glow-blob animate-float" />
      
      {/* Blob 2 - Middle Right Emerald */}
      <div className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-accent/10 glow-blob animate-float-slow" />
      
      {/* Blob 3 - Bottom Left Navy/Royal */}
      <div className="absolute bottom-[10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-secondary/10 glow-blob animate-pulse-subtle" />
      
      {/* Blob 4 - Center Soft Teal */}
      <div className="absolute top-[60%] left-[40%] w-[35vw] h-[35vw] rounded-full bg-emerald-500/5 glow-blob animate-float" />
    </div>
  );
}
