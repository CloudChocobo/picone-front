<template>
	<div class="cont">
		<div class="label">{{ label }}</div>
		<select name="lol">
			<option value="">--Faites votre choix--</option>
			<option v-for="choice in choices" :key="choice.value" :value="choice.value">{{
				choice.nom
			}}</option>
		</select>
	</div>
</template>

<script>
	export default {
		name: "",
		props: ["label", "choices", "valeur"],
		emits: ["update:valeur"],
		data() {
			return {};
		},
	};
</script>

<style scoped></style>
