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
//to use v-model on components we need to pass a value prop into the component and then //assign an
event on the input event to change the value based on the user input. 1st step l.8
:value="modelValue" @input="update" ;2nd step: we emit an event to change the input by adding a
method on the input l.25 ;3rd step : add a value prop.
