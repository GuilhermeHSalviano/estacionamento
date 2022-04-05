<template>
    <div class="price">
        <my-header></my-header>
        <h1>Tabela de preços</h1>
        <h2>Carros:</h2>
        <daily-rate-cost @emitDailyRateCost = 'defineCarPrice' ></daily-rate-cost>
        <stay-price @emitStay = 'defineCarPrice' ></stay-price>
        <h2>Motos:</h2>
        <daily-rate-cost @emitDailyRateCost = 'defineMotoPrice' ></daily-rate-cost>
        <stay-price @emitStay = 'defineMotoPrice' ></stay-price>
        <button @click = "savePrices" >Salvar</button>
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
            moto: {
                dailyRateCost:'',
                stayCost: ''
            },
            car:{
                dailyRateCost: '',
                stayCost: ''

            },
            showInput: ''
        }
    },
    methods:{
        defineCarPrice(price, time){
            this.car[time] = price
        },
        defineMotoPrice(price, time){
            this.moto[time] = price
        },
        savePrices(){
            localStorage.setItem('prices', JSON.stringify([this.moto, this.car]))
        }
    }
}
</script>
<style scoped>
    .price{
        width: 100%;
    }
</style>