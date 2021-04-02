<template>
	<div class="cont">
		<label class="label" :for="label">{{ label }}</label>
		<input
			type="text"
			:placeholder="placeholder"
			:value="modelValue"
			@input="update"
			:id="label"
		/>
	</div>
</template>

<script>
	export default {
		name: "Input",
		props: ["label", "placeholder", "modelValue"],
		emits: ["update:modelValue"],
		data() {
			return {
				value: this.modelValue,
			};
		},
		methods: {
			update(event) {
				this.value = event.target.value;
				this.$emit("update:modelValue", this.value);
			},
		},
	};
</script>

<style scoped>
	label {
		display: block;
	}
</style>
