<template>
    <div class="content">
        <div class="row">
        <div> 
          <div class="md-layout-item md-medium-size-200 md-xsmall-size-100 md-size-100">
            <md-card>
                <md-card-header data-background-color="orange">
                    <h4 class="title">Campanha de Satisfação</h4>
                    <p class="category"></p>
                </md-card-header>
                <md-card-content>

                    <md-card>
                        <div class="row">
                            <h3 class="ml-15">Dados da Campanha</h3>
                            <div class="md-layout">

                                <div  class="md-layout-item md-size-33"> 
                                    <md-field >
                                        <label>Nome da fila</label>
                                        <md-input value="Campanha de Satisfação"></md-input>
                                    </md-field>
                                </div>

                                <div  class="md-layout-item md-size-33"> 
                                    <md-field>
                                    <label for="filas">Status</label>
                                    <md-select name="filas" id="filas" value="Ativa" md-dense>
                                        <md-option value="Ativa">Ativa</md-option>
                                        <md-option value="fight-club">Inativo</md-option>
                                        <md-option value="godfather-ii">Pausada</md-option>                               
                                    </md-select>
                                    </md-field>
                                </div> 

                                <div  class="md-layout-item md-size-33"> 
                                </div>


                                <div  class="md-layout-item md-size-33"> 
                                    <md-datepicker  >
                                        <label>Período início</label>
                                    </md-datepicker> 
                                </div>

                                <div  class="md-layout-item md-size-33"> 
                                    <md-datepicker  >
                                        <label>Período fim</label>
                                    </md-datepicker> 
                                </div>
                            </div>
                        </div>
                    </md-card>

                     <md-card>
                        <div class="row">
                            <h3 class="ml-15">Configurar SMS</h3>
                            <div class="md-layout">
                                
                                <div  class="md-layout-item md-size-33"> 
                                    <md-field>
                                    <label for="filas">Tronco GSM</label>
                                    <md-select name="filas" id="filas" value="Ativa" md-dense>
                                        <md-option value="Ativa">Vonex</md-option>
                                        <md-option value="fight-club">Claro</md-option>
                                        <md-option value="godfather-ii">Algar</md-option>                               
                                    </md-select>
                                    </md-field>
                                </div> 

                                <div class="md-layout-item md-size-33">  
                                    <md-field>
                                        <label>Upload de Mailings</label>
                                        <md-file  accept="csv/*" />
                                    </md-field>
                                </div>

                                <div class="md-layout-item md-size-100">  
                                    <md-card>
                                        <md-field>
                                            <label>Mensagem</label>
                                            <md-textarea placeholder="Escreva aqui sua mensagem" v-model="textarea" md-counter="80"></md-textarea>
                                        </md-field>
                                    </md-card>
                                </div> 


                            </div>
                        </div>
                    </md-card>


                    <div class="md-layout-item md-size-100">    
                        <md-button class="md-success"><md-icon>save</md-icon> Salvar</md-button>
                        <md-button class="ml-15"><md-icon>cancel</md-icon>Cancelar</md-button>
                    </div> 
                </md-card-content>
            </md-card>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
 
export default {
    name: 'VisualizarSms',
    components: {},
    data(){
        return{
            textarea: null
        }
    }
}

</script>

<style scoped>
.ml-15{
    margin-left: 15px !important;
}
</style>