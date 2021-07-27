import { boot } from 'quasar/wrappers';
import { registeredAppModules } from 'src/appModule/defineAppModule';
import 'src/appModule';

export default boot(({ router }) => {
  registeredAppModules
    .forEach((module) => router
      .addRoute('DashboardAppModule', module.route));
});
