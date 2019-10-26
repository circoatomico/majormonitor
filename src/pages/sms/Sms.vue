<template>
    <div class="content">  
        <div class="row">
        <div> 
          <div class="md-layout-item md-medium-size-200 md-xsmall-size-100 md-size-100">
            <md-card>
                <md-card-header data-background-color="orange">
                    <h4 class="title">Campanhas SMS Cadastradas</h4>
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
                                                <label>Campanha</label>
                                                <md-input ></md-input>
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
                            <th class="sorting" slot="thead-tr">
                                Ações
                            </th>
                            <template slot="tbody-tr" scope="props" style="">
                                <!-- <td class=""> -->
                                    <div style="border-bottom: solid 1px #DDDDDD;" > 
                                        <center>
                                          <router-link to="sms/visualizar" >
                                            <md-button class="md-success md-just-icon"><md-icon >search</md-icon></md-button>
                                          </router-link>
                                            <md-button class="md-info md-just-icon"><md-icon>edit</md-icon></md-button> 
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

import DataTable from "vue-materialize-datatable";

export default {
    name: 'sms',
    components: {
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
                    label: "Mailing Total",
                    field: "mailing_total",
                    numeric: false,
                    html: false
                },
                {   
                    label: "Mailing Finalizado",
                    field: "mailing_finalizado",
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
                        campanha: "Confirmação visita técnica",
                        mailing_total: "2151",
                        mailing_finalizado: "1325",
                        status: '<span style="background-color: rgba(77,81,230,1); padding: 2px 5px; border-radius: 4px; color: white; font-weight: bold; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.75);" >Ativo</span>' 
                    },
                    {
                        id: 2,
                        campanha: "Pesquisa satisfação",
                        mailing_total: "12365",
                        mailing_finalizado: "3200",
                        status: '<span style="background-color: rgba(238,157,96,1); padding: 2px 5px; border-radius: 4px; color: white; font-weight: bold; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.75);" >Pausado</span>'  
                    },
                    {
                        id: 3,
                        campanha: "Aviso desmarcação",
                        mailing_total: "1200",
                        mailing_finalizado: "216",
                        status: '<span style="background-color: rgba(35,211,80,1); padding: 2px 5px; border-radius: 4px; color: white; font-weight: bold; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.75);" >Finalizado</span>'
                    },
                    
                ],
        }
    },
    mounted(){
        this.key_dtb_sms += 1
    }
}
</script>

<style scoped>

.badge-status{
    background-color: green !important;
}

</style>