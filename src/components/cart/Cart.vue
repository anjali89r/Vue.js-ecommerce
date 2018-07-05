<template>
 <div class="container">
   <div class="row">
      <div class="col-md-9">
        <div v-if="stocks.length">
          <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
        </div>
         <div v-else>
           No items in cart!
         </div>
      </div>
   </div>
 </div>

</template>
<script>
import Stock from './Stock.vue';
import {mapGetters} from 'vuex';

export default {
   components: {
      'app-stock': Stock
   },
   computed: {
      ...mapGetters({
          stocks: 'stockPortfolio'
   })
   }
}
</script>
<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Or space-between or space-around */
}
</style>
