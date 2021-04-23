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
						></ion-input>
						<ion-label firstName>Prénom:</ion-label>
						<ion-input
							type="text"
							v-model="patientObj.firstName"
							placeholder="Entrez un prénom"
						></ion-input>
						<ion-label email>Email:</ion-label>
						<ion-input
							type="email"
							v-model="patientObj.email"
							placeholder="Entrez un email"
						></ion-input>
						<ion-label password>Mot de passe:</ion-label>
						<ion-input
							type="password"
							v-model="patientObj.password"
							placeholder="Entrez un mot de passe"
						></ion-input>
						<ion-label establishment>Etablissement:</ion-label>
						<ion-select
							interface="popover"
							v-model="patientObj.idEstablishment"
						>
							<ion-select-option value="4"
								>Ehpad Poisson</ion-select-option
							>
							<ion-select-option value="39"
								>Ehpad Paul</ion-select-option
							>
							<ion-select-option value="0"
								>Ehpad Nicky</ion-select-option
							>
							<ion-select-option value="40"
								>Ehpad Koil</ion-select-option
							>
						</ion-select>
						<ion-avatar>
							<img
								:src="image"
								class="avatar"
								alt="Photo du patient"
							/>
						</ion-avatar>
						<ion-input
							type="img"
							v-model="patientObj.image"
							placeholder="Url Photo patient"
						></ion-input>
					</ion-card-content>
					<ion-button color="medium" @click="[edit(), save()]"
						>Modifier</ion-button
					>
					<ion-button color="medium" @click="[erase(), save()]"
						>Supprimer</ion-button
					>
					<ion-button color="medium" @click="[cancel()]"
						>Annuler</ion-button
					>
				</form>
			</ion-card>
		</div>
	</div>
</template>

<script>
import {
	IonAvatar,
	IonCard,
	IonButton,
	IonInput,
	IonCardContent,
	IonSelect,
	IonSelectOption,
} from "@ionic/vue";
import axios from "axios";
import {rootAPI} from "@/data.ts";

export default {
	components: {
		IonAvatar,
		IonCard,
		IonButton,
		IonInput,
		IonCardContent,
		IonSelect,
		IonSelectOption,
	},
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
		erase() {
			console.log("formData" + JSON.stringify(this.patientObj));
			axios
				.delete(
					rootAPI + "patients/" +
						this.patientObj.id,
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
					rootAPI + "patients/" +
						this.patientObj.id,
					this.patientObj
				)

				.then((res) => {
					console.log("SpringBoot res" + JSON.stringify(res));
				})
				.catch((err) => {
					console.log(err);
				});
		},
		save() {
			this.$emit("update:isOpen", false);
			this.$router.go();
		},
		cancel() {
			this.$emit("update:isOpen", false);
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
	height: 180%;
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
	background-color: #f1faff;
	height: 75px;
	width: 75px;
	border-radius: 1px;
}
form {
	background-color: #bdddec;
}
ion-input {
	background-color: #f1faff;
	color: #536974;
}
ion-select{
background-color: #f1faff;
}
</style>