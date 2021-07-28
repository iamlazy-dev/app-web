import defineAppModule from 'appModules/defineAppModule';

export default defineAppModule({
  id: 'simple-payment',
  name: 'Simple Payment',
  desc: '',
  devName: 'iamlazy.dev',
  iconOnNav: 'r_payments',
  components: {
    default: () => import('./pages/Develop.vue'),
    settings: () => import('./pages/Settings.vue'),
    usage: () => import('./pages/Usage.vue'),
  },
});
