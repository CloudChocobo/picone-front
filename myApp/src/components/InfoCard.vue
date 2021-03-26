<template>
	<div class="InfoCard">
		<div class="text">
            <div class="id">{{ id }}</div>
			<div class="lastName">{{ lastName }}</div>
			<div class="name">{{ name }}</div>
            <div class="email">{{ email }}</div>
            <div class="password">{{ password }}</div>
		</div>
		<img :src="image" alt="Photo du patient" />
	</div>
</template>

<script>
	
	export default {
		name: "",
		props: ["id", "lastName", "name", "email", "password", "image"],
		components: {},
		methods: {},
		data() {
			return {};
		},
	};
</script>

<style scoped>
	.InfoCard {
		background-color: #536974;
		display: flex;
		justify-content: space-between;
		padding: 15px 20px;
		border-radius: 15px;
		gap: 10px;
	}
	.text {
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