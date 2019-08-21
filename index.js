function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const lotteryNumbers = [2, 4, 5, 2]
  lotteryNumbers.forEach(callback)
  return lotteryNumbers
}

function doToArray(array, callback) {
  array.forEach(callback)
} 
