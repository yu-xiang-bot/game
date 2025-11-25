// 扩展Spine类，添加DisplayObject的属性
declare module '../utils/spine' {
  interface Spine {
    x: number;
    y: number;
    scale: {
      x: number;
      y: number;
    };
    width: number;
    height: number;
    rotation: number;
    visible: boolean;
    alpha: number;
    pivot: {
      x: number;
      y: number;
    };
    filters: any[];
  }
}