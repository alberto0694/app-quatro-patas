<template>
    <div>

        <div class="nav-header-footer">
            
            <router-link class="logo-pet-header" to="/">
                <div class="background-logo"></div>
            </router-link>           

            <router-link class="amatic-50 link-regras" to="/nossas-regras">Nossas Regras</router-link>
            
        </div>

    </div>

</template>

<style lang="scss">

    @import "../scss/_variables.scss";

    .logo-pet-header {
        
        width: 300px;
        height: 100px;
        padding: 30px;
        margin-left: 100px;

        div {
            width: 100%;
            height: 100px;
            display: block;
        }
    }

    a.amatic-50 {
        margin-left: 50px;
        text-decoration: none;
        color: black;
    }

    a.amatic-50:hover {
        color: $fourth-color;
    }

    @media (max-width: $width-break)
    {
        .logo-pet-header {
    
            width: 80px;
            height: 50px;
            padding: 0;
            margin-left: 20px;

            div {
                width: 100%;
                height: 50px;
            }

        } 

        .link-regras{
            display: none;
        }
    
    }

</style>
