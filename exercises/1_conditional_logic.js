function paintMixer(color1, color2) {
  /*
  Add code here that will take the two string params and
  return a value as to what those two colors would create when mixed:

  * blue and red should mix to return 'purple'
  * green and red should mix to return 'brown'
  * blue and yellow should mix to return 'green'
  * red and yellow should mix to return 'orange'
  * anything with unknown colors should return a result of 'unknown'.

  The order of the params should not matter.
  */
  // PLACE YOUR CODE BELOW
  const basePaintCollection = ["red", "blue", "orange", "yellow", "green"];

  if (
    !basePaintCollection.includes(color1) ||
    !basePaintCollection.includes(color2)
  ) {
    console.log("unknown");
  } else if (
    (color1 === "red" && color2 === "blue") ||
    (color1 === "blue" && color2 === "red")
  ) {
    console.log("purple");
  } else if (
    (color1 === "red" && color2 === "green") ||
    (color1 === "green" && color2 === "red")
  ) {
    console.log("brown");
  } else if (
    (color1 === "red" && color2 === "yellow") ||
    (color1 === "yellow" && color2 === "red")
  ) {
    console.log("orange");
  } else if (
    (color1 === "blue" && color2 === "yellow") ||
    (color1 === "yellow" && color2 === "blue")
  ) {
    console.log("green");
  }
  // PLACE YOUR CODE ABOVE
}

paintMixer("blue", "red") === "purple" && console.log("First mix worked");
paintMixer("red", "green") === "brown" && console.log("Second mix worked");
paintMixer("red", "yellow") === "orange" && console.log("Third mix worked");
paintMixer("green", "red") === "brown" && console.log("Fourth mix worked");
paintMixer("blue", "yellow") === "green" && console.log("Fifth mix worked");
paintMixer("apple", "frog") === "unknown" &&
  console.log("Apples and frogs don't mix, as expected");

/*
If everything works, you should see the following on the console
when run with "node 1_conditional_logic.js":

First mix worked
Second mix worked
Third mix worked
Fourth mix worked
Fifth mix worked
Apples and frogs don't mix, as expected
*/
