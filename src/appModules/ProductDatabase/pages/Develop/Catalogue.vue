<template>
  <q-table
    grid
    title="Product Catalogue"
    :rows="data"
    :columns="columnDefinitions"
    row-key="name"
    :pagination="{rowsPerPage: 12}"
    :filter="filter"
    :loading="loading"
    hide-header
    class="h-full"
    card-container-class="justify-start"
  >
    <template #top-right>
      <q-input
        :value="filter"
        dense
        borderless
        debounce="300"
        placeholder="Search"
        @update:modelValue="v => $emit('update:filter', v)"
      >
        <template #append>
          <q-icon name="r_search" />
        </template>
      </q-input>
    </template>

    <template #item="props">
      <div class="h-auto w-full p-1.5 sm:w-1/2 md:w-1/4">
        <q-card class="flex flex-col h-full">
          <q-img
            :src="props.row.img[0]"
            class="flex-grow bg-gray-100 h-40"
          />

          <q-card-section>
            <h6 class="text-base leading-snug line-clamp-2">
              {{ props.row.name }}
            </h6>
          </q-card-section>
        </q-card>
      </div>
    </template>
  </q-table>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import type { PropType } from 'vue';
import type { Product } from '@iamlazy.dev/core';
import type { Q } from 'src/types';

const columnDefinitions = [
  {
    name: 'id',
    required: true,
    label: 'id',
    align: 'left',
    field: 'id',
  },
  {
    name: 'thumbnail',
    required: true,
    label: 'picture',
    field: 'img',
  },
  {
    name: 'name',
    required: true,
    label: 'name',
    field: 'name',
  },
] as Q.Table.ColumnDefinition<Product>[];

export default defineComponent({
  name: 'ProductCatalogoue',
  props: {
    data: {
      type: Array as PropType<Product[]>,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
    filter: {
      type: String,
      default: '',
    },
  },
  emits: ['update:filter'],
  setup() {
    const state = reactive({
      //
    });

    return {
      ...toRefs(state),
      columnDefinitions,
    };
  },
});
</script>
