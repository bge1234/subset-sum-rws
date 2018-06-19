// Given a set of integers, is there a non-empty subset whose sum is zero? For example, given the set { -7, -3, -2, 8, 5}, the answer is yes because the subset { -3, -2, 5} sums to zero. It is OK to assume the set has no more than 16 elements.

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