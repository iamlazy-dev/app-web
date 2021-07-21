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

          <div class="flex items-center gap-x-8">
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
              class="text-gray-700"
            >
              <div class="py-2 flex gap-x-2">
                <q-icon name="menu" />
                <q-icon name="account_circle" />
              </div>
            </q-btn>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="flex flex-col">
        <section class="self-center w-full max-w-screen-xl h-[85vh] flex flex-nowrap justify-center items-center gap-x-16">
          <div class="flex flex-col gap-y-8">
            <h3 class="font-medium text-4xl text-gray-800">
              <span class="block">Bikin toko online cepat</span>
              <span class="block">Tapi masih enjoy ngoding?</span>
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

          <div class="p-12">
            <img
              src="/assets/Home_landing app example.png"
              alt="contoh aplikasi"
              class="w-96 h-96 object-scale-down"
            >
          </div>
        </section>
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
