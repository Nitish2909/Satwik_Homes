import React from 'react';

export default function SatwikDesign() {
  const bgVideoUrl = "https://www.pexels.com/download/video/7578540/";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8 select-none">
      <div className="relative flex flex-col items-center justify-center w-full">
        {/* The video plays inside the text mask */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-6xl h-auto object-cover pointer-events-none"
          style={{
            // Increased viewBox to 1200x500 and font sizes to 180 (SATWIK) and 70 (HOMES)
            WebkitMaskImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='500' viewBox='0 0 1200 500'><text x='50%' y='40%' text-anchor='middle' dominant-baseline='middle' font-family='sans-serif' font-weight='900' font-size='180' letter-spacing='10'>SATWIK</text><text x='50%' y='75%' text-anchor='middle' dominant-baseline='middle' font-family='sans-serif' font-weight='800' font-size='70' letter-spacing='24'>HOMES</text></svg>")`,
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            WebkitMaskSize: 'contain',
            maskImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='500' viewBox='0 0 1200 500'><text x='50%' y='40%' text-anchor='middle' dominant-baseline='middle' font-family='sans-serif' font-weight='900' font-size='200' letter-spacing='10'>SATWIK</text><text x='50%' y='75%' text-anchor='middle' dominant-baseline='middle' font-family='sans-serif' font-weight='800' font-size='90' letter-spacing='24'>HOMES</text></svg>")`,
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            maskSize: 'contain',
          }}
        >
          <source src={bgVideoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}