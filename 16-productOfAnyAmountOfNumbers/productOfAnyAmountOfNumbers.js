function productOfAnyAmountOfNumbers(...args) {
  var s = 1;

    for (var i = 0; i < arguments.length; i++) {
        s *= arguments[i];
    }
    return s;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;