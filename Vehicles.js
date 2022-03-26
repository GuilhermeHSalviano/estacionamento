import { getDate } from "./functions"

export class Vehicle{
    constructor(car = '', licensePlate = '', entryDate = '', entryHour = '', dailyRate = ''){
        this.car = car 
        this.licensePlate = licensePlate
        this.entryDate = entryDate
        this.entryHour = entryHour
        this.dailyRate = dailyRate
    }
    /*This method gets the stay in minutes of a given Vehicle object.*/
    getStay(){
        const entry = getDate(this.entryDate, this.entryHour)
        const exit = getDate(this.exitDate, this.exitHour)
        const diff = Math.abs(entry.getTime() - exit.getTime())
        
        const minutes = Math.ceil(diff / (1000 * 60))
        return minutes
    }

    /*It returns the price that the costumer should pay after a given stay.*/
    getStayPrice(stay, tableOfPrices){
        if(stay < 15){
            return tableOfPrices.untilFifteenMinutes 
        } else if(stay < 15 && stay < 30){
            return tableOfPrices.untilThirtyMinutes
        } else if(stay > 30 && stay < 60){
            return tableOfPrices.untilOneHour
        } else if(stay > 60){
            let overThirtyMinutes = stay - 60
            let integers = parseInt(overThirtyMinutes / 30)
            let total = (integers * tableOfPrices.additionalThirtyMinutes) + ((overThirtyMinutes % 30) > 0 ? tableOfPrices.additionalThirtyMinutes : 0)
            return total + tableOfPrices.untilOneHour
        }
        
    }
}



