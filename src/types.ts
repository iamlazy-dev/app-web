/* eslint-disable @typescript-eslint/no-namespace */

export namespace Q {
  export namespace Layout {
    export interface onScrollDetails {
      position: number;
      direction: 'up' | 'down';
      directionChanged: boolean;
      delta: number;
      inflectionPoint: number;
    }
  }
}
