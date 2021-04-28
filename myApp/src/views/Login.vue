<template>
    <ion-page>
        <ion-content :fullscreen = "true">

      <form  @submit.prevent="login" class="formLogin">
          <h2>Login</h2>
          <div>
              <label for="email">Email</label>
              <input type="email" name="username" id="username" class="login-input" v-model="username">
          </div>

          <div>
              <label for="password">Mot de passe</label>
              <input type="password" name="password" id="password" class="login-input" v-model="password">
          </div>
          <div>
        <a href= "Register">Créer un compte</a>
        </div>

          <div>
              <button>Login</button>
          </div>
          <div>{{user}}</div>
      </form>
      </ion-content>
      </ion-page>
</template>

<script>
import axios from 'axios';
export default {
    name: 'login',
    data() {
        return {
            username: '',
            password:'',
        }
    },
    methods: {
        login(){
            const data = {
            username:  this.username,
            password: this.password,
            }
            const user = axios.get('http://localhost:8091/home/{id}', data).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
        }
    }

}
</script>

<style scoped>

   .formLogin {
    display: table;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    width: 40%;
    height: 50%;
    font-family: 'Mukta', sans-serif;
    color: #536974;
}

div {
    display: table-row;
    
}

label, input {
    display: table-cell;
    border-radius:10px ;
    width: 100%;
    padding-top: 2%;
    margin-bottom: 4%;
    margin-top:5% ;
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

h2 {
    text-align: center;
}

a{
    color: #1A73E8;
}

</style>