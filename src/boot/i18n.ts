import { boot } from 'quasar/wrappers';
import i18n from 'src/i18n';
import { LoadingBar } from 'quasar';

export default boot(({ app, router }) => {
  app.use(i18n);

  router.beforeEach((to, from, next) => {
    LoadingBar.start();
    next();
  });

  router.afterEach(() => LoadingBar.stop());
});
