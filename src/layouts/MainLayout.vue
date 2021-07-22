<template>
  <q-layout
    view="hHh LpR fFf"
    @scroll="onLayoutScroll"
  >
    <q-header
      :elevated="isScrolled"
      class="bg-white text-gray-900"
    >
      <q-toolbar class="p-4">
        <div class="flex mx-auto max-w-screen-lg w-full justify-between items-center">
          <q-toolbar-title class="brand">
            <router-link to="/">
              iamlazy.dev
            </router-link>
          </q-toolbar-title>

          <q-btn
            icon="r_menu"
            unelevated
            round
            class="bg-gray-200 py-2 text-gray-700 sm:hidden"
          >
            <q-menu class="min-w-[50vw] uppercase">
              <q-list>
                <q-item
                  v-ripple
                  clickable
                >
                  <q-item-section avatar>
                    <q-avatar
                      icon="r_category"
                      rounded
                      class="h-8 text-gray-400 w-8"
                    />
                  </q-item-section>
                  <q-item-section class="font-medium text-gray-700">
                    {{ $t('layouts.main.navItem.products') }}
                  </q-item-section>
                </q-item>
                <q-item
                  v-ripple
                  clickable
                >
                  <q-item-section avatar>
                    <q-avatar
                      icon="r_article"
                      rounded
                      class="h-8 text-gray-400 w-8"
                    />
                  </q-item-section>
                  <q-item-section class="font-medium text-gray-700">
                    {{ $t('layouts.main.navItem.guides') }}
                  </q-item-section>
                </q-item>
                <q-item
                  v-ripple
                  clickable
                >
                  <q-item-section avatar>
                    <q-avatar
                      icon="r_price_check"
                      rounded
                      class="h-8 text-gray-400 w-8"
                    />
                  </q-item-section>
                  <q-item-section class="font-medium text-gray-700">
                    {{ $t('layouts.main.navItem.pricing') }}
                  </q-item-section>
                </q-item>
                <q-item
                  v-ripple
                  to="/dashboard"
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
              </q-list>
            </q-menu>
          </q-btn>

          <div class="gap-x-8 hidden items-center !sm:flex">
            <q-btn
              :label="$t('layouts.main.navItem.products')"
              flat
              rounded
              class="text-gray-600"
            />
            <q-btn
              :label="$t('layouts.main.navItem.guides')"
              flat
              rounded
              class="text-gray-600"
            />
            <q-btn
              :label="$t('layouts.main.navItem.pricing')"
              flat
              rounded
              class="text-gray-600"
            />
            <q-btn
              rounded
              :class="`text-gray-700 before:(border-t border-gray-200/90) ${isScrolled ? 'before:(border shadow-none)' : 'before:shadow-md'}`"
            >
              <div class="flex py-2 gap-x-2 items-center">
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
                    to="/dashboard"
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
                      {{ $t('layouts.main.navItem.logout') }}
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
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { Q } from 'src/types';

export default defineComponent({
  name: 'MainLayout',
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
