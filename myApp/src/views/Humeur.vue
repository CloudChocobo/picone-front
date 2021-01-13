<template>
<ion-page>
        <ion-content :fullscreen="true">
            <div class="barreNavLeft">
            <BarreNavLeft></BarreNavLeft>
            </div>
                <div class="container">Comment  vous sentez-vous?</div>
                    <div class="icone">
						<img src="../assets/proches.svg" alt="" />
                        <div class="texte">Proches</div>
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
color:#112631
    }
</style>

