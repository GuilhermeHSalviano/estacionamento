<template>
    <div class="records">
        <select name="listOfVehicles" v-model="selectedPlate" class="records__select">
            <option disabled value="Selecione o veículo desejado">Selecione o veículo desejado</option>
            <option v-for = "vehicle in vehicles" :key="vehicle.licensePlate" value="vehicle.licensePlate">{{ vehicle.licensePlate }}</option>
        </select>
    </div>
</template>
<script>
export default {
    data(){
        return{
            selectedPlate: 'Selecione o veículo desejado'
        }
    },
    props:{
        vehicles:{
            Type: Array
        }
    },
    watch:{
        plateSelected(){
            this.$emit('emitSelectedPlate', this.selectedPlate)
        }
    }
}
</script>
<style scoped>

</style>