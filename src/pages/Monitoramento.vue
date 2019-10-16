<template>
 <div class="content">
  
    <div class="md-layout">
        <div class="md-layout-item md-size-30">

            <md-list class=" md-card"  >
                <md-list-item md-expand  >
                <md-icon>filter_list</md-icon>
                <span class="row md-list-item-text">Filtros</span>

                <md-list slot="md-expand">
                        
                    <div class="md-layout-item md-size-100">                   
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

                    <div class="md-layout-item md-size-100">                   
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

                    <div class="md-layout-item md-size-100">                   
                        <md-field>
                        <label for="movies">Status</label>
                        <md-select  name="filas" id="filas" md-dense multiple>
                            <md-option value="godfather">Ativo</md-option>
                            <md-option value="fight-club">Inativo</md-option>
                            <md-option value="godfather-ii">Aguardando</md-option>
                            <md-option value="godfather-iii">Discando</md-option>                                
                            <md-option value="godfather-iii">Outros</md-option>                                
                        </md-select>
                        </md-field>
                    </div>   

                </md-list>
                </md-list-item>
    
            </md-list> 
        </div>  

         <div class="md-layout-item md-size-30  md-alignment-center">
            <center>
                <span class="h3" style="vertical-align: center !important; display: inline-block;">Dados em tempo real</span> 
                <md-progress-spinner :md-diameter="30" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
            </center>
        </div> 

    </div>


    <div class="">
        <Ramais></Ramais>
    </div> 
        
    <md-card>
        <md-card-header data-background-color="orange">
            <h4 class="title">10 Últimas Ligações</h4>
            <p class="category">54 novas ligações na última hora</p>
        </md-card-header>
        <md-card-content>

            <div class="md-layout-item md-medium-size-200 md-xsmall-size-100 md-size-100">
                <datatable
                    :columns="tableColumns1"
                    :rows="tableRows1"
                    locale="br"
                ></datatable>
            </div> 
        </md-card-content>
    </md-card>
    

</div>
</template>

<script>
import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable, 

} from "@/components";

import DataTable from "vue-materialize-datatable";

import Ramais from "@/components/Default/Ramais.vue"
import RegistroLigacoes from "@/components/Default/RegistroLigacoes.vue"

export default {
  components: {
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable, 
    Ramais,
    RegistroLigacoes,
    "datatable": DataTable 

  },
  data() {
    return {
      users: [
        {
          id: 1,
          de: "7036 - José Carlos",
          para: "93015-7808",
          status: "Atendido",
          duração: "14:16"
        },
        {
          id: 2,
          de: "7080 - Luciano",
          para: "(11) 9258-8745",
          status: "Não Atendido",
          duração: "00:00"
        },
        {
          id: 3,
          de: "7068 - Janduy Euclides",
          para: "(11) 3132-7676",
          status: "Atendido",
          duração: "08:25"
        },
        {
          id: 4,
          de: "7087 - Filipe Diniz",
          para: "(11) 2356-8542",
          status: "Recusado",
          duração: "00:00"
        },
        {
          id: 5,
          de: "(19) 6569-8745",
          para: "7068 - Janduy Euclides",
          status: "Não Atendido",
          duração: "00:00"
        }
      ],
      dailySalesChart: {
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          series: [[12, 17, 7, 17, 23, 18, 38]]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]]
        },

        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
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
            "Ja",
            "Fe",
            "Ma",
            "Ap",
            "Mai",
            "Ju",
            "Jul",
            "Au",
            "Se",
            "Oc",
            "No",
            "De"
          ],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
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
              seriesBarDistance: 5,
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
        label: "id",
        field: "id",
        numeric: false,
        html: true
      },
      {
        label: "de",
        field: "de",
        numeric: false,
        html: false
      },
      {
        label: "para",
        field: "para",
        numeric: false,
        html: false
      },
      {
        label: "status",
        field: "status",
        numeric: false,
        html: false
      },
       {
        label: "duração",
        field: "duração",
        numeric: false,
        html: false
      }
    ],
    tableRows1: [
       {
          id: 1,
          de: "7036 - José Carlos",
          para: "93015-7808",
          status: "Atendido",
          duração: "14:16"
        },
        {
          id: 2,
          de: "7080 - Luciano",
          para: "(11) 9258-8745",
          status: "Não Atendido",
          duração: "00:00"
        },
        {
          id: 3,
          de: "7068 - Janduy Euclides",
          para: "(11) 3132-7676",
          status: "Atendido",
          duração: "08:25"
      },
      {
        id: 4,
        de: "7087 - Filipe Diniz",
        para: "(11) 2356-8542",
        status: "Recusado",
        duração: "00:00"
      },
      {
         id: 5,
        de: "(19) 6569-8745",
        para: "7068 - Janduy Euclides",
        status: "Não Atendido",
        duração: "00:00"
      } 
    ],
    }
  }
};
</script>


<style>

table{
    width: 100% !important;
}

.md-list.md-theme-default .md-list-item-expand.md-active{
  /* border-top: none !important; */
  border-color: none !important;
}

.sorting{
    text-align: left !important;
    font-size: 1.125rem !important;
    color: black !important;
    font-weight: 300 !important;
    line-height: 1.5em !important;
    border-bottom: 1px solid black !important;
}

</style>