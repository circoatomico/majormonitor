<template>
  <div>
    <md-table v-model="dados" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">  
          <md-table-cell v-for="(item, dado) in item" v-bind:key="dado.id" :md-label="dado "> <span class="valign" v-html="item"> </span> </md-table-cell>  
        <!-- <md-table-cell md-label="De">{{ item.de }}</md-table-cell> -->
        <!-- <md-table-cell md-label="Para">{{ item.para }}</md-table-cell> -->
        <!-- <md-table-cell md-label="Status">{{ item.status }}</md-table-cell> -->
        <!-- <md-table-cell md-label="duração">{{ item.duração }}</md-table-cell> -->
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "ordered-table",
  props:[
    'filas',
    'dados',
    'tableHeaderColor'
  ]
  ,
  data() {
    return {
      selected: []
    };
  }, mounted(){

  console.log(this.filas)  
}
};
</script>

<style scoped>

.valign{
  vertical-align: middle;
}

</style>