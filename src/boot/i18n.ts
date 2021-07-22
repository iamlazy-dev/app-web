import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import messages from 'src/i18n';

const i18n = createI18n({
  locale: 'id-ID',
  messages,
});

export default boot(({ app }) => {
  app.use(i18n);
});
