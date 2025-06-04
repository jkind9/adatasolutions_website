// File: src/components/UI/AutoResizeText.jsx
import React, {
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
} from 'react';

export default function AutoResizeText({
  children,
  className = '',
  style = {},
  minFontSize = 12,
  maxFontSize = 32,
  step = 0.5,
}) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [fontSize, setFontSize] = useState(maxFontSize);

  const resizeToFit = useCallback(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    let currentSize = maxFontSize;
    text.style.fontSize = `${currentSize}px`;

    const fits = () => text.scrollHeight <= container.clientHeight;

    // Shrink if needed
    while (currentSize > minFontSize && !fits()) {
      currentSize -= step;
      text.style.fontSize = `${currentSize}px`;
    }

    // Grow back up if there's room
    while (currentSize < maxFontSize) {
      text.style.fontSize = `${currentSize + step}px`;
      if (text.scrollHeight > container.clientHeight) break;
      currentSize += step;
    }

    setFontSize(currentSize);
  }, [minFontSize, maxFontSize, step]);

  // Trigger resize on content changes
  useLayoutEffect(() => {
    resizeToFit();
  }, [children, resizeToFit]);

  // React to container size changes using ResizeObserver
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      requestAnimationFrame(resizeToFit); // avoid layout mutation during observer cycle
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [resizeToFit]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ ...style, overflow: 'hidden' }}
    >
      <div
        ref={textRef}
        style={{
          fontSize: `${fontSize}px`,
          lineHeight: 1.2,
          wordBreak: 'break-word',
          whiteSpace: 'normal',
        }}
      >
        {children}
      </div>
    </div>
  );
}
