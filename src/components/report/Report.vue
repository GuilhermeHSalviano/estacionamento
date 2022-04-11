<template>
    <div class="report">
        <my-header></my-header>
        <to-filter @emitFilteredList = "setFilter"></to-filter>
        <div class="report__filtered">
            <li v-for="vehicle in filteredList">
                <p>Veículo: {{ vehicle.car == true? "Carro": "Moto" }}</p>
                <p>Placa: {{ vehicle.licensePlate }}</p>
                <p>Data de Entrada: {{ vehicle.entryDate }}</p>
                <p>Horário de Entrada: {{ vehicle.entryHour }}</p>
                <p>Data de Saída: {{ vehicle.exitDate }}</p>
                <p>Horário de Saída: {{ vehicle.exitHour }}</p>
                <p>Preço cobrado: {{ vehicle.totalCost }}</p>
            </li>
        </div>
    </div>
</template>
<script>
import MyHeader from "../shared/MyHeader.vue"
import Filter from '../report/Filter.vue'
import ReportOfVehicles from "../report/ReportOfVehicles.vue"
export default {
    components:{
        MyHeader,
        'to-filter': Filter,
        ReportOfVehicles
    },
    data(){
        return{
            filteredList: ''
        }
    },
    methods:{
        setFilter(filter){
            this.filteredList = filter
        }    
        
    }
}
</script>
<style scoped>
    .report{
        width: 100%;
    }
</style>