<template>
    <div>
        <label for="">O veículo é um carro?</label>
        <input type="checkbox" name="car" v-model="input" checked @click="changeTypeOfVehicle(input)" data-input>
    </div>
</template>
<script>
export default {
   data() {
       return{
           input: true
       }
   },
   methods:{
        changeTypeOfVehicle(value){
           this.$emit('emitTypeOfVehicle', value, 'vehicle')
        }
   }
}
</script>
<style scoped>

</style>