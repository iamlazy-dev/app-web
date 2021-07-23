import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import messages from 'src/i18n';
import { LoadingBar } from 'quasar';

const i18n = createI18n({
  locale: 'id-ID',
  messages,
});

export default boot(({ app, router }) => {
  app.use(i18n);

  router.beforeEach((to, from, next) => {
    LoadingBar.start();
    next();
  });

  router.afterEach(() => LoadingBar.stop());
});
