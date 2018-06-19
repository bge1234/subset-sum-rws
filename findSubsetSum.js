// Given a set of integers, is there a non-empty subset whose sum is zero? For example, given the set { -7, -3, -2, 8, 5}, the answer is yes because the subset { -3, -2, 5} sums to zero. It is OK to assume the set has no more than 16 elements.

function findSubset(set) {
  var posNeg = positiveNegative(set)
  if (oneToOne(posNeg)) {
    return "Yes"
  } else if (oneToMany(posNeg)) {
    return "Yes"
  } else if (manyToOne(posNeg)) {
    return "Yes"
  } else if (manyToMany(posNeg)) {
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
      posNeg["neg"].push(set[i])
    }
  }

  return posNeg;
}

function oneToOne(posNeg) {
  for (var i = 0; i < posNeg["pos"].length; i++) {
    for (var j = 0; j < posNeg["neg"].length; j++) {
      if (posNeg["pos"][i] === -1 * posNeg["neg"][j]) {
        return true
      }
    }
  }

  return false
}

function oneToMany(posNeg) {
  return false
}

function manyToOne(posNeg) {
  return false
}

function manyToMany(posNeg) {
  return false
}

console.log(findSubset([-7, -3, -2, 8, 5]))