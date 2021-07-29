<template>
  <q-menu
    anchor="bottom right"
    self="top right"
    transition-show="jump-down"
    transition-hide="jump-up"
    transition-duration="200"
    class="border-t rounded-lg border-gray-200/60 shadow-lg min-w-52 uppercase"
  >
    <q-list>
      <template
        v-for="els, i in items"
        :key="i"
      >
        <q-item
          v-for="el, j in els"
          :key="j"
          v-ripple
          class="bg-bg-light-100"
          v-bind="el"
        >
          <q-item-section avatar>
            <q-avatar
              :icon="el.icon"
              rounded
              class="h-8 text-gray-400 w-8"
            />
          </q-item-section>
          <q-item-section class="font-medium text-gray-700">
            {{ el.label }}
          </q-item-section>
        </q-item>

        <q-separator v-if="els.length && (i <= items.length)" />
      </template>
    </q-list>
  </q-menu>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { Loading } from 'quasar';
import i18n from 'src/i18n';
import { auth } from 'boot/auth';
import usePlocState from 'src/use/plocState';
import type { PropType } from 'vue';
import type { LayoutMenu } from 'src/types';

const { global: { t } } = i18n;

const items: LayoutMenu.Item[][] = [
  [
    {
      label: t('btn.login'),
      icon: 'r_login',
      guard: 'no-auth',
      onClick: () => {
        Loading.show();
        auth.login('test@iamlazy.dev', 'pass123')
          .finally(() => Loading.hide());
      },
    },
    {
      label: t('btn.register'),
      icon: 'r_person_add',
      guard: 'no-auth',
    },
  ],
  [
    {
      label: t('layouts.main.navItem.myAccount'),
      icon: 'r_person',
      guard: 'auth',
    },
    {
      label: t('layouts.main.navItem.dashboard'),
      icon: 'r_dashboard',
      to: { name: 'DashboardIndex' },
      guard: 'auth',
    },
    {
      label: t('btn.logout'),
      icon: 'r_logout',
      guard: 'auth',
      onClick: () => {
        Loading.show();
        auth.logout()
          .finally(() => Loading.hide());
      },
    },
  ],
  [{
    label: t('layouts.main.navItem.help'),
    icon: 'r_help',
  }],
];

export default defineComponent({
  name: 'LayoutMenu',
  props: {
    pushItems: {
      type: Array as PropType<LayoutMenu.Item[][]>,
      default: () => [],
    },
    unshiftItems: {
      type: Array as PropType<LayoutMenu.Item[][]>,
      default: () => [],
    },
  },
  setup(props) {
    const authState = usePlocState(auth);
    const mergedItems = computed(() => [...props.unshiftItems, ...items, ...props.pushItems]
      .map((els) => els
        .map((el) => (el.to
          ? el
          : { ...el, clickable: true }))));
    const filteredItems = computed(() => mergedItems.value
      .map((els) => els
        .filter(({ guard }) => {
          if (guard === undefined) {
            return true;
          }

          return ((authState.value.kind === 'Authenticated')
            ? guard === 'auth'
            : guard === 'no-auth');
        })));

    return {
      items: filteredItems,
    };
  },
});
</script>
