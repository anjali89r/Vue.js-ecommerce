import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './modules/stocks'
import cart from './modules/cart'

Vue.use(Vuex);

export default new Vuex.Store({
   modules: {
      stocks,
      cart
   }
});
