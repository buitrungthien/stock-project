import axios from 'axios';

export const loadData = async ({ commit }) => {
    const res = await axios.get('https://vuejs-stock-trader-6fdd7.firebaseio.com/data.json');
    const data = res.data;
    if (data) {
        const { stocks, funds, stockPortfolio } = data;
        const portfolio = {
            stockPortfolio,
            funds
        };
        commit('SET_STOCKS', stocks);
        commit('SET_PORTFOLIO', portfolio);
    }
}