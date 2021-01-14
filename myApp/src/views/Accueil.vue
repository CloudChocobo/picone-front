<template>
    <Page>
        <div class="texte">
            <p>Bonjour<br>
            Quel est votre interlocuteur?</p>
        </div>
        <div class="container"> 
            <div class="icone">
                <img src="../assets/Proches.png" alt="" />
            </div>
            <div class="icone1">
                <img src="../assets/Medecin.png" alt="" />
            </div>
        </div>
        <Barre-defilement></Barre-defilement>  
    </Page>
</template>

<script>
import BarreDefilement from "@/components/BarreDefilement.vue";
import Page from "@/components/Page.vue";
    export default {
        name: "Accueil",
        components: {
            BarreDefilement,
            Page,
        }
    };
</script>

<style scoped>


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
.Barre-defilement{
    display:flex;
    align-items: flex-end;
}
</style>

