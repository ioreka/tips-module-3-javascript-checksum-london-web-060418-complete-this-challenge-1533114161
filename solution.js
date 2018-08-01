//create a function to find the checksum of an array or arrays

//create blank 'checksum' array
//go through each array in dataset
//sort by order
//subtract smallest from largest
//push result into checksum array
// .reduce checksum array

let checksumArray = []

function checksum(data) {
  data.forEach(function(single_array) {
    // console.log(single_array)
    sortArray(single_array)
    // console.log(single_array)
  })
  //reduceChecksumArray(checksumArray)
}

function findArrayChecksum(array) {
  // subtracts smallest int from largest int
  // pushes returned number into checksumArray
}


function sortArray(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  })
}


function reduceChecksumArray(array) {
  array.reduce
}
