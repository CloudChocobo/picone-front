<template>
	<div class="BackButton" @click="() => router.push('/home')">
		<img src="../assets/Back.png" alt="" />
		<div class="label">{{ label }}</div>
	</div>
</template>

<script>
	import {useRouter} from "vue-router";
	export default {
		name: "BackButton",
		props: ["label"],
		setup() {
			const router = useRouter();
			return {
				router,
			};
		},
	};
</script>