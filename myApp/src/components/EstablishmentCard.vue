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
		props: ["name", "address", "postal code", "city", "phone", "email", "id"],
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
	.EstablishmentCard {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
	}

	.text {
		text-align: center;
		padding: 15px 20px;
		box-sizing: border-box;
	}
</style>

//c est le bon
