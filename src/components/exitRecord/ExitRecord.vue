<template>
    <div class="exit">
        <my-header></my-header>
        <list-of-records :vehicles='listOfVehicles' @emitSelectedPlate='setSelectedPlate'></list-of-records>
        <h3 v-if="selectedPlate != ''">Veículo selecionado:</h3>
        <h3>{{ selectedPlate }}</h3>
        <set-exit :selectedVehicle='selectedPlate' @emitExitData="setExitData"></set-exit>
    </div>
</template>
<script>
import MyHeader from "../shared/MyHeader.vue"
import ListOfRecords from './ListOfRecords.vue'
import SetExit from "./SetExit.vue"

export default {
    components:{
        MyHeader,
        ListOfRecords,
        SetExit
    },
    data(){
        return{
            listOfVehicles: '',
            selectedPlate: ''
        }
    },
    created(){
        if(localStorage.getItem('saveRecord')){
           this.listOfVehicles = JSON.parse(localStorage.getItem('saveRecord'))
       }
    },
    methods:{
        setSelectedPlate(value){
            this.selectedPlate = value
        },
        setExitData(){
            
        }
    }
}
</script>
<style scoped>
    .exit{
        width: 100%;
    }
</style>