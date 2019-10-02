<template>
<div>
  <div class="content">
    <div class="md-layout">
       
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
        <stats-card data-background-color="blue">
          <template slot="header">
            <md-icon>phone</md-icon> 
          </template>

          <template slot="content">
            <p class="category">Ativo</p>
            <h4 class="title">Aguardando</h4>
          </template> 

            <template slot="footer">
                <div class="stats flow-text" >
                    <center >
                        <span style="text-align: center !important;" class="h4 center-align span-dark-text" >7036 - José Carlos</span> <br>
                    </center>
                    <span class="valign-wrapper">
                        Aguardando
                    </span>
                </div> 
            </template> 

        </stats-card>
      </div>

      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>phone_callback</md-icon> 
          </template>

          <template slot="content">
            <p class="category">Ativo</p>
            <h4 class="title">00:26</h4>
          </template> 

            <template slot="footer">
                <div class="stats flow-text" >
                    <center >
                        <span style="text-align: center !important;" class="h4 center-align span-dark-text" >7068 - Janduy Euclides</span> <br>
                    </center>
                    <span class="  valign-wrapper">
                        Recebido de 9999-8745
                    </span>
                </div> 
            </template> 

        </stats-card>
      </div>

      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
        <stats-card data-background-color="green">
          <template slot="header">
            <i class="material-icons">
            phone_forwarded
            </i>
          </template>

          <template slot="content">
            <p class="category">Ativo</p>
            <h4 class="title">01:56</h4>
          </template> 

            <template slot="footer">
                <div class="stats flow-text" >
                    <center >
                        <span style="text-align: center !important;" class="h4 center-align span-dark-text" >7080 - Luciano</span> <br>
                    </center>
                    <span class="  valign-wrapper">
                        Atendido por 9999-8745
                    </span>
                </div> 
            </template> 

        </stats-card>
      </div>

       <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
        <stats-card data-background-color="gray">
          <template slot="header">
            <md-icon>phone</md-icon> 
          </template>

          <template slot="content">
            <p class="category">Inativo</p>
            <h4 class="title">Inativo a 4h</h4>
          </template> 

            <template slot="footer">
                <div class="stats flow-text" >
                    <center >
                        <span style="text-align: center !important;" class="h4 center-align span-dark-text" >7077 - Luiz Gomes</span> <br>
                    </center>
                    <span class="valign-wrapper">
                        Ramal Inativo
                    </span>
                </div> 
            </template> 

        </stats-card>
      </div>
 
      
    </div>
  </div>

   <div class="row">
        <div> 
          <div class="md-layout-item md-medium-size-200 md-xsmall-size-100 md-size-100">
            <md-card>
                <md-card-header data-background-color="orange">
                    <h4 class="title">10 Últimas Ligações</h4>
                    <p class="category">54 novas ligações na última hora</p>
                </md-card-header>
              <md-card-content>
                     <ordered-table table-header-color="orange"></ordered-table>
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
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable
  },
  data() {
    return {
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
      }
    };
  }
};
</script>


<style scoped>

.span-dark-text{
    color: black !important;
}
</style>