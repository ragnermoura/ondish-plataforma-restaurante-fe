<template>
    <div class="wrapper">

        <Sidebar />
        <div class="main">
            <NavBar />
            <main class="content">
                <div class="container-fluid p-0">

                    <div v-if="mostrarSkeleton" class="skeleton-title-dashboard"></div>
                    <h1 v-if="!mostrarSkeleton" class="h3 mb-3"><strong>Gestao de Funcionários</strong></h1>
                </div>
                <ul class="nav nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                            aria-selected="true"><i class="fa-solid fa-user"> </i> Novo funcionário</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false"><i class="fa-solid fa-users"></i> &nbsp; Equipa</button>
                    </li>

                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                        aria-labelledby="pills-home-tab" tabindex="0">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="mb-3">
                                        <div class="foto-upload">
                                            <input type="file" @change="onFileChange" ref="fileInput" />
                                            <div class="normal" v-if="!imageUrl"></div>
                                            <div class="preview" v-if="imageUrl"
                                                :style="{ backgroundImage: `url(${imageUrl})` }"></div>
                                            <button class="btn_foto" @click="triggerFileInput"><i
                                                    class="fa fa-camera"></i></button>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-6">
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label label-form"><i
                                                class="fa fa-user"></i> Nome</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label label-form"><i
                                                class="fa fa-user"></i> Sobrenome</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1">
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label label-form"><i
                                                class="fa fa-circle"></i> Genero</label>
                                        <select class="form-control" id="exampleInputPassword1">
                                            <option value="" disabled selected>Escolha</option>
                                            <option value="1">Marculino</option>
                                            <option value="2">Feminino</option>
                                            <option value="3">Outros</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label label-form"><i
                                                class="fa fa-id-card-o"></i> Função</label>
                                        <select class="form-control" id="exampleInputPassword1">
                                            <option value="" disabled selected>Escolha</option>
                                            <option value="1">Empregado de mesa</option>
                                            <option value="2">Gerente</option>
                                        </select>
                                    </div>
                                </div>



                                <hr>



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
                                                <th scope="col">Nome do prato</th>
                                                <th scope="col">Valor</th>
                                                <th scope="col">Cozinha</th>
                                                <th scope="col">Tipo</th>
                                                <th scope="col">Prato do dia</th>
                                                <th scope="col">Ação</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="text-center">
                                                <th scope="row">
                                                    <figure class="figure">
                                                        <img src="https://www.cookwithnabeela.com/wp-content/uploads/2024/02/Hamburger.webp"
                                                            class="thumb-prato-table figure-img img-fluid rounded"
                                                            alt="...">

                                                    </figure>
                                                </th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td><span class="badge text-bg-success">Secondary</span></td>
                                                <td><span class="badge text-bg-dark">Secondary</span></td>
                                                <td>
                                                    <div class="form-check form-switch">
                                                        <input style="margin-left: 10% !important;"
                                                            class="form-check-input" type="checkbox" role="switch"
                                                            id="flexSwitchCheckChecked" checked>
                                                    </div>
                                                </td>
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
    name: 'CadEmpregadosView',

    data() {
        return {
            token: localStorage.getItem('token'),
            imageUrl: null
        }
    },
    components: {
        Sidebar,
        NavBar,
        Footer,
    },
    methods: {
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.imageUrl = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        }
    }

}
</script>