<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<PageAdmin>
				<ion-header>
					<ion-toolbar>
						<ion-buttons side="start">
							<ion-menu-button></ion-menu-button>
							<BackButton></BackButton>
							<ion-title>Établissement</ion-title>
						</ion-buttons>
					</ion-toolbar>
				</ion-header>
				<div class="main">
					<div class="container">
						<IonButton @click="modalOpen = true">Ajouter un établissement</IonButton>
					</div>
					<div class="grid">
						<ListingEstablishment
							v-for="establishment in establishments"
							:key="establishment.id"
							:name="establishment.name"
							:address="establishment.address"
							:city="establishment.city"
							:postalCode="establishment.postalCode"
							:phone="establishment.phone"
							:email="establishment.email"
						>
						</ListingEstablishment>
						<listingEstablishment-button>
							<div class="testbutton">
								<lol-button class="lol-button">Modifier</lol-button>

								<lol-button class="lol-button">Supprimer</@lol-button>
							</div>
							<!--<p><lol-button class="lol-button">Supprimer</lol-button></p>-->
						</listingEstablishment-button>
					</div>
					<Modal v-if="modalOpen" v-model:isOpen="modalOpen" title="Ajouter un établissement">
						<form v-on:submit.prevent="publishForm">
							<Input
								label="nom"
								placeholder="Ehpad michel"
								v-model="newEstablishment.name"
							/>
							<Input
								label="email"
								placeholder="ehpadMichel@example.com"
								v-model="newEstablishment.email"
							/>

							<Input
								label="adresse"
								placeholder="3 rue de la pomme"
								v-model="newEstablishment.address"
							/>

							<Input
								label="code postal"
								placeholder="44000"
								v-model="newEstablishment.postalCode"
							/>

							<Input label="ville" placeholder="Nantes" v-model="newEstablishment.city" />

							<Input
								label="téléphone"
								placeholder="02 40 45 67 89"
								v-model="newEstablishment.phone"
							/>
							<div class="form-group">
								<button type="submit" class="form-group">Ajouter</button>
							</div>
						</form>
						<!--<div class="popUp">
							<IonButton @click="modalOpen = true">Ajouter </IonButton>
						</div>

						<Modal
							v-if="modalOpen"
							:isOpen="modalOpen"
							title="Veuillez confirmer votre mot de passe"
						>
							<Input placeholder="mot de passe" />

							<div class="form-group">
								<button class="record">Envoyer</button>
							</div>

						</Modal> -->
					</Modal>
				</div>
			</PageAdmin>
		</ion-content>
	</ion-page>
</template>

<script>
	import ListingEstablishment from "@/components/ListingEstablishment.vue";
	import BackButton from "@/components/BackButton.vue";
	import Modal from "@/components/Modal.vue";
	import PageAdmin from "@/components/PageAdmin.vue";
	import Input from "@/components/Input.vue";
	import {rootAPI} from "@/data.ts";
	import {
		IonPage,
		IonContent,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonMenuButton,
		IonButton,
	} from "@ionic/vue";
	import axios from "axios";

	export default {
		name: "Establishment",
		components: {
			IonPage,
			IonContent,
			PageAdmin,
			IonHeader,
			IonToolbar,
			IonTitle,
			IonMenuButton,
			BackButton,
			Modal,
			ListingEstablishment,
			Input,
			IonButton,
		},

		data: () => {
			return {
				modalOpen: false,
				newEstablishment: {
					name: "",
					phone: "",
					city: "",
					address: "",
					postalCode: "",
					email: "",
				},
				//rootsApi: rootAPI,
			};
		},
		methods: {
			log(value) {
				console.log(value);
			},

			async publishForm() {
				const newEstablishment = {
					phone: this.newEstablishment.phone,
					city: this.newEstablishment.city,
					name: this.newEstablishment.name,
					address: this.newEstablishment.address,
					postalCode: this.newEstablishment.postalCode,
					email: this.newEstablishment.email,
				};
				console.log(newEstablishment);

				const response = await axios.post(
					"http://localhost:8090/add/establishments/",
					newEstablishment
				);
				this.newEstablishmentId = response.data.id;
			},

			fetchAllEstablishment() {
				console.log("try");
				fetch("http://localhost:8090/establishments/", {
					headers: {
						"Content-Type": "application/json",
					},
				}) /* mettre l'adresse de l'API*/
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
						this.$store.commit(
							"setEstablishments",
							data
						); /* commit = utilise la methode, les infos*/
					})
					.catch((err) => {
						console.error("Il y a eu une erreur !", err);
					});
			},
		},
		computed: {
			/*call the store*/
			establishments() {
				return this.$store.getters.establishments;
			},
		},
		mounted() {
			this.fetchAllEstablishment();
			console.log("mounted");
		},
	};
</script>

<style scoped>
	.text {
		display: flex;
		font-size: 50px;
		margin-left: 200px;
		color: #536974;
		position: relative;
		text-align: center;
		margin-top: -4%;
	}
	ion-title {
		justify-items: center;
		font-size: 30px;
		color: #536974;
		position: relative;
		text-align: center;
	}
	ion-toolbar {
		color: #8badbe;
		height: 90px;
	}
	ion-buttons {
		background: #8badbe;
		font-size: 15px;
	}
	.toolbar-container {
		background: #8badbe;
	}

	.image {
		display: flex;
		margin-left: 250px;
	}
	.BackButton {
		width: 8%;
		margin-left: 3%;
		margin-top: 2%;
	}

	.record {
		background: #8badbe;
		font-size: 25px;
		color: #536974;
		text-align: center;
		width: 60%;
		height: 40%;
	}
	.form-group {
		margin-top: 5%;
		text-align: center;
		border-radius: 12px;
		color: white;
		background: #8badbe;
		font-size: 20px;
	}
	.popUp {
		margin-top: 5%;
		text-align: center;
	}
	.lol-button {
		text-align: center;
		border-radius: 8px;
		color: white;
		background: #8badbe;
		font-size: 20px;
		padding: 1%;
		margin-left: 10%;
		width: 200px;
	}
	.testbutton {
		display: block;
		margin-top: 2%;
	}
</style>
