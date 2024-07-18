// TODO: this file! :)
let numberBank = [];
let evensBank = [];
let oddsBank = [];
form = document.getElementById("form");
//numberBankOutput = document.querySelector("#numberBank output")
numberBankOutput = document.getElementById("output");
oddsOutput = document.getElementById("oddsOutput");
evensOutput = document.getElementById("evensOutput");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const number = parseInt(numberInput.value);
  //console.log(number)
  if(!isNaN(number)){
  numberBank.push(number);
  update();
}
  form.reset();
});

sortOne = document.getElementById("sortOne");

sortOne.addEventListener("click", function (event) {
  event.preventDefault();
  if (numberBank[0] % 2 == 0) {
    evensBank.push(numberBank[0]);
    evensOutput.textContent = evensBank;}
    else{
        oddsBank.push(numberBank[0])
        oddsOutput.textContent = oddsBank;
    }
    numberBank.shift();
    update();
});

sortAll = document.getElementById("sortAll")

sortAll.addEventListener("click", function(event){
    event.preventDefault();
    for(item of numberBank){
        if(item%2==0){
            evensBank.push(item); 
        }
        else{
            oddsBank.push(item); 
        }
    }
        numberBank=[];
        oddsOutput.textContent=oddsBank;
        evensOutput.textContent=evensBank;
        update();
    
})

//update()

function update() {
  numberBankOutput.textContent = numberBank.join(", ");
}
