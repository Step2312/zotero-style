import React from "react";
import { AimOutlined, BranchesOutlined, CompressOutlined, ZoomInOutlined, ZoomOutOutlined } from "@ant-design/icons";
import { Button, Segmented, Slider, Space, Tooltip } from "antd";
import { LegacyGraphRenderer } from "../types";

interface GraphToolbarProps {
  renderer?: LegacyGraphRenderer;
  mode: string;
  nodeSize: number;
  lineSize: number;
  showArrow: boolean;
  onModeChange: (mode: string) => void;
  onNodeSizeChange: (value: number) => void;
  onLineSizeChange: (value: number) => void;
  onShowArrowChange: (value: boolean) => void;
}

export function GraphToolbar({
  renderer,
  mode,
  nodeSize,
  lineSize,
  showArrow,
  onModeChange,
  onNodeSizeChange,
  onLineSizeChange,
  onShowArrowChange,
}: GraphToolbarProps) {
  const setScale = (scale: number) => {
    renderer?.zoomTo(scale);
    renderer?.changed();
  };

  return (
    <div className="graph-toolbar">
      <Space size={8} align="center" wrap>
        <Segmented
          size="small"
          value={mode}
          options={[
            { label: "Default", value: "default" },
            { label: "Related", value: "related" },
            { label: "Author", value: "author" },
            { label: "Tag", value: "tag" },
          ]}
          onChange={(value) => onModeChange(String(value))}
        />
        <Tooltip title="Reset">
          <Button size="small" icon={<AimOutlined />} onClick={() => renderer?.resetPan()} />
        </Tooltip>
        <Tooltip title="Zoom in">
          <Button size="small" icon={<ZoomInOutlined />} onClick={() => setScale(1.6)} />
        </Tooltip>
        <Tooltip title="Zoom out">
          <Button size="small" icon={<ZoomOutOutlined />} onClick={() => setScale(0.75)} />
        </Tooltip>
        <Tooltip title="Arrows">
          <Button
            size="small"
            type={showArrow ? "primary" : "default"}
            icon={<BranchesOutlined />}
            onClick={() => onShowArrowChange(!showArrow)}
          />
        </Tooltip>
        <Tooltip title="Compact">
          <Button
            size="small"
            icon={<CompressOutlined />}
            onClick={() => {
              onNodeSizeChange(0.85);
              onLineSizeChange(0.8);
            }}
          />
        </Tooltip>
        <div className="graph-slider">
          <Slider
            min={0.6}
            max={2}
            step={0.05}
            value={nodeSize}
            tooltip={{ open: false }}
            onChange={onNodeSizeChange}
          />
        </div>
        <div className="graph-slider graph-slider-narrow">
          <Slider
            min={0.4}
            max={2}
            step={0.05}
            value={lineSize}
            tooltip={{ open: false }}
            onChange={onLineSizeChange}
          />
        </div>
      </Space>
    </div>
  );
}
