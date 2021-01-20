<template>
	<div class="NextButton" @click="() => router.go(+1)">
		<img src="../assets/Next.png" alt="" />
		<div class="label">{{ label }}</div>
	</div>
</template>

<script>
	import {useRouter} from "vue-router";
	export default {
		name: "NextButton",
		props: ["label"],
		setup() {
			const router = useRouter();
			return {
				router,
			};
		},
	};
</script>
