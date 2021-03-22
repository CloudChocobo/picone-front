<template>
	<div class="container">
		<div class="backgroundGray" @click="close()"></div>
		<div class="box">
			<header>
				<div class="title">{{ title }}</div>
			</header>
			<div class="content">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "",
		props: ["isOpen", "title"],
		emits: ["update:isOpen"],
		data() {
			return {};
		},
		methods: {
			close() {
				this.$emit("update:isOpen", false);
			},
		},
	};
</script>

<style scoped>
	.container {
		position: fixed;
		width: 100%; /* % width page */
		height: 100%; /* % heigth page*/
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.backgroundGray {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%; /*du contenant*/
		height: 100%; /*du contenant*/
		background-color: rgb(235, 230, 230);
		opacity: 0.6;
	}
	.box {
		background-color: #f1faff;
		border-radius: 20px;
		position: relative;
		overflow: hidden; /*ce qui dépasse (de l'arrondi): caché*/
		width: 30%;
		height: 70%;
	}
	header {
		width: 100%;
		background-color: #8badbe;
		display: flex;
		justify-content: center;
		height: 8%;
	}
	header .title {
		color: #536974;
		font-size: 18px;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		justify-content: center;
	}
	.content {
		padding: 20px;
	}
</style>