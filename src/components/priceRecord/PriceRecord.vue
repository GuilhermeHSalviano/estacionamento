<template>
    <div class="price">
        <my-header></my-header>
        <h1>Tabela de preços</h1>
        <daily-rate-cost :emitDailyRateCost='defineDailyRateCost'></daily-rate-cost>
        <stay-price></stay-price>
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
            dailyRateCost: ''
        }
    },
    methods:{
        defineDailyRateCost(price){
            this.dailyRateCost = price
        }
    }
}
</script>
<style scoped>
    .price{
        width: 100%;
    }
</style>