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
							:infoPrincipale="establishment.adress"
							:infoSecondaire="establishment.phone"
						></ListingEstablishment>
					</div>
					<Modal v-if="modalOpen" v-model:isOpen="modalOpen" title="Ajouter un établissement">
						<Input label="nom" placeholder="Epad michel" v-model:valeur="epad" />
						<Input
							label="email"
							placeholder="epadMichel@example.com"
							v-model:valeur="newEstablishment.email"
						/>

						<Input
							label="adresse"
							placeholder="3 rue de la pomme"
							v-model:valeur="newEstablishment.adress"
						/>

						<Input
							label="code postal"
							placeholder="44000"
							v-model="newEstablishment.postalCode"
						/>

						<Input
							label="ville"
							placeholder="Nantes"
							v-model:valeur="newEstablishment.city"
						/>

						<Input
							label="téléphone"
							placeholder="02 40 45 67 89"
							v-model:valeur="newEstablishment.phone"
						/>
						<div class="form-group">
							<IonButton class="record">Ajouter</IonButton>
						</div>
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
	import {
		IonPage,
		IonContent,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonMenuButton,
		IonButton,
	} from "@ionic/vue";

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
				test: "epad",
				modalOpen: false,
				newEstablishment: {
					phone: null,
					city: null,
					name: null,
					adress: null,
					postalCode: null,
					email: null,
				},
			};
		},
		methods: {
			afficher() {
				console.log(this.epad);
			},
		},
		computed: {
			/*call the store*/
			establishments() {
				console.log(this.$store.state.establishments);
				return this.$store.state.establishments;
			},
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
	}
	.popUp {
		margin-top: 5%;
		text-align: center;
	}
</style>
