<template>
    <div>
        <h2>Cadastrar horário de entrada:</h2>
        <label for="">Data</label>
        <input type="date" v-model="date">
        <label for="">Horário</label>
        <input type="time" v-model="time">
    </div>
</template>
<script>
export default {
    data(){
        return{
            date: '',
            time: '',
        }
    },
    watch:{
        time(time){
            if(this.date && time != ''){
                this.$emit('emitTime', time, this.date)
            }
        },
        clear(value){
            this.date = this.time = ''
        }
    },
    props:{
        clear: Boolean,
    }
}
</script>
<style scoped>

</style>