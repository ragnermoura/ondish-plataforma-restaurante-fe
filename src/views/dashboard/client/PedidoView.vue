<template>
    <div class="wrapper">

        <Sidebar />
        <div class="main">
            <NavBar />
            <main class="content">
                <div class="container-fluid p-0">

                    <div v-if="mostrarSkeleton" class="skeleton-title-dashboard"></div>
                    <h1 v-if="!mostrarSkeleton" class="h3 mb-3"><strong>Pedidos</strong></h1>
                </div>

                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="alert alert-warning" role="alert">
                               <strong> 🥺 Desculpe...</strong> Ainda não há pedidos registados.
                            </div>
                            <img style="display: block; margin-left: auto; margin-right: auto; opacity: 0.3;"
                                src="../../../../assets/images/pedidos.png" alt="">
                        </div>
                        <div class="col-12" v-if="pedidosView">
                            <div class="card">
                                <div class="card-body">

                                    <div class="row">
                                        <div class="col-4">
                                            <h4 class="text-center"><small><i class="fa fa-circle text-danger"></i> A
                                                    receber o pedido</small> <button type="button"
                                                    class="btn btn-success"
                                                    style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                                    Iniciar
                                                </button></h4>
                                            <div class="progress" role="progressbar" aria-label="Danger example"
                                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar bg-danger" style="width: 100%"></div>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <h4 class="text-center"><small><i class="fa fa-circle text-danger"></i> Em
                                                    preparação</small> <button type="button" class="btn btn-success"
                                                    style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                                    Iniciar
                                                </button></h4>
                                            <div class="progress" role="progressbar" aria-label="Danger example"
                                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar bg-danger" style="width: 100%"></div>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <h4 class="text-center"><small><i class="fa fa-circle text-danger"></i>
                                                    Entregue na mesa</small> <button type="button"
                                                    class="btn btn-success"
                                                    style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                                    Finalizar
                                                </button></h4>
                                            <div class="progress" role="progressbar" aria-label="Danger example"
                                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar bg-danger" style="width: 100%"></div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div class="col-12" v-if="pedidosView">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4">
                                            <h4 class="text-center"><small><i class="fa fa-circle text-danger"></i> A
                                                    receber o pedido</small> <button type="button"
                                                    class="btn btn-success"
                                                    style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                                    Iniciar
                                                </button></h4>
                                            <div class="progress" role="progressbar" aria-label="Danger example"
                                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar bg-danger" style="width: 0%"></div>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <h4 class="text-center"><small><i class="fa fa-circle text-danger"></i> Em
                                                    preparação</small> <button type="button" class="btn btn-success"
                                                    style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                                    Iniciar
                                                </button></h4>
                                            <div class="progress" role="progressbar" aria-label="Danger example"
                                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar bg-danger" style="width: 0%"></div>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <h4 class="text-center"><small><i class="fa fa-circle text-danger"></i>
                                                    Entregue na mesa</small> <button type="button"
                                                    class="btn btn-success"
                                                    style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                                    Finalizar
                                                </button></h4>
                                            <div class="progress" role="progressbar" aria-label="Danger example"
                                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar bg-danger" style="width: 0%"></div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div class="col-12" v-if="pedidosView">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4">
                                            <h4 class="text-center"><small><i class="fa fa-circle text-danger"></i> A
                                                    receber o pedido</small> <button type="button"
                                                    class="btn btn-success"
                                                    style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                                    Iniciar
                                                </button></h4>
                                            <div class="progress" role="progressbar" aria-label="Danger example"
                                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar bg-danger" style="width: 0%"></div>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <h4 class="text-center"><small><i class="fa fa-circle text-danger"></i> Em
                                                    preparação</small> <button type="button" class="btn btn-success"
                                                    style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                                    Iniciar
                                                </button></h4>
                                            <div class="progress" role="progressbar" aria-label="Danger example"
                                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar bg-danger" style="width: 0%"></div>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <h4 class="text-center"><small><i class="fa fa-circle text-danger"></i>
                                                    Entregue na mesa</small> <button type="button"
                                                    class="btn btn-success"
                                                    style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                                                    Finalizar
                                                </button></h4>
                                            <div class="progress" role="progressbar" aria-label="Danger example"
                                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar bg-danger" style="width: 0%"></div>
                                            </div>
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
import api from '../../../../services/api/auth/index.js'
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

export default {
    name: 'CadPratoView',

    data() {
        return {
            token: localStorage.getItem('token'),
            pedidosView: false
        }
    },
    components: {
        Sidebar,
        NavBar,
        Footer,
    },

}
</script>