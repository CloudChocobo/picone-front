<template>
<ion-page>
        <ion-content :fullscreen="true">
            <Page>
                <div class="container">
                    <p>Bonjour<br>
                    Comment  vous sentez-vous?</p>
                    </div>
                    <div class="icone" @click="() => router.push('/jeTu')">
						<img src="../assets/bien.png" alt=""/>
                        <img src="../assets/moyen.png" alt=""/>
                        <img src="../assets/triste.png" alt=""/>
                        <img src="../assets/enervé.png" alt=""/>
                    </div>     
            </Page>                
        </ion-content>
    </ion-page>
</template>

<script>
import {IonPage, IonContent} from "@ionic/vue";
import {useRouter} from "vue-router";
import Page from "@/components/Page.vue";
    export default {
        name: "Humeur",
        components: {
			IonPage,
            IonContent,
            Page,
        },
        setup() {
			const router = useRouter();
			return {router};       
    }
        
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

