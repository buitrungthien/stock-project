<template>
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<router-link to="/" class="navbar-brand" style="cursor: pointer">Stock Trader</router-link>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<router-link to="/portfolio" tag="li" activeClass="active">
						<a>Portfolio</a>
					</router-link>
					<router-link to="/stocks" tag="li" activeClass="active">
						<a>Stocks</a>
					</router-link>
				</ul>
				<strong class="navbar-text navbar-right">Funds: {{funds | currency}}</strong>
				<ul class="nav navbar-nav navbar-right">
					<li>
						<a href="#" @click="endDay">End Day</a>
					</li>
					<li class="dropdown" :class="{open: isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">
						<a
							href="#"
							class="dropdown-toggle"
							data-toggle="dropdown"
							role="button"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Save & Load
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu">
							<li>
								<a href="#" @click="saveData">Save Data</a>
							</li>
							<li>
								<a href="#" @click="loadData">Load Data</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<!-- /.navbar-collapse -->
		</div>
		<!-- /.container-fluid -->
	</nav>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
	data() {
		return {
			isDropdownOpen: false
		};
	},
	computed: {
		funds() {
			return this.$store.getters.funds;
		}
	},
	methods: {
		...mapActions({
			randomizeStocks: "randomizeStocks",
			fetchData: "loadData"
		}),
		endDay() {
			this.randomizeStocks();
		},
		async saveData() {
			const data = {
				stocks: this.$store.getters.stocks,
				stockPortfolio: this.$store.getters.stockPortfolio,
				funds: this.$store.getters.funds
			};
			await axios.put(
				"https://vuejs-stock-trader-6fdd7.firebaseio.com/data.json",
				data
			);
		},
		loadData() {
			this.fetchData();
		}
	}
};
</script>

<style>
.navbar {
	background-color: #e2d32f;
}
.navbar-default .navbar-nav>li>a {
	color: black;
}
</style>


