<template>
    <div class="vehicles">
        <p>{{ be }}</p>
    </div>
</template>
<script>

export default {
   props:{
       between: ''
   },
   data(){
       return{
           filteredReport:''
       }
   }
}
</script>
<style scoped>

</style>