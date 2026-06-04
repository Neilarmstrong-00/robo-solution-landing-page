import { useState, useEffect } from 'react';

export default function useImageDominantColor(src) {
  const [colorInfo, setColorInfo] = useState({ color: 'transparent', isTransparent: true });

  useEffect(() => {
    if (!src) return;
    
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      
      // Scale down image drastically to compute faster
      const MAX_SIZE = 64;
      let width = img.width;
      let height = img.height;
      
      if (width > MAX_SIZE || height > MAX_SIZE) {
        const ratio = Math.min(MAX_SIZE / width, MAX_SIZE / height);
        width = Math.floor(width * ratio);
        height = Math.floor(height * ratio);
      }
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      
      try {
        const imageData = ctx.getImageData(0, 0, width, height).data;
        let isTransparent = false;
        
        // Check for any transparent pixels
        for (let i = 3; i < imageData.length; i += 4) {
          if (imageData[i] < 250) {
            isTransparent = true;
            break;
          }
        }
        
        if (isTransparent) {
          setColorInfo({ color: 'transparent', isTransparent: true });
        } else {
          // Not transparent. Extract the background color from top-left pixel
          const r = imageData[0];
          const g = imageData[1];
          const b = imageData[2];
          setColorInfo({ color: `rgb(${r},${g},${b})`, isTransparent: false });
        }
      } catch (e) {
        setColorInfo({ color: '#000', isTransparent: false });
      }
    };
    img.src = src;
  }, [src]);

  return colorInfo;
}
