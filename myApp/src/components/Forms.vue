<template>
	<div class="Forms">
		<form v-on:submit.prevent="submitForm">
			<div class="form-group">
				<label for="name">Nom</label>
				<input
					type="text"
					class="form-control"
					id="name"
					placeholder="Epad michel"
					v-model="form.name"
				/>
			</div>

			<div class="form-group">
				<label for="email">Email address</label>
				<input
					type="email"
					class="form-control"
					id="email"
					placeholder="name@example.com"
					v-model="form.email"
				/>
			</div>
			<div class="form-group">
				<label for="adress">Adresse</label>
				<input
					type="text"
					class="form-control"
					id="adress"
					placeholder="3 rue de la pomme"
					v-model="form.adress"
				/>
			</div>

			<div class="form-group">
				<label for="postalCode">CP</label>
				<input
					type="text"
					class="form-control"
					id="postalCode"
					placeholder="44000"
					v-model="form.postalCode"
				/>
			</div>
			<div class="form-group">
				<label for="town">Ville</label>
				<input
					type="text"
					class="form-control"
					id="town"
					placeholder="Nantes"
					v-model="form.town"
				/>
			</div>
			<div class="form-group">
				<label for="telephon">Téléphone</label>
				<input
					type="text"
					class="form-control"
					id="telephon"
					placeholder="02 40 45 67 89"
					v-model="form.telephon"
				/>
			</div>
			<div class="form-group">
				<button class="record">Ajouter</button>
			</div>
		</form>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name: "",
		props: [],
		components: {},

		data() {
			return {
				form: {
					name: "",
					email: "",
					adress: "",
					pc: "",
					town: "",
					telephon: "",
				},
			};
		},
		methods: {
			//submitForm(){
			//axios.post('/establishment', this.form)
			//	.then((res) => {
			//})
			//.catch((error) => {
			//})
			//.finally(() =>{
			//})
		},
		afficher() {
			console.log(this.town);
		},
	};
	////}
	//}
</script>

<style scoped>
	.Forms {
		background-color: #8badbe;
		display: flex;

		padding: 60px 20px;
		border-radius: 15px;
		gap: 10px;
		align-content: center;
		flex-shrink: 1;
		text-align: center;
		position: absolute;
	}
	.text {
		height: min-content;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.form-group {
		border-radius: 10px;
		font-size: 20px;
		padding: 15px;
		flex-direction: column;
		align-content: center;
	}
	.record {
		border-radius: 10px;
		font-size: 20px;
		padding: 15px;
		flex-direction: column;
		align-content: center;
	}
</style>
