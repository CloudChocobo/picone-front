
<template>
    <div class="BarreNavLeft">
        <MenuBurger></MenuBurger>
    </div>
</template>

<script>
import MenuBurger from "@/components/MenuBurger.vue";
    export default {
        name: "BarreNavLeft",
        props: [],
        components: {MenuBurger},
    };
</script>

<style scoped>
.BarreNavLeft {
		width: 20vw;
        background: #8BADBE;
		min-width: 150px;
		max-width: 0px;
		padding: 20px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 10px;
    }
    
    img {
		border-radius: 50%;
        width: 10px;
    }
</style>
