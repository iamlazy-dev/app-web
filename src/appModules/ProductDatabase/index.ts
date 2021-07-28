import defineAppModule from 'appModules/defineAppModule';

export default defineAppModule({
  id: 'product-database',
  name: 'Product Database',
  desc: '',
  devName: 'iamlazy.dev',
  iconOnNav: 'img:https://www.gstatic.com/devrel-devsite/prod/v6276805c2ff8bacc915973efaa269b575b44ae3dde218d0ec8425b822ec321de/firebase/images/favicon.png',
  components: {
    default: () => import('./pages/Develop.vue'),
    settings: () => import('./pages/Settings.vue'),
    usage: () => import('./pages/Usage.vue'),
  },
});
