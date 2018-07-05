<template>
<div>
  <app-NavHeader></app-NavHeader>
  <!-- <app-rough></app-rough> -->
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader.vue';
// import Rough from './components/home/roughStocks.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    appNavHeader: NavHeader,
    // appRough: Rough,
    appFooter: Footer
  },
  created() {
    this.$store.dispatch('initStocks');
    let scripTag = document.createElement('script');
    scripTag.setAttribute('src',"../index.js");
    document.head.appendChild(scripTag);
  }
}
</script>

<style>
  .mx-auto {
      margin-left: auto!important;
      margin-right: auto!important
   }
   .text-center {
     text-align: center!important;
   }

</style>
