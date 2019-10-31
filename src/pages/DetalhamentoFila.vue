<template>
<div class="content"> 
    <div class="row"> 
        <div class="md-layout-item md-medium-size-200 md-xsmall-size-100 md-size-100">
               <md-card>
                <md-card-header data-background-color="orange">
                    <h4 class="title">Fila Desenvolvimento</h4>
                    <p class="category"></p>
                </md-card-header>
                <md-card-content>
                <md-card>
                    <div class="row">
                        <h3 class="ml-15">Dados Principais</h3>
                        <div class="md-layout">

                            <div  class="md-layout-item md-size-33"> 
                                <md-field >
                                    <label>Nome da fila</label>
                                    <md-input v-model="fila.nome"></md-input>
                                </md-field>
                            </div>

                            <div  class="md-layout-item md-size-33"> 
                                <md-field>
                                <label for="filas">Status</label>
                                <md-select v-model="fila.status"  name="filas" id="filas" md-dense>
                                    <md-option value="Ativa">Ativa</md-option>
                                    <md-option value="fight-club">Inativo</md-option>
                                    <md-option value="godfather-ii">Pausada</md-option>                               
                                </md-select>
                                </md-field>
                            </div>

                            <div  class="md-layout-item md-size-33">
                               <md-field>
                                <label for="filas">Categoria</label>
                                <md-select v-model="fila.categoria"  name="filas" id="filas" md-dense>
                                    <md-option value="Desenvolvimento">Desenvolvimento</md-option>
                                    <md-option value="fight-club">Suporte</md-option>
                                    <md-option value="godfather-ii">Diretoria</md-option>                               
                                </md-select>
                                </md-field>
                            </div>

                        </div>
                    </div>

                     <div class="row">
                        <div class="md-layout">
                            
                            <div  class="md-layout-item md-size-33">
                                <md-field>
                                <label for="filas">Estratégia</label>
                                <md-select v-model="fila.estrategia"  name="filas" id="filas" md-dense>
                                    <md-option value="todos">Tocar em todos os ramais</md-option>
                                    <md-option value="fight-club">Aleatório</md-option>
                                    <md-option value="godfather-ii">Diretoria</md-option>                               
                                </md-select>
                                </md-field>
                            </div>
                            
                            <div  class="md-layout-item md-size-33">
                                <md-field>
                                <label for="filas">Tocar Musica de Espera</label>
                                <md-select name="filas" id="filas" md-dense>
                                    <md-option value="todos">Sim</md-option>
                                    <md-option value="fight-club">Não</md-option>
                                </md-select>
                                </md-field>
                            </div>
                            
                            <div  class="md-layout-item md-size-33">
                                 <md-field>
                                <label for="filas">Música de Espera</label>
                                <md-select v-model="fila.musica"  name="filas" id="filas" md-dense>
                                    <md-option value="Song Antendimento">Toque atendimento</md-option>
                                    <md-option value="fight-club">Ding Dong</md-option>
                                    <md-option value="godfather-ii">Musica clássica</md-option>                               
                                    <md-option value="godfather-ii">Aviso Atendimento</md-option>                               
                                    <md-option value="godfather-ii">Aviso aleatório</md-option>                               
                                </md-select>
                                </md-field>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <h3 class="ml-15">Horário de Atendimento</h3>
                        <div class="md-layout">

                            <div  class="md-layout-item md-size-25"> 
                                <md-field >
                                    <label>Horário Inicial</label>
                                    <md-input value="08:00"></md-input>
                                </md-field>
                            </div>

                            <div  class="md-layout-item md-size-25"> 
                                <md-field >
                                    <label>Horário Final</label>
                                    <md-input value="17:00"></md-input>
                                </md-field>
                            </div>

                        </div>

                        <div class="md-layout">
                            <h5 class="ml-15">Dias da semana</h5><br>

                            <div  class="md-layout-item md-size-100"> 
                                <md-switch v-model="semana.segunda" >Segunda</md-switch>
                                <md-switch v-model="semana.terca">Terça</md-switch>
                                <md-switch v-model="semana.quarta">Quarta</md-switch>
                                <md-switch v-model="semana.quinta">Quinta</md-switch>
                                <md-switch v-model="semana.sexta">Sexta</md-switch>
                                <md-switch v-model="semana.sabado">Sábado</md-switch>
                                <md-switch v-model="semana.domingo">Domingo</md-switch>
                            </div> 
                        </div>
                    </div>


                   
                    </md-card> 

                      <!-- <md-card> -->
                        <div class="row">
                            <div class="md-layout"> 
                                <div class="md-layout-item md-size-40">
                                    <md-card  >
                                        <h3 class="ml-15">Ramais na fila</h3>

                                        <md-list >
                                            <md-list-item>
                                                <md-avatar>
                                                    <img src="https://placeimg.com/40/40/people/6" alt="People">
                                                </md-avatar>

                                                <span class=" md-list-item-text">Luiz - 8085</span>

                                                <div class="md-list-action">

                                                    <md-button class="md-icon-button md-primary ">
                                                        <md-icon>edit</md-icon> 
                                                    </md-button>

                                                    <md-button class="md-icon-button md-danger ">
                                                        <md-icon>delete</md-icon> 
                                                    </md-button>

                                                </div>
                                                
                                            </md-list-item>

                                            <md-list-item>
                                                <md-avatar>
                                                    <img src="https://placeimg.com/40/40/people/6" alt="People">
                                                </md-avatar>

                                                <span class=" md-list-item-text">Janduy - 8086</span>

                                                <div class="md-list-action">

                                                    <md-button class="md-icon-button md-primary ">
                                                        <md-icon>edit</md-icon> 
                                                    </md-button>

                                                    <md-button class="md-icon-button md-danger ">
                                                        <md-icon>delete</md-icon> 
                                                    </md-button>

                                                </div>
                                                
                                            </md-list-item>

                                            <md-list-item>
                                                <md-avatar>
                                                    <img src="https://placeimg.com/40/40/people/6" alt="People">
                                                </md-avatar>

                                                <span class=" md-list-item-text">Luciano - 8087</span>

                                                <div class="md-list-action">

                                                    <md-button class="md-icon-button md-primary ">
                                                        <md-icon>edit</md-icon> 
                                                    </md-button>

                                                    <md-button class="md-icon-button md-danger ">
                                                        <md-icon>delete</md-icon> 
                                                    </md-button>

                                                </div>
                                                
                                            </md-list-item>
                                            
                                            <md-list-item>
                                                <md-button class="md-raised md-primary"><md-icon>note_add</md-icon> Add Ramais</md-button>
                                            </md-list-item>

                                        </md-list>
                                        <!-- <div  class="">  
                                            <md-avatar>
                                                <img src="@/assets/img/faces/marc.jpg" alt="Avatar">
                                            </md-avatar> 
                                        </div> -->

                                    </md-card>
                                </div>

                                <div class="md-layout-item md-size-60">
                                    <md-card  >
                                        <h3 class="ml-15">Agentes Online</h3>
                                        <md-card-content>
                                            <div class="md-layout">
 
                                                <div class="md-layout-item md-size-20">
                                                    <center>
                                                        <md-avatar>
                                                            <img src="https://placeimg.com/40/40/people/6" alt="People">
                                                        </md-avatar>
                                                        <p><b>8085</b></br>Disponível</p>
                                                    </center>
                                                </div>

                                                 <div class="md-layout-item md-size-20">
                                                    <center>
                                                        <md-avatar>
                                                            <img src="https://placeimg.com/40/40/people/6" alt="People">
                                                        </md-avatar>
                                                        <p><b>8086</b></br>Em ligação</p>
                                                    </center>
                                                </div>

                                                

                                            </div>

                                        </md-card-content>
                                    </md-card>


                                     <md-card  >
                                        <h3 class="ml-15">Agentes Offline</h3>
                                        <md-card-content>
                                            <div class="md-layout">
 
                                                <div class="md-layout-item md-size-20">
                                                    <center>
                                                        <md-avatar>
                                                            <img src="https://placeimg.com/40/40/people/6" alt="People">
                                                        </md-avatar>
                                                        <p><b>8085</b></p>
                                                    </center>
                                                </div>
 
                                            </div>

                                        </md-card-content>
                                    </md-card>


                                </div>
                               
                            </div>
                        </div>
                      <!-- </md-card> -->
                </md-card-content>
            </md-card> 
        </div>
    </div>
</div>

</template>

<script>
export default {
    name: "DetalhamentoFila",
    props: [],
    data(){
        return{
            semana: {
                segunda: null,
                terca: null,
                quarta: null,
                quinta: null,
                sexta: null,
                sabado: null,
                domingo: null, 
            },
            fila: {
                nome: 'Fila Desenvolvimento',
                categoria: 'Desenvolvimento',
                estrategia: 'todos',
                musica: 'Song Antendimento',
                status: 'Ativa'

            }
        }
    }
}
</script>

<style scoped>
.ml-15{
    margin-left: 15px !important;
}

.md-list-item-text{
    align-self: inherit !important;
}

.md-ripple > span{
    position: relative;
}
</style>