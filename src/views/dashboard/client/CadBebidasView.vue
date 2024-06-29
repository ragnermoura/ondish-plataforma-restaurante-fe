<template>
    <div class="wrapper">

        <Sidebar />
        <div class="main">
            <NavBar />
            <main class="content">
                <div class="container-fluid p-0">

                    <div v-if="mostrarSkeleton" class="skeleton-title-dashboard"></div>
                    <h1 v-if="!mostrarSkeleton" class="h3 mb-3"><strong>Bebidas</strong></h1>
                </div>
                <ul class="nav nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                            aria-selected="true"><i class="fas fa-cocktail"></i> Registar Bebida</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false"><i class="fa-solid fa-heart"></i> &nbsp; Minhas Bebidas</button>
                    </li>

                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                        aria-labelledby="pills-home-tab" tabindex="0">
                        <div class="container">
                            <div class="row">
                                <div class="col-5">
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label label-form"><i
                                                class="fas fa-wine-bottle"></i> Nome da
                                            Bebida</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1">
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label label-form"><i
                                                class="fa fa-dollar"></i> Valor da bebida</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1">
                                    </div>
                                </div>
                        

                                <div class="col-4">
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label label-form"><i
                                                class="fa fa-tag"></i> Taxa
                                            Ondish</label>
                                        <h3 class="taxa-ondish"><strong>30,00€</strong></h3>
                                        <p class="text-info-taxa"><span><small class="text-danger"><i
                                                        class="fa fa-info"></i> É sempre cobrado 12% em cima do valor
                                                    total</small></span></p>


                                    </div>
                                </div>

                                <div class="col-4">
                                    <div class="mb-3">
                                       
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label label-form"><i
                                                class="fa fa-tag"></i> Tipo da bebida</label>
                                            <select class="form-select form-select-lg mb-3"
                                                aria-label="Large select example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <label for="exampleInputPassword1" class="form-label label-form">Descreva o a bebida
                                        <span><small> | 300 caracteres</small></span> </label>
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here"
                                            id="floatingTextarea2" style="height: 100px"></textarea>
                                        <label for="floatingTextarea2">Comments</label>
                                    </div>
                                </div>

                            </div>
                            <hr>
                            <div class="col-5 mt-4">
                                <label for="exampleInputPassword1" class="form-label label-form"><strong><i
                                            class="fa fa-image"> &nbsp;</i> Fotos da bebida</strong>
                                </label>
                            </div>

                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
                            <button class="btn btn-success me-md-2" type="button"><i class="fa fa-check"></i>
                                Gravar</button>

                        </div>

                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                        tabindex="0">

                        <div class="container">
                            <div class="row">
                                <div class="col-12 mt-5">
                                    <table class="table">
                                        <thead>
                                            <tr class="text-center">
                                                <th scope="col"></th>
                                                <th scope="col">Nome da Bebida</th>
                                                <th scope="col">Valor</th>
                                                <th scope="col">Tipo</th>
                                                <th scope="col">Descrição</th>
                                                <th scope="col">Ação</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="text-center">
                                                <th scope="row">
                                                    <figure class="figure">
                                                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Raspberry_port.jpg"
                                                            class="thumb-prato-table figure-img img-fluid rounded"
                                                            alt="...">

                                                    </figure>
                                                </th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>Otto</td>
                                                <td>Otto</td>

                                                <td>
                                                    <div class="row">
                                                        <div
                                                            style="display: flex; flex-direction: row; padding-left: 25%; padding-right: 30px;">
                                                            <div class="col-4">
                                                                <button type="button" class="btn btn-warning btn-sm"><i
                                                                        class="fa fa-edit"></i></button>
                                                            </div>
                                                            <div class="col-4">
                                                                <button type="button" class="btn btn-info btn-sm"><i
                                                                        class="fa fa-eye"></i></button>
                                                            </div>
                                                            <div class="col-4">
                                                                <button type="button" class="btn btn-danger btn-sm"><i
                                                                        class="fa fa-trash"></i></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
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
    name: 'CadBebidasView',

    data() {
        return {
            token: localStorage.getItem('token'),
        }
    },
    components: {
        Sidebar,
        NavBar,
        Footer,
    },

}
</script>