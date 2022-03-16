<template>
    <div class="drcost">
        <h2>Preço da diária</h2>
        <label for="cost">Preço:</label>
        <input type="number" id="cost" v-model="dailyRateCost">
        <button>Definir</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            dailyRateCost: ''
        }
    },
    methods:{
        setDailyRateCost(){
            this.$emit('emitDailyRateCost', this.dailyRateCost)
        }
    }
}
</script>
<style scoped>

</style>