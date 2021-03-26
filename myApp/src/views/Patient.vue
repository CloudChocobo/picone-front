<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<PageAdmin>
				<ion-header>
					<ion-toolbar>
						<ion-buttons side="start">
							<ion-menu-button></ion-menu-button>
							<BackButton></BackButton>
							<ion-title>Patient</ion-title>
						</ion-buttons>
					</ion-toolbar>
				</ion-header>
				<ButtonPatient @click="modalOpen = true">Ajouter un patient</ButtonPatient>
				<div class="grid">
					<InfoCard
					v-for="patient in patients"
					:key="patient.id"
					:lastName="patient.lastName"
					:name="patient.name"
					:email="patient.email"
					:password="patient.password"
					:linkToPatientPicture="patient.image"
					></InfoCard>
					</div>	
					<div class="form">
					<ModalPatient v-if="modalOpen" v-model:isOpen="modalOpen" title="Ajout d'un patient">
					<EntryPatient
					label="Id"
					placeholder="Id patient"
					value="newPatient.id"></EntryPatient>
					<EntryPatient
					label="Nom"
					placeholder="Nom patient"
					value="newPatient.lastName"></EntryPatient>
					<EntryPatient
					label="Prénom"
					placeholder="Prénom patient"
					value="newPatient.name"></EntryPatient>
					<EntryPatient
					label="Email"
					placeholder="Email patient"
					value="newPatient.email"></EntryPatient>
					<EntryPatient
					label="Mot de Passe"
					placeholder="Mot de passe patient"
					value="newPatient.password"
					></EntryPatient>
					<EntryPatient
					label="Image"
					placeholder="URL photo patient"
					value="newPatient.image"
					></EntryPatient>
					<ButtonPatient @click="afficher()">Enregistrer</ButtonPatient>
					</ModalPatient>
					</div>
			</PageAdmin>
		</ion-content>
	</ion-page>
</template>

<script>
	import ModalPatient from "@/components/ModalPatient.vue";
	import InfoCard from "@/components/InfoCard";
	import ButtonPatient from "@/components/ButtonPatient.vue";
	import EntryPatient from "@/components/EntryPatient.vue"
	import BackButton from "@/components/BackButton.vue";
	import PageAdmin from "@/components/PageAdmin.vue";
	import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonMenuButton} from "@ionic/vue";
	export default {
		name: "Patient",
		components: {
			IonPage,
			IonContent,
			PageAdmin,
			IonHeader,
			IonToolbar,
			IonTitle,
			IonMenuButton,
			BackButton,
			EntryPatient,
			ButtonPatient,
			InfoCard,
			ModalPatient,
		},
		data: () => {
			return {
				value: "valeur",
				modalOpen: false,
				newPatient: {
					ID: null,
					lastName: null,
					name: null,
					email: null,
					password: null,
					image: null,
				},
			};
		},
		methods: {

			fetchPatients() {
				const getInfo = ["patients"];
				getInfo.forEach((info) => {
					fetch("https://piconebackend.herokuapp.com/" + info) /* mettre l'adresse de l'API*/
						.then((response) => response.json())
						.then((data) => {
							this.$store.commit("setPatients", {
								type: info,
								valeur: data,
							}); /* commit = utilise la methode, les infos*/
						})
						.catch((erreur) => {
							console.error("Erreur", erreur);
						});
				});
			},
		},
					afficher() {
				console.log(this.lol);
			},
		computed: {/*fait appel au store*/
			patients() {
				return this.$store.state.patients;
			},
		},
	}
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
		color: #536974;
		height: 90px;
	}
	ion-buttons {
		background: #8badbe;
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
	.form{
		display: flex;
		flex-direction: column;
		background-color: #536974;
		width: 100%;
	}
	.InfoCard{
		display: flex;
		flex-direction: column;
	}
	.ion-page{
		background-color: #8badbe;
	}
	.Button{
		display: flex;
		flex-direction: column;
		align-content: center;
	}

</style>