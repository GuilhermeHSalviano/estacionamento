<template>
    <div class="drcost">
        <h2>Preço da diária</h2>
        <div class="drcost__input-set" v-if="showInput">
            <label for="cost">Preço:</label>
            <input type="number" id="cost" v-model="dailyRateCost">
            <button @click="setDailyRateCost">Definir</button>
        </div>
        <div class="drcost__input-edit" v-else>
            <p>R$ {{ dailyRateCost }}</p>
            <button @click="editDailyRateCost">Editar</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            dailyRateCost: '',
            showInput: true
        }
    },
    methods:{
        setDailyRateCost(){
            this.$emit('emitDailyRateCost', this.dailyRateCost, 'dailyRateCost')
            this.showInput = false
        },
        editDailyRateCost(){
            this.showInput = true
        }
    }
}
</script>
<style scoped>

</style>