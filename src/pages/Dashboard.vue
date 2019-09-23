<template>
  <div class="content">
    <div class="md-layout">
      <!-- <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      > -->
        <!-- <chart-card
          :chart-data="dailySalesChart.data"
          :chart-options="dailySalesChart.options"
          :chart-type="'Line'"
          data-background-color="blue"
        >
          <template slot="content">
            <h4 class="title">Monitoramento Diário</h4>
            <p class="category">
              <span class="text-success"
                ><i class="fas fa-long-arrow-alt-up"></i> 55%
              </span>
              mais ligações.
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              updated 4 minutes ago
            </div>
          </template>
        </chart-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="emailsSubscriptionChart.data"
          :chart-options="emailsSubscriptionChart.options"
          :chart-responsive-options="emailsSubscriptionChart.responsiveOptions"
          :chart-type="'Bar'"
          data-background-color="red"
        >
          <template slot="content">
            <h4 class="title">Email Subscription</h4>
            <p class="category">
              Last Campaign Performance
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              updated 10 days ago
            </div>
          </template>
        </chart-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="dataCompletedTasksChart.data"
          :chart-options="dataCompletedTasksChart.options"
          :chart-type="'Line'"
          data-background-color="green"
        >
          <template slot="content">
            <h4 class="title">Completed Tasks</h4>
            <p class="category">
              Last Campaign Performance
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              campaign sent 26 minutes ago
            </div>
          </template>
        </chart-card> -->
      <!-- </div> -->
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>phone</md-icon>
               <span class="h3" style="vertical-align:middle;">7036</span><br>
               <span class="h3" style="vertical-align:middle;">José Carlos</span>
          </template>

          <template slot="content">
            <p class="category">Ativo</p>
            <h3 class="title">00:26</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              Em Atendimento com 9999-8745
            </div>
          </template>
        </stats-card>
      </div>

       <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>phone</md-icon>
               <span class="h3" style="vertical-align:middle;">7058</span>
               <br>
               <span class="h3" style="vertical-align:middle;">Ana Luiza</span>
          </template>

          <template slot="content">
            <p class="category">Ativo</p>
            <h3 class="title">15:14</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              Em Atendimento com 9999-9845
            </div>
          </template>
        </stats-card>
      </div>

       <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>phone</md-icon>
               <span class="h3" style="vertical-align:middle;">7059</span>
               <br>
               <span class="h3" style="vertical-align:middle;">Beatriz</span>
          </template>

          <template slot="content">
            <p class="category">Ativo</p>
            <h3 class="title">09:06</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              Em Atendimento com 9999-6547
            </div>
          </template>
        </stats-card>
      </div>

       <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>phone</md-icon>
               <span class="h3" style="vertical-align:middle;">7088</span>
               <br>
               <span class="h3" style="vertical-align:middle;">Filipe</span>
          </template>

          <template slot="content">
            <p class="category">Ativo</p>
            <h3 class="title">00:20</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              Em Atendimento com 9875-9878
            </div>
          </template>
        </stats-card>
      </div>
 
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>phone</md-icon>
            <span class="h3" style="vertical-align:middle;">8098</span>
            <br>
               <span class="h3" style="vertical-align:middle;">Antônio</span>
          </template>

          <template slot="content">
            <p class="category">Ativo</p>
            <h3 class="title">
              Discando...
            </h3>
          </template>

          <template slot="footer">
             <div class="stats"> 
              Discando para 930157808
            </div>
          </template>
        </stats-card>
      </div>

       <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>phone</md-icon>
               <span class="h3" style="vertical-align:middle;">8636</span>
               <br>
               <span class="h3" style="vertical-align:middle;">Roberto</span>
          </template>

          <template slot="content">
            <p class="category">Ativo</p>
            <h3 class="title">
              Discando...
            </h3>
          </template>

          <template slot="footer">
             <div class="stats"> 
              Discando para 930157808
            </div>
          </template>
        </stats-card>
      </div>

       <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="red">
          <template slot="header">
            <md-icon>phone</md-icon>
               <span class="h3" style="vertical-align:middle;">8069</span> 
               <br>
               <span class="h3" style="vertical-align:middle;">Janduy</span>
          </template>

          <template slot="content">
            <p class="category">Ativo</p>
            <h3 class="title">
              Ocupado
            </h3>
          </template>

          <template slot="footer">
             <div class="stats"> 
              Discando para 930157808
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="red">
          <template slot="header">
            <md-icon>phone</md-icon>
               <span class="h3" style="vertical-align:middle;">8040</span>
               <br>
               <span class="h3" style="vertical-align:middle;">Euclides</span>

          </template>

          <template slot="content">
            <p class="category">Ativo</p>
            <h3 class="title">Finalizado</h3>
          </template>

          <template slot="footer">
            <div class="stats"> 
              Chamada
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="gray">
          <template slot="header">
            <md-icon>phone</md-icon>
            <span class="h3" style="vertical-align:middle;">8025</span>
            <br>
               <span class="h3" style="vertical-align:middle;">Luiz</span>
          </template>

          <template slot="content">
            <p class="category">  Inativo</p>
            <h3 class="title">Inativo a 6h</h3>
          </template>

          <template slot="footer">
            <div class="stats"> 
              Inativo
            </div>
          </template>
        </stats-card>
      </div>
      <br>
      <!-- <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Últimas Ligações</h4>
            <p class="category">54 novas ligações na última hora</p>
          </md-card-header>
          <md-card-content>
            <ordered-table table-header-color="orange"></ordered-table>
          </md-card-content>
        </md-card>
      </div> -->
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <!-- <nav-tabs-card>
          <template slot="content">
            <span class="md-nav-tabs-title">To do:</span>
            <md-tabs class="md-success" md-alignment="left">
              <md-tab id="tab-home" md-label="Bugs" md-icon="bug_report">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>

              <md-tab id="tab-pages" md-label="Website" md-icon="code">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>

              <md-tab id="tab-posts" md-label="server" md-icon="cloud">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>
            </md-tabs>
          </template>
        </nav-tabs-card> -->
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
