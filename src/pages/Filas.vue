<template>
<div class="content"> 
  
     <div class="row">
        <div> 
          <div class="md-layout-item md-medium-size-200 md-xsmall-size-100 md-size-100">
            <md-card>
                <md-card-header data-background-color="orange">
                    <h4 class="title">Filas Cadastradas</h4>
                    <p class="category"></p>
                </md-card-header>
              <md-card-content>
                    <div class="md-layout-item md-size-100">
                            <md-list class=" md-card">
                                <md-list-item md-expand  >
                                <md-icon>filter_list</md-icon>
                                <span class="row md-list-item-text">Filtros</span>

                                <md-list style="border-color: transparent !important;" slot="md-expand">
                                    <div class="md-layout">
                                        <div class="md-layout-item md-size-33">                   
                                            <md-field>
                                            <label for="movies">Filas</label>
                                            <md-select  name="filas" id="filas" md-dense multiple>
                                                <md-option value="fight-club">Desenvolvimento</md-option>
                                                <md-option value="godfather">Suporte</md-option>
                                                <md-option value="godfather-ii">Diretoria</md-option>
                                                <md-option value="godfather-iii">Atendimento</md-option>                                
                                            </md-select>
                                            </md-field>
                                        </div>  

                                        <div class="md-layout-item md-size-33">                   
                                            <md-field>
                                            <label for="movies">Ramais</label>
                                            <md-select  name="filas" id="filas" md-dense multiple>
                                                <md-option value="fight-club">8080</md-option>
                                                <md-option value="godfather">7080</md-option>
                                                <md-option value="godfather-ii">7089</md-option>
                                                <md-option value="godfather-iii">7087</md-option>                                
                                            </md-select>
                                            </md-field>
                                        </div>

                                        <div class="md-layout-item md-size-33">                   
                                            <md-field>
                                            <label for="movies">Status</label>
                                            <md-select  name="filas" id="filas" md-dense multiple>
                                                <md-option value="godfather">Ativa</md-option>
                                                <md-option value="fight-club">Pausada</md-option>
                                                <md-option value="godfather-ii">Desativada</md-option>                                
                                            </md-select>
                                            </md-field>
                                        </div>  

                                        <div class="md-layout-item md-size-33">    
                                            <md-button class="md-success"><md-icon>search</md-icon> Pesquisar</md-button>
                                            <md-button class="md-warning"><md-icon>clear_all</md-icon>Limpar</md-button>
                                        </div> 
                                    </div>

                                </md-list>
                                </md-list-item>
                    
                            </md-list> 
                    </div>
                     <!-- <ordered-table v-bind:dados="filas" table-header-color="orange"></ordered-table> -->
                     <datatable
                        :columns="tableColumns1"
                        :rows="tableRows1"
                        locale="br" 
                        >  
                            <th class="sorting" slot="thead-tr">
                                Ações
                            </th>
                            <template slot="tbody-tr" scope="props" style=""> 
                                    <div style="border-bottom: solid 1px #DDDDDD;" > 
                                        <center>
                                          <router-link to="filas/dash" >
                                            <md-button class="md-success md-just-icon"><md-icon >dashboard</md-icon></md-button>
                                          </router-link>
                                          <router-link to="filas/detalhamento" >
                                            <md-button class="md-primary md-just-icon"><md-icon >search</md-icon></md-button>
                                          </router-link>
                                            <!-- <md-button class="md-primary md-just-icon"><md-icon >edit</md-icon></md-button>
                                            <md-button class="md-danger md-just-icon"><md-icon >delete</md-icon></md-button> -->
                                        </center>
                                    </div> 
                            </template> 
                    </datatable>

                    
                   
              </md-card-content>
            </md-card>
          </div>
        </div>
      </div>

      <div class="row">
        <div> 
          <div class="md-layout-item md-medium-size-200 md-xsmall-size-100 md-size-100">
            <md-card>
                <md-card-header data-background-color="orange">
                    <h4 class="title">Status Ramais</h4>
                    <p class="category"></p>
                </md-card-header>
              <md-card-content>
                    <md-list class=" md-card"  >
                    <md-list-item md-expand  >
                        <md-icon>filter_list</md-icon>
                        <span class="row md-list-item-text">Filtros</span>

                        <md-list style="border-color: transparent !important;" slot="md-expand">
                            <div class="md-layout">
                                <div class="md-layout-item md-size-33">                   
                                    <md-field>
                                    <label for="movies">Filas</label>
                                    <md-select  name="filas" id="filas" md-dense multiple>
                                        <md-option value="fight-club">Desenvolvimento</md-option>
                                        <md-option value="godfather">Suporte</md-option>
                                        <md-option value="godfather-ii">Diretoria</md-option>
                                        <md-option value="godfather-iii">Atendimento</md-option>                                
                                    </md-select>
                                    </md-field>
                                </div>  

                                <div class="md-layout-item md-size-33">                   
                                    <md-field>
                                    <label for="movies">Ramais</label>
                                    <md-select  name="filas" id="filas" md-dense multiple>
                                        <md-option value="fight-club">8012 - Felipe Jonathan</md-option>
                                        <md-option value="godfather">8016 - Roberto Silva</md-option>
                                        <md-option value="godfather-ii">8039 - Amanda Silva</md-option>
                                        <md-option value="godfather-iii">8000 - Janduy Euclides</md-option>                                
                                        <md-option value="godfather-iii">8000 - Janduy Euclides</md-option>                                
                                    </md-select>
                                    </md-field>
                                </div>

                                <div class="md-layout-item md-size-33">                   
                                    <md-field>
                                    <label for="movies">Status</label>
                                    <md-select  name="filas" id="filas" md-dense multiple>
                                        <md-option value="godfather">Disponível</md-option>
                                        <md-option value="fight-club">Deslogado</md-option>
                                        <md-option value="godfather-ii">Em Atendimento</md-option>                                
                                        <md-option value="godfather-ii">Pausado</md-option>                                
                                    </md-select>
                                    </md-field>
                                </div>  

                                <div  class="md-layout-item md-size-25"> 
                                    <md-datepicker  >
                                        <label>Período Início</label>
                                    </md-datepicker> 
                                </div>

                                <div  class="md-layout-item md-size-25"> 
                                    <md-datepicker  >
                                        <label>Período Fim</label>
                                    </md-datepicker> 
                                </div>

                                <div  class="md-layout-item md-size-25">  
                                    <md-field >
                                        <label>Duração Mínima</label>
                                        <md-input value="01:00"></md-input>
                                    </md-field>
                                </div>

                                <div  class="md-layout-item md-size-25">  
                                    <md-field >
                                        <label>Duração Máxima</label>
                                        <md-input value="05:00"></md-input>
                                    </md-field> 
                                </div>
  
                                <div class="md-layout-item md-size-100">    
                                    <md-button class="md-success"><md-icon>search</md-icon> Pesquisar</md-button>
                                    <md-button class="md-warning"><md-icon>clear_all</md-icon>Limpar</md-button>
                                </div> 
                            </div>

                        </md-list>
                    </md-list-item>
                    </md-list>
                   <datatable
                        :columns="tableColumns2"
                        :rows="tableRows2"
                        locale="br" 
                        >  
                            <th class="sorting" slot="thead-tr">
                                Ações
                            </th>
                            <template slot="tbody-tr" scope="props" style="">
                                <!-- <td class=""> -->
                                    <div style="border-bottom: solid 1px #DDDDDD;" > 
                                        <center> 
                                            <md-button class="md-warning md-just-icon"><i class="material-icons">exit_to_app</i></md-button>
                                            <md-tooltip md-direction="up">Deslogar da Fila</md-tooltip> 
                                        </center>
                                    </div>
                                <!-- </td> -->
                            </template>
                            

                    </datatable>
              </md-card-content>
            </md-card>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable
} from "@/components";

import MultipleSelect from '@/components/Default/MultipleSelect.vue'

import DataTable from "vue-materialize-datatable";

export default {
  components: { 
    ChartCard, 
    OrderedTable,
    MultipleSelect,
    "datatable": DataTable 

  }, 
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },data(){
    return{
        filas: [         
            {id: 1, nome : 'Fila Desenvolvimento', estrategia: 'Atendimento Automático', agentes_online:  '<i class="material-icons">group</i> 3 ativos', agentes_offline:  '<span class="valign"><i class="material-icons">group</i> 1 deslogado(s)</span> ', status: 'Ativa', dash: '<i :click="exibeModal" class="material-icons">zoom_in</i><i class="material-icons">edit</i><i class="material-icons">delete_forever</i>' },
            {id: 2, nome : 'Fila Comercial', estrategia: 'Atendimento Automático', agentes_online:  '<i class="material-icons">group</i> 3 ativos', agentes_offline:  '<i class="material-icons">group</i> 1 deslogado(s) ', status: 'Pausada', ações: '<i class="material-icons">zoom_in</i><i class="material-icons">edit</i><i class="material-icons">delete_forever</i>' },
            {id: 3, nome : 'Fila Recepção', estrategia: 'Fila de Prioridade', agentes_online:  '<i class="material-icons">group</i> 3 ativos', agentes_offline:  '<i class="material-icons">group</i> 1 deslogado(s) ', status:  'Ativa', ações: '<i class="material-icons">zoom_in</i><i class="material-icons">edit</i><i class="material-icons">delete_forever</i>' },
            {id: 4, nome : 'Fila Diretoria', estrategia: 'Atendimento Automático', agentes_online:  '<i class="material-icons">group</i> 3 ativos', agentes_offline:  '<i class="material-icons">group</i> 1 deslogado(s) ', status:  'Inativa', ações: '<i class="material-icons">zoom_in</i><i class="material-icons">edit</i><i class="material-icons">delete_forever</i>' },
            {id: 5, nome : 'Fila Suporte', estrategia: 'Revezamento',   agentes_online:  '<i class="material-icons">group</i> 3 ativos', agentes_offline:  '<i class="material-icons">group</i> 1 deslogado(s) ', status:  'Ativa', ações: '<i class="material-icons">zoom_in</i><i class="material-icons">edit</i><i class="material-icons">delete_forever</i>' },
        ],
        dataCompletedTasksChart: {
        data: {
          labels: ["7", "8", "9", "10", "11", "12", "13", "14"],
          series: [[5, 100, 168 ,280, 142, 6, 21 ,160]]
        },

        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 300, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
       emailsSubscriptionChart: {
        data: {
          labels: [
            "Suporte",
            "Comercial",
            "Recepção",
            "Diretoria",
            "Desenvolvimento"
          ],
          series: [[120, 302, 320, 120, 250]]
        },
        options: {
          axisX: {
            showGrid: true
          },
          low: 0,
          high: 400,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 10,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      },
    tableColumns1: [
      {
        label: "Fila",
        field: "fila",
        numeric: true,
        html: false
      },
      {
        label: "Nome",
        field: "nome",
        numeric: false,
        html: false
      },
      {
        label: "Agentes",
        field: "agentes",
        numeric: true,
        html: false
      },
      {   
        label: "Logados",
        field: "logados",
        numeric: true,
        html: true
      },  
      {
        label: "Ocupados",
        field: "ocupados",
        numeric: true,
        html: true
      },
      {
        label: "Pausados",
        field: "pausados",
        numeric: true,
        html: true
      },
      {
        label: "Total Atendidas",
        field: "atendidas",
        numeric: false,
        html: true
      },
      {
        label: "Não Atendidas",
        field: "recusadas",
        numeric: false,
        html: true
      },
      {
        label: "Abandonadas",
        field: "abandonadas",
        numeric: false,
        html: true
      },
      {
        label: "Espera Média",
        field: "media",
        numeric: false,
        html: true
      },
      {
        label: "Duração Média",
        field: "duracao",
        numeric: false,
        html: true
      }
    ],
    tableRows1: [
       {
          fila: 7011,
          nome: "Fila Desenvolvimento",
          agentes: "13 Ramais",
          logados: "<md-icon>add</md-icon> 10",
          ocupados: "2",
          pausados: "2" ,
          atendidas: "12 (90%)" ,
          recusadas: "0 (0%)" ,
          abandonadas: "0 (0%)" ,
          media: "15 seg" ,
          duracao: "04:25 " ,
        },
        {
          fila: 7012,
          nome: "Fila Suporte",
          agentes: "5 Ramais",
          logados: "10",
          ocupados: "2",
          pausados: "2" ,
          atendidas: "12 (90%)" ,
          recusadas: "0 (0%)" ,
          abandonadas: "0 (0%)" ,
          media: "15 seg" ,
          duracao: "04:25 " ,
        },
        {
          fila: 7013,
          nome: "Fila Desenvolvimento",
          agentes: "13 Ramais",
          logados: "10",
          ocupados: "2",
          pausados: "2" ,
          atendidas: "12 (90%)" ,
          recusadas: "0 (0%)" ,
          abandonadas: "0 (0%)" ,
          media: "15 seg" ,
          duracao: "04:25 " ,
        },
        {
         fila: 7014,
          nome: "Fila Desenvolvimento",
          agentes: "13 Ramais",
          logados: "10",
          ocupados: "2",
          pausados: "2" ,
          atendidas: "12 (90%)" ,
          recusadas: "0 (0%)" ,
          abandonadas: "0 (0%)" ,
          media: "15 seg" ,
          duracao: "04:25 " ,
        },
        {
          fila: 7015,
          nome: "Fila Desenvolvimento",
          agentes: "13 Ramais",
          logados: "10",
          ocupados: "2",
          pausados: "2" ,
          atendidas: "12 (90%)" ,
          recusadas: "0 (0%)" ,
          abandonadas: "0 (0%)" ,
          media: "15 seg" ,
          duracao: "04:25 " ,
        },
     
    ],
    tableColumns2: [
      {
        label: "Fila",
        field: "fila",
        numeric: false,
        html: false
      },
      {
        label: "Agente",
        field: "agente",
        numeric: false,
        html: false
      },
      {
        label: "Status",
        field: "status",
        numeric: false,
        html: false
      },
      {   
        label: "Numero",
        field: "numero",
        numeric: false,
        html: false
      },  
      {
        label: "Penalidade",
        field: "penalidade",
        numeric: false,
        html: false
      },
      {
        label: "Ultima Atendida",
        field: "ultima",
        numeric: false,
        html: false
      },
      {
        label: "Ligações Atendidas",
        field: "atendidas",
        numeric: true,
        html: true
      }, 
    ],
    tableRows2: [
       {
          fila: 'Fila Desenvolvimento',
          agente: "8012 - Felipe Jonathan",
          status: "Disponível",
          numero: "aguardando...",
          penalidade: "0",
          ultima: "(11) 93015-7808 - 11:23 18/09" ,
          atendidas: "12"
        },
        {
          fila: 'Fila Suporte',
          agente: "8016 - Roberto Silva",
          status: "Deslogado",
          numero: "aguardando",
          penalidade: "0",
          ultima: "(11) 97670-7000 - 11:29 18/09" ,
          atendidas: "25"
        },
        {
          fila: 'Fila Atendimento',
          agente: "8039 - Amanda Silva",
          status: "Em atendimento",
          numero: "(11) 94512-6987",
          penalidade: "0",
          ultima: "(11) 96547-7000 - 10:25 19/09" ,
          atendidas: "6"
        },
        {
          fila: 'Fila Diretoria',
          agente: "8000 - Janduy Euclides",
          status: "Disponível",
          numero: "(11) 98798-6987",
          penalidade: "0",
          ultima: "(11) 98475-7000 - 10:25 19/09" ,
          atendidas: "4"
        },
        {
          fila: 'Fila Atendimento',
          agente: "8039 - Amanda Silva",
          status: "Em atendimento",
          numero: "(11) 94512-6987",
          penalidade: "0",
          ultima: "(11) 96547-7000 - 10:25 19/09" ,
          atendidas: "6"
        },
     
    ],
    }
  }, mounted(){ 
 
        this.$modal.show(true, {
            text: 'This text is passed as a property'
            }, {
            draggable: true
            })
   
  
  }, methods: {
        exibeModal(){
            this.$modal.show('hello-world');
        }
  }
};
</script>

<style scoped>

.md-list .md-theme-default .md-list-item-expand .md-active{ 
    border-color: transparent !important;
    border-top: none !important;
    border-bottom: none !important;
}
.valign-wrapper{
  vertical-align: middle;
}
</style>