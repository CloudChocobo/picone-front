
<template>
	<ion-page>
        <ion-content :fullscreen="true">
			<div class="page">
				<BarreNavLeft></BarreNavLeft>
				<main>
					<slot></slot>
				</main>
			</div>
		</ion-content>
    </ion-page>
</template>

<script>
	import BarreNavLeft from "@/components/BarreNavLeft.vue";
	export default {
		name: "Page",
		props: [],
		components: {
			BarreNavLeft
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
