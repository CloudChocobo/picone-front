
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
					<PatientCard
					v-for="patient in patients"
					:key="patient.id"
					:lastName="patient.lastName"
					:firstName="patient.firstName"
					:email="patient.email"
					:password="patient.password"
					:image="patient.image"
					></PatientCard>
					</div>	
					
					<ModalPatient v-if="modalOpen" v-model:isOpen="modalOpen" title="Ajouter un patient">
					</ModalPatient>
			</PageAdmin>
		</ion-content>
	</ion-page>
</template>

<script>

	import ModalPatient from "@/components/ModalPatient.vue";
	import PatientCard from "@/components/PatientCard";
	import BackButton from "@/components/BackButton.vue";
	import PageAdmin from "@/components/PageAdmin.vue";
	import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonMenuButton, IonButton} from "@ionic/vue";
	export default {
		name: "Patient",
		props: ["setPatients"],
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
			PatientCard,
			ModalPatient,
		},

		mounted() {
		this.fetchAllPatients();
		},

		data: () => {
			return {
				value: "valeur",
				modalOpen: false,
			};
		},
		methods: {

			fetchAllPatients() {
					fetch("http://localhost:8080/patients") /* mettre l'adresse de l'API*/
						.then((response) => response.json())
						.then((data) => {
							this.$store.commit("setPatients", data); /* commit = utilise la methode, les infos*/
						})
						.catch((err) => {
							console.error("error to check", err);
						});
				}
			
		},
		/*created() {
			this.fetchAllPatients();
		},*/

		computed: {/*fait appel au store*/
			patients() {
				return this.$store.getters.patients;
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