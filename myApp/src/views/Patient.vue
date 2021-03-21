<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<PageAdmin>
				<ion-header>
					<ion-toolbar>
						<ion-buttons side="start">
							<ion-menu-button></ion-menu-button>
							<BackButton></BackButton>
							<ion-title></ion-title>
						</ion-buttons>
					</ion-toolbar>
				</ion-header>
				<div class="content">
					<div class="text">
					<p>prout dans ta face</p>
					
					</div>
					<!--<ButtonMenu texte="Ajouter un patient" @click="modalOpen = true"></ButtonMenu>-->
					<div class="grid">
					<InfoCard
					v-for="patient in patients"
					:key="patient.id"
					:lastName="patient.nom"
					:name="patient.prénom"
					:email="patient.email"
					:password="patient.password"
					:lienversphotopatient="patient.image"
					></InfoCard>
					</div>	
				</div>	
				<!-- 2 possibilities -->
				<!--<Modal v-if="modalOpen" v-model:isOpen="modalOpen" titre="Ajout d'un patient">
				<Entry
				label="ID"
				placeholder="Identifiant du patient"
				v-model:valeur="lol"></Entry>
				<Entry
				label="Nom"
				placeholder="Nom du patient"
				v-model:valeur="newPatient.lastName"></Entry>
				<Entry
				label="Prénom"
				placeholder="Prénom du patient"
				v-model:valeur="newPatient.name"></Entry>
			<Entry
				label="Email"
				placeholder="Email du patient"
				valeur="newPatient.email"></Entry>
			<Entry
				label="Mot de Passe"
				placeholder="Mot de passe du patient"
				v-model:valeur="newPatient.password"
			></Entry>
			<Entry
				label="Image"
				placeholder="URL de la photo"
				v-model:valeur="newPatient.image"></Entry>
			<div @click="afficher()">enregistrer</div>
			</Modal>-->
			<!-- v-model = passway between componants, v-if true: modal is open, v-if false: modal is closed -->	
			</PageAdmin>
		</ion-content>
	</ion-page>
</template>

<script>
	import BackButton from "@/components/BackButton.vue";
	import PageAdmin from "@/components/PageAdmin.vue";
	import InfoCard from "../components/InfoCard.vue";
	//import Modal from "@/components/Modal.vue";
	//import Entry from "@/components/Entry.vue";
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
			InfoCard,
			//Modal,
			//Entry,
		},
		/*data: () => {
			return {
			lol: "lol",
			modalOpen: false,
			newPatient: {},
			};
		},
		methods: {
			afficher() {
			console.log(this.lol);
			},
		},*/
		//computed: {/*fait appel au store*/
			/*patients() {
				console.log(this.$store.getters.valeurDe("patients"));
				return this.$store.getters.valeurDe("patients");
			},*/
		//},
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
</style>