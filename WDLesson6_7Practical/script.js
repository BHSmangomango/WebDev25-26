let data, info;

async function init(){   
  let link = "mvc.json"; //let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    build += `<div class="fitted card">
                 <h3>${collision.borough}</h3>
                 <hr>
                 <p>${collision.zip_code}</p>
                 <p>${collision.vehicle_type_code1}</p>
                 <p>${collision.crash_date}</p>
                 <hr>
                 <p>${collision.on_street_name}</p>
                 <hr>
                 <p>${collision.off_street_name}</p>
              </div>`;    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function borough_name(){
  let output = document.getElementById("output");
  let borough = document.getElementById("boro").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.borough == borough){
      build += `<div class="fitted card">
                    <h3>${collision.borough}</h3>
                    <hr>
                    <p>${collision.zip_code}</p>
                    <p>${collision.vehicle_type_code1}</p>
                    <p>${collision.crash_date}</p>
                    <hr>
                    <p>${collision.on_street_name}</p>
                    <hr>
                    <p>${collision.off_street_name}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.
function zip_code_number(){
  let output = document.getElementById("output");
  let zipcode = document.getElementById("zip_code_digits").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.zip_code == zipcode){
      build += `<div class="fitted card">
                    <h3>${collision.borough}</h3>
                    <hr>
                    <p>${collision.zip_code}</p>
                    <p>${collision.vehicle_type_code1}</p>
                    <p>${collision.crash_date}</p>
                    <hr>
                    <p>${collision.on_street_name}</p>
                    <hr>
                    <p>${collision.off_street_name}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type.
function vehicle_type(){
  let output = document.getElementById("output");
  let vehicle_type = document.getElementById("vehicle_code1").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.vehicle_type_code1 == vehicle_type){
      build += `<div class="fitted card">
                    <h3>${collision.borough}</h3>
                    <hr>
                    <p>${collision.zip_code}</p>
                    <p>${collision.vehicle_type_code1}</p>
                    <p>${collision.crash_date}</p>
                    <hr>
                    <p>${collision.on_street_name}</p>
                    <hr>
                    <p>${collision.off_street_name}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function street_name_off(){
  let output = document.getElementById("output");
  let street_off = document.getElementById("street_off").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.off_street_name == street_off){
      build += `<div class="fitted card">
                    <h3>${collision.borough}</h3>
                    <hr>
                    <p>${collision.zip_code}</p>
                    <p>${collision.vehicle_type_code1}</p>
                    <p>${collision.crash_date}</p>
                    <hr>
                    <p>${collision.on_street_name}</p>
                    <hr>
                    <p>${collision.off_street_name}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function street_name_on(){
  let output = document.getElementById("output");
  let street_on = document.getElementById("street_on").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.on_street_name == street_on){
      build += `<div class="fitted card">
                    <h3>${collision.borough}</h3>
                    <hr>
                    <p>${collision.zip_code}</p>
                    <p>${collision.vehicle_type_code1}</p>
                    <p>${collision.crash_date}</p>
                    <hr>
                    <p>${collision.on_street_name}</p>
                    <hr>
                    <p>${collision.off_street_name}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function crash_date(){
  let output = document.getElementById("output");
  let crash_date = document.getElementById("date").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.crash_date == crash_date){
      build += `<div class="fitted card">
                    <h3>${collision.borough}</h3>
                    <hr>
                    <p>${collision.zip_code}</p>
                    <p>${collision.vehicle_type_code1}</p>
                    <p>${collision.crash_date}</p>
                    <hr>
                    <p>${collision.on_street_name}</p>
                    <hr>
                    <p>${collision.off_street_name}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}