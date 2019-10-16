<template>
<div class='md-layout'>

   <div class="md-layout-item md-size-30">

        <md-list class=" md-card" :md-expand-single="expandSingle">
            <md-list-item md-expand :md-expanded.sync="expandNews">
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
</template>

<script>
  export default {
    name: 'MultipleSelect',
    data: () => ({
      filas: [],
      ramais: null,
      font: null,
      expandNews: false,
      expandSingle: false
    })
  }
</script>

<style lang="scss" >

.md-list-item-text{
    align-items: center !important;
    align-self: baseline !important;
}

.md-progress-spinner {
  margin: 24px;
  font-size: 10px !important;
}

.md-ripple > span {
  // position: relative !important;
}

//   .md-field {
//     max-width: 300px;
//   }

</style>