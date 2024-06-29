<template>
	<div class="wrapper">

		<Sidebar />
		<div class="main">
			<NavBar />
			<main class="content">
				<div class="container-fluid p-0">

					<div v-if="mostrarSkeleton" class="skeleton-title-dashboard"></div>
					<h1 v-if="!mostrarSkeleton" class="h3 mb-3"><strong>Gestão de Mesas <span
								class="badge text-bg-success text-light">{{ totalMesas }}</span></strong></h1>
				</div>
				<ul class="nav nav-pills mb-3 mt-4" id="pills-tab" role="tablist">
					<li class="nav-item" role="presentation">
						<button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
							type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i class="fa-solid fa-square">
							</i> Nova mesa</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
							type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i
								class="fa-solid fa-list"></i> &nbsp; Mesas</button>
					</li>

				</ul>
				<div class="tab-content" id="pills-tabContent">
					<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
						tabindex="0">
						<div class="container">
							<div v-if="successo" class="alert alert-success mb-4" role="alert">
								<i class="fa fa-check"></i> Mesa adicionada com sucesso!
							</div>
							<div v-if="erro" class="alert alert-danger mb-4" role="alert">
								<i class="fa fa-ban"></i> Houve um erro ao adicionar a mesa, revise os dados enviados.
							</div>
							<div class="row">
								<div class="col-2">
									<div class="mb-3">
										<label for="mesaNumero" class="form-label label-form">
											<i class="fa fa-circle"></i> Número da mesa
										</label>
										<input type="number" class="form-control" id="mesaNumero" v-model="mesaNumero">
									</div>
								</div>
								<div class="col-2">
									<div class="mb-3">
										<label for="mesaCapacidade" class="form-label label-form">
											<i class="fa fa-chair"></i> Capacidade
										</label>
										<input type="number" maxlength="8" minlength="2" class="form-control" id="mesaCapacidade"
											v-model="mesaCapacidade">
									</div>
								</div>
								<div class="col-3">
									<div class="mb-3">
										<label for="mesaCapacidade" class="form-label label-form">
											<i class="fa fa-question"></i> Onde esta mesa vai ficar?
										</label>
										<div class="form-check form-switch">
											<input class="form-check-input mt-3" type="checkbox" role="switch" id="flexSwitchCheckChecked"
												v-model="localizacao">
											<label class="form-check-label" style="margin-top: 12px;" for="flexSwitchCheckChecked">
												{{ mesaLocalText }}
											</label>
										</div>
									</div>
								</div>

								<div class="col-4">
									<div class="mb-3">
										<Mesa :capacity="mesaCapacidade" :numero="mesaNumero" />

									</div>
								</div>
							</div>
							<hr>


						</div>
						<div class="d-grid gap-2 d-md-flex justify-content-md-end mt-2">
							<button class="btn btn-success me-md-2" :disabled="autenticando" @click="handleSalvar()" type="button"><i
									class="fa fa-check"></i>
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
												<th scope="col">Numero da Mesa</th>
												<th scope="col">Capacidade</th>
												<th scope="col">Localização da mesa</th>
												<th scope="col">Ação</th>
											</tr>
										</thead>
										<tbody>
											<tr class="text-center" v-for="mesa in minhasMesas">
												<th scope="row">
													<figure class="figure">
														<img src="../../../../assets/images/iconMesa.png"
															class="thumb-prato-table figure-img img-fluid rounded" alt="...">

													</figure>
												</th>
												<td>M-{{ mesa.numero }}</td>
												<td>{{ mesa.capacidade }} Pessoas</td>
												<td v-if="mesa.localizacao === 1">
													Dentro do restautante
												</td>
												<td v-if="mesa.localizacao === 2">
													Fora do restautante
												</td>

												<td>
													<div class="row">
														<div style="display: flex; flex-direction: row; padding-left: 25%; padding-right: 30px;">
															<div class="col-4">
																<button type="button" class="btn btn-warning btn-sm"><i class="fa fa-edit"></i></button>
															</div>
															<div class="col-4">
																<button type="button" class="btn btn-info btn-sm"><i class="fa fa-eye"></i></button>
															</div>
															<div class="col-4">
																<button data-bs-toggle="modal" :data-bs-target="`#deleteModal${mesa.id_mesa}`"
																	type="button" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
															</div>

															<!-- Modal -->
															<div class="modal fade" :id="`deleteModal${mesa.id_mesa}`" tabindex="-1"
																aria-labelledby="exampleModalLabel" aria-hidden="true">
																<div class="modal-dialog">
																	<div class="modal-content">
																		<div class="modal-header">

																			<button type="button" class="btn-close" data-bs-dismiss="modal"
																				aria-label="Close"></button>
																		</div>
																		<div class="modal-body">
																			<div v-if="successoDelete" class="alert alert-success mb-4" role="alert">
																				<i class="fa fa-check"></i> Mesa
																				excluída com sucesso!
																			</div>
																			<h4 class="text-danger"><i class="fa fa-trash"></i> Queres
																				apagar esta mesa?</h4>
																		</div>
																		<div class="modal-footer">
																			<button type="button" class="btn btn-secondary"
																				data-bs-dismiss="modal">Não</button>
																			<button :disabled="autenticando" type="button" class="btn btn-danger"
																				@click="handleDelete(mesa.id_mesa)">Sim,
																				eu quero
																				changes</button>
																		</div>
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
import Mesa from "../../../../components/Mesas/MesaComp.vue";
import api from "../../../../services/api/client/mesas.js";
import { jwtDecode } from "jwt-decode";

export default {
	name: 'CadMesasView',

	data() {
		return {
			token: localStorage.getItem('token'),
			mesaNumero: '00',
			mesaCapacidade: 4,
			id_restaurante: '',
			autenticando: false,
			textoBotao: 'Gravar',
			localizacao: false,
			successo: false,
			successoDelete: false,
			erro: false,
			minhasMesas: [],
			totalMesas: 0
		}
	},
	components: {
		Sidebar,
		NavBar,
		Footer,
		Mesa,
	},
	computed: {
		mesaLocalText() {
			return this.localizacao ? 'Dentro do Restaurante' : 'Fora do Restaurante';
		}
	},
	mounted() {
		const decoded = jwtDecode(this.token);
		this.id_restaurante = decoded.restaurante.id_restaurante;

		this.fetchList();
	},
	methods: {

		getMesaLocalValue() {
			return this.localizacao ? 1 : 2;
		},

		async handleSalvar() {

			this.autenticando = true;
			this.textoBotao = 'Aguarde...';

			let numero = this.mesaNumero;
			let localizacao = this.getMesaLocalValue();
			let capacidade = this.mesaCapacidade;
			let id_restaurante = this.id_restaurante;

			try {
				const res = await api.cadastro(numero, capacidade, localizacao, id_restaurante);
				if (res.status == 202) {
					this.successo = true;
					this.textoBotao = 'Sucesso!';
					this.mesaNumero = '00';
					this.mesaCapacidade = 4;
					this.localizacao = false;
					this.fetchList();

					setTimeout(() => {
						this.autenticando = false;
						this.successo = false;
						this.textoBotao = 'Gravar';
					}, 2000);

				} if (res.status == 400) {
					this.erro = true;
					this.textoBotao = '...';
					setTimeout(() => {
						this.autenticando = false;
						this.erro = false;
						this.textoBotao = 'Tente Novamente';
					}, 2000);
				}
			} catch (error) {
				console.log(error)
			}

		},

		handleDelete(id) {
			this.autenticando = true;
			api.delete(id).then(res => {
				if (res.status == 204) {
					this.successoDelete = true;
					this.fetchList();
					setTimeout(() => {
						this.successoDelete = false;
						this.autenticando = false;
						window.location.reload();
					}, 2000);
				}

			});

			this.fetchList();
		},

		fetchList() {
			let id_restaurante = this.id_restaurante;
			api.minhasMesas(id_restaurante).then(res => {
				this.minhasMesas = res.data;
				this.totalMesas = this.minhasMesas.length;
			})

		}

	},
}

</script>