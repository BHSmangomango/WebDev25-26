
//  For each challenge fix the error and explain the correction in the comment


/* Challenge 4: Does the function name match the event handler referenced in the event listener? */
function cylinder(){ /* function name mismatch: average/avg */
  /* Challenge 5: Are there any errors in retrieving and parsing the information from the text inputs? */
  let r = parseInt(document.getElementById("r").value); /* its getElementById */
  let height = parseInt(document.getElementbyId("height").value); /* wrong variable calling */

  /* Challenge 6: Does the variable output correctly create a reference to the output container? */
  let output = document.getElementById("output"); /* doesn't need .value*/

  /* Challenge 7: Is the following calculation for volume of a cylinder correct? */
  let v = math.PI * math.pow(r,2) * height;  /* used wrong variable for height and theres no divison in the formula */

  /* Challenge 8: Are there any errors in displaying the output? */
  output.innerHTML = `Volume of the cylinder is ${v}`; /* didn't end with backticks */
}