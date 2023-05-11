const longestEvenWord = function(sentence) {
  // console.log(sentence.split(' ')[0].length)
  let evenContainer = []
  for (let element of sentence.split(' ')) {
    if (element.length % 2 === 0) {
      evenContainer.push(element.length)
    }
  }
  if (Math.max(...evenContainer) % 2 === 0) {
    console.log(Math.max(...evenContainer))
  } else {
    console.log('00')
  }
  // console.log(Math.max(...evenContainer))
}

longestEvenWord('Tim t write great coe')
longestEvenWord('It is a pleasant day today')

const subArraySums = function(arr, n) {
  let ascendingSum = 0
  let descendingSum = 0

  if (n < 3 || arr === null) {
    console.log(-1)
  }

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i - 1] === undefined ||
      arr[i] < arr[i + 1] ||
      (arr[i] < arr[i + 1] && arr[i] > arr[i - 1])
    ) {
      ascendingSum += arr[i]
    } else if (arr[i] > arr[i + 1]) {
      descendingSum += arr[i]
    }
  }

  console.log(ascendingSum, descendingSum)
}

subArraySums([3, 8, 14, 12, 10, 7, 4])
