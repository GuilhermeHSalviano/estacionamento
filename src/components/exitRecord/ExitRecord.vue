<template>
    <div class="exit">
        <my-header></my-header>
        <list-of-records :vehicles='listOfVehicles' @emitSelectedPlate=''></list-of-records>
    </div>
</template>
<script>
import MyHeader from "../shared/MyHeader.vue"
import ListOfRecords from './ListOfRecords.vue'

export default {
    components:{
        MyHeader,
        ListOfRecords
    },
    data(){
        return{
            listOfVehicles: ''
        }
    },
    created(){
        if(localStorage.getItem('saveRecord')){
           this.listOfVehicles = JSON.parse(localStorage.getItem('saveRecord'))
       }
    }
}
</script>
<style scoped>
    .exit{
        width: 100%;
    }
</style>