import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

const store = createStore({
  state () {
    return {
      basket: []
    }
  },
  mutations: {
    addElementToBasket(state: any, elementAAjouter: any){
      if(state.basket.length <4){
        state.basket.push(elementAAjouter);
      }
    },
    removeElementFromBasket(state: any){
      if(state.basket.length > 0){
        state.basket.pop();
      }
    },
      clearBasket(state: any){
          state.basket = []   
},
    },


  getters: {
    contenuBasket (state: any ) {
      return state.basket;
    }
  }
})

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store);
  
router.isReady().then(() => {
  app.mount('#app');
});