<template>
  <q-page
    padding
    class="flex flex-col items-stretch"
  >
    <section class="page-section justify-center">
      <h5 class="my-2 text-xl page-section__title">
        {{ $t('dashboard.recentProjects') }}
      </h5>

      <ul class="auto-rows-fr grid gap-6 grid-cols-1 sm:grid-cols-3">
        <q-card
          flat
          bordered
          class="bg-white rounded-lg h-48 w-full transition-colors justify-between !hover:bg-gray-100"
        >
          <q-card-section class="flex h-full text-gray-500 gap-x-2 justify-center items-center">
            <q-icon name="r_add" />
            <h6 class="font-medium text-lg">
              {{ $t('dashboard.createProject') }}
            </h6>
          </q-card-section>

          <router-link
            class="inset-0 absolute"
            :to="{name: 'DashboardCreateProject'}"
          />
        </q-card>

        <q-card
          v-for="el in projects"
          :key="el.id"
          tag="li"
          flat
          bordered
          class="bg-white rounded-lg h-48 w-full transition-colors justify-between !hover:bg-gray-100"
        >
          <q-card-section>
            <h6 class="font-medium text-lg">
              {{ el.name }}
            </h6>
            <small class="text-gray-400">{{ el.id }}</small>
          </q-card-section>

          <router-link
            class="inset-0 absolute"
            :to="{name: 'DashboardOverview', params: {id: el.id}}"
          />
        </q-card>
      </ul>
    </section>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { uid } from 'quasar';

interface UserProject {
  id: string;
  name: string;
}

const projects: UserProject[] = [
  { id: uid(), name: 'Toko Elektronik Sugih Waras' },
  { id: uid(), name: 'TBK. Mesra' },
  { id: uid(), name: 'PT. Mencari Cinta Sejati' },
];

export default defineComponent({
  name: 'PageDashboardIndex',
  setup() {
    return {
      projects,
    };
  },
});
</script>
