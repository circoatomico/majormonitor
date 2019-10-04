<template>
  <div class="content">

    <div class="md-layout">
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
    </div>
 
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
                     <ordered-table v-bind:dados="filas" table-header-color="orange"></ordered-table>
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



export default {
  components: { 
    ChartCard, 
    OrderedTable

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
      }
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

.valign-wrapper{
  vertical-align: middle;
}
</style>