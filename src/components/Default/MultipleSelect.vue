<template>
  <div class="row mlt-select ">
    <div class="md-layout  ">
        <div class="md-layout-item md-size-100">
            <div  id="mlt-select"> 
                    <div class="md-layout">
                        <div class="md-layout-item md-size-25">
                            <md-field>
                            <label for="movies">Filas</label>
                            <md-select v-model="filas" name="filas" id="flas" md-dense multiple>
                                <md-option value="fight-club">Desenvolvimento</md-option>
                                <md-option value="godfather">Suporte</md-option>
                                <md-option value="godfather-ii">Recepção</md-option>
                                <md-option value="godfather-iii">Diretoria</md-option>
                                <md-option value="godfellas">Comercial</md-option>
                            </md-select>
                            </md-field> 
                        </div>  

                        <div class="md-layout-item md-size-25">
                            <md-field>
                            <label for="movies">Ramais</label>
                            <md-select v-model="ramais" name="movies" id="movies" md-dense multiple>
                                <md-option value="fight-club">7087</md-option>
                                <md-option value="godfather">7088</md-option>
                                <md-option value="godfather-ii">7089</md-option>
                                <md-option value="godfather-iii">8000</md-option>
                                <md-option value="godfellas">8500</md-option>
                                <md-option value="pulp-fiction">8900</md-option> 
                            </md-select>
                            </md-field>
                        </div>
                    </div> 
                </div>
        </div>  
      </div> 
  </div>
</template>

<script>
  export default {
    name: 'MultipleSelect',
    data: () => ({
      filas: [],
      ramais: null,
      font: null
    })
  }
</script>

<style>

    .md-ripple > span {
        position: relative !important;
    }

</style>