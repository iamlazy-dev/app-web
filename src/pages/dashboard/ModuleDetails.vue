<template>
  <q-page class="flex flex-col gap-y-8 items-stretch">
    <section class="px-8 pt-8 page-section--no-min-h">
      <div class="flex">
        <q-btn
          :label="$t('btn.back')"
          icon="r_navigate_before"
          flat
          rounded
          class="text-gray-700"
          :to="{name: 'DashboardModuleExplorer'}"
        />
      </div>
    </section>

    <section class="px-8 page-section--no-min-h">
      <div class="flex justify-between">
        <h1 class="font-bold text-2xl text-gray-800">
          Product Database
        </h1>

        <q-btn
          :label="$t('dashboard.module.installToProject')"
          no-caps
          rounded
          unelevated
          class="bg-gray-700 text-white"
        />
      </div>
    </section>

    <q-scroll-area
      class="bg-cool-gray-100 h-[55vh] page-section--no-min-w"
      :content-style="{display: 'flex'}"
    >
      <div class="flex flex-row flex-nowrap my-auto px-12 gap-x-8 justify-center">
        <q-img
          v-for="i in 5"
          :key="i"
          src="https://picsum.photos/300/300"
          class="flex-shrink-0 w-96"
          :ratio="4/3"
        />
      </div>
    </q-scroll-area>

    <section class="flex-row px-8 page-section">
      <article class="min-w-prose prose">
        <h2>Overview</h2>
        <!-- injected user content will be start here -->
        <h3>Fitur utama</h3>

        <ul>
          <li>CRUD Product</li>
        </ul>

        <h3>Panduan</h3>

        <ol>
          <li>Install modul ini dengan klik “Tambahkan ke projek”</li>
          <li>Mulai dengan menambahkan produk dengan cara klik tombol “Tambah Produk”</li>
          <li>Isikan semua form kemudian simpan</li>
          <li>Data produk siap digunakan ke API</li>
        </ol>
        <!-- injected user content will be end here -->
      </article>

      <article class="flex-shrink w-full prose">
        <h2>Details</h2>

        <table>
          <tbody>
            <tr>
              <th>{{ $t('word.users') }}</th>
              <td>10,000,000+</td>
            </tr>

            <tr>
              <th>{{ $t('word.rating') }}</th>
              <td class="flex items-center">
                <q-icon name="r_star_rate" />
                <span>4.8</span>
              </td>
            </tr>

            <tr>
              <th>{{ $t('word.developer') }}</th>
              <td>
                <a href="https://iamlazy.dev">iamlazy.dev</a>
              </td>
            </tr>

            <tr>
              <th>{{ $t('word.read') }}</th>
              <td class="flex items-center">
                <router-link :to="{name: 'DashboardOverview'}">
                  <span>baca</span>
                  <q-icon name="r_arrow_forward" />
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageDashboardModuleDetails',
});
</script>
