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

              <q-menu
                anchor="bottom right"
                self="top right"
                transition-show="jump-down"
                transition-hide="jump-up"
                transition-duration="200"
                class="border-t rounded-lg border-gray-200/60 shadow-lg min-w-52 uppercase"
              >
                <q-list>
                  <q-item
                    v-ripple
                    clickable
                    class="bg-bg-light-100"
                  >
                    <q-item-section avatar>
                      <q-avatar
                        icon="r_person"
                        rounded
                        class="h-8 text-gray-400 w-8"
                      />
                    </q-item-section>
                    <q-item-section class="font-medium text-gray-700">
                      {{ $t('layouts.main.navItem.myAccount') }}
                    </q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item
                    v-ripple
                    :to="{name: 'DashboardIndex'}"
                    class="bg-bg-light-100"
                  >
                    <q-item-section avatar>
                      <q-avatar
                        icon="r_dashboard"
                        rounded
                        class="h-8 text-gray-400 w-8"
                      />
                    </q-item-section>
                    <q-item-section class="font-medium text-gray-700">
                      {{ $t('layouts.main.navItem.dashboard') }}
                    </q-item-section>
                  </q-item>

                  <q-item
                    v-ripple
                    clickable
                    class="bg-bg-light-100"
                  >
                    <q-item-section avatar>
                      <q-avatar
                        icon="r_help"
                        rounded
                        class="h-8 text-gray-400 w-8"
                      />
                    </q-item-section>
                    <q-item-section class="font-medium text-gray-700">
                      {{ $t('layouts.main.navItem.help') }}
                    </q-item-section>
                  </q-item>

                  <q-separator />

                  <q-item
                    v-ripple
                    clickable
                    class="bg-bg-light-100"
                  >
                    <q-item-section avatar>
                      <q-avatar
                        icon="r_logout"
                        rounded
                        class="h-8 text-gray-400 w-8"
                      />
                    </q-item-section>
                    <q-item-section class="font-medium text-gray-700">
                      {{ $t('btn.logout') }}
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
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
import type { Q } from 'src/types';

export default defineComponent({
  name: 'SimpleLayout',
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
