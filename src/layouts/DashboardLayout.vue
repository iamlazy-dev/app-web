<template>
  <q-layout view="lHh LpR lfr">
    <q-header elevated>
      <q-toolbar class="bg-cool-gray-600 p-2.5 gap-x-4">
        <q-btn
          flat
          dense
          round
          :icon="isLeftDrawerOpen ? 'r_chevron_left' : 'r_chevron_right'"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="space-x-2">
          <small class="text-xs opacity-70">{{ $t('layouts.dashboard.topNav.project') }}</small>
          <q-btn-dropdown
            label="Toko Batik Pak Charles"
            dropdown-icon="r_arrow_drop_down"
            dense
            flat
            content-class="rounded-lg"
          >
            <q-list>
              <q-item
                :to="{name: 'DashboardIndex'}"
                exact
                dense
                class="text-gray-500"
              >
                <q-item-section avatar>
                  <q-avatar icon="r_view_stream" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ $t('layouts.dashboard.topNav.seeAll') }}</q-item-label>
                </q-item-section>
              </q-item>

              <q-item
                :to="{name: 'DashboardCreateProject'}"
                exact
                dense
                class="text-gray-500"
              >
                <q-item-section avatar>
                  <q-avatar icon="r_add" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ $t('layouts.dashboard.topNav.createProject') }}</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item
                v-for="el in projects"
                :key="el.id"
                :to="{name: 'DashboardOverview', params: {id: el.id}}"
                active-class="bg-gray-100 text-gray-600"
              >
                <q-item-section>
                  <q-item-label>{{ el.name }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-toolbar-title>

        <q-btn
          icon="r_notifications"
          flat
          round
          @click="toggleRightDrawer"
        />

        <q-btn
          flat
          round
        >
          <q-avatar rounded>
            D
          </q-avatar>

          <layout-menu />
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="isLeftDrawerOpen"
      show-if-above
      bordered
      class="bg-cool-gray-100"
    >
      <q-item-label
        header
        class="text-center brand"
      >
        <router-link to="/">
          iamlazy.dev
        </router-link>
      </q-item-label>

      <q-list class="px-2">
        <q-separator class="bg-gray-200 mt-2 mb-4" />

        <q-item
          :to="{name: 'DashboardOverview'}"
          exact
          class="rounded-2xl text-gray-600"
          active-class="bg-gray-200"
        >
          <q-item-section avatar>
            <q-icon name="r_home" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="font-medium capitalize">
              {{ $t('layouts.dashboard.sideNav.overview') }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item-label
          header
          class="font-semibold text-xs text-gray-400 uppercase !mt-2"
        >
          {{ $t('layouts.dashboard.sideNav.module') }}
        </q-item-label>

        <q-item
          v-for="(el, i) in sideNav.installedModules"
          :key="i"
          :to="el.to"
          exact
          class="rounded-2xl text-gray-600"
          active-class="bg-gray-200"
        >
          <q-item-section avatar>
            <q-avatar :icon="el.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="font-medium capitalize">
              {{ el.label }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          :to="{name: 'DashboardModuleExplorer'}"
          exact
          dense
          class="border-dashed border-2 border-gray-200 rounded-2xl text-gray-500"
          active-class="bg-gray-200"
        >
          <q-item-section avatar>
            <q-avatar icon="r_extension" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="font-medium capitalize">
              {{ $t('layouts.dashboard.sideNav.addModule') }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item-label
          header
          class="font-semibold text-xs text-gray-400 uppercase !mt-2"
        >
          {{ $t('layouts.dashboard.sideNav.settings') }}
        </q-item-label>

        <q-item
          v-for="(el,i) in sideNav.settings"
          :key="i"
          :to="el.to"
          exact
          class="rounded-2xl text-gray-600"
          active-class="bg-gray-200"
        >
          <q-item-section avatar>
            <q-icon :name="el.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="font-medium capitalize">
              {{ el.label }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer
      v-model="isRightDrawerOpen"
      side="right"
      overlay
      elevated
    >
      <q-list
        v-if="notificationItems.length"
        padding
      >
        <q-item
          v-for="(el, i) in notificationItems"
          :key="i"
          :to="el.action"
        >
          <q-item-section>
            <q-item-label>{{ el.message }}</q-item-label>
            <q-item-label caption>
              {{ [
                el.type.toUpperCase(),
                el.projectName,
                el.timestamp.toDateString()
              ].filter(Boolean).join(' | ') }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <span
        v-else
        class="m-auto"
      >
        {{ $t('layouts.dashboard.notification.fallback') }}
      </span>
    </q-drawer>

    <q-page-container>
      <router-view />
      <slot />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { uid } from 'quasar';
import i18n from 'src/i18n';
import LayoutMenu from 'components/LayoutMenu.vue';
import { registeredAppModules } from 'src/appModule/defineAppModule';
import type { RouteLocationRaw } from 'vue-router';

interface UserProject {
  id: string;
  name: string;
}

interface SideNavItem {
  label: string;
  icon: string;
  to: RouteLocationRaw;
  [k: string]: unknown;
}

interface NotificationItem {
  projectName?: string;
  message: string;
  type: 'warning' | 'info' | 'need action';
  timestamp: Date;
  action: RouteLocationRaw;
}

const projects: UserProject[] = [
  { id: uid(), name: 'Toko Elektronik Sugih Waras' },
  { id: uid(), name: 'TBK. Mesra' },
  { id: uid(), name: 'PT. Mencari Cinta Sejati' },
];

const installedModules: SideNavItem[] = registeredAppModules.map((el) => {
  const { id, name } = el.getInfo();
  const { iconOnNav } = el.getUIInfo();

  return {
    label: name,
    icon: iconOnNav,
    to: { name: `DashboardAppModule[${id}]` },
  };
});

const sideNavSettingItems: SideNavItem[] = [
  { label: i18n.global.t('layouts.dashboard.sideNav.team'), icon: 'r_group', to: '/dashboard/teams' },
  { label: i18n.global.t('layouts.dashboard.sideNav.general'), icon: 'r_settings', to: '/dashboard/settings' },
  { label: i18n.global.t('layouts.dashboard.sideNav.usage'), icon: 'r_data_usage', to: '/dashboard/usage' },
];

export default defineComponent({
  name: 'DashboardLayout',
  components: { LayoutMenu },
  setup() {
    const state = reactive({
      isLeftDrawerOpen: false,
      isRightDrawerOpen: false,
    });
    const notificationItems: NotificationItem[] = [
      {
        message: 'Anda didenda sebanyak 50M!',
        type: 'need action',
        timestamp: new Date(),
        action: '/dashboard',
      },
    ];

    return {
      ...toRefs(state),
      toggleLeftDrawer() {
        state.isLeftDrawerOpen = !state.isLeftDrawerOpen;
      },
      toggleRightDrawer() {
        state.isRightDrawerOpen = !state.isRightDrawerOpen;
      },
      projects,
      notificationItems,
      sideNav: {
        installedModules,
        settings: sideNavSettingItems,
      },
    };
  },
});
</script>
