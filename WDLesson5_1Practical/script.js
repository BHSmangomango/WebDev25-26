/* Challenge 2: Create the function that will calculate the balance in an account using compound 
interest after t number of years.

Notes:
1) Don't let the formula scare you.  Simply translate it into JS
2) Create a for loop where the loop variable is t and the condition ends at the number of years 
the user specifies in the text input.
3) Use a build variable to create an output that looks like this
Year 1: $xxxxxx
Year 2: $xxxxxx
Year 3: $xxxxxx
...
Year N: $xxxxxx
*/

function Compound(){
      let P = parseFloat(document.getElementById("P").value);
      let R = parseFloat(document.getElementById("R").value);
      let N = parseInt(document.getElementById("N").value);
      let T = parseInt(document.getElementById("T").value);
      let op = document.getElementById("output");
      let build = "";
      for(let yrs = 0; yrs <= T; yrs+=1){
        let A = P * Math.pow((1+(R/100)/N), N * yrs)
        A = A.toFixed(2);
        build += `Year ${yrs}: $${A} <br>`
      }
      
      let total = P * Math.pow((1+(R/100)/N), N * T)
      total = total.toFixed(2);
      op.innerHTML = `${build} The total compound interest is $${total}`;
}