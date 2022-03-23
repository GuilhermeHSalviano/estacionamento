import { mount } from '@vue/test-utils'
import ExitRecord from '../../../../src/components/exitRecord/ExitRecord.vue'

test('It tests if listOfRecord has been set correctly after setExitData has been called', () => {
    const wrapper = mount(ExitRecord, {
        data(){
            return{
                listOfVehicles: [
                    {
                      "car": true,
                      "licensePlate": "hmg8795",
                      "entryDate": "1992-01-01",
                      "entryHour": "01:00",
                      "dailyRate": false
                    }
                  ],
                selectedPlate: 'hmg8795'
            }
        }
    })

    wrapper.vm.setExitData("1992-01-01", "10:00")
    expect(wrapper.vm.listOfVehicles[0].exitDate).toEqual("1992-01-01")
    expect(wrapper.vm.listOfVehicles[0].exitHour).toEqual("10:00")
    console.log(wrapper.vm.listOfVehicles)

})