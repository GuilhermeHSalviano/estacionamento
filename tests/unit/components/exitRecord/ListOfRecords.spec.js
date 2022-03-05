import { mount } from '@vue/test-utils'
import ListOfRecords from "../../../../src/components/exitRecord/ListOfRecords.vue"

test('It tests whether emit is working correctly', async () => {
    const wrapper = mount(ListOfRecords)
    await wrapper.setProps([{licensePlate: 'HMG8795'}])
    const options = wrapper.find('.records__select').findAll('option')
    console.log(options.length)
    await options.at(0).setSelected()
    expect(wrapper.find('option:checked').element.value).toBe('HMG8795')
})