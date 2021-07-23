import { boot } from 'quasar/wrappers';
import { LoadingBar } from 'quasar';

export default boot(({ router }) => {
  router.beforeEach((to, from, next) => {
    LoadingBar.start();
    next();
  });

  router.afterEach(() => LoadingBar.stop());
});
