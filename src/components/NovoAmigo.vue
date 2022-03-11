<template>
    <div :class="[$store.state.novoAmigoModalIsOpen ? '' : 'hidden', 'background-modal']">
        
        <div class="content-modal  bg-novo-amigo">  
            <button @click="close">X</button>  
            <div class="background-picture-modal"></div>

            <div class="margin-top-40 margin-bottom-40 margin-right-20">
                <h2 class="amatic-100">Você ganhou um novo amiguinho!</h2>
                <p class="nunito-26">Obrigado por sua adoção, ficamos felizes por você e por ele!</p>
            </div>
            
        </div>
    </div>
</template>


<script>
    
    export default {

        methods: {

            close(){
                this.$store.dispatch('novoAmigoAction', false);
            }

        }
    }


</script>