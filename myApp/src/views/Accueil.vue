<template>
<ion-page>
        <ion-content :fullscreen="true">
            <div class="barreNavLeft">
            <BarreNavLeft></BarreNavLeft>
            </div>
                <div class="container">
                    <div class="icone">
						<img src="../assets/proches.svg" alt="" />
                    </div>
                    <div class="icone1">
						<img src="../assets/docteur.svg" alt="" />
                    </div>
                </div>
        </ion-content>
    </ion-page>
</template>

<script>
import {IonPage, IonContent} from "@ionic/vue";
import BarreNavLeft from "@/components/BarreNavLeft.vue";

    export default {
        name: "Accueil",
        components: {
			IonPage,
			IonContent,
			BarreNavLeft,
        }
    };
</script>

<style lang="postcss" scoped>
	body{
		color: #F1FAFF;
    }
.container {
		display: flex;
		flex-direction: column;
		background-color: white;
		border-radius: 10px;
		padding: 17px;
		width: 100%;}

        .container.icone {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

.container.icone1 {
		display: flex;
		gap: 10px;
		flex-direction: column;
		align-items: center;
	}
</style>

   .container{
position: absolute;
width: 1136px;
height: 573px;
float:right;
position:absolute;
    }
    
.icone{
        
        display:block;
        margin-left:auto;
        margin-right:auto;
        width:50%;
    }