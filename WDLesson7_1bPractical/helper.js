//The function get() below accepts an id of an element and returns the actual element with that id.
//This function serves to shorten the code previously used to get an element with getElementByID().
function get(id){
  return document.getElementById(id);
}

//Challenge 1: Create a function card() that accepts the JSON data for each violation, then generates and returns an appropriate card for the violation.
function card(CardInfo){
  build = "";
  build += `<div class="card">
                 <h3>Summon#: ${CardInfo.summons_number}</h3>
                 <hr>
                 <p>Plate: ${CardInfo.plate}</p>
                 <p>Licence type: ${CardInfo.license_type}</p>
                 <p>${CardInfo.violation}</p>
                 <hr>
                 <p>Issued on ${CardInfo.issue_date}</p>
                 <hr>
                 <p>${CardInfo.issuing_agency}</p>
            </div>`;

  return build;
}
