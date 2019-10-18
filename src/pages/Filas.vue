<template>
<div class="content">

    <div class="md-layout">
       
    </div>


    <!-- <div class="md-layout">
       <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <chart-card
          :chart-data="emailsSubscriptionChart.data"
          :chart-options="emailsSubscriptionChart.options"
          :chart-responsive-options="emailsSubscriptionChart.responsiveOptions"
          :chart-type="'Bar'"
          data-background-color="green"
        >
          <template slot="content">
            <div class="row"> 
            <h4 class="title">Ligações por fila  
            </h4>
            </div>
 
          </template> 
          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              Atualizado em tempo real
            </div>
          </template>
        </chart-card>
      </div>
      
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <chart-card
          :chart-data="dataCompletedTasksChart.data"
          :chart-options="dataCompletedTasksChart.options"
          :chart-type="'Line'"
          data-background-color="green"
        >
          <template slot="content">
            <h4 class="title">Monitoria de ligações</h4>
             
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              Atualizado em tempo real
            </div>
          </template>
        </chart-card>
      </div> 
    </div> -->
 
  <modal name=" ">
  </modal>

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
                                <!-- <td class=""> -->
                                    <div style="border-bottom: solid 1px #DDDDDD;" > 
                                        <center>
                                          <router-link to="filas/detalhamento" >
                                            <md-button class="md-primary md-just-icon"><md-icon >search</md-icon></md-button>
                                          </router-link>
                                            <md-button class="md-primary md-just-icon"><md-icon >edit</md-icon></md-button>
                                            <md-button class="md-danger md-just-icon"><md-icon >delete</md-icon></md-button>
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
            {id: 1, nome : 'Fila Desenvolvimento', estrategia: 'Atendimento Automático', agentes_online:  '<i class="material-icons">group</i> 3 ativos', agentes_offline:  '<span class="valign"><i class="material-icons">group</i> 1 deslogado(s)</span> ', status: 'Ativa', ações: '<i :click="exibeModal" class="material-icons">zoom_in</i><i class="material-icons">edit</i><i class="material-icons">delete_forever</i>' },
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
        label: "Id",
        field: "id",
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
        label: "Ramais Cadastrados",
        field: "ramais",
        numeric: false,
        html: false
      },
      {
        label: "On/Off",
        field: "on",
        numeric: false,
        html: true
      },
      {   
        label: "Status",
        field: "status",
        numeric: false,
        html: false
      },
    //   {
    //     label: "Ações",
    //     field: "acoes",
    //     numeric: false,
    //     html: false
    //   }
    ],
    tableRows1: [
       {
          id: 1,
          nome: "Fila Desenvolvimento",
          ramais: "13 Ramais",
          on: '<span style="color: green; font-size: 15px; font-weight: bold;">5</span> / <span style="color: red; font-size: 15px; font-weight: bold;">1</span>',
          status: "Online" 
        },
        {
          id: 2,
          nome: "Fila Suporte",
          ramais: "5 Ramais",
          on: '<span style="color: green; font-size: 15px; font-weight: bold;">13</span> / <span style="color: red; font-size: 15px; font-weight: bold;">2</span>',
          status: "Online" 
        },
        {
          id: 3,
          nome: "Fila Diretoria",
          ramais: "13 Ramais",
          on: '<span style="color: green; font-size: 15px; font-weight: bold;">6</span> / <span style="color: red; font-size: 15px; font-weight: bold;">0</span>',
          status: "Online" 
        },
        {
          id: 4,
          nome: "Fila Atendimento",
          ramais: "13 Ramais",
          on: '<span style="color: green; font-size: 15px; font-weight: bold;">7</span> / <span style="color: red; font-size: 15px; font-weight: bold;">9</span>',
          status: "Online" 
        },
        {
          id: 5,
          nome: "Fila comercial",
          ramais: "13 Ramais",
          on: '<span style="color: green; font-size: 15px; font-weight: bold;">8</span> / <span style="color: red; font-size: 15px; font-weight: bold;">4</span>',
          status: "Online" 
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