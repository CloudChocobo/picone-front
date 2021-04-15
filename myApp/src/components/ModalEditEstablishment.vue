<template>
	<div class="container">
		<v-layout row wrap>
			<div class="box">
				<v-card flat>
					<form @submit.prevent="submit">
						<ion-card-content v-if="establishmentObj">
							<ion-label name>Ehpad Michel</ion-label>
							<ion-input
								type="text"
								v-model="establishmentObj.name"
								placeholder="Entrez un nom"
								:required="true"
							></ion-input>
							<ion-label address>adresse:</ion-label>
							<ion-input
								type="text"
								v-model="establishmentObj.address"
								placeholder="Entrez une adresse"
								:required="true"
							></ion-input>
							<ion-label postalCode>code postal:</ion-label>
							<ion-input
								type="text"
								v-model="establishmentObj.postalCode"
								placeholder="Entrez un code postal"
								:required="true"
							></ion-input>
							<ion-label city>ville:</ion-label>
							<ion-input
								type="text"
								v-model="establishmentObj.city"
								placeholder="Entrez une ville"
								:required="true"
							></ion-input>
							<ion-label phone>téléphone:</ion-label>
							<ion-input
								type="text"
								v-model="establishmentObj.phone"
								placeholder="Entrez un num téléphone"
								:required="true"
							></ion-input>
							<ion-label email>Email:</ion-label>
							<ion-input
								type="email"
								v-model="establishmentObj.email"
								placeholder="Entrez un email"
								:required="true"
							></ion-input>
						</ion-card-content>
						<ion-button color="white" @click="[edit(), close(), reloadPage()]"
							>Modifier</ion-button
						>
						<ion-button color="grey" @click="[erase(), save()]">Supprimer</ion-button>
						<ion-button color="grey" @click="[close()]">Annuler</ion-button>
					</form>
				</v-card>
			</div>
		</v-layout>
	</div>
</template>

<script>
	import {IonButton, IonInput, IonCardContent} from "@ionic/vue";
	import axios from "axios";

	export default {
		components: {IonButton, IonInput, IonCardContent},
		name: "ModalEditEstablishment",
		props: ["isOpen", "title", "establishment"],
		emits: ["update:isOpen", "setestablishment"],
		data: () => {
			return {
				establishmentObj: null,
			};
		},
		mounted() {
			this.establishmentObj = this.establishment;
		},
		methods: {
			//deleteEstablishment(establishment) {
			//let response = confirm ('Veuillez confimer la suppression ${establishment.name}')

			//   if(response){
			//this.$store.dispatch('establishment/delete', establishment);
			//this.$store.dispatch('snackbar/setSnackbar', {text: `You have successfully deleted your video, ${video.name}.`});

			//}
			save() {
				this.$emit("update:isOpen", false);
				this.$router.go();
			},
			close() {
				this.$emit("update:isOpen", false);
			},
			erase() {
				console.log("formData" + JSON.stringify(this.establishmentObj));
				axios
					.delete(
						"http://localhost:8091/establishments/" + this.establishmentObj.id,
						this.establishmentObj
					)

					.then((res) => {
						console.log("SpringBoot res" + JSON.stringify(res));
					})
					.catch((err) => {
						console.log(err);
					});
			},

			edit() {
				console.log("formData" + JSON.stringify(this.establishmentObj));
				axios
					.put(
						"http://localhost:8091/establishments/" + this.establishmentObj.id,
						this.establishmentObj
					)

					.then((res) => {
						console.log("SpringBoot res" + JSON.stringify(res));
					})
					.catch((err) => {
						console.log(err);
					});
			},

			reloadPage() {
				this.$router.go();
			},
		},
	};
</script>

<style scoped>
	.container {
		z-index: 2;
		position: fixed;
		width: 100%; /* % width page */
		height: 100%; /* % heigth page*/
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%; /*du contenant*/
		height: 100%; /*du contenant*/
		background-color: rgb(226, 224, 224);
		opacity: 0.6;
	}
	.box {
		display: flex;
		align-items: center;
		width: 150%;
		height: 110%;
	}
	v-card {
		background-color: #bdddec;
		border-radius: 10px;
		overflow: hidden; /*ce qui dépasse (de l'arrondi): caché*/
		width: 200%;
		height: 150%;
	}
	ion-button {
		display: flex;
	}
	ion-button:hover {
		filter: brightness(1.2);
	}
	ion-button:active {
		transform: scale(0.9);
	}
	header {
		width: 100%;
		background-color: #8badbe;
		display: flex;
		justify-content: center;
		height: 15%;
	}
	header .title {
		margin-top: 5%;
		color: #536974;
		font-size: 18px;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		justify-content: center;
	}
	button {
		width: 50%;
		background-color: #f1faff;
	}

	form {
		background-color: #bdddec;
	}
	ion-input {
		background-color: #f1faff;
		color: #536974;
	}
</style>
