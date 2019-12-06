<template>
  <form>
    <md-card>

      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Administração</h4>
        <p class="category">Gerenciamento de clientes</p>
      </md-card-header>

      <md-card-content>
         <datatable
            :columns="tableColumns1"
            :rows="tableRows1"
            locale="br"
        >
            <th class="sorting" slot="thead-tr">
                Ações
            </th>
            <template slot="tbody-tr" scope="props" style="">
                <!-- <td class=""> -->
                    <div style="border-bottom: solid 1px #DDDDDD;" >
                        <center> 
                            <router-link :to="'/cliente/'+props.row.id">
                            <md-button class="md-primary md-just-icon"><i class="material-icons">zoom_in</i></md-button>
                            </router-link>
                            <md-tooltip >Detalhes</md-tooltip> 
                        </center>
                    </div>
                <!-- </td> -->
            </template>

        </datatable>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>

import DataTable from "vue-materialize-datatable"

export default {
  name: "edit-profile-form",
  components:{
      datatable: DataTable
  },
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      username: null,
      disabled: null,
      emailadress: null,
      lastname: null,
      firstname: null,
      address: null,
      city: null,
      country: null,
      code: null,
      aboutme:
        "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.",
         tableColumns1: [
            {
                label: "id",
                field: "id",
                numeric: true,
                html: true
            },
            {
                label: "Cliente",
                field: "cliente",
                numeric: false,
                html: false
            },
            {
                label: "Ativo",
                field: "ativo",
                numeric: false,
                html: false
            }
        ],

         tableRows1: [
            {
                id: 1,
                cliente: "Voip Easy",
                ativo: "sim", 
            },
            {
                id: 2,
                cliente: "Voip Medium",
                ativo: "nao", 
            } 
        ],
    }
  },
    methods:{
        
        getClientes(){


             this.$http.post( this.$apiurl + 'clientes', this.login).then(response => {
        
                console.log(response.data)

                if (response.data.api_token) { 
                    console.log(response)
                    localStorage.setItem('api_token', JSON.stringify(response.data.api_token))
                    localStorage.setItem('validade', JSON.stringify(response.data.api_token))
                    localStorage.setItem('menus', JSON.stringify(response.data.menu))
                    this.$router.push('/monitoramento')
                    console.log('funfa ai mano')
                } 

            }, response => {  
                this.$notify({ group: 'foo', text: 'Usuário ou senha inválidos', type: 'danger' })
            }); 
        }

    }
};
</script>
<style></style>
