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
        <div class="w-full max-w-screen-lg mx-auto flex justify-between items-center">
          <q-toolbar-title class="brand">
            iamlazy.dev
          </q-toolbar-title>

          <q-btn
            icon="r_menu"
            unelevated
            round
            class="sm:hidden py-2 bg-gray-200 text-gray-700"
          >
            <q-menu class="w-[50vw]">
              <q-list>
                <q-item
                  v-ripple
                  clickable
                >
                  <q-item-section avatar>
                    <q-avatar
                      icon="r_category"
                      rounded
                      class="text-gray-400 w-8 h-8"
                    />
                  </q-item-section>
                  <q-item-section class="font-medium text-gray-700">
                    PRODUK
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
                      class="text-gray-400 w-8 h-8"
                    />
                  </q-item-section>
                  <q-item-section class="font-medium text-gray-700">
                    PANDUAN
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
                      class="text-gray-400 w-8 h-8"
                    />
                  </q-item-section>
                  <q-item-section class="font-medium text-gray-700">
                    HARGA
                  </q-item-section>
                </q-item>
                <q-item
                  v-ripple
                  clickable
                  class="bg-bg-light-100"
                >
                  <q-item-section avatar>
                    <q-avatar
                      icon="r_dashboard"
                      rounded
                      class="text-gray-400 w-8 h-8"
                    />
                  </q-item-section>
                  <q-item-section class="font-medium text-gray-700">
                    DASHBOARD
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <div class="hidden !sm:flex items-center gap-x-8">
            <q-btn
              label="PRODUK"
              flat
              class="text-gray-600"
            />
            <q-btn
              label="PANDUAN"
              flat
              class="text-gray-600"
            />
            <q-btn
              label="HARGA"
              flat
              class="text-gray-600"
            />
            <q-btn
              rounded
              :class="`text-gray-700 before:(border-t border-gray-200/90) ${isScrolled ? 'before:(border shadow-none)' : 'before:shadow-md'}`"
            >
              <div class="py-2 flex items-center gap-x-2">
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
                class="min-w-52 border-t border-gray-200/60 rounded-lg shadow-lg"
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
                        class="text-gray-400 w-8 h-8"
                      />
                    </q-item-section>
                    <q-item-section class="font-medium text-gray-700">
                      AKUN SAYA
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
                        icon="r_dashboard"
                        rounded
                        class="text-gray-400 w-8 h-8"
                      />
                    </q-item-section>
                    <q-item-section class="font-medium text-gray-700">
                      DASHBOARD
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
                        class="text-gray-400 w-8 h-8"
                      />
                    </q-item-section>
                    <q-item-section class="font-medium text-gray-700">
                      BANTUAN
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
                        class="text-gray-400 w-8 h-8"
                      />
                    </q-item-section>
                    <q-item-section class="font-medium text-gray-700">
                      LOGOUT
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
      <q-page class="flex flex-col">
        <section class="self-center w-full max-w-screen-xl sm:h-[80vh] p-4 sm:p-0 pb-16 sm:pb-8 flex flex-col sm:flex-row flex-nowrap justify-center items-center gap-x-16">
          <div class="flex flex-col sm:gap-y-8">
            <h3 class="font-medium text-4xl text-gray-800">
              <span class="block">Bikin toko online cepat</span>
              <span class="block">tapi masih enjoy ngoding?</span>
            </h3>

            <p class="max-w-prose mb-16 text-gray-500">
              Menyediakan berbagai kebutuhan anda sebagai developer untuk mengembangkan
              aplikasi anda! Menggunakan API untuk dari menyimpan ke database,
              menangani flow pembayaran, dan masih banyak lagi ;)
            </p>

            <div class="flex gap-x-4">
              <q-btn
                label="Mulai sekarang"
                no-caps
                rounded
                unelevated
                class="bg-gray-700 text-white"
              />
              <q-btn
                label="Lihat panduan"
                no-caps
                rounded
                flat
                class="text-gray-700"
              />
            </div>
          </div>

          <div class="order-first sm:order-last sm:p-12">
            <img
              src="/assets/Home_landing app example.png"
              alt="contoh aplikasi"
              class="w-full sm:w-96 sm:h-96 object-scale-down"
            >
          </div>
        </section>

        <section class="self-stretch h-[80vh] bg-gray-100" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { Q } from 'src/types';

export default defineComponent({
  name: 'PageHome',
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

<style lang="sass">
// prefer importing global css here due to windicss bug (maybe its bug 😐)
@import 'src/css/app.sass'
</style>
