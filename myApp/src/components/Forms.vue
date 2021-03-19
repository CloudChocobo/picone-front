<template>
	<div class="Forms">
		<div class="text">
			<div class="name">{{ name }}</div>
			<div class="infoPrincipale">{{ infoPrincipale }}</div>
		
				

				<div class="infoSecondaire">{{ infoSecondaire }}</div>
			</div>
	
</template>

<script>

	export default {
		name: "",
		props: ["email", "motDePasse", "nom", "adresse","cp","ville","telephone"],
		components: {},
		methods: {},
		data() {
			return {};
		},
	};
</script>

<style scoped>
	.Forms {
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

	

	img {
		background-color: rgb(206, 206, 206);
		height: 75px;
		width: 75px;
		border-radius: 6px;
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
