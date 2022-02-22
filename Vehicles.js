export default class Vehicles{
    constructor(vehicle = '', entryDate = '', entryHour = '', exitDate = '', exitHour = '', diary = false){
        this.vehicle = vehicle 
        this.entryDate = entryDate
        this.entryHour = entryHour
        this.exitDate = exitDate
        this.exitHour = exitHour
        this.diary = diary
    }
}