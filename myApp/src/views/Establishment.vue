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
					<IonButton @click="modalOpen = true">Ajouter un établissement</IonButton>

					<div class="grid">
						<ListingEstablishment
							v-for="establishment in establishments"
							:key="establishment.id"
							:name="establishment.name"
							:infoPrincipale="establishment.adress"
							:infoSecondaire="establishment.telephon"
						></ListingEstablishment>
					</div>
					<Modal v-if="modalOpen" :isOpen="modalOpen" titre="Ajouter un établissement">
						<Input label="nom" placeholder="Epad michel" v-model:valeur="test" />

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
							v-model:valeur="newEstablishment.telephon"
						/>

						<div class="form-group">
							<button class="record">Ajouter</button>
						</div>
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
				test: "test",
				modalOpen: false,
				newEstablishment: {
					telephon: null,
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
				console.log(this.test);
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
		color: #536974;
		height: 90px;
	}
	ion-buttons {
		background: #536974;
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
		background: #536974;
		font-size: 15px;
		color: aliceblue;
		text-align: center;
	}
</style>
