<template>
	<div class="container">
		<div class="cheesebox" @click="close()"></div>
		<div class="box">
			<ion-card>
				<form @submit.prevent="submit">
					<ion-card-content>
						<ion-label name>Nom établissement</ion-label>
						<ion-input
							type="text"
							v-model="name"
							placeholder="Entrez un nom"
							:required="true"
						></ion-input>
						<ion-label address>adresse:</ion-label>
						<ion-input
							type="text"
							v-model="address"
							placeholder="Entrez une adresse"
							:required="true"
						></ion-input>
						<ion-label postalCode>code postal:</ion-label>
						<ion-input
							type="text"
							v-model="postalCode"
							placeholder="Entrez un code postal"
							:required="true"
						></ion-input>
						<ion-label city>ville:</ion-label>
						<ion-input
							type="text"
							v-model="city"
							placeholder="Entrez une ville"
							:required="true"
						></ion-input>
						<ion-label phone>téléphone:</ion-label>
						<ion-input
							type="text"
							v-model="phone"
							placeholder="Entrez un num téléphone"
							:required="true"
						></ion-input>
						<ion-label email>Email:</ion-label>
						<ion-input
							type="email"
							v-model="email"
							placeholder="Entrez un email"
							:required="true"
						></ion-input>
					</ion-card-content>
					<ion-button color="grey" @click="[saveEstablishment(), save()]">Ajouter</ion-button>
				</form>
			</ion-card>
		</div>
	</div>
</template>

<script>
	import {IonButton, IonInput, IonCardContent, IonLabel, IonCard} from "@ionic/vue";
	import axios from "axios";
	export default {
		components: {IonButton, IonInput, IonCardContent, IonLabel, IonCard},
		name: "",
		props: ["isOpen", "title"],
		emits: ["update:isOpen", "setEstablishments"],

		data() {
			return {
				name: "",
				address: "",
				postalCode: "",
				city: "",
				phone: "",
				email: "",
			};
		},

		methods: {
			save() {
				this.$emit("update:isOpen", false);
				this.$router.go();
			},
			close() {
				this.$emit("update:isOpen", false);
			},

			saveEstablishment() {
				const establishment = {
					name: this.name,
					address: this.address,
					postalCode: this.postalCode,
					city: this.city,
					phone: this.phone,
					email: this.email,
				};

				console.log("formData" + JSON.stringify(establishment));
				axios
					.post("http://localhost:8090/add/establishments/", establishment)

					.then((res) => {
						console.log("SpringBoot res" + JSON.stringify(res));
					})
					.catch((err) => {
						console.log(err);
					});
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
		width: 50%;
		height: 36%;
	}
	v-card {
		background-color: #bdddec;
		border-radius: 10px;
		overflow: hidden; /*ce qui dépasse (de l'arrondi): caché*/
		width: 170%;
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
	.cheesebox {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%; /*du contenant*/
		height: 100%; /*du contenant*/
		background-color: rgba(82, 82, 82, 0.2);
	}
</style>
