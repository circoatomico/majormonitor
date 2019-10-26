<template>
    <div class="content">
        <div class="row">
            <div> 
                <div class="md-layout-item md-medium-size-200 md-xsmall-size-100 md-size-100">
                    <md-card>
                        <md-card-header data-background-color="orange">
                            <h4 class="title">Resultado de disparo SMS</h4>
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

                                            <div class="md-layout-item md-size-25">                   
                                                <md-field>
                                                <label for="movies">Selecione a Campanha</label>
                                                <md-select  name="filas" id="filas" md-dense multiple>
                                                    <md-option value="godfather">Pesquisa de satisfação</md-option>
                                                    <md-option value="fight-club">Confirmação Visita Técnica</md-option>
                                                    <md-option value="godfather-ii">Aviso Desmarcação</md-option>                                
                                                </md-select>
                                                </md-field>
                                            </div> 

                                                <div class="md-layout-item md-size-25">                   
                                                    <md-field>
                                                    <label for="movies">Status</label>
                                                    <md-select  name="filas" id="filas" md-dense multiple>
                                                        <md-option value="godfather">OK</md-option>
                                                        <md-option value="godfather">Enviando</md-option>
                                                        <md-option value="fight-club">Falha</md-option>
                                                    </md-select>
                                                    </md-field>
                                                </div> 

                                                <div class="md-layout-item md-size-25">      
                                                    <md-field>
                                                        <label>De</label>
                                                        <md-input ></md-input>
                                                    </md-field>  
                                                </div>

                                                <div class="md-layout-item md-size-25">      
                                                    <md-field>
                                                        <label>Para</label>
                                                        <md-input ></md-input>
                                                    </md-field>  
                                                </div>

                                                <div  class="md-layout-item md-size-25"> 
                                                    <md-datepicker  >
                                                        <label>Período início</label>
                                                    </md-datepicker> 
                                                </div>

                                                <div  class="md-layout-item md-size-25"> 
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
                            <datatable
                                :columns="tableColumns1"
                                :rows="tableRows1"
                                locale="br"
                                v-bind:key="key_dtb_sms"
                                
                                >   

                            </datatable>
                        
                    </md-card-content>
                    </md-card>
                </div>
            </div>
      </div>
    </div>
</template>

<script>

import DataTable from "vue-materialize-datatable";

export default {
    name: "ResultadosSMS",
    components:{
        'datatable' : DataTable
    },
    data(){
        return{
            key_dtb_sms: 1,
            tableColumns1: [
                {
                    label: "Id",
                    field: "id",
                    numeric: true,
                    html: false
                },
                 {
                    label: "Campanha",
                    field: "campanha",
                    numeric: false,
                    html: false
                },
                {
                    label: "Data",
                    field: "data",
                    numeric: false,
                    html: false
                },
                {
                    label: "De",
                    field: "de",
                    numeric: false,
                    html: false
                },
                {   
                    label: "Para",
                    field: "para",
                    numeric: true,
                    html: false
                },  
                {
                    label: "Status",
                    field: "status",
                    numeric: false,
                    html: true
                }
                ],
                tableRows1: [
                    {
                        id: 1,
                        data: "10/11/2019 15:21:26",
                        campanha: "Aviso Desmarcação",
                        de: "01187874000",
                        para: "011930157808",
                        status: 'Enviando' 
                    },
                    {
                        id: 2,
                        data: "10/11/2019 15:21:27",
                        campanha: "Aviso Desmarcação", 
                        de: "01187874000",
                        para: "011930157808",
                        status: 'OK'  
                    },
                    {
                        id: 3,
                        data: "10/11/2019 15:21:28",
                        campanha: "Aviso Desmarcação",
                        de: "01187874000",
                        para: "011930157808",
                        status: 'OK'   
                    },
                    
                ],
        }
    },
    mounted(){

    }
}
</script>

<style scoped>

</style>