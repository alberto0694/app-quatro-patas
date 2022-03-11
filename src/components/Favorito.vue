<template>
    <div :class="[this.$store.state.favoritoModalIsOpen ? '' : 'hidden', 'background-modal']">
        
        <div class="content-modal bg-favorito">    
            <button @click="close()">X</button>
            <div class="background-picture-modal"></div>

            <div class="margin-top-40 margin-bottom-40 margin-right-20">
                <h2 class="amatic-100">FAVORITADO COM AMOR!</h2>
                <p class="nunito-26">Obrigado por seu interesse em nossos amigos! Esperamos ansiosos pela sua adoção!</p>
            </div>
            
        </div>
    </div>
</template>

<script>
    
    export default {

        methods: {

            close(){
                this.$store.commit('favoritoMutation', false);
            }

        }
    }


</script>