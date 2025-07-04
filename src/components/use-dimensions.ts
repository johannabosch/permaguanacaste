import { useEffect, useRef } from "react";

export function useDimensions(ref: React.RefObject<HTMLElement>) {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
      
      // Update dimensions on resize
      const updateDimensions = () => {
        if (ref.current) {
          dimensions.current.width = ref.current.offsetWidth;
          dimensions.current.height = ref.current.offsetHeight;
        }
      };

      window.addEventListener('resize', updateDimensions);
      
      return () => {
        window.removeEventListener('resize', updateDimensions);
      };
    }
  }, [ref]);

  return dimensions.current;
} 