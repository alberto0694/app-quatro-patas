import { createStore } from "vuex";
import data from '../data/pets.js';

export default createStore({
    state:{
        pets: data,
        favoritoModalIsOpen: false,
        novoAmigoModalIsOpen: false,
    },
    mutations: {
        favoritarPetMutation(state, pet){
            let localPet = state.pets.filter(p => p.id == pet.id)[0];
            localPet.favorito = !pet.favorito;
            state.favoritoModalIsOpen = localPet.favorito;
        },

        novoAmigoMutation(state, value){
            state.novoAmigoModalIsOpen = value;
        },

        favoritoMutation(state, value){
            state.favoritoModalIsOpen = value;
        }
    },
    actions:{

        favoritarPetAction(context, pet){
            context.commit('favoritarPetMutation', pet)
        },

        novoAmigoAction(context, value){
            context.commit('novoAmigoMutation', value)
        }
        
    },
    modules:{
        
    }
})