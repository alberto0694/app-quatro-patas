<template>
    <div class="card-pet">

        <div>
            <img :src="pet.img" />

            <label class="color-fourth nunito-26 margin-top-20">{{ pet.nome }}</label>
            <label class="nunito-26 color-gray">{{ pet.raca }}, {{ pet.sexo }}</label>
        </div>

        <div class="margin-top-20 content padding-0 content-card-pet">
            <a class="background-gray-color no-border height-50 width-50 btn-custom btn-hover" @click="favoritarPet(pet)">
                <i :class="[pet.favorito ? 'icone-favorito' : 'icone-sem-favorito', 'icone']"></i>
            </a>

            <a class="btn-custom btn-hover background-fourth-color color-white nunito-26 margin-left-10" @click="adotarPet(pet)">
                Adote agora
            </a> 
        </div>

        

    </div>
</template>

<script>

export default {


    props: {
        pet: Object
    },

    methods: {

        favoritarPet(pet){
            this.$store.dispatch('favoritarPetAction', pet);
        },

        adotarPet(){
            this.$store.dispatch('novoAmigoAction', true);
        }
    }
}
</script>

<style lang="scss">
    
    @import '../scss/_variables.scss';

    .content-card-pet {
        flex-direction: row;
        margin: 20px auto;
    }

    img{
        width: 90%;
        margin: 0 auto;
        margin-top: 15px;
        display: block;
    }

    label {
        width: 100%;
        display: block;
        text-align: center;
    }

    .card-pet{
        border-radius: 15px;
        padding: 20px;
        margin: 10px;
        background-color: white;
        box-shadow: 5px 10px 15px 2px $shadow-card;
    }

    .icone{        
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center; 
        height: 50px;
        width: 50px;
        display: block;
                  
    }

    .icone-favorito{
        background-image: url(img/Heart2x.png);
    }

    .icone-sem-favorito{
        background-image: url(img/GrayHeart2x.png);
    }

    @media (max-width: $width-break)
    {
        .card-pet .btn-custom.color-white{
            width: 100px;
        }
    }


</style>