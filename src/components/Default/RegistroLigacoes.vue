<template>
    <div>
        <md-card>
            <md-card-header data-background-color="orange">
                <h4 class="title">10 Últimas Ligações</h4>
                <p class="category">54 novas ligações na última hora</p>
            </md-card-header>
            <md-card-content>
                    <ordered-table v-bind:dados="users" table-header-color="orange"></ordered-table>
            </md-card-content>
        </md-card>
    </div>
</template>

<script>

import { 
  OrderedTable
} from "@/components";

export default {
    name: "RegistroLigacoes",
    components: {
      OrderedTable, 
     },
      data() {
    return {
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
      ],
    }
      }
}
</script>

<style scoped>
.span-dark-text{
    color: black !important;
}
</style>