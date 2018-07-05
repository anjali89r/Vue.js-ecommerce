<template>

            <!-- <section>
      <img :src="stock.image">
      <h6>{{stock.name}}</h6>
      <p></p>
      <input type="number"
                  placeholder="quantity"
                  class="form-control"
                  v-model.number="qty">
      <aside>
        <ul>
          <li>Price: Rs.{{stock.price}}</li>
          <li>In Stock</li>
        </ul>
        <button >In Cart</button>
      </aside>
    </section> -->
<div class="single-product">
    <div class="del">
        <button @click="removeItem" class="product-remove"></button>
    </div>
    <div class="in-cart">
        <div class="product-wrapper">
            <div class="product-image">
                <picture>
                    <img :src="stock.image">
                </picture>
            </div>
            <div class="product-info">
                <div class="product-info-inner">
                    <h6 class="product-name">{{stock.name}}</h6>
                    <span>quantity: {{qty}}</span>
                    <span><p>Rs.{{stock.price}}</p></span>
                </div>
                <div class="qty-price-container">
                    <div class="quantity-col">
                        <div class="tooltip-container">
                           <div class="quantity-selector">
                            <input type="number"
                  placeholder="quantity"
                  class="form-control"
                  v-model.number="qty">
                        </div>
                        </div>

                    </div>
                    <!-- <div class="price-container price-col">
                        <div class="price">
                            <p>Rs.{{stock.price}}</p>
                        </div>

                    </div> -->
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
   props: ['stock'],
   data() {
       return {
           qty: this.stock.quantity
       }
   },
   methods: {
       removeItem() {
           this.$store.dispatch('deleteItem', this.stock.id)
       }
   }
}
</script>
<style scoped>
@media (min-width: 1080px){
    .single-product .product-info {
        margin-bottom: 0;
    }
    .single-product .price-container {
        text-align: right;
        padding-left: 0;
        border-left: 0;
        display: table-cell;
        width: 68%;
    }
}
@media (min-width: 1025px){
    .single-product {
      width: 100%;
      padding: 24px 48px;
      min-height: 186px;
  }
  .single-product .product-remove{
          width: 20px;
          height: 20px;
          margin: 24px;
      }
      .single-product .product-image {
          width: 100px;
          margin: 0 24px;
          top: auto;
      }
      .single-product .product-info {
          padding-left: 190px;
      }
      .product-info {
          width: 36%;
          padding-left: 0;
      }
      .single-product .product-info .quantity-selector {
          left: 190px;
      }
      .single-product .price-container {
          padding-left: 190px;
      }
}
@media (min-width: 520px){
    .single-product .product-image {
          width: 20%;
          margin-top: 24px;
          top: 0;
      }
      .single-product .product-info {
          padding-left: 35%;
      }
      .single-product .price-container {
          padding-left: 0;
          min-width: 120px;
      }
}
@media (min-width: 641px){
    .single-product {
        width: 100%;
      padding: 24px 10px;
        margin: 0 0 12px;
    }
    .single-product .product-remove{
          width: 18px;
          height: 18px;
          margin: 24px;
      }
       .product-info {
           float: right;
          width: 48%;
          padding-left: 12px;
      }
      .single-product .product-info .quantity-selector {

      margin-left: 24px;
      width: 162px;
  }
}
  .single-product {
      background: #f7f7f7;
      width: auto;
      height: auto;
      margin: 30px 12px 12px;
      padding: 22px 12px 24px 24px;
      position: relative;
  }
  .single-product .product-remove {
      position: absolute;
      top: 0;
        left: 0;
       width: 14px;
        height: 14px;
        margin: 12px;
  }
  .product-remove {
      background: url(../../assets/icon-close.svg) center center no-repeat;
      border: 0;
      background-size: 18px;
      z-index: 1;
  }
  .single-product .product-wrapper {
      display: block;
      width: 100%;
      position: relative;
  }
  .single-product .product-image {
      width: 20%;
      height: auto;
      vertical-align: bottom;
      position: absolute;
      bottom: 0;
      display: inline-block;
  }
  .single-product .product-image img {
      width: 100%;
      height: auto;
  }
  .single-product .product-info {
      width: 100%;
      padding-left: 38%;
      display: block;
      min-height: 157px;
      float: none;
      position: relative;
      margin-bottom: 60px;
  }
  .single-product .product-info .product-info-inner {
      border-left: 24px solid transparent;
      min-height: 100px;
  }
  .single-product .product-info .product-name {
      font-family: 'Open Sans',sans-serif;
      font-style: normal;
      /* line-height: 21px; */
      font-weight: 400;
      padding-bottom: 6px;
  }
  .single-product .product-name, .single-product p {
      margin: 0;
      padding: 0;
  }
  .single-product .qty-price-container {
      display: table;
      width: 100%;
      position: relative;
  }
  .single-product .qty-price-container .quantity-col {
   display: table-cell;
   vertical-align: bottom;
  }
  .quantity-col .tooltip-container {
      position: relative;
      width: 100%;
  }
  .single-product .product-info .quantity-selector {
      left: 35%;
      margin-left: 24px;
      width: 155px;
  }
  .quantity-selector {
      display: inline-block;
      margin-right: 6px;
  }
  .single-product .price-container {
      padding-left: 38%;
      border-left: 24px solid transparent;
      clear: both;
  }
  .single-product .price {
      font-size: 1.286em;
      font-weight: 700;
  }
</style>
