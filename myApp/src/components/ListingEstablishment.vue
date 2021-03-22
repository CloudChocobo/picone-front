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
		background-color: #f6f6f6;
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

	.icone {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		border: 3px solid rgb(13, 219, 82);
	}
	.icone.vieux_laid {
		border-color: #7d54f2;
	}
	.icone.raide {
		border-color: rgb(212, 44, 72);
	}
	.icone.yeah_lô {
		border-color: yellow;
	}
</style>
