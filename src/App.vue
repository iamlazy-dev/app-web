<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="sass">
// prefer importing global css here due to windicss bug (maybe its bug 😐)
@import 'src/css/app.sass'
</style>
