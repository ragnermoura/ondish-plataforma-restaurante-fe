<template>

    <div v-if="inicio" class="principal">
        <img style="position: absolute; margin-left: auto; margin-right: auto; width: 20%;  left: 50%;
  transform: translate(-50%, -50%); top: 10%;  align-items: center; justify-content: center;"
            src="../../../assets/images/logo_min.svg" alt="" srcset="">
        <div class="context">
            <h1 class="titleStart">{{ currentMessage }}</h1>

            <div class="container mt-5" v-if="showButton">
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4">
                        <div class="d-grid gap-2">
                            <button @click="handleAvancar()" class="btn btn-danger btn-start" type="button"><span
                                    style="font-weight: 700; font-size: 30px;">Vamos lá...</span> </button>
                        </div>
                    </div>
                    <div class="col-4"></div>
                </div>
            </div>

        </div>

        <div class="area">

            <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

    </div>

    <div v-if="formulario" class="principal">
        <img style="position: absolute; margin-left: auto; margin-right: auto; width: 20%;  left: 50%;
  transform: translate(-50%, -50%); top: 10%;  align-items: center; justify-content: center;"
            src="../../../assets/images/logo_min.svg" alt="" srcset="">
        <div class="context">
            <div class="container" v-if="card" style="margin-top: -200px;">
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-6">
                        <div class="card" style="z-index: 999 !important;">

                            <div class="card-body">
                                <div class="row partOne" v-if="formOne">
                                    <div class="col-12">
                                        <div class="foto-upload">
                                            <input type="file" @change="onLogoChange" ref="logoInput" />
                                            <div class="normal" v-if="!logoUrl"></div>
                                            <div class="preview" v-if="logoUrl"
                                                :style="{ backgroundImage: `url(${logoUrl})` }"></div>
                                            <button style="z-index: 999 !important;" class="btn_foto_auth"
                                                @click="triggerFileInput('logo')">
                                                <i class="fa fa-camera"></i> <small>Sua logo</small>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="mb-3">
                                            <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                            <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                            <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                class="form-label"><i class="fa fa-store" aria-hidden="true"></i>
                                                Informe o nome do seu
                                                restaurante
                                            </label>
                                            <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                                v-model="nome_restaurante"
                                                placeholder="Ex.: Restaurante la'Portuguesa" />
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="mb-3">
                                            <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                            <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                            <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                class="form-label"><i class="fa fa-address-card" aria-hidden="true"></i>
                                                NIF
                                            </label>
                                            <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                                v-model="nif" @input="aplicaMascaraNif()" placeholder="000.000.000" />
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="mb-3">
                                            <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                            <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                            <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                class="form-label"><i class="fa fa-thumb-tack" aria-hidden="true"></i>
                                                Código Postal
                                            </label>
                                            <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                                v-model="codigo_postal" @input="aplicaMascaraCodigoPostal()"
                                                placeholder="0000-000" />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                            <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                            <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                class="form-label"><i class="fa fa-map-marker" aria-hidden="true"></i>
                                                Morada da empresa
                                            </label>
                                            <input type="text" disabled required v-if="!mostrarSkeleton"
                                                class="form-control" v-model="morada" placeholder="..." />
                                        </div>
                                    </div>

                                    <div class="d-grid gap-2">
                                        <button @click="handleProximo()" :disabled="autenticando"
                                            v-if="!mostrarSkeleton" type="submit" class="btn btn-dark bot mt-4"> {{
                                                textoBotao }}
                                            <span v-if="autenticando" class="spinner-border spinner-border-sm"
                                                aria-hidden="true"></span>
                                            <span v-if="autenticando" class="visually-hidden">Aguarde...</span></button>
                                    </div>
                                </div>

                                <div class="row partTwo" v-if="formTwo">
                                    <div class="col-12">
                                        <div class="capa-upload">
                                            <input type="file" @change="onCapaChange" ref="capaInput" />
                                            <div class="normal-capa" v-if="!capaUrl"></div>
                                            <div class="preview-capa" v-if="capaUrl"
                                                :style="{ backgroundImage: `url(${capaUrl})` }"></div>
                                            <button class="btn_foto_capa" @click="triggerFileInput('capa')">
                                                <i class="fa fa-camera"></i> <small>Envie uma capa</small>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="col-6">
                                        <div class="mb-3">
                                            <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                            <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                            <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                class="form-label"><i class="fa fa-phone"></i> Telemóvel 1
                                            </label>
                                            <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                                v-model="telefone1" @input="aplicaMascaraTelefone()"
                                                placeholder="000000000" />
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="mb-3">
                                            <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                            <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                            <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                class="form-label"><i class="fa fa-phone"></i> Telemóvel 2
                                            </label>
                                            <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                                v-model="telefone2" @input="aplicaMascaraTelefone2()"
                                                placeholder="000000000" />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                            <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                            <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                class="form-label"><i class="fa fa-globe"></i> Website
                                            </label>
                                            <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                                v-model="website" placeholder="https://www.seu-site.pt" />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                            <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                            <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                class="form-label"><i class="fa fa-facebook"></i> Facebook
                                            </label>
                                            <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                                v-model="facebook"
                                                placeholder="https://www.facebook.com/seu-restaurante/" />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                            <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                            <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                class="form-label"><i class="fa fa-instagram"></i> Instagram
                                            </label>
                                            <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                                v-model="instagram"
                                                placeholder="https://www.instagram.com/seu-restaurante/" />
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="mb-3">
                                            <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                            <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                            <label v-if="!mostrarSkeleton" for="exampleInputEmail1"
                                                class="form-label"><i class="fa fa-bank"></i> IBAM
                                            </label>
                                            <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                                v-model="ibam" placeholder="IBAM do restaurate" />
                                        </div>
                                    </div>

                                    <div class="d-grid gap-2">
                                        <button @click="handleFinish()" :disabled="autenticando" v-if="!mostrarSkeleton"
                                            type="submit" class="btn btn-dark bot mt-4"> {{
                                                textoBotao }}
                                            <span v-if="autenticando" class="spinner-border spinner-border-sm"
                                                aria-hidden="true"></span>
                                            <span v-if="autenticando" class="visually-hidden">Aguarde...</span></button>

                                        <button @click="handleAnterior()" v-if="!mostrarSkeleton" type="submit"
                                            class="btn btn-outline-dark botAnterior mt-4"> Voltar
                                        </button>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-3"></div>
                </div>
            </div>



        </div>

        <div class="area">

            <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

    </div>


</template>
<script>
import _ from 'lodash';
import api from '../../../services/api/auth/index';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

export default {
    name: 'ConfigPage',

    data() {
        return {
            messages: [
                "Estamos Felizes por ter você aqui.",
                "Prepare-se para uma experiência incrível.",
                "Conecte-se e explore novas possibilidades.",
                "Gestão completa do seu Restaurante.",
                "Estamos aqui para ajudar o seu negócio."
            ],
            currentMessageIndex: 0,
            currentMessage: "",
            showButton: false,
            inicio: true,
            formulario: false,
            textoBotao: 'Avançar',
            formOne: false,
            formTwo: false,
            card: false,
            imageUrl: null,

            nome_restaurante: '',
            nif: '',
            email: '',
            facebook: '',
            instagram: '',
            telefone1: '',
            telefone2: '',
            website: '',
            morada: '',
            latitude: '',
            longitude: '',
            codigo_postal: '',

            logoUrl: null,
            capaUrl: null,
            logoFile: null,
            capaFile: null,
            id_user: '',

        };
    },
    mounted() {
        this.cycleMessages();
        let token = localStorage.getItem('token');
        let decode = jwtDecode(token);
        let idUser = decode.id_user;
        this.id_user = idUser;
    },
    methods: {
        handleAvancar() {
            this.card = true;
            this.formulario = true;
            this.formOne = true;
            this.inicio = false;
        },

        handleProximo() {
            this.card = true;
            this.formulario = true;
            this.formOne = false;
            this.formTwo = true;
            this.inicio = false;
            this.textoBotao = 'Gravar'
        },
        handleAnterior() {
            this.card = true;
            this.formulario = true;
            this.formOne = true;
            this.formTwo = false;
            this.inicio = false;
            this.textoBotao = 'Avançar'
        },
        cycleMessages() {
            this.currentMessage = this.messages[this.currentMessageIndex];
            setTimeout(() => {
                this.currentMessageIndex++;
                if (this.currentMessageIndex < this.messages.length) {
                    this.fadeOutMessage();
                } else {
                    this.showButton = true;
                }
            }, 3000); // Tempo que cada mensagem fica visível
        },
        fadeOutMessage() {
            setTimeout(() => {
                this.currentMessage = "";
                setTimeout(() => {
                    this.cycleMessages();
                }, 500); // Tempo do fade out
            }, 2500); // Tempo do fade in
        },
        triggerFileInput(type) {
            if (type === 'logo') {
                this.$refs.logoInput.click();
            } else if (type === 'capa') {
                this.$refs.capaInput.click();
            }
        },
        onLogoChange(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.logoUrl = e.target.result;
                };
                reader.readAsDataURL(file);
                this.logoFile = file; // Armazena o arquivo
            }
        },
        onCapaChange(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.capaUrl = e.target.result;
                };
                reader.readAsDataURL(file);
                this.capaFile = file; // Armazena o arquivo
            }
        },
        aplicaMascaraNif() {
            let v = this.nif;

            v = v.replace(/\D/g, "");
            if (v.length > 9) {
                v = v.substring(0, 9);
            }
            v = v.replace(/^(\d{3})(\d)/g, "$1 $2");
            v = v.replace(/^(\d{3})\s(\d{3})(\d)/g, "$1 $2 $3");

            this.nif = v;
        },
        aplicaMascaraTelefone() {
            let v = this.telefone1;

            v = v.replace(/\D/g, "");
            if (v.length > 9) {
                v = v.substring(0, 9);
            }

            v = v.replace(/^(\d{3})(\d)/g, "$1 $2");
            v = v.replace(/^(\d{3})\s(\d{3})(\d)/g, "$1 $2 $3");

            this.telefone1 = v;
        },
        aplicaMascaraTelefone2() {
            let v = this.telefone2;

            v = v.replace(/\D/g, "");
            if (v.length > 9) {
                v = v.substring(0, 9);
            }

            v = v.replace(/^(\d{3})(\d)/g, "$1 $2");
            v = v.replace(/^(\d{3})\s(\d{3})(\d)/g, "$1 $2 $3");

            this.telefone2 = v;
        },
        aplicaMascaraCodigoPostal() {
            let value = this.codigo_postal.replace(/\D/g, '');
            if (value.length > 4) {
                value = value.replace(/^(\d{4})(\d)/, '$1-$2');
            }
            this.codigo_postal = value;

            if (value.length === 8) { // Formato completo 0000-000
                this.buscarEnderecoPorCodigoPostal(value);
            }
        },
        async buscarEnderecoPorCodigoPostal(codigoPostal) {
            try {
                const username = 'ragnermoura';
                const response = await axios.get(`http://api.geonames.org/postalCodeSearchJSON?postalcode=${codigoPostal}&country=PT&username=ragnermoura`);

                if (response.data.postalCodes.length > 0) {
                    const endereco = response.data.postalCodes[0];
                    this.morada = `${endereco.placeName}, ${endereco.adminName1}, ${endereco.adminCode1}`;
                } else {
                    this.morada = "Endereço não encontrado";
                }
            } catch (error) {
                console.error('Erro ao buscar endereço:', error);
                this.morada = "Erro ao buscar endereço";
            }
        },

        async handleFinish() {
            this.autenticando = true;
            this.textoBotao = 'Guardando...';

            let nome_restaurante = this.nome_restaurante;
            let nif = this.nif;
            let codigo_postal = this.codigo_postal;
            let morada = this.morada;
            let telefone1 = this.telefone1;
            let telefone2 = this.telefone2;
            let website = this.website;
            let facebook = this.facebook;
            let instagram = this.instagram;
            let logo = this.logoFile;
            let capa = this.capaFile;
            let ibam = this.ibam;
            const id_user = this.id_user;

            if (nome_restaurante !== '' && nif !== '' && codigo_postal !== '' && morada !== '' && telefone1 !== '' && telefone2 !== '' && website !== '' && facebook !== '' && instagram !== '' && ibam !== '' && logo !== null && capa !== null) {

                try {
                    const formData = new FormData();
                    formData.append('nome_restaurante', nome_restaurante);
                    formData.append('nif', nif);
                    formData.append('codigo_postal', codigo_postal);
                    formData.append('morada', morada);
                    formData.append('telefone1', telefone1);
                    formData.append('telefone2', telefone2);
                    formData.append('website', website);
                    formData.append('facebook', facebook);
                    formData.append('instagram', instagram);
                    formData.append('ibam', ibam);
                    formData.append('logo', this.logoFile);
                    formData.append('capa', this.capaFile);
                    formData.append('id_user', id_user);

                    const res = await api.perfil(formData);
                    if (res.status === 202) {
                        this.success = true;
                        this.textoBotao = 'Sucesso redirecionando...';

                        api.configInicial(id_user);
                       
                        setTimeout(() => {
                            this.autenticando = false;
                            this.success = false;
                            this.dadosTab = false;
                            this.planTab = true;

                            window.location.href = "/";
                        }, 4000);

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
                this.campoNullError = true;

                setTimeout(() => {
                    this.campoNullError = false;
                }, 4000);
            }
        }
    }
}

</script>
<style>
@import url('../../../assets/css/config.css');
</style>