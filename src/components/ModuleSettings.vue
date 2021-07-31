<template>
  <div class="flex flex-nowrap h-full product-database__develop">
    <q-tabs
      v-model="tab"
      vertical
      dense
      :class="isTabsReveal ? 'w-auto' : 'w-0'"
    >
      <q-tab
        label="API Keys"
        name="apiKeys"
        icon="r_build"
      />
      <q-tab
        label="Others"
        name="others"
        icon="r_tune"
      />

      <div :class="['bottom-20  z-50 absolute', isTabsReveal ? '-right-4' : 'left-full ml-2']">
        <q-btn
          :icon="isTabsReveal ? 'r_chevron_right' : 'r_chevron_left'"
          round
          unelevated
          outline
          class="bg-white text-gray-500"
          @click="isTabsReveal = !isTabsReveal"
        />
      </div>
    </q-tabs>

    <q-separator vertical />

    <q-tab-panels
      v-model="tab"
      vertical
      keep-alive
      class="flex-grow"
    >
      <q-tab-panel
        name="apiKeys"
        class="flex flex-col items-center"
      >
        <q-list class="max-w-prose w-full p-4">
          <q-item>
            <q-item-section>
              <q-input
                v-model="endPoint"
                label="Endpoint"
                readonly
              />
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              <q-input
                v-model="apiKey"
                label="Auth Basic"
                :type="isShowApiKey ? 'text' : 'password'"
                readonly
              >
                <template #append>
                  <q-icon
                    :name="isShowApiKey ? 'r_visibility' : 'r_visibility_off'"
                    class="cursor-pointer"
                    @click="isShowApiKey = !isShowApiKey"
                  />
                </template>
              </q-input>
            </q-item-section>
          </q-item>
        </q-list>
      </q-tab-panel>

      <q-tab-panel name="others">
        <slot />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { uid } from 'quasar';

export default defineComponent({
  name: 'ModuleSettings',
  setup() {
    const state = reactive({
      tab: 'apiKeys',
      isTabsReveal: true,
      endPoint: 'http://localhost:5001/iamlazydev---dev/us-central1/testProductDatabaseProducts',
      apiKey: uid(),
      isShowApiKey: false,
    });

    return { ...toRefs(state) };
  },
});
</script>
