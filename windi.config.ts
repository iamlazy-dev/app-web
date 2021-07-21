import { defineConfig } from 'windicss/helpers';
import defaultTheme from 'windicss/defaultTheme';

export default defineConfig({
  preflight: false,
  theme: {
    fontFamily: {
      sans: ['Roboto', ...defaultTheme.fontFamily.sans],
    },
  },
});
