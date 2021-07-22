<template>
  <q-page class="flex flex-col">
    <section class="flex flex-col flex-nowrap max-w-screen-xl w-full p-4 pb-16 gap-x-16 self-center sm:flex-row justify-center items-center sm:h-[80vh] sm:p-0 sm:pb-8">
      <div class="flex flex-col sm:gap-y-8">
        <h3 class="font-medium text-4xl text-gray-800">
          <span class="block">{{ $t('home.section1.title.line1') }}</span>
          <span class="block">{{ $t('home.section1.title.line2') }}</span>
        </h3>

        <p class="max-w-prose mb-16 text-gray-500">
          {{ $t('home.section1.subtitle') }}
        </p>

        <div class="flex gap-x-4">
          <q-btn
            :label="$t('home.section1.cta.startNow')"
            no-caps
            rounded
            unelevated
            class="bg-gray-700 text-white"
          />
          <q-btn
            :label="$t('home.section1.cta.seeGuide')"
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
          class="object-scale-down w-full sm:w-96 sm:h-96"
        >
      </div>
    </section>

    <section class="bg-gray-100 h-[80vh] self-stretch" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageHome',
});
</script>
