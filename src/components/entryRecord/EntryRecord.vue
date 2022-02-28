<template>
    <div class="content">
        <my-header></my-header>
        <vehicle-record @typeOfVehicle='setVehicle'></vehicle-record>
        <license-plate @emitLicensePlateNumber='setVehicle'></license-plate>
    </div>
</template>
<script>
import MyHeader from "../shared/MyHeader.vue"
import Vehicles from '../../../Vehicles.js'
import VehicleRecord from './VehicleRecord.vue'
import LicensePlate from "./LicensePlate.vue"
export default {
   components:{
       MyHeader,
       VehicleRecord,
       LicensePlate
   },
   data(){
       return{
           vehicle: Boolean,
           licensePlate: ''
       }
   },
   methods:{
       setVehicle(value, property){
           this[property] = value
       }
   }   
}
</script>
<style scoped>
    .content{
        width: 100%;
    }
</style>