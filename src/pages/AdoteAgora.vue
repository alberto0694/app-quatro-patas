<template>
    <div>

        <div class="content padding-mobile content-adote-agora">

            <div class="width-60p">
                <h2 class="amatic-100">Adote Agora</h2>

                <p class="nunito-26">Temos vários peludinhos esperando para fazer um lar mais feliz!</p>
            </div>

            <div class="background-picture absolute right-0"></div>
        
        </div>




        <div class="content-pet">

            <div class="content-wrap">

                <div v-for="(pet, index) in pets" :key="index">
                    <CardPet :pet="pet"/>
                </div>

            </div>

        </div>

        <Favorito ref="Favorito"/>
        <NovoAmigo ref="NovoAmigo"/>

    </div>
</template>

<script>

import CardPet from '../components/CardPet.vue';
import Favorito from '../components/Favorito.vue';
import NovoAmigo from '../components/NovoAmigo.vue';

export default {
    
    components: {
        CardPet,
        Favorito,
        NovoAmigo
    },

    data(){

        return {
            pets : this.$store.state.pets
        }
        
    }

}
</script>

<style lang="scss">

    @import '../scss/_variables.scss';

    .content-pet{
        //z-index: 999;
        position: relative;        
        width: 80%;
        margin:180px auto;
    }

    @media (max-width: $width-break)
    {
        .content-adote-agora .background-picture{
            margin-top: 130px;
        }

        .content-pet{
            margin-top: 400px;
        }
    }

    

</style>