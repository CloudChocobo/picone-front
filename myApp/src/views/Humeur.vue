<template>
<ion-page>
        <ion-content :fullscreen="true">
            <div class="barreNavLeft">
            <BarreNavLeft></BarreNavLeft>
            </div>
                <div class="container">Comment  vous sentez-vous?</div>
                    <div class="icone">
						<img src="../assets/bien.svg" alt="" />
                        <img src="../assets/moyen.svg" alt="" />
                        <img src="../assets/triste.svg" alt="" />
                        <img src="../assets/enervé.svg" alt="" />
                    </div>              
        </ion-content>
    </ion-page>
</template>

<script>
import {IonPage, IonContent} from "@ionic/vue";
import BarreNavLeft from "@/components/BarreNavLeft.vue";

    export default {
        name: "Humeur",
        components: {
			IonPage,
			IonContent,
            BarreNavLeft,
           
        },
    };

</script>

<style scoped>
	body{
        color: #F1FAFF;
    }
    .container{
    display: flex;
    font-size: 50px;
    margin-left: 250px;
    color: #536974;
    position: relative;
    text-align:center;
    margin-top:60px;
    
    }
    .icone{
display: flex;
flex-direction: row;
max-width: 40%;
justify-content: space-around;
align-items:flex-end;
margin-top: 200px;
margin-left: 350px;
    }
    img{
        display:flex;
        flex-direction: row;
        max-width: 50%;
    }
</style>

