/* eslint-disable @typescript-eslint/no-namespace */
import type { RouteLocationRaw } from 'vue-router';

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

export namespace LayoutMenu {
  export interface Item {
    label: string;
    icon: string;
    guard?: 'auth' | 'no-auth';
    to?: RouteLocationRaw;
    [k: string]: unknown;
  }
}
