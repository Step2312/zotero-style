import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ConfigProvider, theme } from "antd";
import { GraphCanvas } from "./components/GraphCanvas";
import { GraphToolbar } from "./components/GraphToolbar";
import { LegacyGraphRenderer } from "./types";

export function GraphApp() {
  const [renderer, setRenderer] = useState<LegacyGraphRenderer>();
  const [mode, setMode] = useState("default");
  const [nodeSize, setNodeSize] = useState(1);
  const [lineSize, setLineSize] = useState(1);
  const [showArrow, setShowArrow] = useState(false);

  const onReady = useCallback((nextRenderer: LegacyGraphRenderer) => {
    setRenderer(nextRenderer);
  }, []);

  const changeMode = useCallback((nextMode: string) => {
    setMode(nextMode);
    window.dispatchEvent(
      new CustomEvent("zotero-style:graph-mode-change", {
        detail: { mode: nextMode },
      })
    );
  }, []);

  useEffect(() => {
    renderer?.setRenderOptions?.({
      nodeSizeMultiplier: nodeSize,
      lineSizeMultiplier: lineSize,
      showArrow,
    });
  }, [lineSize, nodeSize, renderer, showArrow]);

  const tokens = useMemo(
    () => ({
      algorithm: theme.defaultAlgorithm,
      token: {
        borderRadius: 6,
        colorPrimary: "#1677ff",
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Microsoft YaHei", sans-serif',
      },
    }),
    []
  );

  return (
    <ConfigProvider theme={tokens}>
      <div className="graph-shell" data-mode={mode}>
        <GraphCanvas onReady={onReady} />
        <GraphToolbar
          renderer={renderer}
          mode={mode}
          nodeSize={nodeSize}
          lineSize={lineSize}
          showArrow={showArrow}
          onModeChange={changeMode}
          onNodeSizeChange={setNodeSize}
          onLineSizeChange={setLineSize}
          onShowArrowChange={setShowArrow}
        />
      </div>
    </ConfigProvider>
  );
}
