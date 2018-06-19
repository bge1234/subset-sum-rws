function subsetExists(set) {
  var posNeg = positiveNegative(set)
  if (posNeg["pos"].length === 0 || posNeg["neg"].length === 0) {
    return "No"
  } else if (compare(getCombinations(posNeg["pos"]), getCombinations(posNeg["neg"]))) {
    return "Yes"
  } else {
    return "No"
  }
}

function positiveNegative(set) {
  var posNeg = {
    pos: [],
    neg: []
  }

  for (var i = 0; i < set.length; i++) {
    if (set[i] > 0) {
      posNeg["pos"].push(set[i])
    } else if (set[i] < 0) {
      posNeg["neg"].push(-1 * set[i])
    }
  }

  return posNeg;
}

function compare(pos, neg) {
  for (var i = 0; i < pos.length; i++) {
    for (var j = 0; j < neg.length; j++) {
      if (pos[i] === neg[j]) {
        return true
      }
    }
  }

  return false
}

function getCombinations(array) {
  var combos = []

  // Start with individual values
  for (var i = 0; i < array.length; i++) {
    combos.push(array[i])
  }

  // Continue with permuted combinations
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      combos.push(array[i] + array[j])
    }
  }

  // Final combination is sum of all values
  var acc = 0

  for (var i = 0; i < array.length; i++) {
    acc += array[i]
  }
  combos.push(acc)

  return combos
}

function tests() {
  console.log("-- positiveNegative([-1, -2, -3, 1, 2, 3]) --")
  console.log("Should be [1, 2, 3] on both sides --> ", positiveNegative([-1, -2, -3, 1, 2, 3]))
  console.log()

  console.log("-- getCombinations([1, 2, 3]) --")
  console.log("Should be [1, 2, 3, 3, 4, 5, 6] --> ", getCombinations([1, 2, 3]))
  console.log()

  console.log("-- compare() and subsetExists() --");
  console.log("[] should be 'No' --> ", subsetExists([]))
  console.log("[-1] should be 'No' --> ", subsetExists([-1]))
  console.log("[1] should be 'No' --> ", subsetExists([1]))
  console.log("[-1, 1] should be 'Yes' --> ", subsetExists([-1, 1]))
  console.log("[-1, -2, 3] should be 'Yes' --> ", subsetExists([-1, -2, 3]))
  console.log("[-1, -3, 3] should be 'Yes' --> ", subsetExists([-1, -3, 3]))
  console.log("[-1, -3, 2, 4] should be 'Yes' --> ", subsetExists([-1, -3, 2, 4]))
  console.log("[-1, -3, 2, 4, 5] should be 'Yes' --> ", subsetExists([-1, -3, 2, 4, 5]))
  console.log("[-3, -6, 2, 4, 5] should be 'Yes' --> ", subsetExists([-3, -6, 2, 4, 5]))
  console.log("[-3, -6, 2, 5, 11] should be 'No' --> ", subsetExists([-3, -6, 2, 5, 11]))
  console.log("[-7, -3, -2, 8, 5] should be 'Yes' --> ", subsetExists([-7, -3, -2, 8, 5]))
}

console.log(tests());