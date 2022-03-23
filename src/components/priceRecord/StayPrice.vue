<template>
    <div class="stay">
        <h2>Preço da permanência</h2>
        <div class="stay__input-set" v-if="showInput">
            <label for="">Até 15 minutos:</label>
            <input type="number" v-model="tableOfPrices.untilFifteenMinutes">
            <label for="">Até 30 minutos:</label>
            <input type="number" v-model="tableOfPrices.untilThirtyMinutes">
            <label for="">Até uma hora</label>
            <input type="number" v-model="tableOfPrices.untilOneHour">
            <label for="">30 minutos adicionais:</label>
            <input type="number" v-model="tableOfPrices.additionalThirtyMinutes">
            <button @click="setStay">Definir</button>
        </div>
        <div class="stay__input-edit" v-else>
            <p>Até 15 minutos: {{ untilFifteenMinutes }}</p>
            <p>Até 30 minutos: {{ untilThirtyMinutes }}</p>
            <p>Até uma hora: {{ untilOneHour }}</p>
            <p>Meia hora adicional: {{ additionalThirtyMinutes }}</p>
            <button @click="editStay">Editar</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            showInput: true,
            tableOfPrices:{
                untilFifteenMinutes: 0,
                untilThirtyMinutes: 0,
                untilOneHour: 0,
                additionalThirtyMinutes: 0
            }
            
        }
    },
    methods:{
        setStay(){
            this.$emit('emitStay', this.tableOfPrices)
            this.tableOfPrices.untilFifteenMinutes = 
            this.tableOfPrices.untilThirtyMinutes = 
            this.tableOfPrices.untilOneHour = 
            this.tableOfPrices.additionalThirtyMinutes = ''
            this.showInput = false
        },
        editStay(){
            this.showInput = true
        }
    }
}
</script>
<style scoped>

</style>