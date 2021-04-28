<template>
<!-- Utiliser ion-page pour la command router-push et les fonctionnalités ionic  -->
    <ion-page>
        <!-- ion-content est un containeur qui enveloppe d'autres fonctions qu'on veut créer -->
        <ion-content :fullscreen = "true">
            <!-- Formulaire Basique HTML5, envoie les données à la fonction handleSubmit -->
            <form @submit.prevent="handleSubmit" class="formRegister">
                <h1>Inscription</h1>
                <div>
                    <label for="nom">Nom</label>
                    <!-- V-model stocke les donnees et lie en biredictionnel les données dans mon data -->
                    <input type="text" name="nom" id="nom" v-model="nom" >
                </div>
                <div>
                    <label for="prenom">Prénom</label>
                    <input type="text" name="prenom" id="prenom" v-model="prenom">
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" v-model="email"  >
                </div>
                <div>
                    <label for="password">Mot de passe</label>
                    <input type="Password" name="password" id="password" v-model="password" >
                </div>
                <div>
                    <label for="password2">Confirmer Mot de passe</label>
                    <input type="password" name="password2" id="password2" v-model="password2" >
                </div>
                <div>
                    <!-- Change de URL -->
                    <button @click="() => router.push ('/login')"> S'inscrire</button>  
                </div>
            </form>
        </ion-content>
    </ion-page>
</template>

<script>// imports pour l'utilisation des bibliotheques
import {useRouter} from "vue-router";
import {IonContent, IonPage} from "@ionic/vue";
import axios from 'axios';
export default {
    name: 'Register',
    components: {IonContent, IonPage},
    data()
    {  return  {    nom: '',
                    prenom: '',
                    email: '',
                    password: '',
                    password2: '',
                }
    },
    methods: { // fonction prend les properties data 
                handleSubmit()
            {const data = 
                {   nom: this.nom,
                    prenom: this.prenom,
                    email: this.email,
                    password: this.password,
                    password2: this.password2,
                }
                this.$router.push({path: 'Login'})
                console.log(data); 
                /* axios enregistre les données reçu de data dans la base de données et
                envoie la requete stringifié automatiquement*/
                axios.post('http://localhost:8091/home/addAdmin', data) 
                .then( res => {console.log(res)})
            },
},
}

</script>

<style scoped>
/* Méthod cascade, heritage des parents? */
form.formRegister {
    display: table;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    width: 40%;
    height: 50%;
    font-family: 'Mukta', sans-serif;
    color: #536974;
}

div.formRegister {
    display: table-row; 
}

label, input {
    display: table-cell;
    border-radius:10px ;
    width: 100%;
    padding-top: 2%;
    margin-bottom: 4%;
    margin-top:3% ;
    font-size: 20px;
    
}
label {
    padding-right: 10px;
}

button {
    border-radius:10px ;
    width: 40%;
    padding-top: 2%;
    padding-bottom: 2%;
    margin-bottom: 5%;
    margin-left: 30%;
    margin-top:3% ;
    font-size: 20px;
}

h1 {
    text-align: center;
}
</style>