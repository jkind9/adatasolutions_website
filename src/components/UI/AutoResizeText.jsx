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
  minFontSize = 8,
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

    while (currentSize > minFontSize && !fits()) {
      currentSize -= step;
      text.style.fontSize = `${currentSize}px`;
    }

    setFontSize(currentSize);
  }, [minFontSize, maxFontSize, step]);

  useLayoutEffect(() => {
    resizeToFit();
  }, [children, resizeToFit]);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      requestAnimationFrame(resizeToFit);
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [resizeToFit]);

  const renderContent = () => {
    if (Array.isArray(children)) {
      return children.map((para, i) => (
        <p key={i} style={{ marginBottom: '1em' }}>
          {para}
        </p>
      ));
    }
    return <p>{children}</p>;
  };

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
          lineHeight: 1.4,
          wordBreak: 'break-word',
          whiteSpace: 'normal',
          margin: 0,
          padding: 0,
        }}
      >
        {renderContent()}
      </div>
    </div>
  );
}
