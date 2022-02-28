import VehicleRecord from "@/components/entryRecord/EntryRecord.vue"
import { mount } from "@vue/test-utils"

it('It tests whether emit is working or not', ()=>{
    const wrapper = mount(VehicleRecord)
    wrapper.vm.$emit('input', false)
    console.log(wrapper.emitted('input'))
   

})

