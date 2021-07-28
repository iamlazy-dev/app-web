<template>
  <div class="flex flex-nowrap h-full product-database__develop">
    <q-tab-panels
      v-model="tab"
      vertical
      keep-alive
      class="flex-grow"
    >
      <q-tab-panel name="read">
        <q-scroll-area class="h-full w-full p-4">
          <catalogue
            v-model:filter="filter"
            :data="productsState.products"
            :loading="productsState.kind === 'Loading'"
          />
        </q-scroll-area>
      </q-tab-panel>

      <q-tab-panel name="create">
        <div class="flex flex-col w-full p-4 items-center">
          <product-form class="max-w-prose w-full" />
        </div>
      </q-tab-panel>
    </q-tab-panels>

    <q-separator vertical />

    <q-tabs
      v-model="tab"
      vertical
      dense
      switch-indicator
      :class="isTabsReveal ? 'w-auto' : 'w-0'"
    >
      <q-tab
        label="catalogue"
        name="read"
        icon="list"
      />
      <q-tab
        label="add new"
        name="create"
        icon="r_add"
      />

      <div :class="['bottom-20  z-50 absolute', isTabsReveal ? '-left-4' : 'right-full mr-2']">
        <q-btn
          :icon="isTabsReveal ? 'r_chevron_left' : 'r_chevron_right'"
          round
          unelevated
          outline
          class="bg-white text-gray-500"
          @click="isTabsReveal = !isTabsReveal"
        />
      </div>
    </q-tabs>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, toRefs, onMounted,
} from 'vue';
import Catalogue from 'appModules/ProductDatabase/pages/Develop/Catalogue.vue';
import ProductForm from 'appModules/ProductDatabase/components/ProductForm.vue';
import { ProductDatabase } from '@iamlazy.dev/core';
import usePlocState from 'src/use/plocState';

export default defineComponent({
  name: 'ProductDatabaseDevelop',
  components: { Catalogue, ProductForm },
  setup() {
    const ploc = ProductDatabase.ProductPlocFakerProvider();
    const productsState = usePlocState(ploc);
    const state = reactive({
      tab: 'read',
      filter: '',
      isTabsReveal: true,
    });

    onMounted(() => ploc.find('name', ''));

    return {
      ...toRefs(state),
      productsState,
    };
  },
});
</script>

<style lang="sass">
.product-database__develop
  .q-table--grid .q-table__grid-content
    flex: 0 1 auto

  .q-table__bottom
    @apply mt-auto

  .q-tab-panel
    @apply p-0
</style>
