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

                            <div v-if="successo" class="alert alert-success mb-4" role="alert">
                                <i class="fa fa-check"></i> Funcionario adicionado(a) com sucesso!
                            </div>
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
                                        <input type="text" v-model="nome" class="form-control"
                                            id="exampleInputPassword1">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label label-form"><i
                                                class="fa fa-user"></i> Apelido</label>
                                        <input type="text" v-model="sobrenome" class="form-control"
                                            id="exampleInputPassword1">
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label label-form"><i
                                                class="fa fa-circle"></i> Genero</label>
                                        <select class="form-control" v-model="genero" id="exampleInputPassword1">
                                            <option value="" disabled selected>Escolha</option>
                                            <option value="Masculino">Masculino</option>
                                            <option value="Feminino">Feminino</option>
                                            <option value="Outros">Outros</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label label-form"><i
                                                class="fa fa-id-card-o"></i> Função</label>
                                        <select class="form-control" v-model="funcao" id="exampleInputPassword1">
                                            <option value="" disabled selected>Escolha</option>
                                            <option value="Empregado de mesa">Empregado de mesa</option>
                                            <option value="Gerente">Gerente</option>
                                        </select>
                                    </div>
                                </div>

                                <hr>



                            </div>

                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
                            <button class="btn btn-success me-md-2" :disabled="autenticando" @click="handleValidar()"
                                type="button"><i class="fa fa-check"></i>
                                {{ textoBotao }}</button>

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
                                                <th scope="col">Nome</th>
                                                <th scope="col">Genero</th>
                                                <th scope="col">Função</th>
                                                <th scope="col">Ação</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="text-center" v-for="funcionario in listFuncionarios"
                                                :key="funcionario.id_funcionario">
                                                <th scope="row">
                                                    <figure class="figure">
                                                        <img :src="`https://ondish.webserverapi.online/api/public${funcionario.foto}`"
                                                            class="thumb-prato-table figure-img img-fluid rounded"
                                                            alt="Imagem do Funcionário">


                                                    </figure>
                                                </th>

                                                <td>
                                                    {{ funcionario.nome }} {{ funcionario.sobrenome }}
                                                </td>
                                                <td><span class="badge text-bg-success">{{ funcionario.genero }}</span>
                                                </td>
                                                <td><span class="badge text-bg-dark">{{ funcionario.funcao }}</span>
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
import api from '../../../../services/api/client/funcionario'
import { jwtDecode } from "jwt-decode";


export default {
    name: 'CadEmpregadosView',

    data() {
        return {
            token: localStorage.getItem('token'),
            imageUrl: null,
            avatar: null,
            nome: '',
            sobrenome: '',
            genero: '',
            funcao: '',
            successo: false,
            id_restaurante: '',
            textoBotao: 'Gravar',
            listFuncionarios: []
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

        this.fetchListFuncionarios();

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
                this.avatar = file;
            }
        },


        async handleValidar() {
            this.autenticando = true;
            this.textoBotao = 'Guardando...';

            let nome = this.nome;
            let sobrenome = this.sobrenome;
            let genero = this.genero;
            let funcao = this.funcao;
            let avatar = this.avatar

            if (nome !== '' && sobrenome !== '' && genero !== '' && genero !== '') {
                try {
                    const formData = new FormData();
                    formData.append('nome', nome);
                    formData.append('sobrenome', sobrenome);
                    formData.append('genero', genero);
                    formData.append('funcao', funcao);
                    formData.append('foto', avatar);
                    formData.append('id_restaurante', this.id_restaurante);

                    const res = await api.novoFuncionario(formData);
                    if (res.status === 202) {
                        this.success = true;
                        this.textoBotao = 'Sucesso!';

                        this.nome = ''
                        this.sobrenome = '';
                        this.genero = '';
                        this.funcao = '';
                        this.imageUrl = null;


                        setTimeout(() => {
                            this.autenticando = false;
                            this.success = false;
                            this.textoBotao = 'Gravar';
                        }, 3000);

                    }
                } catch (err) {
                    console.log(err);
                    this.autenticando = false;
                    this.textoBotao = 'Tentar novamente...';
                    this.erro = true;

                    setTimeout(() => {
                        this.erro = false;
                    }, 4000);
                }
            } else {
                this.autenticando = false;
                this.textoBotao = 'Tentar novamente...';

                setTimeout(() => {
                    this.campoNullError = false;
                }, 4000);
            }
        },


        async fetchListFuncionarios() {
            let id_restaurante = this.id_restaurante;
            try {
                const res = await api.meusFuncionarios(id_restaurante);

                this.listFuncionarios = res.data;

                console.log(this.listFuncionarios)

            } catch (error) {
                console.log('Erro ao buscar pratos:', error);
            }
        },
    }

}
</script>