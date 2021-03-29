
<template>
	<div class="InfoCard">
		<div class="text">
			<div class="lastName">{{ lastName }}</div>
			<div class="firstName">{{ firstName }}</div>
            <div class="email">{{ email }}</div>
            <div class="password">{{ password }}</div>
		</div>
		<img :src="image" alt="Photo du patient" />
	</div>
</template>

<script>
	
	export default {
		name: "",
		props: ["lastName", "firstName", "email","password","image"],
		components: {},
		methods: {},
		data() {
			return {};
		},
	};
</script>

<style scoped>
	.InfoCard {
		background-color: #bdddec;
		display: flex;
		justify-content: space-between;
		padding: 15px 20px;
		border-radius: 15px;
		gap: 10px;
	}
	.title {
		height: min-content;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	img {
		background-color: #f1faff;
		height: 75px;
		width: 75px;
		border-radius: 6px;
	}
</style>