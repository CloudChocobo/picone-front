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
				<div class="text">
					<p>j'en ai marre</p>
				</div>
				<div class="form">
					<Entry
					label="ID"
					placeholder="Identifiant du patient"
					value="000"></Entry>
					<Entry
					label="Nom"
					placeholder="Nom du patient"
					valeur="newPatient.lastName"></Entry>
					<Entry
					label="Prénom"
					placeholder="Prénom du patient"
					valeur="newPatient.name"></Entry>
					<Entry
					label="Email"
					placeholder="Email du patient"
					valeur="newPatient.email"></Entry>
					<Entry
					label="Mot de Passe"
					placeholder="Mot de passe du patient"
					valeur="newPatient.password"
					></Entry>
					<Entry
					label="Image"
					placeholder="URL de la photo"
					valeur="newPatient.image"
					></Entry>
					<Button @click="afficher()">enregistrer</Button>
				</div>
			</PageAdmin>
		</ion-content>
	</ion-page>
</template>

<script>
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
		align-items: center;
		width: 50%;
	}

</style>
