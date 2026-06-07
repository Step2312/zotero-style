export interface LegacyGraphRenderer {
  containerEl: HTMLElement;
  nodes: any[];
  highlightNode: any;
  interactiveEl: HTMLCanvasElement;
  onNodeClick?: (event: Event, id: string, type: string) => void;
  onNodeRightClick?: (event: Event, id: string, type: string) => void;
  onNodeHover?: (event: Event, id: string, type: string) => void;
  onNodeUnhover?: () => void;
  setData: (graph: any) => void;
  setPan: (x: number, y: number) => void;
  setScale: (scale: number) => void;
  setRenderOptions?: (options: {
    nodeSizeMultiplier?: number;
    lineSizeMultiplier?: number;
    showArrow?: boolean;
    textFadeMultiplier?: number;
  }) => void;
  changed: () => void;
  destroy?: () => void;
  onResize: () => void;
  resetPan: () => void;
  zoomTo: (scale: number, center?: { x: number; y: number }) => void;
}

declare global {
  interface Window {
    Vz: new (
      container: HTMLElement,
      useIframe: boolean,
      hidePowerTag: boolean,
      worker: Worker | null
    ) => LegacyGraphRenderer;
    renderer?: LegacyGraphRenderer;
  }
}
