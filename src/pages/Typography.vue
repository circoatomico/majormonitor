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
    </div>


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

      filas: {
          colunas: [ 'id', 'nome','Estratégia', 'Música de espera', 'Ramais', 'Status' ],
          dados: [
              [1, 'Fila Desenvolvimento', 'Atendimento Automático', 'ring.wav', '8 cadastrados', 'Ativa' ],
              [1, 'Fila Comercial', 'Atendimento Automático', 'ring.wav', '3 cadastrados', 'Pausada' ],
              [1, 'Fila Recepção', 'Fila de Prioridade', 'Recepço_audio.wav', '2 cadastrados', 'Ativa' ],
              [1, 'Fila Diretoria', 'Atendimento Automático', 'ring.wav', '2 cadastrados', 'Inativa' ],
              [1, 'Fila Suporte', 'Revezamento', 'ring.wav', '3 cadastrados', 'Ativa' ],
          ]
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
  }
};
</script>
