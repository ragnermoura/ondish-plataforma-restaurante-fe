<template>
    <div class="wrapper">

        <Sidebar />
        <div class="main">
            <NavBar />
            <main class="content">
                <div class="container-fluid p-0">

                    <div v-if="mostrarSkeleton" class="skeleton-title-dashboard"></div>
                    <h1 v-if="!mostrarSkeleton" class="h3 mb-3"><strong>Dashboard |</strong> Controlo Geral</h1>
                    <h5 v-if="!mostrarSkeleton" class="frase-nome mb-3">Olá, {{ nome }} {{ sobrenome }}. Bem-vindo de
                        volta ao Software Admin!</h5>

                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 mt-3">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-4">
                                                <img src="../../../../assets/images/iconPedido.png" alt="" srcset="">
                                            </div>
                                            <div class="col-8">
                                                <h1 style="font-size: 45px;"><strong>70 </strong></h1>
                                                <h6 style="margin-top: -13px; font-weight: 100;">Total de Pedidos</h6>
                                                <span style="font-size: 10px; font-weight: 100; margin-top: -100px !important;" >Hoje</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 mt-3">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-4">
                                                <img src="../../../../assets/images/iconEntrega.png" alt="" srcset="">
                                            </div>
                                            <div class="col-8">
                                                <h1 style="font-size: 45px;"><strong>0 </strong></h1>
                                                <h6 style="margin-top: -13px; font-weight: 100;"> Pedidos entregues</h6>
                                                <span style="font-size: 10px; font-weight: 100; margin-top: -100px !important;" >Hoje</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 mt-3">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-4">
                                                <img src="../../../../assets/images/iconTotal.png" alt="" srcset="">
                                            </div>
                                            <div class="col-8">
                                                <h1 style="font-size: 45px;"><strong><span style="font-weight: 100; font-size: 30px;"><small>€ </small></span>0,00 </strong></h1>
                                                <h6 style="margin-top: -13px; font-weight: 100;">Rendimento Totais</h6>
                                                <span style="font-size: 10px; font-weight: 100; margin-top: -100px !important;" >Últimos 30 dias</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 mt-3">
                                <div class="card">
                                    <img style="border-radius: 300px !important; width: 150px; border: 6px solid; margin-top: -30px;"
                                        :src="`http://localhost:3000/public${logo}`" class="rounded mx-auto d-block"
                                        alt="...">
                                    <div class="card-body">
                                        <div>
                                            <img style="width: 200px; margin-left: auto; margin-right: auto; display: block !important;"
                                                :src="qrcode" alt="" class="rounded mx-auto d-block" srcset="">
                                        </div>
                                    </div>
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
import { jwtDecode } from "jwt-decode";

export default {
    name: 'DashboardClient',

    data() {
        return {
            token: localStorage.getItem('token'),
            nome: '',
            email: '',
            sobrenome: '',
            qrcode: '',
            logo: '',


        }
    },
    components: {
        Sidebar,
        NavBar,
        Footer,
    },

    mounted() {
        let decoded = jwtDecode(this.token);
        this.nome = decoded.nome;
        this.email = decoded.email;
        this.sobrenome = decoded.sobrenome;
        this.qrcode = decoded.restaurante.qrcode;
        this.logo = decoded.restaurante.logo;

        console.log('Dados do usuário: ', decoded);
    }

}
</script>