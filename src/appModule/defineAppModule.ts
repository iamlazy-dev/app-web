import { AppModule, AppModuleUI } from 'src/models';
import type { RouteRecordRaw } from 'vue-router';

type AppModuleConfig = AppModule
  & Omit<RouteRecordRaw, 'path'>
  & {
  /** Should be unique */
  path?: RouteRecordRaw['path'];
  iconOnNav: string;
}

interface RegisteredAppModule {
  route: RouteRecordRaw;
  getInfo: () => AppModule;
  getUIInfo: () => AppModuleUI;
}

/* eslint-disable no-unused-vars */
type defineAppModuleFn = (cfg: AppModuleConfig) => RegisteredAppModule;
/* eslint-enable no-unused-vars */

const ROUTE_PATH_PREFIX = '';

const registeredAppModules: RegisteredAppModule[] = [];

const defineAppModule: defineAppModuleFn = ({
  id, path, name, desc, devName, iconOnNav, ...cfg
}) => {
  const registered: RegisteredAppModule = {
    route: {
      path: `${ROUTE_PATH_PREFIX}${path ?? id}`,
      name: `DashboardAppModule[${id}]`,
      meta: { guard: 'auth' },
      ...cfg,
    } as RouteRecordRaw,
    getInfo: () => ({
      id,
      name,
      desc,
      devName,
    }),
    getUIInfo: () => ({
      iconOnNav,
    }),
  };

  registeredAppModules.push(registered);

  return registered;
};

export default defineAppModule;

export {
  registeredAppModules,
};
