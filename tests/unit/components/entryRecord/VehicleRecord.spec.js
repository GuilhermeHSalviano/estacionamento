import VehicleRecord from "@/components/entryRecord/EntryRecord.vue"
import { mount } from "@vue/test-utils"

test('It tests whether emit is working or not', async()=>{
    const wrapper = mount(VehicleRecord)
    const input = wrapper.find('.input')
    await input.setChecked()
    expect(input.element.checked).toBeTruthy()
})

test('It test whether state input is changed when input is checked', async () => {
    const wrapper = mount(VehicleRecord)
    const input = wrapper.find('.input')
    await input.setChecked()
    console.log(wrapper.emitted('input'))
})

