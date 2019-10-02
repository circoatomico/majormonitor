<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label=" ">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="De">{{ item.de }}</md-table-cell>
        <md-table-cell md-label="Para">{{ item.para }}</md-table-cell>
        <md-table-cell md-label="Status">{{ item.status }}</md-table-cell>
        <md-table-cell md-label="duração">{{ item.duração }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "ordered-table",
  props:[

      'filas',
    'tableHeaderColor'
    
  ]
  ,
  data() {
    return {
      selected: [],
      users: [
        {
          id: 1,
          de: "7036 - José Carlos",
          para: "93015-7808",
          status: "Atendido",
          duração: "14:16"
        },
        {
          id: 2,
          de: "7080 - Luciano",
          para: "(11) 9258-8745",
          status: "Não Atendido",
          duração: "00:00"
        },
        {
          id: 3,
          de: "7068 - Janduy Euclides",
          para: "(11) 3132-7676",
          status: "Atendido",
          duração: "08:25"
        },
        {
          id: 4,
          de: "7087 - Filipe Diniz",
          para: "(11) 2356-8542",
          status: "Recusado",
          duração: "00:00"
        },
        {
          id: 5,
          de: "(19) 6569-8745",
          para: "7068 - Janduy Euclides",
          status: "Não Atendido",
          duração: "00:00"
        }
      ]
    };
  }, mounted(){

  console.log(this.filas)  
}
};
</script>
