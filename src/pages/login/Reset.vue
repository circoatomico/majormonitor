<template>

<md-dialog :md-active.sync="showDialog"> 

      <md-tabs md-dynamic-height>
        <md-tab style="color: black;" md-label="Resetar a senha"> 
        <md-field>
            <label>Initial Value (Read Only)</label>
            <md-input  readonly></md-input>
        </md-field>
        </md-tab>
 
      </md-tabs>

      <md-dialog-actions>
        <md-button class="md-primary" @click="cancelPass()">Close</md-button>
        <md-button class="md-primary" @click="resetPass()">Save</md-button>
      </md-dialog-actions>
</md-dialog>
    
</template>

<script>

export default {
    name: "resetar"
}
</script>
    