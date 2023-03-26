import React, { Fragment, useEffect, useState, useRef } from "react";
import "./Marquee.scss";

const Marquee = ({
  style = {},
  className = "",
  play = true,
  pauseOnHover = false,
  pauseOnClick = false,
  direction = "left",
  speed = 20,
  delay = 0,
  loop = 0,
  gradient = true,
  gradientColor = [255, 255, 255],
  gradientWidth = 200,
  onFinish,
  onCycleComplete,
  children,
}) => {
  // React Hooks
  const [containerWidth, setContainerWidth] = useState(0);
  const [marqueeWidth, setMarqueeWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (!isMounted) return;

    const calculateWidth = () => {
      // Find width of container and width of marquee
      if (marqueeRef.current && containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
        setMarqueeWidth(marqueeRef.current.getBoundingClientRect().width);
      }
    };

    calculateWidth();
    // Rerender on window resize
    window.addEventListener("resize", calculateWidth);
    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, [isMounted]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Gradient color in an unfinished rgba format
  const rgbaGradientColor = `rgba(${gradientColor[0]}, ${gradientColor[1]}, ${gradientColor[2]}`;

  // Animation duration
  const duration =
    marqueeWidth < containerWidth
      ? containerWidth / speed
      : marqueeWidth / speed;

  return (
    <Fragment>
      {!isMounted ? null : (
        <div
          ref={containerRef}
          style={{
            ...style,
            ["--pause-on-hover"]: !play || pauseOnHover ? "paused" : "running",
            ["--pause-on-click"]:
              !play || (pauseOnHover && !pauseOnClick) || pauseOnClick
                ? "paused"
                : "running",
          }}
          className={className + " marquee-container"}
        >
          {gradient && (
            <div
              style={{
                ["--gradient-color"]: `${rgbaGradientColor}, 1), ${rgbaGradientColor}, 0)`,
                ["--gradient-width"]:
                  typeof gradientWidth === "number"
                    ? `${gradientWidth}px`
                    : gradientWidth,
              }}
              className="overlay"
            />
          )}
          {
            <div
              ref={marqueeRef}
              style={{
                "--play": play ? "running" : "paused",
                "--direction": direction === "left" ? "normal" : "reverse",
                "--duration": `${duration}s`,
                "--delay": `${delay}s`,
                "--iteration-count": !!loop ? `${loop}` : "infinite",
              }}
              className="marquee"
              onAnimationIteration={onCycleComplete}
              onAnimationEnd={onFinish}
            >
              {children}
            </div>
          }
          {
            <div
              style={{
                "--play": play ? "running" : "paused",
                "--direction": direction === "left" ? "normal" : "reverse",
                "--duration": `${duration}s`,
                "--delay": `${delay}s`,
                "--iteration-count": !!loop ? `${loop}` : "infinite",
              }}
              className="marquee"
              aria-hidden="true"
            >
              {children}
            </div>
          }
        </div>
      )}
    </Fragment>
  );
};

export default Marquee;
