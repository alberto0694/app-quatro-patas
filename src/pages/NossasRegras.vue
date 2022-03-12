<template>
    <div class="content padding-mobile">
        
        <div class="width-60p">
            <h2 class="amatic-100">Nossas regras</h2>

            <div class="nunito-26">
                <p>
                    Sem sombra de dúvidas queremos o melhor para os nossos peludinhos, portanto queremos esclerecer quais são os requisitos para você ter um novo membro na família:
                </p>

                <ul class="bold margin-top-100">
                    <li>Carinho e atenção não pode faltar</li>
                    <li>Cuide de pulgas, carrapatos, entre outros parasitas</li>
                    <li>Leve ao veterinário regularmente</li>
                    <li>Mantenha as vacinas em dia, é importante para ele(a) e para você</li>
                    <li>A castração é importante para previnir doenças e a procriação.</li>
                </ul>

                <p class="margin-top-40">Todo animal merece respeito &lt;3</p>
            </div>
        </div>

        <div class="background-picture picture-nossas-regras"></div>

    </div>
</template>

<style lang="scss">

    @import '../scss/_variables.scss';

    ul {

        margin-top: 30px;
        list-style: none;

        li {
            background-image: url(img/DogHand2x.png);
            background-repeat: no-repeat;
            line-height: 65px;
            padding-left: 65px;
        }
    }

    @media (max-width: $width-break)
    {
        ul {

            margin-top: 30px;
            list-style: none;

            li {
                background-image: url(img/DogHand.png);
                background-repeat: no-repeat;
                line-height: 30px;
                padding-left: 40px;
                text-align: left;
            }
        }
    }

</style>