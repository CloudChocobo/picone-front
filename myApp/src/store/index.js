/*import {
    createStore
} from "vuex";
//uses Vuex 4
//keeps values from one page to another without having to import them from components to components


export const store = createStore({
    state() {
        return {
            //store values :
            basket: [],
            mood: null,
            patients: [{}],
        }
    },
    mutations: {
        //we will use those functions to add or remove the card components
        // we limited the number of cards to 4 in order to have a short sentence for the time being. This can be changed at anytime.
        //store values modifier functions :
        setValeurDe(state, objet) {
            // type = patients || establishment
            state[objet.type] = objet.valeur;
        },
        addElementToBasket(state, elementToAdd) {
            if (state.basket.length < 4) {
                state.basket.push(elementToAdd);
            }
        },
        removeElementFromBasket(state) {
            if (state.basket.length > 0) {
                state.basket.pop();
            }
        },
        clearBasket(state) {
            state.basket = []
        },

        //Mutation to put a mood card in the mood state.
        setMoodState(state, moodToSet) {
            state.mood = moodToSet;
        },

        //Mutation to erase the current mood.
        clearMood(state) {
            state.mood = null
        },

        setPatients(state, valeur) {
            state.patients = valeur;
        },
    },

    getters: {
        contenuBasket(state) {
            return state.basket;
        },

        mood(state) {
            return state.mood;
        },
        patients(state) {
            return state.patients;
        },
    }
}) * /