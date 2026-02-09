// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element

  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/

/* Challenge 2:  Create the function for Challenge 1 scenario */
function recArea(){
  let L = parseFloat(document.getElementById("length").value);
  let W = parseFloat(document.getElementById("width").value);
  let op = document.getElementById("output2");
  let message = ""
  let area = L * W

  if (L <= 0||W <= 0){
    message = `Inappropriate measurement`
    op.innerHTML = `${message}`;
  }else{
    op.innerHTML = `The area of lengths ${L} and widths ${W} is ${area}`;
  }
}



/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet(){
  let animal = document.getElementById("animal").value;
  let emotion = document.getElementById("emotion").value;
  let op = document.getElementById("output");
  let filename = ""
  
  if (animal == "Dog" && emotion == "Funny"){
   filename = "funnyDog.jpg"
  }
  if (animal == "Dog" && emotion == "Sad"){
    filename = "sadDog.jpg"
  }
  if (animal == "Bear" && emotion == "Funny"){
    filename = "funnyBear.jpg"
  }
  if (animal == "Bear" && emotion == "Sad"){
    filename = "sadBear.jpg"
  }
  if (animal == "Cat" && emotion == "Funny"){
    filename = "funnyCat.jpg"
  }
  if (animal == "Cat" && emotion == "Sad"){
    filename = "sadCat.jpg"
  }
op.innerHTML = `<img src="${filename}">`;
}