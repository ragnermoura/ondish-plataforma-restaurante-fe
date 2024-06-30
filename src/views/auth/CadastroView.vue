<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center align-items-center p-5">


                <div v-if="dadosTab" class="">
                    <div v-if="mostrarSkeleton" class="mb-5 skeleton-logo"></div>
                    <img v-if="!mostrarSkeleton" src="../../../assets/images/logo_oficial.svg" width="300" class="mb-2"
                        alt="" />
                    <div v-if="mostrarSkeleton" class="skeleton-title"></div>
                    <h1 v-if="!mostrarSkeleton" class="title-login mt-5">Vamos lá...</h1>

                    <div v-if="mostrarSkeleton" class="skeleton-title-subtitle"></div>
                    <p v-if="!mostrarSkeleton">Agora preencha esses dados para entrar na sua plataforma.</p>

                    <p v-if="campoNullError" class="text-warning mt-2">
                        <i class="fa fa-circle-exclamation"></i> Não deixe campor vazios.
                    </p>

                    <div v-if="emailValid" class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong><i class="fa fa-bell"></i> Atenção!</strong> Já temos esse E-mail cadastrado.
                    </div>

                    <div v-if="erro" class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong><i class="fa fa-ban"></i> Desculpe!</strong> Houve um problema ao cadastrar, tente
                        novamente!
                    </div>

                    <div class="area-dados px-2">

                        <div class="capa-upload">
                            <input required type="file" @change="onFileChange" ref="fileInput" />
                            <div class="normal" v-if="!imageUrl"></div>
                            <div class="preview" v-if="imageUrl" :style="{ backgroundImage: `url(${imageUrl})` }"></div>
                            <button class="btn_foto_auth" @click="triggerFileInput">
                                <i class="fa fa-camera"></i> <small>Envia uma foto sua</small>
                            </button>
                        </div>


                        <div class="row">
                            <div class="col-6">
                                <div class="mb-3">
                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label"><i
                                            class="fa fa-user"></i> Seu nome
                                    </label>
                                    <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                        v-model="nome" placeholder="Digite seu nome" />
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="mb-3">
                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label"><i
                                            class="fa fa-user"></i> Apelido
                                    </label>
                                    <input type="text" required v-if="!mostrarSkeleton" class="form-control"
                                        v-model="apelido" placeholder="Digite seu sobrenome" />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="mb-3">
                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label"><i
                                            class="fa fa-envelope"></i> E-mail
                                    </label>

                                    <input type="email" required v-if="!mostrarSkeleton" class="form-control"
                                        v-model="email" placeholder="Digite um e-mail válido" />

                                    <p v-if="emailValid" class="text-danger mt-2">
                                        <i class="fa fa-circle-exclamation"></i>
                                        Por favor, forneça um e-mail válido.
                                    </p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="mb-3">
                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label"><i
                                            class="fa fa-lock"></i> Crie uma
                                        palavra-passe
                                    </label>
                                    <div class="input-group">
                                        <input type="password" required v-if="!mostrarSkeleton" class="form-control"
                                            v-model="senha" :class="{ 'is-invalid': !senhaValida && senha.length > 0 }"
                                            @input="validarSenha" placeholder="Digite sua palavra-passe" />
                                    </div>

                                    <p class="text-warning mt-2" v-if="!senhaValida && senha.length > 0">
                                        <small>
                                            <i class="fa fa-bell"></i> Sua palavra-passe deve ter no mínimo 8
                                            caracteres, número
                                            e uma letra MAIÚSCULA.
                                        </small>
                                    </p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="mb-3">
                                    <div v-if="mostrarSkeleton" class="skeleton-label"></div>
                                    <div v-if="mostrarSkeleton" class="skeleton-input"></div>
                                    <label v-if="!mostrarSkeleton" for="exampleInputEmail1" class="form-label"><i
                                            class="fa fa-lock"></i> Confirme
                                        a palavra-passe
                                    </label>
                                    <input type="password" required v-if="!mostrarSkeleton" class="form-control"
                                        v-model="confimSenha" placeholder="Digite a senha novamente" />

                                    <p class="text-danger mt-2" v-if="confimSenha && !passwordsMatch">
                                        <i class="fa fa-ban"></i> Palavra-passe não conferem!
                                    </p>
                                    <p class="text-success mt-2" v-if="confimSenha && passwordsMatch">
                                        <i class="fa fa-check"></i> Palavra-passe conferem
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div v-if="mostrarSkeleton" class="skeleton-button mt-5"></div>
                    <button v-if="!mostrarSkeleton" :disabled="autenticando" @click="handleValidar()" type="submit"
                        :class="['btn', 'bot', 'mt-4', buttonClass]">
                        {{ textoBotao }}
                        <span v-if="autenticando" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                        <span v-if="autenticando" class="visually-hidden">Aguarde...</span>
                    </button>

                    <button @click="handleVoltar()" type="button" v-if="!mostrarSkeleton"
                        class="btn btn-outline-dark bot mt-4">
                        Voltar
                    </button>
                </div>

                <div v-if="planTab" class="mt-3">
                    <section class="price_plan_area section_padding_130_80" id="pricing"
                        style="margin-bottom: -80px !important;">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-12 col-sm-8 col-lg-12">
                                    <!-- Section Heading-->

                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <!-- Single Price Plan Area-->
                                <div class="section-heading text-center wow fadeInUp" data-wow-delay="0.2s"
                                    style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                                    <h3>Parabens! 🎉</h3>
                                    <p>Acabamos de liberar um super desconto a todos os pacotes da nossa plataforma</p>
                                    <div class="line"></div>
                                </div>
                                <!-- Single Price Plan Area-->
                                <div class="col-12 col-sm-12 col-md-6 col-lg-8">
                                    <div class="single_price_plan active wow fadeInUp" data-wow-delay="0.2s"
                                        style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                                        <!-- Side Shape-->
                                        <div class="side-shape"><img src="https://bootdey.com/img/popular-pricing.png"
                                                alt=""></div>
                                        <div class="title"><span>Popular</span>
                                            <h3>Smart Business Foods</h3>
                                            <p>Para gestão de <strong>TODOS</strong> os Restaurantes</p>
                                            <div class="line"></div>
                                        </div>
                                        <div class="price">
                                            <h3 class="text-secondary"><del>€ 9,99</del></h3>
                                            <h4>€ 0,00</h4>
                                        </div>
                                        <div class="description">
                                            <p><i class="lni lni-checkmark-circle"></i>Gestao de Mesas</p>
                                            <p><i class="lni lni-checkmark-circle"></i>Reservas pelo App</p>
                                            <p><i class="lni lni-checkmark-circle"></i>Controlo de Empregados</p>
                                            <p><i class="lni lni-checkmark-circle"></i>Gestão de Atendimentos</p>
                                            <p><i class="lni lni-checkmark-circle"></i>Cardápio Digital</p>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button class="btn btn-danger" @click="handleAuth()"
                                                type="button">Iniciar</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>


            </div>

            <div class="col-lg-6 p-0 d-none d-lg-block">
                <div v-if="mostrarSkeleton" class="skeleton-imagem"></div>
                <img v-if="!mostrarSkeleton" src="../../../assets/images/bg_login.svg" class="bg-login" alt="">

            </div>
        </div>

    </div>
</template>
<script>
import _ from 'lodash';
import api from '../../../services/api/auth/index';

export default {
    name: 'CadastroView',
    data() {
        return {
            loading: false,
            dadosTab: true,
            planTab: false,
            mostrarSkeleton: false,

            msgSuccessSenha: false,
            msgErrorSenha: false,
            campoNullError: false,

            msgSuccess: true,
            senhaValid: false,
            emailValid: false,

            nome: '',
            apelido: '',
            email: '',
            senha: '',
            confimSenha: '',

            id_user: '',
           
            textoBotao: "Salvar",
            autenticando: false,

            validationTab: false,
            erro: false,
            iconLoading: false,

            senhaValida: true,

            imageUrl: null,
            avatar: null,

        }
    },

    computed: {
        passwordsMatch() {
            return this.senha === this.confimSenha;
        },
        buttonClass() {
            return this.success ? 'btn-success' : 'btn-dark';
        }
    },

    methods: {

        handleVoltar() {
            window.location.href = '/';
        },

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
            let apelido = this.apelido;
            let email = this.email;
            let senha = this.senha;
            let avatar = this.avatar;

            if (nome !== '' && apelido !== '' && email !== '' && senha !== '' && avatar !== null) {
                try {
                    const formData = new FormData();
                    formData.append('nome', nome);
                    formData.append('sobrenome', apelido);
                    formData.append('email', email);
                    formData.append('senha', senha);
                    formData.append('avatar', avatar);

                    const res = await api.cadastro(formData);
                    if (res.status === 202) {
                        this.success = true;
                        this.textoBotao = 'Sucesso redirecionando...';

                        setTimeout(() => {
                            this.autenticando = false;
                            this.success = false;
                            this.dadosTab = false;
                            this.planTab = true;
                        }, 4000);

                    } else if (res.status === 409) {
                        this.autenticando = false;
                        this.textoBotao = 'Tentar novamente...';
                        this.emailValid = true;

                        setTimeout(() => {
                            this.emailValid = false;
                        }, 4000);
                    } else if (res.status === 500) {
                        this.autenticando = false;
                        this.textoBotao = 'Tentar novamente...';
                        this.erro = true;

                        setTimeout(() => {
                            this.erro = false;
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
        },

        validarSenha() {
            const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{6,}$/;
            this.senhaValida = regex.test(this.senha);
        },


        handleAuth() {

            let email = this.email;
            let senha = this.senha;

            api.login(email, senha).then((res) => {
                if (res.status === 200) {
                    const token = res.data.token;
                    localStorage.setItem('token', token);
                    window.location.href = "/inicial";
                }
            });

        },


    }

}


</script>
