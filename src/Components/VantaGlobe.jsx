import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
// Import the specific Vanta effect you want
import GLOBE from 'vanta/dist/vanta.globe.min'; 

function VantaGlobeBackground() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null); // Reference to the DOM element

  useEffect(() => {
    // 1. Initialize the effect only once
    if (!vantaEffect) {
      setVantaEffect(GLOBE({
        el: myRef.current, // Target the ref
        THREE: THREE,      // Pass the THREE object
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        // Customization from your image:
        color: 0xffffff,        // White lines
        backgroundColor: 0x0   // Black background
      }));
    }
    
    // 2. Cleanup function: destroys the Vanta instance when the component unmounts
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
    
  }, [vantaEffect]); // Dependency array: runs once upon mount

  return (
    // The container div for the background.
    // It must have absolute positioning and defined size (like 100% of the viewport)
    // and a low z-index to sit behind your content.
    <div 
      ref={myRef} 
      className="vanta-container"
      style={{ 
        width: '100%', 
        height: '100vh', 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        zIndex: -1 
      }}
    >
      {/* Vanta.js renders its canvas inside this div */}
    </div>
  );
}

export default VantaGlobeBackground;