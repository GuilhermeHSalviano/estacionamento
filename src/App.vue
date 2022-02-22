<template>
  <div id="app">
	  <entry-record></entry-record>
  </div>
</template>

<script>
import EntryRecord from "./components/entryRecord/EntryRecord.vue"
export default {
    components:{
		EntryRecord
    }
}
</script>

<style>
    #app{
        display: flex;
    }
</style>
