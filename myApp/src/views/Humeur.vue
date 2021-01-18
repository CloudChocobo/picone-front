<template>
<ion-page>
        <ion-content :fullscreen="true">
            <div class="barreNavLeft">
            <BarreNavLeft></BarreNavLeft>
            </div>
                <div class="container">Comment  vous sentez-vous?</div>
                    <div class="icone" @click="() => router.push('/interlocuteur')">
						<img src="../assets/bien.png" alt="" />
                    </div>
                     <div class="icone">
                        <img src="../assets/moyen.png" alt="" />
                        <img src="../assets/triste.png" alt="" />
                        <img src="../assets/enervé.png" alt="" />
                    </div>     
                    <div class="icone2">
						<img src="../assets/bien.png" alt="" />
                        <img src="../assets/moyen.png" alt="" />
                        <img src="../assets/triste.png" alt="" />
                        <img src="../assets/enervé.png" alt="" />
                    </div>   
                            
        </ion-content>
    </ion-page>
</template>

<script>
import {IonPage, IonContent} from "@ionic/vue";
import BarreNavLeft from "@/components/BarreNavLeft.vue";
import {router} from "vue-router";
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
margin-top: 100px;
/* margin-top: 200px; */
margin-left: 350px;
    }
    img{
        display:flex;
        flex-direction: row;
        max-width: 35%;
    }
    .icone2{
display: flex;
flex-direction: row;
max-width: 40%;
justify-content: space-around;
align-items:flex-end;
margin-top: 7px;
margin-left: 350px;
    }
</style>

