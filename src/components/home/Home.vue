<template>
<div>
  <app-header></app-header>
  <section class="features-icons text-center">
    <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="features-icons-item mx-auto">
         <div class="features-icons-icon d-flex">
           <i class="fa fa-money mx-auto" aria-hidden="true"></i>
         </div>
         <h6>Money Back Guarantee</h6>
        </div>
      </div>
      <div class="col-md-4">
        <div class="features-icons-item mx-auto">
         <div class="features-icons-icon d-flex">
           <i class="fa fa-money mx-auto" aria-hidden="true"></i>
         </div>
         <h6>Money Back Guarantee</h6>
        </div>
      </div>
      <div class="col-md-4">
        <div class="features-icons-item mx-auto">
         <div class="features-icons-icon d-flex">
           <i class="fa fa-money mx-auto" aria-hidden="true"></i>
         </div>
         <h6>Money Back Guarantee</h6>
        </div>
      </div>
    </div>
  </div>
  </section>
  <section class="stocks">
    <app-stocks></app-stocks>
  </section>
  <section class="categories">

    <app-categories></app-categories>
  </section>
</div>

</template>
<script>
import Header from './Header.vue';
import Stocks from './Stocks.vue';
import Categories from './Categories.vue';
// import Rough from './roughStocks.vue';
export default {
   components: {
      appHeader: Header,
      appStocks: Stocks,
      appCategories: Categories,
      // appRough: Rough
   }
}
</script>

<style>
.features-icons {
  /* padding-top: 7rem; */
  padding-bottom: 1rem;
}
.features-icons .features-icons-item {
  max-width: 20rem;
}
.features-icons .features-icons-item .features-icons-icon {
  height: 5rem;
}
.d-flex {
  display: flex!important
}
.features-icons .features-icons-item .features-icons-icon i {
  font-size: 4.5rem;
}
.stocks {
  background-color: #F3F3F3;
}
.categories {
  margin-top: 40px;
}
</style>

