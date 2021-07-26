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
            <layout-menu
              :unshift-items="mobileAdditionalMenu"
              class="min-w-[50vw]"
            />
          </q-btn>

          <div class="gap-x-8 hidden items-center !sm:flex">
            <q-btn
              v-for="el, i in navItems"
              :key="i"
              :label="el.label"
              flat
              rounded
              class="text-gray-600"
              v-bind="el"
            />

            <q-btn
              rounded
              :class="`text-gray-700 ${isScrolled ? 'before:(border shadow-none)' : 'before:(border-t border-gray-200/90 shadow-md)'}`"
            >
              <div class="flex py-2 gap-x-2 items-center">
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
import type { LayoutMenu as ILayoutMenu, Q } from 'src/types';
import LayoutMenu from 'components/LayoutMenu.vue';
import i18n from 'src/i18n';

interface NavItem {
  label: string;
  [k: string]: unknown;
}

const { global: { t } } = i18n;

const navItems: NavItem[] = [
  { label: t('layouts.main.navItem.products') },
  { label: t('layouts.main.navItem.guides') },
  { label: t('layouts.main.navItem.pricing') },
];

const mobileAdditionalMenu: ILayoutMenu.Item[][] = [[
  { label: t('layouts.main.navItem.products'), icon: 'r_category' },
  { label: t('layouts.main.navItem.guides'), icon: 'r_article' },
  { label: t('layouts.main.navItem.pricing'), icon: 'r_price_check' },
]];

export default defineComponent({
  name: 'MainLayout',
  components: { LayoutMenu },
  setup() {
    return {
      navItems,
      mobileAdditionalMenu,
    };
  },
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
