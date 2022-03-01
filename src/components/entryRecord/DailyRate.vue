<template>
    <div>
        <label for="dailyRate">A permanência é por diária?</label>
        <input type="checkbox" name="dailyRate" @click="changeDailyRateInput(input)" v-model="input" data-input>
    </div>
</template>
<script>
export default {
    data(){
        return{
            input: false
        }
    },
    methods:{
        changeDailyRateInput(value){
            this.$emit('emitDailyRateInput', value, 'dailyRate')
        }
    }
}
</script>
<style scoped>

</style>