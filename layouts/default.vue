<template>
  <div class="default_layout">
    <Header />
    <div class="page_content">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header/index.vue";
import Footer from "~/components/Footer/index.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
