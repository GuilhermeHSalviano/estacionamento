import LisencePlate from "@/components/entryRecord/LicensePlate.vue"
import { mount } from "@vue/test-utils"

test('It tests whether the emit is working', ()=>{
    const wrapper = mount(LisencePlate)
    await wrapper.setData({licensePlate: '12345'})
    wrapper.vm.$emit('emitLicensePlateNumber', wrapper.vm.licensePlate, 'licensePlate')
    console.log(wrapper.emitted('emitLicensePlateNumber'))
})