<template>
    <div class="content">
        <my-header></my-header>
        <vehicle-record></vehicle-record>
    </div>
</template>
<script>
import MyHeader from "../shared/MyHeader.vue"
import Vehicles from '../../../Vehicles.js'
import VehicleRecord from './VehicleRecord.vue'
export default {
   components:{
       MyHeader,
       VehicleRecord
   }
}
</script>
<style scoped>
    .content{
        width: 100%;
    }
</style>