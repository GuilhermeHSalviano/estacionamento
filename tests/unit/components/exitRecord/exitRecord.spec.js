import { mount } from '@vue/test-utils'
import ExitRecord from '../../../../src/components/exitRecord/ExitRecord.vue'

/*This is the only test file that is not working.*/

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
                      "dailyRate": true
                    }
                  ],
                selectedPlate: 'hmg8795'
            }
        }
    })

    const tableOfPrices = [
        {
            "dailyRateCost": "20",
            "stayCost": {
                "untilFifteenMinutes": "01",
                "untilThirtyMinutes": "2",
                "untilOneHour": "3",
                "additionalThirtyMinutes": "1.5"
            }
        },
        {
            "dailyRateCost": "30",
            "stayCost": {
                "untilFifteenMinutes": "02",
                "untilThirtyMinutes": "4",
                "untilOneHour": "6",
                "additionalThirtyMinutes": "3"
            }
        }
    ]
    
    wrapper.vm.setExitData("1992-01-03", "10:00")
    expect(wrapper.vm.listOfVehicles[0].exitDate).toEqual("1992-01-01")
    expect(wrapper.vm.listOfVehicles[0].exitHour).toEqual("10:00")
    expect(wrapper.vm.listOfVehicles[0].totalCost).toEqual(30)
    console.log(wrapper.vm.listOfVehicles)

})

