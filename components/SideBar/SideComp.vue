<template>
    <nav id="sidebar" class="sidebar js-sidebar" :class="{ 'collapsed': isCollapsed }">
        <div class="sidebar-content js-simplebar">
            <a class="sidebar-brand" href="">
                <span class="align-middle">
                    <img src="../../assets/images/logo_min.svg" class="logomin" alt="" srcset="">

                </span>
            </a>

            <hr>

            <ul v-if="viewAdmin" class="sidebar-nav" style="margin-top: -20px !important;">
                <li class="sidebar-header">
                    Administrador
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/dashboard-admin">
                        <i class="align-middle" data-feather="sliders"></i> <span class="align-middle">Dashboard <span
                                class="badge text-bg-warning">Zonu</span></span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/usuarios">
                        <i class="align-middle" data-feather="user-plus"></i> <span class="align-middle">Usuários <span
                                class="badge text-bg-info">0</span>
                        </span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a class="sidebar-link" href="/clientes">
                        <i class="align-middle" data-feather="user-check"></i> <span class="align-middle">Clientes <span
                                class="badge text-bg-primary">0</span>
                        </span>
                    </a>
                </li>
                <li class="sidebar-header">
                    Configurações iniciais
                </li>
                <li class="sidebar-item">
                    <a class="sidebar-link" href="/proximidades">
                        <i class="align-middle" data-feather="check-square"></i> <span class="align-middle">Proximidades
                            <span class="badge text-bg-success">0</span></span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a class="sidebar-link" href="/caracteristica">
                        <i class="align-middle" data-feather="check-square"></i> <span
                            class="align-middle">Caracteristica <span class="badge text-bg-success">0</span></span>
                    </a>
                </li>
                <li class="sidebar-header">
                    Pedidos de suporte
                </li>
                <li class="sidebar-item">
                    <a class="sidebar-link" href="/list-ticket">
                        <i class="align-middle" data-feather="tag"></i> <span class="align-middle">Tickets <span
                                class="badge text-bg-danger">{{ totalTickets }}</span></span>
                    </a>
                </li>



                <li class="sidebar-item">
                    <a class="sidebar-link" href="/termos">
                        <i class="align-middle" data-feather="file"></i> <span class="align-middle">Termos & Condições
                        </span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/privacidade">
                        <i class="align-middle" data-feather="file"></i> <span class="align-middle">Privacidade </span>
                    </a>
                </li>


                <li class="sidebar-header">
                    Visão cliente
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/dashboard">
                        <i class="align-middle" data-feather="sliders"></i> <span class="align-middle">Dashboard
                            Cliente</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/novo-condominio">
                        <i class="align-middle" data-feather="plus"></i> <span class="align-middle">Novo
                            condomínio</span>
                    </a>
                </li>
            </ul>

            <ul v-if="viewClient" class="sidebar-nav" style="margin-top: -20px !important;">

                <li class="sidebar-header">
                    Gestão
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/my-dashboard">
                        <i class="align-middle" data-feather="home"></i> <span class="align-middle">Dashboard</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a class="sidebar-link" href="/my-restaurant">
                        <i class="align-middle" data-feather="bar-chart-2"></i> <span class="align-middle">Meu Restaurante</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/pedidos">
                        <i class="align-middle" data-feather="file-text"></i> <span class="align-middle">Pedidos</span>
                    </a>
                </li>


                <li class="sidebar-item">
                    <a class="sidebar-link" href="/cardapio">
                        <i class="align-middle" data-feather="layers"></i> <span class="align-middle">Cardápio</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/area-prato">
                        <i class="align-middle" data-feather="circle"></i> <span class="align-middle">Pratos</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/area-bebida">
                        <i class="align-middle" data-feather="plus-circle"></i> <span
                            class="align-middle">Bebidas</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/novo-condominio">
                        <i class="align-middle" data-feather="coffee"></i> <span class="align-middle">Sobremesa</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a class="sidebar-link" href="/nova-mesa">
                        <i class="align-middle" data-feather="grid"></i> <span class="align-middle">Mesas</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a class="sidebar-link" href="/novo-funcionario">
                        <i class="align-middle" data-feather="users"></i> <span
                            class="align-middle">Colaboradores</span>
                    </a>
                </li>

                <li class="sidebar-header">
                    Financeiro
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/novo-ticket">
                        <i class="align-middle" data-feather="plus"></i> <span class="align-middle">Entradas <span
                                class="badge text-bg-danger">0</span></span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/novo-ticket">
                        <i class="align-middle" data-feather="minus"></i> <span class="align-middle">Saídas <span
                                class="badge text-bg-danger">0</span></span>
                    </a>
                </li>

                <li class="sidebar-header">
                    Suporte
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/novo-ticket">
                        <i class="align-middle" data-feather="tag"></i> <span class="align-middle">Tickets <span
                                class="badge text-bg-danger">0</span></span>
                    </a>
                </li>

            </ul>


        </div>
    </nav>
</template>

<script>
export default {
    name: 'SideBar',

    data() {
        return {

            isDropdownVisible: false,
            isCollapsed: this.defaultCollapsed,
            viewClient: true,
            viewAdmin: false,
        }
    },

    created() {
        if (this.$route.path === '/novo-prato') {
            this.isCollapsed = true;
        }
    },

    methods: {
        toggleDropdown() {
            this.isDropdownVisible = !this.isDropdownVisible;
        },
    },
    mounted() {
        // Inicializa os Feather Icons
        this.$nextTick(() => {
            feather.replace();
        });
    },




}
</script>