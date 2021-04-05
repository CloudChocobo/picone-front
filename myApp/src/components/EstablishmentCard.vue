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
		<ion-button color="light" @click="modalOpen = true">Editer</ion-button>
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
//c est le bon
