<template>
    <div class="wrapper">

        <Sidebar />
        <div class="main">
            <NavBar />
            <main class="content">
                <div class="container-fluid p-0">

                    <div v-if="mostrarSkeleton" class="skeleton-title-dashboard"></div>
                    <h1 v-if="!mostrarSkeleton" class="h3 mb-3"><strong>Cardapios</strong></h1>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-3"  v-for="item in listPratos" :key="item.id_pratos">
                            <div class="card">
                                <img :src="`https://ondish.webserverapi.online/api/public/${item.fotos[0].foto}`"
                                    class="card-img-top" alt="...">
                                <span
                                    style="float: inline-end !important; position: absolute; right: 0; padding: 10px;"><i
                                        class="fa fa-trash text-danger"></i></span>
                                <span
                                    style="float: inline-end !important; position: absolute; right: 0; padding: 8px; margin-top: 30px;"><i
                                        class="fa fa-edit text-warning"></i></span>
                                <span v-if="item.prato_do_dia == 1"
                                    style="position: absolute; margin-top: 10px !important; top: 0; margin-left: 10px;"
                                    class="badge text-bg-warning"><i class="fa fa-sun"></i> Prato do dia</span>
                                <div class="card-body">
                                    <span style="position: absolute; margin-top: -30px; left: 0; margin-left: 10px;"
                                    class="badge text-bg-dark">{{ item.cozinha_restaurante.nome_cozinha }}</span>
                                    <h5 class="card-title" style="text-transform: uppercase;">{{ item.titulo }} <span
                                            style="float: inline-end;">€{{ item.valor }}</span></h5>
                                    <p class="card-text">{{ item.descricao }}</p>
                                    <span style="margin-top: -60px !important;"><i
                                            class="fa fa-star text-warning"></i><i
                                            class="fa fa-star text-warning"></i><i
                                            class="fa fa-star text-warning"></i></span>
                                  

                                </div>
                            </div>
                        </div>


                    </div>




                </div>

            </main>
            <Footer />
        </div>
    </div>
</template>
<script>
import Sidebar from "../../../../components/SideBar/SideComp.vue";
import NavBar from "../../../../components/NavBar/NavComp.vue";
import Footer from "../../../../components/Footer/FooterComp.vue";
import api from '../../../../services/api/client/pratos.js'
import { jwtDecode } from "jwt-decode";

export default {
    name: 'CardapioView',

    data() {
        return {
            token: localStorage.getItem('token'),
            id_restaurante: "",
            listPratos: [],

        }
    },
    components: {
        Sidebar,
        NavBar,
        Footer,
    },

    mounted() {
        const decoded = jwtDecode(this.token);
        this.id_restaurante = decoded.restaurante.id_restaurante;

        this.fecharPratos();
    },


    methods: {

        async fecharPratos() {
            let id_restaurante = this.id_restaurante;
            try {
                const res = await api.meusPratos(id_restaurante);
                if (res && res.data) {
                    const pratos = Array.isArray(res.data) ? res.data : [res.data];
                    this.listPratos = pratos.filter(prato => prato && prato.id_pratos);
                    console.log(this.listPratos)
                }
            } catch (error) {
                console.log('Erro ao buscar pratos:', error);
            }
        }

    }
}
</script>