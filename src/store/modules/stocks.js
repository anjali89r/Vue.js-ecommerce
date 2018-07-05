import Vue from 'vue';
const state = {
   stocks: []
};
/*eslint-disable */
const mutations = {
   'SET_STOCKS': (state, stocks)=>{
      state.stocks = stocks;
   }

};

const actions = {
   buyStock: ({commit}, order) => {

      commit('BUY_STOCK', order)
   },
   initStocks :({commit}) => {
      Vue.http.get('data.json')
      .then(response => response.json())
      .then(data => {
         if (data) {
            const stocks = data.stocks;

            commit('SET_STOCKS', stocks);
         }
      })

   },

};

const getters = {
   stocks: state => {
      return state.stocks;
   }
};

export default {
   state,
   mutations,
   actions,
   getters
}
