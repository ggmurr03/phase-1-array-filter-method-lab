function findMatching(drivers, driverName) {
   return drivers.filter(driver=>driver.toLowerCase() === driverName.toLowerCase())
}

function fuzzyMatch(drivers,lettersEntered){
    return drivers.filter(letters=>letters[0].toLowerCase() === lettersEntered[0].toLowerCase())

}

function matchName(drivers,driverName){
    return drivers.filter(driver=>driver.name === driverName)
}