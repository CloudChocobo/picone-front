<template>
<ion-page>
        <ion-content :fullscreen="true">
            <div class="barreNavLeft">
            <BarreNavLeft></BarreNavLeft>
            </div>
                <div class="container">Bonjour Thierry</div>
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
        name: "Accueil",
        components: {
			IonPage,
			IonContent,
			BarreNavLeft,
        }
    };
</script>

<style scoped>
	body{
		color: #8BADBE;
    }
    .container{
color:#112631
    }
</style>


			BarrreNavLeft,
	import BarreNaLeft