<template>
    <div>

        <div class="content margin-block"> 
            <multiple-select></multiple-select> 
        </div>

        <div class="content margin-block">
            <div id="box-ramais">
            <div class="md-layout" > 
                <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
                    <stats-card data-background-color="blue">
                    <template slot="header">
                        <md-icon style="font-size: 25px !important; margin: 0px !important;">phone</md-icon> 
                    </template>
                    <template slot="content">
                        <p class="category">Ativo</p>
                        <h4 class="title">Aguardando</h4>
                    </template> 
                    <template slot="footer">
                        <div class="stats flow-text" >
                            <center >
                                <span style="text-align: center !important;" class="h4 center-align span-dark-text" >7036 - José Carlos</span> <br>
                            </center>
                            <span class="valign-wrapper">
                                Aguardando
                            </span>
                        </div> 
                    </template> 
                    </stats-card>
                </div>

                <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
                    <stats-card data-background-color="green">
                    <template slot="header">
                        <md-icon>phone_callback</md-icon> 
                    </template>

                    <template slot="content">
                        <p class="category">Ativo</p>
                        <h4 class="title">00:26</h4>
                    </template> 

                        <template slot="footer">
                            <div class="stats flow-text" >
                                <center >
                                    <span style="text-align: center !important;" class="h4 center-align span-dark-text" >7068 - Janduy Euclides</span> <br>
                                </center>
                                <span class="  valign-wrapper">
                                    Recebido de 9999-8745
                                </span>
                            </div> 
                        </template> 

                    </stats-card>
                </div>

                <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
                    <stats-card data-background-color="green">
                    <template slot="header">
                        <i class="material-icons">
                        phone_forwarded
                        </i>
                    </template>

                    <template slot="content">
                        <p class="category">Ativo</p>
                        <h4 class="title">01:56</h4>
                    </template> 

                        <template slot="footer">
                            <div class="stats flow-text" >
                                <center >
                                    <span style="text-align: center !important;" class="h4 center-align span-dark-text" >7080 - Luciano</span> <br>
                                </center>
                                <span class="  valign-wrapper">
                                    Atendido por 9999-8745
                                </span>
                            </div> 
                        </template> 

                    </stats-card>
                </div>

                <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
                    <stats-card data-background-color="gray">
                    <template slot="header">
                        <md-icon>phone</md-icon> 
                    </template>

                    <template slot="content">
                        <p class="category">Inativo</p>
                        <h4 class="title">Inativo a 4h</h4>
                    </template> 

                        <template slot="footer">
                            <div class="stats flow-text" >
                                <center >
                                    <span style="text-align: center !important;" class="h4 center-align span-dark-text" >7077 - Luiz Gomes</span> <br>
                                </center>
                                <span class="valign-wrapper">
                                    Ramal Inativo
                                </span>
                            </div> 
                        </template> 

                    </stats-card>
                </div>
    
            </div>
            </div>
        </div> 
    </div>
</template>

<script>

import MultipleSelect from '@/components/Default/MultipleSelect.vue'
 
import {
  StatsCard,
} from "@/components";

export default {
    name: "ramais",
    components: {
        StatsCard,
        MultipleSelect
    }, 

    data(){
        return{
            
        }
    }
}
</script>

<style>

#box-ramais  .md-card > .md-card-header {
    padding: 0px !important;
    margin: 10px 0px 0px 10px !important;
}

.span-dark-text{
    color: black !important;
}

.margin-block{
    margin: 0px 0px 25px 0px !important;
}

</style>