<template>
  <q-card class="bg-white rounded-lg flex flex-col">
    <q-card-section>
      <h6 class="font-medium text-lg">
        {{ name }}
      </h6>
      <small class="text-gray-400">{{ devName }}</small>
    </q-card-section>

    <q-card-section class="flex-grow mb-2">
      <p class="text-gray-600 line-clamp-4">
        {{ desc }}
      </p>
    </q-card-section>

    <q-card-actions>
      <q-btn
        :label="installed ? $t('dashboard.module.installed') : $t('dashboard.module.install')"
        :icon="installed ? 'r_file_download_done' : 'r_add'"
        size="sm"
        flat
        class="rounded bg-gray-100 text-gray-800"
      />

      <q-btn
        :label="$t('btn.learn')"
        :to="{name: 'DashboardModuleDetails', params: {moduleId: id}}"
        size="sm"
        unelevated
        class="rounded text-gray-700"
      />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardModule',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    devName: {
      type: String,
      required: true,
    },
    installed: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
