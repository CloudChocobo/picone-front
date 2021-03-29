<template>
	<div class="container">
		<div class="background"></div>
		<div class="box">
			<ion-card>
				<form @submit="submit">
				<ion-card-header>
				<ion-card-title>{{ title }}</ion-card-title>
				</ion-card-header>
				<slot></slot>
				<ion-button color="light" @click= submit()>Enregistrer</ion-button>
				<ion-button color="light" @click= cancel()>Annuler</ion-button>
				<!--<button @click= submit()>Enregistrer</button>
				<button @click= cancel()>Annuler</button>-->
				</form>
			</ion-card>
		</div>			
	</div>
</template>

<script>
import { IonCard, IonCardTitle, IonButton} from '@ionic/vue';
import axios from 'axios';

	export default {
		components: { IonCard, IonCardTitle, IonButton},
		name: "",
		props: ["isOpen", "title", ],
		emits: ["update:isOpen", "setPatients"],
		data() {
			return {
				lastName:"",
				firstName:"",
				email:"",
				password:"",
				image:"",
			};
			
		},
		methods: {
			cancel() {
				this.$emit("update:isOpen", false);
			},

			submit() {
				const data = {
					lastName: this.lastName,
					firstName: this.firstName,
					email: this.email,
					password: this.password,
					image: this.image,
				};
            
				axios
				.post("http://localhost:8080/patients/", data)
				.then((res) => {
				console.log(res);
				})
				.catch((err) => {
				console.log(err);
				});
			}
		}
	}
</script>

<style scoped>
	.container {
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
		opacity: 0.8;
	}
	.box{
		display: flex;
		align-items: center;
		width: 50%;
		height: 50%;
	}
	ion-card{
		background-color: #8BADBE;
		border-radius: 10px;
		/*position: relative;*/
		overflow: hidden; /*ce qui dépasse (de l'arrondi): caché*/
		width: 200%;
		height:150%;
	}
	ion-button{
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
</style>