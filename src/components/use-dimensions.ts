import { useEffect, useState } from "react";

export function useDimensions(ref: React.RefObject<HTMLElement | null>) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      const element = ref.current;
      if (!element) return;
      setDimensions({
        width: element.offsetWidth,
        height: element.offsetHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [ref]);

  return dimensions;
} 