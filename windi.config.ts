import { defineConfig } from 'windicss/helpers';
import defaultTheme from 'windicss/defaultTheme';
import PluginLineClamp from 'windicss/plugin/line-clamp';
import PluginTypography from 'windicss/plugin/typography';

export default defineConfig({
  preflight: true,
  theme: {
    fontFamily: {
      sans: ['Roboto', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    PluginLineClamp,
    PluginTypography,
  ],
});
