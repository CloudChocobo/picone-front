<template>
<ion-page>
        <ion-content :fullscreen="true">
            <Page>
                <div class="texte">
            Choisissez votre élément.
        </div>
                <div class="container">
                <GrilleImage>
                    <!--<div class="icone" @click="() => router.push('/interlocuteur')"> -->
						<img src="../assets/nourriture/pomme.png" alt="pomme" />
                        <img src="../assets/nourriture/pain.png" alt="pain" />
                        <img src="../assets/nourriture/poisson.png" alt="poisson" />
                        <img src="../assets/nourriture/petitpois.png" alt="petit_pois" />
                        <img src="../assets/nourriture/pastèque.png" alt="pastèque" />
                        <img src="../assets/nourriture/poulet.png" alt="poulet" />
                        <img src="../assets/nourriture/bière.png" alt="bière" />
                        <img src="../assets/nourriture/thé.png" alt="thé" />
                        </GrilleImage> 
                           </div>
                           <footer>
                            <div class="rectangle_discussion">
                        <Discussion>poulet</Discussion>
                  </div>         
                           </footer>
            </Page>              
        </ion-content>
    </ion-page>
</template>

<script>
import {IonPage, IonContent} from "@ionic/vue";
import {useRouter} from "vue-router";
import Page from "@/components/Page.vue";
import Discussion from "@/components/Discussion.vue";
import GrilleImage from "@/components/GrilleImage.vue";
    export default {
        name: "Nourriture",
        components: {
			IonPage,
            IonContent,
            Page,
            GrilleImage,
            Discussion,
        },
        setup() {
			const router = useRouter();
			return {router};       
    }
        
};
</script>


<style scoped>
.texte {
    display: flex;
    font-size: 50px;
    margin-left:270px;
    color: #536974;
    position: relative;
    text-align:center;
    margin-top:10px;   
}  

.footer{
      margin-left:10%;
     
}
.rectangle_discussion{
    margin-left:10%;
    margin-right:10%;
    margin-top:2%;
}
</style>

