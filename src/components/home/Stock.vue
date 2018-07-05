<template>
   <section>
     <!-- <div class="image-cont">
        <img :src="stock.image">
     </div> -->

     <div class="img" v-bind:style="{ backgroundImage: 'url(' + stock.image + ')' }"></div>

      <h4 style="font-family: 'Ubuntu', sans-serif">{{stock.name}}</h4>
      <p></p>

      <aside>
        <div class="input-sec">
          <input type="number"
                  placeholder="quantity"
                  class="form-control qty-input"
                  v-model.number="qty">
        </div>
        <ul>
          <li>Rs.{{stock.price}}</li>
          <li>In Stock</li>
        </ul>
        <button class="btn btn-small" @click="buyStock">Add to Cart</button>
      </aside>
    </section>

</template>
<script>
export default {
   props: ['stock'],
   data() {
       return {
           qty: 1
       }
   },
   methods: {
      buyStock() {
         const order = {
            stockId: this.stock.id,
            quantity: this.qty,
            stockPrice: this.stock.price
         }
         console.log(order);
         this.$store.dispatch('buyStock', order);
        this.qty = 0;
      }
   }
}
</script>
<style scoped>
   section {
  align-items: center;
  display: flex;
  flex-grow: 1 ;
  flex-shrink: 1;
  flex-direction: column;
  text-align: center;
  max-width: 300px;
}

p {
  flex-grow: 1;
}

/* This rule ist just because of the responsive images */
/* @media (max-width: 1600px) {
  section {
    max-width: 250px;
  }
} */

 ul {
  display: flex;
  justify-content: space-between;
}

aside {
  width: 100%;
  margin-top: auto;
}

/* Basic styling for UI */



/* img {
  width: 100%;
  height: 300px;
  border-radius: 2px;
  object-fit:scale-down;
} */

.img {

    position: relative;
    float: left;
    width:  100%;
    height: 300px;
    background-position: 50% 50%;
    background-repeat:   no-repeat;
    background-size:     cover;
}

/* @media (max-width: 1600px) {
  img{
    width: 250px;
  }
} */


section {
  background: #fff;
  padding: 1em;
  margin: 0.5em;
  border-radius: 4px;
}
.input-sec {
  margin-bottom: 10px;
}
.qty-input {
  width: 100px;
  margin-left: auto;
  margin-right: auto;
}
.btn {
  background-color: #FB5642;
  color: #FFF;
  font-weight: bold;
  font-size: 13px;
}
.btn:hover {
  box-shadow: 1px 1px 1px 5px #FB5642;
}
/* button {
  background: #009999 url(http://i.imgur.com/RWKrr8S.png);
  background-repeat: no-repeat;
  background-position: 2em 50%;
  background-size: 2em;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  color: #FFF;
  font-weight: bold;
  font-size: 13px;
  padding: 1.5em 3em;
  padding-left: 6em;
  text-transform: uppercase;
  display: block;
  width: 100%;
}

button:hover {
  background-color: #006B6B;
  background-size: 3em;
  background-position: 1.5em 50%;
} */

ul {
  list-style-type: none;
  padding: 0;
}

 li {
  background: #eee;
  font-weight: 700;
  padding: 0.3em 0.6em;
  border-radius: 1em;
}


</style>
