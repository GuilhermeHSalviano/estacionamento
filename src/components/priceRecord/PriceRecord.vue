<template>
    <div class="price">
        <my-header></my-header>
        <h1>Tabela de preços</h1>
        <daily-rate-cost @emitDailyRateCost = 'definePrice' ></daily-rate-cost>
        <stay-price @emitStay='definePrice'></stay-price>
        <button @click="savePrices">Salvar</button>
    </div>
</template>
<script>
import MyHeader from '../shared/MyHeader.vue'
import DailyRateCost from '../priceRecord/DailyRateCost.vue'
import StayPrice from '../priceRecord/StayPrice.vue'
export default {
    components:{
        MyHeader,
        DailyRateCost,
        StayPrice
    },
    data(){
        return{
            dailyRateCost: '',
            stayCost: '',
            showInput: ''
        }
    },
    methods:{
        definePrice(price, time){
            this[time] = price
        },
        savePrices(){
            localStorage.setItem('prices', JSON.stringify([this.dailyRateCost, this.stayCost]))
        }
    }
}
</script>
<style scoped>
    .price{
        width: 100%;
    }
</style>