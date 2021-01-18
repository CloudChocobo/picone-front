
<template>
    <div class="BarreHorizontale">

<MenuBurger></MenuBurger>
<BackButton></BackButton>
<NextButton></NextButton>
    </div>
</template>

<script>
import MenuBurger from "@/components/MenuBurger.vue";
import BackButton from "@/components/BackButton.vue";
import NextButton from "@/components/NextButton.vue";
    export default {
        name: "BarreHorizontale",
        components: {MenuBurger, BackButton, NextButton},
    };
</script>
 <!-- css a revoir pour le placement   -->
    <style scoped>
    
	.BarreHorizontale {
        position: absolute;
		width: 20vw;
		background: #8BADBE;
		height: 100%;
		max-width: 100px;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
        align-items: center;
		gap: 10px;
        flex-wrap: row;
	}
    .MenuBurger{
        margin-top:75px;
        display: flex;
        flex-direction: column;
        flex-wrap: column;
        }
        .header{
   height:100px;
   width:100%;
   background-color:#8BADBE;
}
        </style>