

const locations = [[1,1], [1,2], [3,3], [4,1], [2,2], [2,3]]
let invalidLocationCounter = 0;
for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]
    let invalidLocation = "";
    if (currentLocation[0] > 2) {
         invalidLocation = true
         invalidLocationCounter++;
    }

    if (invalidLocation) {
        console.log("This location is invalid")
    }
}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
console.log(`There were ${invalidLocationCounter} invalid locations`)