<template>
  <q-page
    padding
    class="flex flex-col gap-y-8 items-stretch"
  >
    <section class="page-section--no-min-h">
      <div class="flex justify-end">
        <q-btn
          :label="$t('btn.search')"
          icon-right="r_search"
          flat
          rounded
          class="text-gray-600"
        />
      </div>
    </section>

    <section class="page-section !min-h-0">
      <h5 class="my-0 page-section__title">
        {{ $t('dashboard.module.official') }}
      </h5>

      <q-separator />

      <ul class="auto-rows-fr grid gap-6 grid-cols-3">
        <card-module
          v-for="el in modules"
          :key="el.id"
          tag="li"
          v-bind="el"
        />
      </ul>
    </section>

    <section class="page-section !min-h-0">
      <h5 class="my-0 page-section__title">
        {{ $t('dashboard.module.community') }}
      </h5>

      <q-separator />

      <span class="font-medium my-8 text-lg text-gray-600 self-center">Coming soon &gt;.&lt;</span>
    </section>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { uid } from 'quasar';
import CardModule from 'components/Dashboard/CardModule.vue';
import type { UserAppModule } from 'src/models';

const modules: UserAppModule[] = [
  {
    id: uid(),
    name: 'Product Database',
    devName: 'iamlazy.dev',
    desc: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet',
    installed: Math.random() > 0.3,
  },
  {
    id: uid(),
    name: 'Simple Payment',
    devName: 'iamlazy.dev',
    desc: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet',
    installed: Math.random() > 0.3,
  },
  {
    id: uid(),
    name: 'Authentication',
    devName: 'iamlazy.dev',
    desc: 'lorem ipsum dolor sit amet',
    installed: Math.random() > 0.3,
  },
];

export default defineComponent({
  name: 'PageDashboardModuleExplorer',
  components: { CardModule },
  setup() {
    return {
      modules,
    };
  },
});
</script>
