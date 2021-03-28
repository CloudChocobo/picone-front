<template>
	<div class="container">
		<div class="background"></div>
		<div class="box">
			<ion-card>
				<ion-card-header>
					<ion-card-title>{{ title }}</ion-card-title>
				</ion-card-header>
						<slot></slot>
				<ion-button color="light" @click="save()">Enregistrer</ion-button>
				<ion-button color="light" @click="cancel()">Annuler</ion-button>
			</ion-card>
		</div>			
	</div>
</template>
<!--<template>
	<div class="container">
		<div class="background" @click="close()"></div>
		<div class="box">
			<header>
				<div class="title">{{ title }}</div>
			</header>
			<div class="content">
				<slot></slot>
			</div>
		</div>
	</div>
</template>-->

<script>
import { IonCard, IonCardTitle, IonButton} from '@ionic/vue';


	export default {
		components: { IonCard, IonCardTitle, IonButton},
		name: "",
		props: ["isOpen", "title", ],
		emits: ["update:isOpen", "setPatients"],
		data() {
			return {};
		},
		methods: {
			close() {
				this.$emit("update:isOpen", false);
			},
			save() {
				this.$store.commit('setPatients');
				this.$emit("update:isOpen", false);
			},
			cancel() {
				this.$emit("update:isOpen", false);
			}
		},
	};
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
		opacity: 0.6;
	}
	ion-card{
		background-color: #8BADBE;
		border-radius: 10px;
		position: relative;
		overflow: hidden; /*ce qui dépasse (de l'arrondi): caché*/
		width: 150%;
		height:100%;
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
</style>