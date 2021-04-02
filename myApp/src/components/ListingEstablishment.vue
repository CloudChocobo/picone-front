<template>
	<div class="listingEstablishment">
		<div class="text">
			<div class="listingEstablishment-header">
				<div class="name">{{ name }}</div>
			</div>

			<div class="address">{{ address }}</div>
			<div class="line">
				<div class="city">{{ city }}</div>
				<div class="postalCode">{{ postalCode }}</div>
			</div>
			<div class="phone">{{ phone }}</div>
			<div class="email">{{ email }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		props: ["name", "address", "postal code", "city", "phone", "email"],
		components: {},
		methods: {},
		data() {
			return {};
		},
	};
</script>

<style scoped>
	.listingEstablishment {
		/*margin-top: 2%;
		color: #536974;
		background-color: #c0e4f7;

		padding: 15px 20px;
		border-radius: 15px;
		gap: 15px;
		align-items: stretch;
		margin-right: 40%;
		display: flex;
		grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
		grid-gap: 20px;*/

		background-color: #bdddec;
		display: flex;
		justify-content: space-between;
		align-content: space-between;
		flex-direction: column;
		padding: 15px 20px;
		border-radius: 15px;
		gap: 10px;
	}

	.text {
		display: grid;
		grid-template-columns: repeat(4, 150px);
	}
	.line {
		display: flex;
		gap: 7px;
		align-items: center;
		justify-content: center;
		align-items: center;
		width: max-content;
	}
	.listingEstablishment-header {
		font-weight: bold;
	}
</style>
