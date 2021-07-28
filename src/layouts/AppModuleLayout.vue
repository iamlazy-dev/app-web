<template>
  <q-page
    :style-fn="getPageStyle"
    class="flex flex-col py-4 app-module items-stretch sm:p-4"
  >
    <q-card
      tag="section"
      class="rounded-lg h-full max-h-full w-full overflow-hidden"
    >
      <q-tabs
        v-model="tab"
        dense
        narrow-indicator
      >
        <q-tab
          label="Develop"
          name="develop"
        />
        <q-tab
          label="Settings"
          name="settings"
        />
        <q-tab
          label="Usage"
          name="usage"
        />
      </q-tabs>

      <q-separator />

      <q-tab-panels
        v-model="tab"
        keep-alive
        class="h-full max-h-full pb-9"
      >
        <q-tab-panel
          name="develop"
          class="p-0"
        >
          <slot>
            <router-view />
          </slot>
        </q-tab-panel>

        <q-tab-panel name="settings">
          <slot name="settings">
            <router-view name="settings" />
          </slot>
        </q-tab-panel>

        <q-tab-panel name="usage">
          <slot name="usage">
            <router-view name="usage" />
          </slot>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent, reactive, toRefs,
} from 'vue';

export default defineComponent({
  name: 'AppModuleLayout',
  setup() {
    const state = reactive({
      tab: 'develop',
    });

    return { ...toRefs(state) };
  },
  methods: {
    getPageStyle(offset: number): Partial<CSSStyleDeclaration> {
      return { height: `calc(100vh - ${offset}px)` };
    },
  },
});
</script>

<style lang="sass">
.app-module
  .q-tab
    &__content
      @apply px-4
</style>
