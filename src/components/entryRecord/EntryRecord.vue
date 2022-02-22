<template>
    <div class="content">
        <my-header></my-header>
    </div>
</template>
<script>
import MyHeader from "../shared/MyHeader.vue"
export default {
   components:{
       MyHeader
   }
}
</script>
<style scoped>
    .content{
        width: 100%;
    }
</style>