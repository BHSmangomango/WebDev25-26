/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/
function BMI(){
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let op = document.getElementById("output");
    let formula = ((weight) / (height**2)) * 703
    op.innerHTML = `Your BMI is ${formula}`;
    let filename = "";

    if (formula < 18.5){
       filename = "underweight.png";
    }elseif(formula >= 18.5 && formula <= 24.9){
       filename = "healthyweight.png";
    }elseif(formula >= 25 && formula <= 29.9){
       filename = "overweight.png";
    }elseif(formula >= 30 && formula <= 34.9){
       filename = "obeseweight.png";
    }elseif(formula >= 35){
       op.innerHTML = `extremely obese`;
    }
    op.innerHTML = `<img src="${filename}">`;
    }
}
