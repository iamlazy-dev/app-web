<template>
  <q-page
    padding
    class="flex flex-col items-stretch"
  >
    <section class="flex mx-auto max-w-screen-lg w-full">
      <q-btn
        :label="$t('btn.back')"
        icon="r_navigate_before"
        flat
        rounded
        class="text-gray-700"
        :to="{name: 'DashboardIndex'}"
      />
    </section>

    <section class="flex flex-col mx-auto max-w-screen-lg w-full min-h-[80vh] gap-y-8 justify-center">
      <q-form>
        <q-card class="rounded-xl mx-auto max-w-prose w-full q-card">
          <q-card-section>
            <h6 class="font-medium text-lg text-gray-500">
              {{ $t('dashboard.createProject') }}
            </h6>
          </q-card-section>

          <q-card-section class="pb-8">
            <q-input
              v-model="formProjectName"
              :label="$t('dashboard.create.formLabel.name')"
            />
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              type="submit"
              :label="$t('btn.next')"
              icon-right="r_navigate_next"
              flat
              rounded
              class="text-gray-700"
            />
          </q-card-actions>
        </q-card>
      </q-form>
    </section>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'PageDashboardCreateProject',
  setup() {
    const state = reactive({
      formProjectName: '',
    });

    return toRefs(state);
  },
});
</script>
