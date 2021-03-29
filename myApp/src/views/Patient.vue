
<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<PageAdmin>
				<ion-header>
					<ion-toolbar>
						<ion-buttons side="start">
							<ion-menu-button></ion-menu-button>
							<BackButton></BackButton>
							<ion-title>Patients</ion-title>
						</ion-buttons>
					</ion-toolbar>
				</ion-header>

				<ion-button color="medium" @click="modalOpen = true">Ajouter un patient</ion-button>
				
				<div class="grid">
					<InfoCard
					v-for="patient in patients"
					:key="patient.id"
					:lastName="patient.lastName"
					:firstName="patient.firstName"
					:email="patient.email"
					:password="patient.password"
					:image="patient.image"
					></InfoCard>
					</div>	
					
					<ModalPatient v-if="modalOpen" v-model:isOpen="modalOpen" title="Ajouter un patient">
				<ion-card>
				<ion-card-content>
					<ion-label lastName>Nom:</ion-label>
						<ion-input type="text" v-model="patientInfo" placeholder="Entrez un nom" :required="true"></ion-input>
					<ion-label firstName>Prénom:</ion-label>
						<ion-input type="text" v-model="patientInfo" placeholder="Entrez un prénom" :required="true"></ion-input>
					<ion-label email>Email:</ion-label>
						<ion-input type="email" v-model="patientInfo" placeholder="Entrez un email" :required="true"></ion-input>
					<ion-label password>Mot de passe:</ion-label>
						<ion-input type="password" v-model="patientInfo" placeholder="Entrez un mot de passe" :required="true"></ion-input>
					<img :src="image" alt="Photo du patient" />
						<ion-input type="img" v-model="patientInfo" placeholder="Url Photo patient" :required="false"></ion-input>
						</ion-card-content>
					</ion-card>
					</ModalPatient>
					<!--<div class="form">
					<ModalPatient v-if="modalOpen" v-model:isOpen="modalOpen" title="Ajout d'un patient">
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
					</div>-->
			</PageAdmin>
		</ion-content>
	</ion-page>
</template>

<script>

	import ModalPatient from "@/components/ModalPatient.vue";
	import InfoCard from "@/components/InfoCard";
	//import EntryPatient from "@/components/EntryPatient.vue"
	import BackButton from "@/components/BackButton.vue";
	import PageAdmin from "@/components/PageAdmin.vue";
	import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonMenuButton, IonButton} from "@ionic/vue";
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
			IonButton,
			BackButton,
			//EntryPatient,
			InfoCard,
			ModalPatient,
		},

  mounted() {
		this.fetchAllPatients("patients");
  },
		data: () => {
			return {
				value: "valeur",
				modalOpen: false,
				newPatient: {
					lastName: "",
					firstName: "",
					email: "",
					password: "",
					image: "",
				},
			};
		},
		methods: {
			
			fetchAllPatients() {
				const infosARecup = ["patients"];
				infosARecup.forEach((info) => {
					fetch("http://localhost:8080/" + info) /* mettre l'adresse de l'API*/
						.then((response) => response.json())
						.then((data) => {
							this.$store.commit("setPatients", {
								type: info,
								valeur: data,
							}); /* commit = utilise la methode, les infos*/
						})
						.catch((erreur) => {
							console.error("Il y a eu une erreur !", erreur);
						});
				});
			},
		},
		created() {
			this.fetchAllPatients();
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
	ion-button {
		display: flex;
		width: 20%;
	}
	ion-button:hover {
		filter: brightness(1.2);
	}
	ion-button:active {
		transform: scale(0.9);
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
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		width: 100%;
		gap: 10px;
	}
	.ion-page{
		background-color: #8badbe;
	}

</style>