<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">{{user.email}}</h6>
      <h4 class="card-title">{{user.name}}</h4>
 
      <md-button class="md-round md-success" @click="logout">Logout</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg")
    }
  },
  data() {
    return {

        user: {
            name: "",
            email: "" 
        }
    };
  },methods: {

    logout(){
      localStorage.removeItem('api_token');
      this.$router.push('logar/login')
    },

    getUser(){

        let api_token = localStorage.getItem('api_token')

        console.log(api_token)

        this.$http.post( this.$apiurl + 'get/user?api_token='+api_token, api_token).then(response => {
        
            console.log(response.data)

            let data = response.data

            this.user.email = data.email 
            this.user.name  = data.name 

            // if (response.data.api_token) { 
            //     console.log(response)
            //     localStorage.setItem('api_token', JSON.stringify(response.data.api_token))
            //     localStorage.setItem('validade', JSON.stringify(response.data.api_token))
            //     localStorage.setItem('menus', JSON.stringify(response.data.menu))
            //     this.$router.push('/monitoramento')
            //     console.log('funfa ai mano')
            // } 

        }, response => {  
            this.$notify({ group: 'foo', text: 'Usuário ou senha inválidos', type: 'danger' })
        }); 

    }

  },
  mounted(){

      this.getUser();
   }
};
</script>
<style></style>
