<template>
    <div>
        <label for="">Placa:</label>
        <input type="text" v-model="licensePlate">
    </div>
</template>
<script>
export default {
    data(){
        return{
            licensePlate: ''
        }
    },
    watch:{
        licensePlate(value){
            this.$emit('emitLicensePlateNumber', value, 'licensePlate')
        }
    }
}
</script>
<style scoped>

</style>