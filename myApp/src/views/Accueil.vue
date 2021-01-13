<template>
<ion-page>
        <ion-content :fullscreen="true">
            <BarreNavLeft></BarreNavLeft>
            <div class="texte">
            <p>Bonjour<br>
            Quel est votre interlocuteur?</p>
            </div>
                <div class="container"> 
               <div class="icone">
						<img src="../assets/proches.svg" 
                        alt="" />
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

<style scoped>
.BarreNavLeft {
display: flex;
flex-direction: column;
height: 100% !important;
width: 10% !important;
background: #8BADBE !important;
}

body{
color: #F1FAFF;
}

.icone1{
text-align: center;
	float: left;
	margin: auto;
    gap:10px;
    width:25%;
    
}
.icone{
text-align: center;
align-items: center;
display:inline-block;
margin-left: 23%;

width:25%;
}
.container{
text-align: center;
align-items: center;
list-style-type: none;
flex-wrap: wrap;
display: flex;
    }
.texte {
    display: flex;
    font-size: 50px;
    margin-left: 250px;
    color: #536974;
    position: relative;
    text-align:center;
    margin-top:10px;
    
}    
</style>

