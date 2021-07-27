<template>
  <q-layout
    view="hHh LpR fFf"
    @scroll="onLayoutScroll"
  >
    <q-header
      :elevated="isScrolled"
      :bordered="!isScrolled"
      class="bg-white text-gray-900"
    >
      <q-toolbar>
        <div class="flex mx-auto max-w-screen-lg w-full justify-between items-center">
          <q-toolbar-title class="brand">
            <router-link to="/">
              iamlazy.dev
            </router-link>
          </q-toolbar-title>

          <div class="flex gap-x-8 items-center">
            <q-btn
              rounded
              class="text-gray-700 before:border before:shadow-none"
            >
              <div class="flex gap-x-2 items-center">
                <q-icon name="r_menu" />
                <q-avatar
                  icon="r_account_circle"
                  rounded
                  class="!text-3xl"
                />
              </div>

              <layout-menu />
            </q-btn>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
      <slot />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LayoutMenu from 'components/LayoutMenu.vue';
import type { Q } from 'src/types';

export default defineComponent({
  name: 'SimpleLayout',
  components: { LayoutMenu },
  data() {
    return {
      isScrolled: false,
    };
  },
  methods: {
    onLayoutScroll({ position }: Q.Layout.onScrollDetails) {
      this.isScrolled = position > 0;
    },
  },
});
</script>
