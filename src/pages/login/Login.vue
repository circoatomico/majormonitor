<template>
  <div class="centered-container">
    <md-content class="md-elevation-3">
 

      <div class="title">
        <img src="./../../assets/img/voiplogo.png" alt=''>
        <br>
        <div class="md-title">Monitor Calls</div>
        <div class="md-body-1">Desenvolvido para soluções melhores.</div>
      </div>
      <notifications group="foo"  position="bottom right" />

      <form>
        <div class="form">
            <md-field>
            <label>Usuário</label>
            <md-input v-model="login.email" autofocus required></md-input>
            </md-field>

            <md-field md-has-password>
            <label>Senha</label>
            <md-input v-model="login.password" type="password" required></md-input>
            </md-field>
        </div>
      </form>

        <div class="actions md-layout md-alignment-center-space-between"> 
            <md-button class="md-raised md-success" @click="auth()">Logar</md-button>
            <md-button class="md-primary md-raised" @click="active = true">Esqueci minha senha</md-button>
            <span v-if="value">Value: {{ value }}</span>
                <!-- <md-button class="md-primary md-raised" @click="showDialog = true">Show Dialog</md-button> -->
                <!-- <md-button class="md-primary md-raised" @click="active = true">Confirm</md-button> -->

            <!-- <md-button class="md-primary md-raised"  
             @click="active = true"
             >Esqueci minha senha</md-button> -->
        </div>

        <div class="loading-overlay" v-if="loading">
            <md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
        </div>

    </md-content>


    <md-dialog-prompt
      :md-active.sync="active"
      v-model="ajuda.email"
      md-title="Digite seu e-mail?"
      md-input-maxlength="80"
      md-input-placeholder="Digite seu email..."
      md-confirm-text="Enviar"
      md-cancel-text="Cancelar"
      :md-confirm="resetPass()"
      :md-cancel="cancelPass()" />

    <div class="background" />
  </div>
</template>

<script>
 
export default {
  name: "Login",
  data() {
    return {

        active: false,
        value: null,


        showDialog: false,
        loading: false,
        erroLogin: false,
        imgLogo: {
            type: String,
            default: require("@/assets/img/voiplogo.png")
            },
            imgBack: {
            type: String,
            default: require("@/assets/img/bg.jpg")
            },
        login: {
            email: "luiz.lgvasconceslos2@gmail.com",
            password: "123456789"
        },

        ajuda: {
            email : ''
        }
    };
  },
  methods: {
    auth( ) {
      // your code to login user
      // this is only for example of loading
 
      this.loading = true
        setTimeout(() => {
            this.loading = false
        }, 1000);

      this.$http.post( this.$apiurl + 'login', this.login).then(response => {
        
            console.log(response.data)

            if (response.data.api_token) { 
                console.log(response)
                localStorage.setItem('api_token', response.data.api_token)
                localStorage.setItem('validade', JSON.stringify(response.data.api_token))
                localStorage.setItem('menus', JSON.stringify(response.data.menu))
                this.$router.push('/monitoramento')
                console.log('funfa ai mano')
            } 

        }, response => {  
            this.$notify({ group: 'foo', text: 'Usuário ou senha inválidos', type: 'danger' })
        }); 
    },
    resetPass(){
        console.log('reseting pass')
        this.showDialog = false

        if(this.ajuda.email !== '' && this.ajuda.email !== undefined){
            console.log('vamos resetar')
            this.$notify({ 
                group: 'foo', 
                text: '<h4>Se houver uma conta associada a este e-mail você receberá em breve um link para resetar sua senha</h4>.', 
                type: 'warning',
                speed: 1000, 
                width: 300 })

        }

    },
    cancelPass(){
        this.showDialog = false
        this.ajuda.email = ''
        console.log(this.ajuda.email)
    }
  }, 
    mounted: function(){
 

  }
};
</script>

<style lang="scss">
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  .title {
    text-align: center;
    margin-bottom: 30px;
    img {
      margin-bottom: 16px;
      max-width: 50%;
    }
  }
  .actions {
    .md-button {
      margin: 0;
    }
  }
  .form {
    margin-bottom: 60px;
  }
  .background {
    background: url("./../../assets/img/bg.jpg" );
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 0;
  }
  .md-content {
    z-index: 1;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
  }
  .loading-overlay {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
