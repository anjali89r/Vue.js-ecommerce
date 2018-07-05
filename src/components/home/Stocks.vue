<template>
<div>
    <div class=" container featured-prods">
        <div class="col-md-12"> <h4>Featured Products</h4></div>

    </div>

   <div class="flex">

        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>



   </div>
   </div>
</template>
<script>
import Stock from './Stock.vue';
export default {
    components: {
        appStock: Stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
}
</script>
<style scoped>
.featured-prods {
    padding-top: 20px;
    text-align: center;
}
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Or space-between or space-around */
  padding: 20px;
}
</style>
