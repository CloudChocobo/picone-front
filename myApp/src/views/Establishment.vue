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
					<p>Ajouter un établissement</p>
				</div>

				<div>
					<Input label="Email" placeholder="Email" v-model:valeur="lol" />
					<Input
						label="Mot de passe"
						placeholder="Mot de passe"
						v-model:valeur="newVoiture.marque"
					/>

					<Input label="Nom" placeholder="Nom" v-model:valeur="newEstablishment.name" />
					<Input
						label="Adresse"
						placeholder="Adresse"
						v-model:valeur="newEstablishment.adresse"
					/>

					<Input label="CP" placeholder="CP" v-model:valeur="newEstablishment.cp" />
					<Input label="Ville" placeholder="Ville" v-model:valeur="newEstablishment.ville" />
					<Input
						label="Telephone"
						placeholder="Telephone"
						v-model:valeur="newEstablishment.telephone"
					/>
				</div>
			</PageAdmin>
		</ion-content>
	</ion-page>
</template>

<script>
	import BackButton from "@/components/BackButton.vue";
	import PageAdmin from "@/components/PageAdmin.vue";
	import Input from "@/components/Input.vue";
	import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonMenuButton} from "@ionic/vue";
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
			Input,
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

	/* .button-inner {
  width: 25%;
  margin-left: 3%;
  margin-top: 2%;
} */
</style>
