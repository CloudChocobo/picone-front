<template>
<ion-page>
        <ion-content :fullscreen="true">
                <div class="container">Choissez votre thème de discussion</div>
                    <div class="icone">
						<img src="../assets/Proches.png" alt="" />
                        <div class="texte">Proches</div>
                    </div>
        </ion-content>
    </ion-page>
</template>

<script>
import {IonPage, IonContent} from "@ionic/vue";
    export default {
        name: "Theme",
        components: {
			IonPage,
			IonContent,
			
        },
    };
</script>

<style scoped>
	body{
		color: #F1FAFF;
    }
    .container{
color:#112631
    }
</style>

