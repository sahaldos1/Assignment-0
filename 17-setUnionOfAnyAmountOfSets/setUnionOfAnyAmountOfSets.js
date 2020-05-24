function setUnionOfAnyAmountOfSets(...args) {
  let union = new Set()

  for (var i = 0; i < arguments.length; i++) {

    for (let elem of arguments[i]) {
      union.add(elem);
    }

  }

  return union;


}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;