const state = {
   stocks: [],
   items: 0
}

/*eslint-disable */
const mutations = {
   'BUY_STOCK': (state, {stockId,quantity,stockPrice}) => {
      const record = state.stocks.find(el => el.id === stockId)
      if (record) {
         record.quantity += quantity;
      }
      else {
         state.stocks.push({
            id: stockId,
            quantity: quantity,
            price: stockPrice
         });
      }
      state.items += quantity;

   },
   'DELETE_STOCK': (state, id) => {
      const deleteItemIndex = state.stocks.findIndex(el => el.id === id);
         state.stocks.splice(deleteItemIndex,1);
         state.items--;
   },
   'SET_PORTFOLIO': (state, portfolio)=>{
      state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
      state.funds = portfolio.funds;
   }
}

const actions = {
   deleteItem: ({commit}, id) => {
      commit('DELETE_STOCK', id);
   }
}
const getters = {
   stockPortfolio(state, getters){
      return state.stocks.map(stock => {
         const record = getters.stocks.find(el => el.id === stock.id);
         return {
            id: stock.id,
            quantity: stock.quantity,
            name: record.name,
            price: record.price,
            image: record.image
         }

      })
   },
   cartItems(state) {
      return state.items;
   }

}

export default {
   state,
   mutations,
   actions,
   getters
}

