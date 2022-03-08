export function getVehicle(list, licensePlate){
    for(let a = 0; list.length > a; a++){
        if(list[a].licensePlate == licensePlate){
            return list[a]
        }
    }
    return false
}