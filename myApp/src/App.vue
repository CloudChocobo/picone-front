<template>
	<ion-app>
		<ion-router-outlet />
	</ion-app>
</template>

<script lang="ts">
	import {IonApp, IonRouterOutlet} from "@ionic/vue";
	import {defineComponent} from "vue";

	export default defineComponent({
		name: "App",
		components: {
			IonApp,
			IonRouterOutlet,
		},
		methods: {
		}
	});


</script>

<style>
	body {
		color: #8badbe;
	}
	Ion-Button {
		color: #536974;
	}
	ion-menu-button {
		color: #536974;
	}
</style>
