<template>
  <div>
    <AppHeader />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import AppHeader from "../components/AppHeader";
export default {
  components: {
    AppHeader,
  },
};
</script>
<style>
</style>
