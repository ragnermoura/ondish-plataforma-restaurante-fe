<template>
    <div class="wrapper">

        <Sidebar />
        <div class="main">
            <NavBar />
            <main class="content">
                <div class="container-fluid p-0">

                    <div v-if="mostrarSkeleton" class="skeleton-title-dashboard"></div>
                    <h1 v-if="!mostrarSkeleton" class="h3 mb-3"><strong>Pratos</strong> <span
                            style="display: flex; align-items: flex-end; justify-content: flex-end;"><button
                                @click="adicionarCozinhaTab()" type="button" class="btn btn-primary btn-sm"><small><i
                                        class="fa fa-plus"></i> Adicionar
                                    cozinha</small></button></span></h1>
                </div>
                <ul class="nav nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                            aria-selected="true"><i class="fa-solid fa-utensils"> </i> Novo Prato</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false"><i class="fa-solid fa-heart"></i> &nbsp; Meus Pratos</button>
                    </li>

                </ul>
                <div class="tab-content" id="pills-tabContent">

                    <div v-if="msgSuccess" class="alert alert-success mt-3 mb-3" role="alert">
                        <i class="fa fa-check"></i> Prato adicionado com sucesso!
                    </div>

                    <div v-if="tabCozinha">
                        <hr>

                        <div class="col-12 mt-4">
                            <label for="exampleInputPassword1" class="form-label label-form"><strong><i
                                        class="fa fa-plus"> &nbsp;</i> Cozinhas</strong>
                            </label>
                            <span
                                style="display: flex; margin-top: -40px; align-items: flex-end; justify-content: flex-end;">
                                <button @click="fecharCozinha()" type="button" class="btn btn-danger btn-sm"><small><i
                                            class="fa fa-close"></i> Retornar</small></button></span>
                        </div>
                        <div class="row">
                            <div v-if="successoCozinha" class="alert alert-success" role="alert">
                                <i class="fa fa-check"></i> Cozinha adicionada com sucesso!
                            </div>
                            <div class="col-4 mt-4">
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label label-form"><i
                                            class="fa fa-utensils"></i> Nome da cozinha</label>
                                    <input type="text" v-model="cozinha" class="form-control"
                                        placeholder="Qual o nome de cozinha?" id="exampleInputPassword1">
                                </div>
                            </div>
                            <div class="col-4" style="margin-top: 3%;">
                                <div class="mb-3">
                                    <button @click="handleCadastrarCozinha()" :disabled="autenticando"
                                        class="btn btn-success mt-4" type="submit"><i class="fa fa-check"></i>
                                        {{ textoBotao }}</button>
                                </div>
                            </div>
                        </div>


                        <hr>
                    </div>




                    <div class="tab-pane fade show active" id="pills-home" v-if="tabPrato" role="tabpanel"
                        aria-labelledby="pills-home-tab" tabindex="0">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-5">
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label label-form"><i
                                                class="fa fa-utensils"></i> Nome do
                                            Prato</label>
                                        <input v-model="titulo" type="text" class="form-control"
                                            id="exampleInputPassword1">
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label label-form"><i
                                                class="fa fa-dollar"></i> Valor do
                                            prato</label>
                                        <input @input="aplicaMascaraMoeda" v-model="valor" type="text"
                                            class="form-control" id="exampleInputPassword1">
                                    </div>
                                </div>

                                <div class="col-4">
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label label-form"><i
                                                class="fa fa-tag"></i> Taxa
                                            Ondish</label>
                                        <h3 class="taxa-ondish"><strong>{{ taxaOndish }} €</strong></h3>
                                        <p class="text-info-taxa"><span><small class="text-danger"><i
                                                        class="fa fa-info"></i> É sempre cobrado 12% em cima do valor
                                                    total</small></span></p>


                                    </div>
                                </div>

                                <div class="col-3">
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label label-form">Tipo de cozinha
                                            do
                                            prato</label>
                                        <select v-model="id_cozinha" class="form-control form-control-lg mb-3"
                                            aria-label="Large select example">
                                            <option selected>Escolha aqui</option>
                                            <option v-for="cozinha in listcozinhas"
                                                :value="cozinha.id_cozinha_restaurante">{{ cozinha.nome_cozinha }}
                                            </option>

                                        </select>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label label-form">Tipo do prato
                                        </label>
                                        <input v-model="tipo_prato" type="text" class="form-control"
                                            id="exampleInputPassword1">
                                    </div>
                                </div>

                                <div class="col-12">
                                    <label for="exampleInputPassword1" class="form-label label-form">Descreva o prato
                                        <small>| 300 caracteres</small></label>
                                    <div class="form-floating">
                                        <textarea v-model="descricao" class="form-control" placeholder="Escreva aqui..."
                                            id="floatingTextarea2" style="height: 100px"></textarea>
                                        <label for="floatingTextarea2">Escreva aqui</label>
                                    </div>
                                </div>



                            </div>
                            <hr>
                            <div class="col-12 mt-4">
                                <label for="exampleInputPassword1" class="form-label label-form"><strong><i
                                            class="fa fa-image"> &nbsp;</i> Fotos do prato</strong>
                                </label>

                                <div class="row">
                                    <div class="col-2" style="margin-right: 50px;" v-for="(image, index) in images"
                                        :key="index">
                                        <div class="card bg-transparent border-0">
                                            <div class="preview-photo-prato area-photo-prato">
                                                <img :src="image.src" class="img-photo-prato" />

                                                <!-- Barra de Progresso -->
                                                <div class="progress">
                                                    <div class="progress-bar" :style="{ width: image.progress + '%' }">
                                                    </div>
                                                </div>

                                                <button @click="removerImagem(index)"
                                                    class="btn btn-danger btn-remover">
                                                    <i class="fa fa-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Botão para adicionar mais imagens -->
                                    <div class="col-2" v-if="images.length < maxImages">
                                        <div class="card bg-transparent border-0">
                                            <div class="preview-photo-prato area-photo-prato">
                                                <label for="inputGroupFile03"
                                                    class="btn btn-primary btn-photo my-4 rounded-2 py-2">
                                                    <i class="fa fa-plus"></i>
                                                </label>
                                                <input hidden type="file" class="form-control" id="inputGroupFile03"
                                                    @change="previewImage" aria-describedby="inputGroupFileAddon03"
                                                    aria-label="Upload" />

                                                <div v-if="success"><i class="fa fa-check"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="col-5 mt-4">
                                <label for="exampleInputPassword1" class="form-label label-form"><strong><i
                                            class="fa fa-list"> &nbsp;</i> Opções</strong>
                                </label>
                            </div>
                            <div class="row mt-3" v-for="(opcao, index) in opcoes" :key="index">



                                <div class="col-3">
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label label-form">Nome da
                                            opção</label>
                                        <input type="text" v-model="opcoes[index].titulo" class="form-control"
                                            id="exampleInputPassword1">
                                    </div>
                                </div>
                                <div class="col-5">
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label label-form">Descrição/Tipo
                                        </label>
                                        <input type="text" v-model="opcoes[index].tipo" class="form-control"
                                            id="exampleInputPassword1">
                                    </div>
                                </div>

                                <div class="col-2">
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label label-form">Valor</label>
                                        <input type="text" v-model="opcoes[index].valor" class="form-control"
                                            id="valorAdicional">
                                    </div>
                                </div>
                                <div class="col-2 mt-4" style="margin-top: 34px !important;">
                                    <button class="btn btn-success" @click="adicionarOpcoes"
                                        v-if="index === opcoes.length - 1" type="button">
                                        <i class="fa fa-plus"></i>
                                    </button>
                                    <button class="btn btn-danger" @click="removerOpcoes(index)" v-else type="button">
                                        <i class="fa fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
                            <button @click="cadastrarPratos()" :disabled="autenticando" class="btn btn-success me-md-2"
                                type="button"><i class="fa fa-check"></i>
                                {{ textoBotao }}</button>

                        </div>

                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                        tabindex="0">

                        <div class="container-fluid">
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
                                            <tr class="text-center" v-for="prato in listPratos" :key="prato.id_pratos">
                                                <th scope="row">
                                                    <figure class="figure">
                                                        <img v-if="prato.fotos && prato.fotos.length > 0"
                                                            :src="`http://localhost:3000/public/${prato.fotos[0].foto}`"
                                                            class="thumb-prato-table figure-img img-fluid rounded"
                                                            alt="Imagem do prato">
                                                        <img v-else src="http://localhost:3000/public/default-foto.png"
                                                            class="thumb-prato-table figure-img img-fluid rounded"
                                                            alt="Imagem padrão">
                                                    </figure>
                                                </th>
                                                <td>{{ prato.titulo }}</td>
                                                <td>€ {{ prato.valor }}</td>
                                                <td><span class="badge text-bg-success">{{ prato.tipo_prato }}</span>
                                                </td>
                                                <td><span class="badge text-bg-dark">{{ prato.tipo_prato }}</span></td>
                                                <td>
                                                    <div class="form-check form-switch">
                                                        <input style="margin-left: 10% !important;"
                                                            class="form-check-input" type="checkbox" role="switch"
                                                            :id="`flexSwitchCheckChecked-${prato.id_pratos}`"
                                                            :checked="prato.prato_do_dia !== 2"
                                                            @change="alterarPratoDoDia(prato.id_pratos, $event.target.checked)">
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="row"
                                                        style="display: flex; flex-direction: row; padding-left: 25%; padding-right: 30px;">

                                                        <div class="col-4">
                                                            <button type="button" data-bs-toggle="modal"
                                                                :data-bs-target="`#deletePrato${prato.id_pratos}`"
                                                                class="btn btn-danger btn-sm"><i
                                                                    class="fa fa-trash"></i></button>
                                                        </div>


                                                        <div class="modal fade" :id="`deletePrato${prato.id_pratos}`"
                                                            tabindex="-1" aria-labelledby="exampleModalLabel"
                                                            aria-hidden="true">
                                                            <div class="modal-dialog modal-dialog-centered">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h1 class="modal-title fs-5 text-danger"
                                                                            id="exampleModalLabel"><i
                                                                                class="fa fa-bell"></i>
                                                                            <strong>Atenção</strong>
                                                                        </h1>
                                                                        <button type="button" class="btn-close"
                                                                            data-bs-dismiss="modal"
                                                                            aria-label="Close"></button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <img
                                                                            src="../../../../assets/images/icons/iconTrash.gif">

                                                                        <div class="alert alert-danger" role="alert">
                                                                            Deseja apagar esse prato?
                                                                        </div>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-secondary"
                                                                            data-bs-dismiss="modal">Fechar</button>
                                                                        <button @click="handleDelete(prato.id_pratos)"
                                                                            type="button" class="btn btn-danger"><i
                                                                                class="fa fa-trash"></i> Sim,
                                                                            apague!</button>
                                                                    </div>
                                                                </div>
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
import api from '../../../../services/api/client/pratos.js'
import { jwtDecode } from "jwt-decode";

export default {
    name: 'CadPratoView',

    data() {
        return {
            token: localStorage.getItem('token'),
            id_cozinha: "",
            id_restaurante: "",
            tipo_prato: "",
            valor: "",
            titulo: "",
            descricao: "",
            opcoes: [{ titulo: "", tipo: "", valor: "0,00" }],
            images: [],
            textoBotao: "Gravar",
            autenticando: false,
            listcozinhas: [],
            listPratos: [],
            imageSrc: null,
            maxImages: 10,
            valorPrato: "0,00",
            msgSuccess: false,
            msgError: false,

            successoCozinha: false,
            tabCozinha: false,
            tabPrato: true,
            cozinha: '',
            taxa: ''

        }
    },
    components: {
        Sidebar,
        NavBar,
        Footer,
    },

    computed: {
        taxaOndish() {
            const valor = parseFloat(this.valor.replace(/[^0-9,-]+/g, "").replace(",", "."));
            if (isNaN(valor)) {
                return "0,00";
            }
            const taxa = (valor * 0.12).toFixed(2).toString();
            this.taxa = taxa;
            return taxa.replace(".", ",");
        }
    },

    mounted() {
        const decoded = jwtDecode(this.token);
        this.id_restaurante = decoded.restaurante.id_restaurante;

        this.fecharCozinha();
        this.fetchListCozinhas();
        this.fetchListPratos();
    },

    methods: {
        aplicaMascaraMoeda() {
            let valor = this.valor.replace(/\D/g, '');
            if (valor === '') {
                this.valor = '0,00';
                return;
            }
            valor = (parseFloat(valor) / 100).toFixed(2);
            this.valor = valor.replace(".", ",").replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
        },
        prepararDadosParaEnvio() {
            const valorPratoNumerico = parseFloat(this.valor.replace(/\./g, '').replace(',', '.')).toFixed(2);
            return valorPratoNumerico;
        },

        adicionarCozinhaTab() {
            this.tabCozinha = true
            this.tabPrato = false
        },

        fecharCozinha() {
            this.tabCozinha = false
            this.tabPrato = true
        },

        handleCadastrarCozinha() {
            let cozinha = this.cozinha;
            let id_restaurante = this.id_restaurante;

            api.cozinha(cozinha, id_restaurante).then(res => {
                if (res.status == 201) {
                    this.textoBotao = 'Aguarde...'
                    this.autenticando = true;
                    this.successoCozinha = true;
                    this.cozinha = '';

                    this.fetchListCozinhas();

                    setTimeout(() => {
                        this.textoBotao = 'Sucesso!'
                        this.autenticando = false;
                        this.successoCozinha = false;
                        this.tabPrato = true
                        this.tabCozinha = false
                    }, 2000)


                }

            }).catch(err => { })
        },

        fetchListCozinhas() {
            let id_restaurante = this.id_restaurante;
            api.minhasCozinhas(id_restaurante).then(res => {
                this.listcozinhas = res.data

            }).catch(error => {
                console.log(error)
            })
        },

        async fetchListPratos() {
            let id_restaurante = this.id_restaurante;
            try {
                const res = await api.meusPratos(id_restaurante);
                if (res && res.data) {
                    // Verifica se res.data é um array e, se não for, converte para array
                    const pratos = Array.isArray(res.data) ? res.data : [res.data];
                    // Filtra pratos válidos
                    this.listPratos = pratos.filter(prato => prato && prato.id_pratos);
                    console.log('Meus pratos aqui =====>', this.listPratos);
                }
            } catch (error) {
                console.log('Erro ao buscar pratos:', error);
            }
        },

        async alterarPratoDoDia(id_pratos, isChecked) {
            try {
                const pratoDoDia = isChecked ? 1 : 2;
                const res = await api.pratoDia(id_pratos, pratoDoDia);

                if (res.status === 200) {

                    const pratoIndex = this.listPratos.findIndex(prato => prato.id_pratos === id_pratos);
                    if (pratoIndex !== -1) {
                        this.listPratos[pratoIndex].prato_do_dia = pratoDoDia;
                    }

                    this.fetchListPratos();
                }
            } catch (error) {
                console.error('Erro ao atualizar prato do dia:', error);
            }
        },

        adicionarOpcoes() {
            this.opcoes.push({ titulo: "", tipo: "" });
        },
        removerOpcoes(index) {
            this.opcoes.splice(index, 1);
        },
        removerImagem(index) {
            this.images.splice(index, 1);
        },

        previewImage(event) {
            const files = event.target.files;
            if (files && files[0]) {
                const file = files[0];

                const reader = new FileReader();
                reader.onload = (e) => {
                    this.images.push({
                        src: e.target.result,
                        file: file,
                        progress: 0,
                    });
                };
                reader.readAsDataURL(file);
            }
        },

        simulateUpload(imageIndex) {
            let progress = 0;
            const interval = setInterval(() => {
                progress += 10;
                if (progress <= 100) {
                    this.$set(this.images[imageIndex], "progress", progress);
                } else {
                    clearInterval(interval);
                }
            }, 100);
        },

        cadastrarPratos() {
            this.autenticando = true;
            this.textoBotao = "Aguarde, upload em andamento...";

            const formData = new FormData();

            formData.append("id_restaurante", this.id_restaurante);
            formData.append("id_cozinha", this.id_cozinha);
            formData.append("tipo_prato", this.tipo_prato);
            formData.append('valor', this.valor);
            formData.append('taxa_ondish', this.taxa);
            formData.append("titulo", this.titulo);
            formData.append("descricao", this.descricao);

            formData.append("opcoes", JSON.stringify(this.opcoes));

            this.images.forEach((image, index) => {
                if (image && image.file) {
                    formData.append(`foto`, image.file);
                }
            });

            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }

            api.pratos(formData)
                .then((res) => {

                    if (res.status === 201) {
                        this.autenticando = false;
                        this.textoBotao = "Sucesso... ";

                        this.id_cozinha = "";
                        this.tipo_prato = "";
                        this.valor = "";
                        this.titulo = "";
                        this.opcoes = [{ titulo: "", tipo: "", valorAdicional: "0,00" }];

                        this.msgSuccess = true;
                        setTimeout(() => {
                            this.msgSuccess = false;
                            window.location.reload();
                        }, 2000);
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        },

       async handleDelete(id) {

            let id_prato = id

            try {
                const res = await api.deletePrato(id_prato);
                if (res.status === 200) {

                    setTimeout(() => {
                        window.location.reload();

                    }, 2000);

                }

            } catch (error) {
                console.log('Erro ao buscar pratos:', error);
            }

        }
    }

}
</script>