<template>
    <div class="wrapper">

        <Sidebar />
        <div class="main">
            <NavBar />
            <main class="content">
                <div class="container-fluid p-0">

                    <div v-if="mostrarSkeleton" class="skeleton-title-dashboard"></div>
                    <h1 v-if="!mostrarSkeleton" class="h3 mb-3"><strong>Gestão do Resturante</strong></h1>
                </div>

                <div class="container-fluid">
                    <div class="row">

                       
                        <ul class="nav nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                    aria-selected="true"><i class="fa fa-window-maximize" aria-hidden="true"></i>
                                    Dentro</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button s class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-profile" type="button" role="tab"
                                    aria-controls="pills-profile" aria-selected="false"><i class="fa fa-braille"
                                        aria-hidden="true"></i> &nbsp; Fora</button>
                            </li>
                            <div class="row" style="margin-left: 50%;">
                                <div class="col-4"><i class="fa fa-square fa-2x text-success" aria-hidden="true"></i>
                                    Livre</div>
                                <div class="col-4"><i class="fa fa-square fa-2x text-warning" aria-hidden="true"></i>
                                    Reservada</div>
                                <div class="col-4"><i class="fa fa-square fa-2x text-primary" aria-hidden="true"></i> Em
                                    uso</div>

                            </div>

                        </ul>

                        <div class="alert alert-warning" role="alert">
                            <strong> 🥺 Mantenha a calma...</strong> Suas mesas aparecerão aqui automaticamente.
                        </div>

                        <div class="col-md-12">
                            <img style="display: block; margin-left: auto; margin-right: auto; opacity: 0.3;"
                                src="../../../../assets/images/mesas.png" alt="">
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
    name: 'MyRestaurantView',

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
            imageSrc: null,
            maxImages: 10,
            valorPrato: "0,00",
            msgSuccess: false,
            msgError: false,

            successoCozinha: false,
            tabCozinha: false,
            tabPrato: true,
            cozinha: '',

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
            return taxa.replace(".", ",");
        }
    },

    mounted() {
        const decoded = jwtDecode(this.token);
        this.id_restaurante = decoded.restaurante.id_restaurante;

        this.fecharCozinha();
        this.fetchListCozinhas();
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
                        }, 2000);
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        },
    }

}
</script>