
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
    
	
    .MenuBurger{
       
        display: flex;
        flex-direction: row;
        flex-wrap: row;
        float:left;
        width: 8%;
     margin-left: 10px;
        margin-top:5px;
        
        }
        .BarreHorizontale{
   height:90px;
   width:100%;
   background-color:#8BADBE;



}
.NextButton{
      
        display: inline;
        flex-direction: row;
        flex-wrap: row;
        width: 10%;
        float:right;
        margin-right:10px;
        justify-content:center;
        margin-top:20px;
        



}
.BackButton{
      
        display: inline-block;
        flex-direction: row;
        flex-wrap: row;
         width: 10%;
        margin-left:10px;
         justify-content:center;
        margin-top:20px;
}
        </style>

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