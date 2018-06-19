// Given a set of integers, is there a non-empty subset whose sum is zero? For example, given the set { -7, -3, -2, 8, 5}, the answer is yes because the subset { -3, -2, 5} sums to zero. It is OK to assume the set has no more than 16 elements.

function subsetExists(set) {
  var posNeg = positiveNegative(set)
  if (posNeg["pos"].length === 0 || posNeg["neg"].length === 0) {
    return "No"
  } else if (oneToOne(copyPosNeg(posNeg))) {
    return "Yes"
  } else if (oneToMany(copyPosNeg(posNeg))) {
    return "Yes"
  } else if (manyToOne(copyPosNeg(posNeg))) {
    return "Yes"
  } else if (manyToMany(copyPosNeg(posNeg))) {
    return "Yes"
  } else {
    return "No"
  }
}

function copyPosNeg(posNeg) {
  return {
    pos: posNeg["pos"].slice(0, posNeg["pos"].length),
    neg: posNeg["neg"].slice(0, posNeg["neg"].length)
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

function oneToOne(posNeg) {
  for (var i = 0; i < posNeg["pos"].length; i++) {
    for (var j = 0; j < posNeg["neg"].length; j++) {
      if (posNeg["pos"][i] === posNeg["neg"][j]) {
        return true
      }
    }
  }

  return false
}

function oneToMany(posNeg) {
  for (var i = 0; i < posNeg["pos"].length; i++) {
    var remainder = posNeg["pos"][i] - posNeg["neg"][0]
    var newPosNeg

    if (posNeg["neg"] && posNeg["neg"].length === 1 && remainder === 0) {
      return true
    } else if (posNeg["neg"].length > 1) {
      posNeg["neg"].splice(0, 1)
      newPosNeg = {
        pos: [remainder],
        neg: posNeg["neg"]
      }

      if (remainder > 1) {
        return oneToMany(newPosNeg)
      }
    } else {
      return false
    }
  }
}

function manyToOne(posNeg) {
  for (var i = 0; i < posNeg["neg"].length; i++) {
    var remainder = posNeg["neg"][i] - posNeg["pos"][0]
    var newPosNeg

    if (posNeg["pos"] && posNeg["pos"].length === 1 && remainder === 0) {
      return true
    } else if (posNeg["pos"].length > 1) {
      posNeg["pos"].splice(0, 1)
      newPosNeg = {
        pos: [remainder],
        neg: posNeg["pos"]
      }

      if (remainder > 1) {
        return oneToMany(newPosNeg)
      }
    } else {
      return false
    }
  }
}

function manyToMany(posNeg) {
  return false
}

console.log(subsetExists([-7, -3, -2, 8, 5]))