import { getDate, getVehicle, getStay, getStayPrice } from "../../../functions.js"

describe('It tests if getVehicle function is working correctly', () => {
    test('It tests if getVehicle function is returning the right vehicle', () => {
        const listOfVehicle = [
            {
                "car": true,
                "licensePlate": "hmh1720",
                "entryDate": "1992-01-01",
                "entryHour": "01:00",
                "dailyRate": false
            },
            {
                "car": true,
                "licensePlate": "hmg3549",
                "entryDate": "1992-01-01",
                "entryHour": "01:00",
                "dailyRate": false
            },
            {
              "car": true,
              "licensePlate": "hmg8795",
              "entryDate": "1992-01-01",
              "entryHour": "01:00",
              "dailyRate": false
            }
          ]
        const result = getVehicle(listOfVehicle, 'hmg8795')
        expect(result).toEqual([listOfVehicle[2], 2])
    })
    
    test('It tests if getVehicle function is returning false', () => {
        const listOfVehicle = [
            {
              "car": true,
              "licensePlate": "hmg8793",
              "entryDate": "1992-01-01",
              "entryHour": "01:00",
              "dailyRate": false
            }
          ]
        const result = getVehicle(listOfVehicle, 'hmg8795')
        expect(result).toBe(false)
    })

    
})

test('It tests whether getDate is returning a date object', () => {
	const date = getDate('1992-02-13', "15:00")
	expect(date).toEqual('1992-02-13T15:00')
})

test('It tests if getStayPrice is returning the right value', () => {
      const stay = 70
      const tableOfPrices = {
        "untilFifteenMinutes": 2,
        "untilThirtyMinutes": 4,
        "untilOneHour": 6,
        "additionalThirtyMinutes": 3
    }

    const price = getStayPrice(stay, tableOfPrices)
    expect(price).toEqual(12)
})


