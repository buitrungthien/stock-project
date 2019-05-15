import axios from 'axios';

export const loadData = async ({ commit }) => {
    const data = await axios.get('https://vuejs-stock-trader-6fdd7.firebaseio.com/data.json');
    console.log(data);
    if (data) {
        const { stocks, funds, stockPortfolio } = data;
        const portfolio = {
            stockPortfolio,
            funds
        };
        commit('SET_STOCK', stocks);
        commit('SET_PORTFOLIO', portfolio);
    }
}