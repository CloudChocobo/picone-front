
<template>
	<div class="PatientCard">
		<div class="info">
		<div class="text">
			<div class="lastName">{{ lastName }}</div>
			<div class="firstName">{{ firstName }}</div>
            <div class="email">{{ email }}</div>
            <div class="password">{{ password }}</div>
		</div>
		<img :src="image" class="avatar" alt="Photo du patient" />
		</div>
		<ion-button color="light" @click="modalOpen = true">Editer</ion-button>
	</div>

	<ModalPatientEdit v-if="modalOpen" v-model:isOpen="modalOpen" title="Modifier un patient"></ModalPatientEdit>
</template>

<script>
	//import axios from 'axios';
	import ModalPatientEdit from "@/components/ModalPatientEdit.vue";
	export default {
		name: "",
		props: ["lastName", "firstName", "email","password","image"],
		components: {ModalPatientEdit},
		methods: {},
		data: () => {
			return {
				value: "valeur",
				modalOpen: false,
			};
		},
	};
</script>

<style scoped>
	.title {
		height: min-content;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.PatientCard {
		z-index: 1;
		background-color: #bdddec;
		display: flex;
		justify-content: space-between;
		align-content: space-between;
		flex-direction: column;
		padding: 15px 20px;
		border-radius: 15px;
		gap: 10px;
		
	}
	.info{
		display: flex;
		gap: 10px;
		flex-direction: row;
		justify-content: space-between;
	}
	.avatar {
		background-color: #f1faff;
		height: 75px;
		width: 75px;
		border-radius: 6px;
	}
	.password{
		display:none;
	}
	ion-button{
		align-content: flex-end;
	}
	.text{
		display: flex;
		flex-direction: column;
		align-items: space-between;
		gap: 5px;
		
	
	}

</style>