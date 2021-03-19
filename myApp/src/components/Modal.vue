<template>
	<div class="container">
		<div class="backgroundGrisay" @click="close()"></div>
		<div class="box">
			<header>
				<div class="titre">{{ titre }}</div>
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
		props: ["isOuvert", "titre"],
		emits: ["update:isOuvert"],
		data() {
			return {};
		},
		methods: {
			close() {
				this.$emit("update:isOuvert", false);
			},
		},
	};
</script>

<style scoped>
	.container {
		position: fixed;
		width: 100vw; /* % width page */
		height: 100vh; /* % heigth page*/
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.backgroundGrisay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%; /*du contenant*/
		height: 100%; /*du contenant*/
		background-color: rgba(82, 82, 82, 0.322);
	}
	.box {
		background-color: white;
		border-radius: 20px;
		position: relative;
		box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028),
			0 12.5px 10px rgba(0, 0, 0, 0.035), 0 22.3px 17.9px rgba(0, 0, 0, 0.042),
			0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07);
		overflow: hidden; /*ce qui dépasse (de l'arrondi): caché*/
	}
	header {
		width: 100%;
		background-color: #7d54f2;
		display: flex;
		justify-content: center;
	}
	header .titre {
		color: white;
		font-size: 18px;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}
	.content {
		padding: 20px;
	}
</style>
