<template>
  <q-form>
    <q-card>
      <q-card-section>
        <h6 class="text-h6">
          {{ title }}
        </h6>
      </q-card-section>

      <div class="flex flex-nowrap w-full py-2 gap-x-2 overflow-x-scroll">
        <q-img
          v-for="el, i in editableData.img"
          :key="el"
          :src="el"
          :ratio="4/3"
          class="flex-grow bg-gray-100 flex-shrink-0 w-56"
        >
          <div class="bg-transparent top-0 right-0 absolute !p-2">
            <q-btn
              icon="r_delete"
              round
              size="sm"
              class="bg-gray-400 text-white"
              @click="() => editableData.img.splice(i, 1)"
            />
          </div>
        </q-img>

        <q-img
          :ratio="4/3"
          class="border flex-grow bg-gray-50 flex-shrink-0 w-56"
        >
          <div class="bg-transparent flex flex-col h-full w-full text-gray-700 justify-center items-center">
            <q-btn
              label="upload images"
              icon="upload"
              rounded
              flat
              class="bg-gray-700/70 shadow-lg text-white"
            />
          </div>
        </q-img>
      </div>

      <q-card-section class="flex flex-col gap-y-4">
        <q-input
          v-model="editableData.name"
          label="Nama"
          required
          outlined
          dense
        />

        <q-input
          v-model="editableData.desc"
          type="textarea"
          label="Description"
          required
          outlined
          dense
        />

        <q-input
          v-model="editableData.price"
          type="number"
          label="Price"
          required
          outlined
          dense
        />

        <q-select
          v-model="editableData.tags"
          label="Tags"
          hint="Press enter to add tag"
          multiple
          use-input
          use-chips
          new-value-mode="add-unique"
          input-debounce="0"
          hide-dropdown-icon
          outlined
          dense
        />

        <!-- TODO: create editable table specs, TODO_ID: editableSpecs -->
        <!-- <q-table
          :columns="tableSpecsColumnDefinitions"
          :rows="formattedSpecs"
          hide-header
          hide-bottom
          hide-pagination
          flat
          bordered
          dense
        >
          <template #body-cell="props">
            <q-td :props="props">
              {{ props.value }}
              <q-popup-edit
                v-model="props.row[props.col.name]"
                buttons
                @save="onSaveSpecsTableEdit"
              >
                <q-input
                  v-model="props.row[props.col.name]"
                  dense
                  autofocus
                />
              </q-popup-edit>
            </q-td>
          </template>
        </q-table> -->
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn
          label="Save"
          type="submit"
          class="bg-gray-700 text-white"
        />
      </q-card-actions>
    </q-card>
  </q-form>
</template>

<script lang="ts">
import {
  defineComponent, reactive, toRefs, watch,
} from 'vue';
import { Product } from '@iamlazy.dev/core';
import type { PropType } from 'vue';
import type { Q } from 'src/types';

interface SpecsTableFormat {
  key: string;
  value: unknown;
}

/* TODO: editableSpecs */
// const specsFormatter = {
//   toTable: (specs: Product['specs']): SpecsTableFormat[] => Object
//     .entries(specs)
//     .map(([k, v]) => ({ key: k, value: v })),
//   toSpecs: (specs: SpecsTableFormat[]): Product['specs'] => specs
//     .reduce((acc, { key, value }) => ({
//       ...acc,
//       [key]: value,
//     }), {}),
// };

const tableSpecsColumnDefinitions = [
  {
    name: 'key',
    label: 'key',
    required: true,
    field: 'key',
    align: 'left',
  },
  {
    name: 'value',
    label: 'value',
    required: true,
    field: 'value',
    align: 'left',
  },
] as Q.Table.ColumnDefinition<SpecsTableFormat>[];

export default defineComponent({
  name: 'ProductForm',
  props: {
    data: {
      type: Object as PropType<Product>,
      default: () => Product.create({
        img: [
          'https://picsum.photos/300/300', 'https://picsum.photos/300/300', 'https://picsum.photos/300/300', 'https://picsum.photos/300/300',
        ],
      }),
    },
    title: {
      type: String,
      default: 'Add new product',
    },
  },
  setup(props) {
    const state = reactive({
      editableData: props.data,
    });

    watch(() => props.data, () => {
      state.editableData = props.data;
    });
    /* TODO: editableSpecs */
    // const formattedSpecs = computed<SpecsTableFormat[]>({
    //   get: () => [
    //     ...specsFormatter.toTable(state.editableData.specs),
    //     { key: 'add spec name here...', value: 'add spec value here...' },
    //   ],
    //   set(v) {
    //     state.editableData = { ...state.editableData, specs: specsFormatter.toSpecs(v) };
    //   },
    // });

    return {
      ...toRefs(state),
      tableSpecsColumnDefinitions,
      /* TODO: editableSpecs */
      // formattedSpecs,
    };
  },
});
</script>
