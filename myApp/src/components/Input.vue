<template>
	<div class="cont">
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
			return {};
		},
	};
</script>

<style scoped></style>
