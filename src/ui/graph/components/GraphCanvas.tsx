import React, { useEffect, useRef } from "react";
import { LegacyGraphRenderer } from "../types";

interface GraphCanvasProps {
  onReady: (renderer: LegacyGraphRenderer) => void;
}

export function GraphCanvas({ onReady }: GraphCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !window.Vz) {
      return;
    }

    const renderer = new window.Vz(container, false, false, null);
    window.renderer = renderer;
    renderer.setData({ nodes: {} });
    onReady(renderer);

    const handleResize = () => renderer.onResize();
    const resizeObserver =
      typeof ResizeObserver == "undefined"
        ? undefined
        : new ResizeObserver(handleResize);
    resizeObserver?.observe(container);
    if (!resizeObserver) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", handleResize);
      if (window.renderer === renderer) {
        delete window.renderer;
      }
      renderer.destroy?.();
    };
  }, [onReady]);

  return <div ref={containerRef} id="graph-view" className="graph-canvas" />;
}
