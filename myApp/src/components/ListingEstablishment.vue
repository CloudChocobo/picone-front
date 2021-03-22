<template>
	<div class="listingEstablishment">
		<div class="text">
			<div class="name">{{ name }}</div>
			<div class="infoPrincipale">{{ infoPrincipale }}</div>
			<div class="line">
				<div class="infoSecondaire">{{ infoSecondaire }}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		props: ["name", "infoPrincipale", "infoSecondaire"],
		components: {},
		methods: {},
		data() {
			return {};
		},
	};
</script>

<style scoped>
	.listingEstablishment {
		background-color: #c0e4f7;
		display: flex;
		justify-content: space-between;
		padding: 15px 20px;
		border-radius: 15px;
		gap: 10px;
	}
	.text {
		height: min-content;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.line {
		display: flex;
		gap: 7px;
		align-items: center;
		justify-content: center;
		align-items: center;
		width: max-content;
	}

	.icone.raide {
		border-color: rgb(226, 225, 225);
	}
	.icone.yeah_lô {
		border-color: rgb(0, 166, 255);
	}
</style>
