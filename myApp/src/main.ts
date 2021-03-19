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

//uses Vuex 4
//keeps values from one page to another without having to import them from components to components

const store = createStore({
  state () {
    return {
      //store values :
      basket: [],
      stateDefilement : {
        currentDefilement: 0,
        enabledDefilement: true,
        activeDefilement: false,
        activeKey: 'Space',
        speedDefilement: 1000
      },
      mood: null,
      patients: [{}],
      establishments: [{}],
    }
  },
  mutations: {
  //we will use those functions to add or remove the card components
  // we limited the number of cards to 4 in order to have a short sentence for the time being. This can be changed at anytime.
    //store values modifier functions :
    addElementToBasket(state: any, elementToAdd: any){
      if(state.basket.length <4){
        state.basket.push(elementToAdd);
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
    incrementCurrentDefilement(state: any){
      state.stateDefilement.currentDefilement ++;
      console.log(state.stateDefilement.currentDefilement)
    },
    setSpeed(state: any, amountOfSpeed: number){
      amountOfSpeed === 1500 ?
          state.stateDefilement.speedDefilement = 1500 : state.stateDefilement.speedDefilement += amountOfSpeed
    },

		setEstablishments(state, valeur) {
			state.establishments = valeur;
		},
      //Mutation to put a mood card in the mood state.
      setMoodState(state: any, moodToSet: any) {
        state.mood = moodToSet;
      },


  //Mutation to erase the current mood.
    clearMood(state: any){
      state.mood = null
    },
    setPatients(state: any, valeur: any) {
          state.patients = valeur;
      },
  },
  getters: {
    contenuBasket (state: any ) {
      return state.basket;
    },
    mood (state: any) {
      return state.mood;
    },
    establishments(state) {
      return state.establishments;
    },
    patients(state: any) {
        return state.patients;
      },
  }
})
const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store);
  
router.isReady().then(() => {
  app.mount('#app');
});