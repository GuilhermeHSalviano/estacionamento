<template>
    <header class="header">
        <h1>Pit-stop estacionamento</h1>
        <nav>
           <li v-for="route in routes"><router-link :to="route.path ? route.path : '/'">{{ route.title }}</router-link></li>
        </nav>
    </header>
</template>
<script>
import {routes} from "../../../routes.js"
export default {
    data(){
        return{
            routes
        }
    }
}
</script>
<style scoped>
    .header{
        background-color: yellow;
        height: 7rem;
        width: 100%;
    }
</style>