<template>
	<div class="container">
		<div class="label">{{ label }}</div>
		<input type="text" :placeholder="placeholder" :value="valeur" />
	</div>
</template>

<script>
	export default {
		name: "",
		props: ["label", "placeholder", "valeur"],
		emits: ["update:valeur"],
		data() {
			//return {};
		},
	};
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	align-content: space-around;
}
</style>

