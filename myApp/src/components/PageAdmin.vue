
<template>
	<ion-page>
        <ion-content :fullscreen="true">
			<div class="page">
				<MenuAdmin></MenuAdmin>
				<main>
                
					<slot></slot>
				</main>
			</div>
		</ion-content>
    </ion-page>
</template>

<script>
	import MenuAdmin from "@/components/MenuAdmin.vue";
	export default {
		name: "PageAdmin",
		props: [],
		components: {
			MenuAdmin
		},
		methods: {},
		data() {
			return {};
		},
	};
</script>

<style scoped>
.BarreNavLeft {
	display: flex;
	flex-direction: column;
	height: 100% !important;
	width: 10% !important;
	background: #8BADBE !important;
}
</style>