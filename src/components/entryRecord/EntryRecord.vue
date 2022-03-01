<template>
    <div class="content">
        <my-header></my-header>
        <vehicle-record @emitTypeOfVehicle='setVehicle'></vehicle-record>
        <license-plate @emitLicensePlateNumber='setVehicle'></license-plate>
        <set-time @emitTime="setTime"></set-time>
        <daily-rate @emitDailyRate='setVehicle'></daily-rate>
        <button class="save" @click="saveRecord">Concluir cadastro</button>
    </div>
</template>
<script>
import MyHeader from "../shared/MyHeader.vue"
import Vehicles from '../../../Vehicles.js'
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
           vehicle: true,
           licensePlate: '',
           date: '',
           time: '',
           dailyRate: false
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
           const record = new Vehicle(this.vehicle, this.licensePlate, this.date, this.time, this.dailyRate)
       }
   }   
}
</script>
<style scoped>
    .content{
        width: 100%;
    }
</style>