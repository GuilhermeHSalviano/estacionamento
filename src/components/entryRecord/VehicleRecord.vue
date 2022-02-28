<template>
    <div>
        <label for="">O veículo é uma moto?</label>
        <input type="checkbox" name="car" v-model="input" class="input">
    </div>
</template>
<script>
export default {
   data() {
       return{
           input: false
       }
   },
   watch:{
       input(value){
           this.$emit('typeOfVehicle', value, 'vehicle')
        }
   }
}
</script>
<style scoped>

</style>