<template>
  <q-page
    padding
    class="flex flex-col app-module items-stretch"
  >
    <q-card
      tag="section"
      class="rounded-lg min-h-[80vh]"
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

      <q-tab-panels v-model="tab">
        <q-tab-panel name="develop">
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
});
</script>

<style lang="sass">
.app-module
  .q-tab
    &__content
      @apply px-4
</style>
