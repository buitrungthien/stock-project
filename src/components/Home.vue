<template>
	<div>
		<h1 class="text-center">Trade or View your Portfolio</h1>
		<h5 class="text-center">You may Save & Load your Data</h5>
		<h5 class="text-center">Click on 'End Day' to begin a New Day</h5>
		<hr>
		<p class="pull-right">Your Funds: {{funds | currency}}</p>
	</div>
</template>

<script>
export default {
	computed: {
		funds() {
			return this.$store.getters.funds;
		}
	}
};
</script>

 