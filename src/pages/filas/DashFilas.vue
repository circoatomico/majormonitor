<template>
<div class="content"> 
    <div class="md-layout"> 
        <div class="md-layout-item md-size-100" > 
            
                <md-list class=" md-card"  >
                    <md-list-item md-expand  >
                    <md-icon>filter_list</md-icon>
                    <span class="row md-list-item-text">Filtros</span>

                        <md-list style="border-color: transparent !important;" slot="md-expand">
                            <div class="md-layout"> 

                                <div class="md-layout-item md-size-35">                   
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

                                <div class="md-layout-item md-size-35">                   
                                    <md-field>
                                    <label for="movies">Status</label>
                                    <md-select  name="filas" id="filas" md-dense multiple>
                                        <md-option value="godfather">Ativa</md-option>
                                        <md-option value="fight-club">Pausada</md-option>
                                        <md-option value="godfather-ii">Desativada</md-option>                                
                                    </md-select>
                                    </md-field>
                                </div>  


                                <div class="md-layout-item md-size-35">
                                    <md-datepicker >
                                        <label>Período de início</label>
                                    </md-datepicker>
                                </div>

                                <div class="md-layout-item md-size-35">
                                    <md-datepicker  >
                                        <label>Período fim</label>
                                    </md-datepicker>
                                </div>

                                <div class="md-layout-item md-size-100">    
                                    <md-button class="md-success"><md-icon>search</md-icon> Pesquisar</md-button>
                                    <md-button class="md-warning"><md-icon>clear_all</md-icon>Limpar</md-button>
                                </div> 
                            </div>

                        </md-list>
                    </md-list-item>
        
                </md-list>  
        </div>
    </div>

    <div class="md-layout">

         <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <chart-card :chart-data="dataCompletedTasksChart.data" :chart-options="dataCompletedTasksChart.options" :chart-type="'Line'" data-background-color="blue" >
          <template slot="content">
            <h4 class="title">Monitoria de ligações - Atendidas / Perdidas</h4> 
          </template> 
          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              Atualizado em tempo real
            </div>
          </template>
        </chart-card>
      </div> 

       <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <chart-card :chart-data="emailsSubscriptionChart.data" :chart-options="emailsSubscriptionChart.options" :chart-responsive-options="emailsSubscriptionChart.responsiveOptions" :chart-type="'Bar'" data-background-color="green" >
            <template slot="content">
                <div class="row"> 
                    <h4 class="title">Atendimento por Ramal</h4>
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
      
     

        <div class="md-layout-item md-size-50">
            <md-card class="md-layout-item md-size-100">
                <md-card-content>
                    <center>
                        <h4>Tempo Logado por ramais</h4>
                    </center>
                     <md-list class="md-dense">
                      
                        <md-divider class="md-inset"></md-divider>

                        <md-list-item>
                            <md-avatar>
                            <img src="https://placeimg.com/40/40/people/2" alt="People">
                            
                            </md-avatar>

                            <center>
                                <span class="md-list-item-text"> 8025 <br>Em Atendimento - 8 horas</span> 
                            </center>

                            <md-button class=" md-success md-icon-button md-list-action">
                                <md-icon class="md-primary">details</md-icon>
                            </md-button>
                        </md-list-item>
                            
                            <md-divider class="md-inset"></md-divider>

                        <md-list-item>
                            <md-avatar>
                            <img src="https://placeimg.com/40/40/people/1" alt="People">
                            </md-avatar>

                            <center>
                                <span class="md-list-item-text">8045<br>Deslogado</span>
                            </center>
                            <md-button class="md-icon-button md-list-action">
                                <md-icon class="md-primary">details</md-icon>
                            </md-button>
                        </md-list-item>

                            <md-divider class="md-inset"></md-divider>
 
                        <md-list-item>
                            <md-avatar>
                            <img src="https://placeimg.com/40/40/people/6" alt="People">
                            </md-avatar>

                            <center>
                                <span class="md-list-item-text"> 8066 <br>Pausado - 8 minutos </span>
                            </center>

                            <md-button class="md-danger md-icon-button md-list-action">
                            <md-icon>details</md-icon>
                            </md-button>
                        </md-list-item>

                          <md-divider class="md-inset"></md-divider>
 
                        <md-list-item>
                            <md-avatar>
                            <img src="https://placeimg.com/40/40/people/5" alt="People">
                            </md-avatar>

                            <center>
                                <span class="md-list-item-text"> 8079 <br> Logado - 4 horas </span>
                            </center>

                            <md-button class="md-primary md-icon-button md-list-action">
                            <md-icon>details</md-icon>
                            </md-button>
                        </md-list-item>

                    </md-list>
                </md-card-content>
            </md-card>
        </div>
    </div>
</div>    
</template>

<script>


import {
  ChartCard, 
  OrderedTable
} from "@/components";

import Datepicker from 'vue-material-datepicker';


export default { 
    components: { 
        ChartCard, 
        OrderedTable,
        Datepicker
    }, 
    props: [],
    data(){
        return{
            selectedDate: null,
            dataCompletedTasksChart: {
                data: {
                    labels: ["7", "8", "9", "10", "11", "12", "13", "14"],
                    series: [[5, 100, 168 ,280, 142, 6, 21 ,160], [2, 10, 35, 100, 250, 5, 10, 39]  ]
                },
            }, 
            font: null,
            expandNews: false,
            expandSingle: false,
            emailsSubscriptionChart: {
                data: {
                labels: [
                    "8040",
                    "8090",
                    "8510",
                    "3658",
                    "9845"
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

        }
    },
    mounted(){

    }
}
</script>

<style scoped>

</style>