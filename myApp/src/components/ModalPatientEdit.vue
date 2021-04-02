<template>
	<div class="container">
		<div class="background"></div>
		<div class="box">
			<ion-card>
				<form @submit.prevent="submit">
					<ion-card-content v-if="patientObj">
						<ion-label lastName>Nom:</ion-label>
						<ion-input
							type="text"
							v-model="patientObj.lastName"
							placeholder="Entrez un nom"
							:required="true"
						></ion-input>
						<ion-label firstName>Prénom:</ion-label>
						<ion-input
							type="text"
							v-model="patientObj.firstName"
							placeholder="Entrez un prénom"
							:required="true"
						></ion-input>
						<ion-label email>Email:</ion-label>
						<ion-input
							type="email"
							v-model="patientObj.email"
							placeholder="Entrez un email"
							:required="true"
						></ion-input>
						<ion-label password>Mot de passe:</ion-label>
						<ion-input
							type="password"
							v-model="patientObj.password"
							placeholder="Entrez un mot de passe"
							:required="true"
						></ion-input>
						<img
							:src="image"
							class="avatar"
							alt="Photo du patient"
						/>
						<ion-input
							type="img"
							v-model="patientObj.image"
							placeholder="Url Photo patient"
							:required="false"
						></ion-input>
					</ion-card-content>
					<ion-button
						color="medium"
						@click="[edit(), close(), reloadPage()]"
						>Modifier</ion-button
					>
					<ion-button color="medium" @click="[erase(), save()]"
						>Supprimer</ion-button
					>
					<ion-button color="medium" @click="[close()]"
						>Annuler</ion-button
					>
				</form>
			</ion-card>
		</div>
	</div>
</template>

<script>
import { IonCard, IonButton, IonInput, IonCardContent } from "@ionic/vue";
import axios from "axios";

export default {
	components: { IonCard, IonButton, IonInput, IonCardContent },
	name: "",
	props: ["isOpen", "title", "patient"],
	emits: ["update:isOpen", "setPatients"],
	data: () => {
		return {
			patientObj: null,
		};
	},
	mounted() {
		this.patientObj = this.patient;
	},
	methods: {
		save() {
			this.$emit("update:isOpen", false);
			this.$router.go();
		},
		close() {
			this.$emit("update:isOpen", false);
		},
		erase() {
			console.log("formData" + JSON.stringify(this.patientObj));
			axios
				.delete(
					"http://localhost:8080/patients/" + this.patientObj.id,
					this.patientObj
				)

				.then((res) => {
					console.log("SpringBoot res" + JSON.stringify(res));
				})
				.catch((err) => {
					console.log(err);
				});
		},

		edit() {
			console.log("formData" + JSON.stringify(this.patientObj));
			axios
				.put(
					"http://localhost:8080/patients/" + this.patientObj.id,
					this.patientObj
				)

				.then((res) => {
					console.log("SpringBoot res" + JSON.stringify(res));
				})
				.catch((err) => {
					console.log(err);
				});
		},

		reloadPage() {
			this.$router.go();
		},
	},
};
</script>

<style scoped>
.container {
	z-index: 2;
	position: fixed;
	width: 100%; /* % width page */
	height: 100%; /* % heigth page*/
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
.background {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%; /*du contenant*/
	height: 100%; /*du contenant*/
	background-color: rgb(226, 224, 224);
	opacity: 0.6;
}
.box {
	display: flex;
	align-items: center;
	width: 50%;
	height: 36%;
}
ion-card {
	background-color: #bdddec;
	border-radius: 10px;
	overflow: hidden; /*ce qui dépasse (de l'arrondi): caché*/
	width: 200%;
	height: 150%;
}
ion-button {
	display: flex;
}
ion-button:hover {
	filter: brightness(1.2);
}
ion-button:active {
	transform: scale(0.9);
}
header {
	width: 100%;
	background-color: #8badbe;
	display: flex;
	justify-content: center;
	height: 15%;
}
header .title {
	margin-top: 5%;
	color: #536974;
	font-size: 18px;
	text-transform: uppercase;
	letter-spacing: 0.04em;
	justify-content: center;
}
button {
	width: 50%;
	background-color: #f1faff;
}
.avatar {
	height: 75px;
	width: 75px;
}
form {
	background-color:#bdddec;
}
ion-input{
	background-color: #f1faff;
	color: #536974;
}
</style>