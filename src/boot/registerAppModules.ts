import { boot } from 'quasar/wrappers';
import { registeredAppModules } from 'appModules/defineAppModule';
import 'appModules';

export default boot(({ router }) => {
  registeredAppModules
    .forEach((module) => router
      .addRoute('DashboardAppModule', module.route));
});
