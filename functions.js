export function getVehicle(list, licensePlate){
    /**This function gets a vehicle object and its index based in the array of vehicles.*/
    for(let a = 0; list.length > a; a++){
        if(list[a].licensePlate == licensePlate){
            return [list[a], a]
        }
    }
    return false
}

export function getDate (date, time){
    /*This function creates a date object based in an especifc date and time. It's used in getStay method of the Vehicle class.*/
    const dateSplit = date.split('-')
    const timeSplit = time.split(':')

    const day = dateSplit[2]
    const month = dateSplit[1]
    const year = dateSplit[0]
    const hour = timeSplit[0]
    const minutes = timeSplit[1]
    
    const dateObject = new Date(year, month -1, day, hour, minutes)

    return dateObject
}

