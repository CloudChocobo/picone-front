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
				<Button @click="modalOpen = true">Ajouter un patient</Button>
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
					<Modal v-if="modalOpen" v-model:isOpen="modalOpen" title="Ajout d'un patient">
					<Entry
					label="ID"
					placeholder="ID patient"
					value="newPatient.id"></Entry>
					<Entry
					label="Nom"
					placeholder="Nom patient"
					value="newPatient.lastName"></Entry>
					<Entry
					label="Prénom"
					placeholder="Prénom patient"
					value="newPatient.name"></Entry>
					<Entry
					label="Email"
					placeholder="Email patient"
					value="newPatient.email"></Entry>
					<Entry
					label="Mot de Passe"
					placeholder="Mot de passe patient"
					value="newPatient.password"
					></Entry>
					<Entry
					label="Image"
					placeholder="URL photo patient"
					value="newPatient.image"
					></Entry>
					<Button @click="afficher()">Enregistrer</Button>
					</Modal>
					</div>
			</PageAdmin>
		</ion-content>
	</ion-page>
</template>

<script>
	import Modal from "@/components/Modal.vue";
	import InfoCard from "@/components/InfoCard";
	import Button from "@/components/Button.vue";
	import Entry from "@/components/Entry.vue"
	import BackButton from "@/components/BackButton.vue";
	import PageAdmin from "@/components/PageAdmin.vue";
	import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonMenuButton} from "@ionic/vue";
	export default {
		name: "Patient2",
		components: {
			IonPage,
			IonContent,
			PageAdmin,
			IonHeader,
			IonToolbar,
			IonTitle,
			IonMenuButton,
			BackButton,
			Entry,
			Button,
			InfoCard,
			Modal,
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
			afficher() {
				console.log(this.lol);
			},
		},
		//computed: {/*fait appel au store*/
			/*patients() {
				console.log(this.$store.getters.valeurDe("patients"));
				return this.$store.getters.valeurDe("patients");
			},
		},*/
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