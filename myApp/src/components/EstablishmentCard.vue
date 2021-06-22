<template>
	<div class="EstablishmentCard">
		<div class="info">
			<div class="text">
				<div class="id">{{ id }}</div>
				<div class="name">{{ name }}</div>
				<div class="address">{{ address }}</div>
				<div class="postalCode">{{ postalCode }}</div>
				<div class="city">{{ city }}</div>
				<div class="phone">{{ phone }}</div>
				<div class="email">{{ email }}</div>
			</div>
		</div>
		<div class="ion-text-center">
			<ion-button color="light" @click="modalOpen = true">Editer</ion-button>
		</div>
		<ModalEditEstablishment
			v-if="modalOpen"
			v-model:isOpen="modalOpen"
			title="Modifier"
			:establishment="establishment"
		></ModalEditEstablishment>
	</div>
</template>

<script>
	import ModalEditEstablishment from "@/components/ModalEditEstablishment.vue";
	export default {
		name: "",
		props: ["name", "address", "postalCode", "city", "phone", "email", "id"],
		components: {ModalEditEstablishment},
		methode: {},
		data: () => {
			return {
				value: "valeur",
				modalOpen: false,
			};
		},
		computed: {
			establishment() {
				return {
					id: this.id,
					name: this.name,
					address: this.address,
					postalCode: this.postalCode,
					city: this.city,
					phone: this.phone,
					email: this.email,
				};
			},
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
	.EstablishmentCard {
		background-color: #bdddec;
		display: flex;
		justify-content: space-between;
		align-content: space-between;
		flex-direction: column;
		padding: 15px 20px;
		border-radius: 15px;
		gap: 10px;
		height: 100%;
	}
	.info{
		display: flex;
		gap: 10px;
		flex-direction: row;
		justify-content: space-between;
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

