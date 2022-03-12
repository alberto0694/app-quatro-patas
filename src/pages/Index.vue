<template>
    <div class="content padding-mobile">
        
        <div class="width-60p">
            <h2 class="amatic-100 m-center"> Procurando um novo amigo?</h2>

            <div class="nunito-26 m-center">
                <p>A <span class="bold"> Quatro Patas </span> pode ajudar nessa missão!</p>
                <p>Doguinhos e Gatinhos estão esperando para fazer você feliz!</p>
                <p>Adote agora mesmo.</p>

                <div class="margin-top-60 m-center">
                    <router-link class="m-center m-margin-10 btn-custom btn-hover background-fourth-color color-white" to="/adote-agora">Adote Agora</router-link>
                    <router-link class="m-center m-margin-10 btn-custom btn-hover margin-left-20" to="/nossas-regras">Nossas Regras</router-link>
                </div>
            </div>

        </div>

        <div class="background-picture picture-index"></div>
        
    </div>
</template>

<style lang="scss">

    @import '../scss/_variables.scss';

    @media (max-width: $width-break)
    {
        .content div:nth-child(1){
            order: 2;
        }
    }
</style>