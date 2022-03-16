<template>
    <div class="exit">
        <div v-if="selectedVehicle.length >= 1">
            <label for="date">Selecionar data:</label>
            <input type="date" id="date" v-model="date">
            <label for="time">Selecionar horário:</label>
            <input type="time" id="time" v-model="time">
            <button @click="recordExit">Registrar</button>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        selectedVehicle: String
    },
    data(){
        return{
            date: '',
            time: ''
        }
    },
    methods:{
        recordExit(){
            if(this.date != '' && this.time != ''){
                this.$emit('emitExitData', this.date, this.time)
                this.date = this.time = ''
            }
        }
    }
}
</script>
<style scoped>

</style>