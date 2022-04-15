<template>
    <div class="content">
        <my-header></my-header>
        <div class="content__record">
            <vehicle-record @emitTypeOfVehicle='setVehicle'></vehicle-record>
            <license-plate @emitLicensePlateNumber='setVehicle' :clear='clear'></license-plate>
            <set-time @emitTime="setTime" :clear=clear></set-time>
            <daily-rate @emitDailyRateInput='setVehicle'></daily-rate>
            <button type="button" class="save btn btn-primary" @click="saveRecord">Concluir cadastro</button>
        </div>
    </div>
</template>
<script>
import MyHeader from "../shared/MyHeader.vue"
import { Vehicle } from '../../../Vehicles.js'
import VehicleRecord from './VehicleRecord.vue'
import LicensePlate from "./LicensePlate.vue"
import SetTime from "./SetTime.vue"
import DailyRate from './DailyRate.vue'
export default {
   components:{
       MyHeader,
       VehicleRecord,
       LicensePlate,
       SetTime,
       DailyRate
       
   },
   data(){
       return{
           listOfVehicles: [],
           car: true,
           licensePlate: '',
           date: '',
           time: '',
           dailyRate: false,
           clear: false
       }
   },
   methods:{
       setVehicle(value, property){
           this[property] = value
       },
       setTime(time, date){
           this.date = date
           this.time = time
       },
       saveRecord(){
           const record = new Vehicle(this.car, this.licensePlate, this.date, this.time, this.dailyRate)
           this.listOfVehicles.push(record)
           localStorage.setItem('saveRecord', JSON.stringify(this.listOfVehicles))
           this.clear = (!this.clear)
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
    .content{
        width: 100%;
    }
    .content__record{
        margin-left: 5px;
    }
</style>