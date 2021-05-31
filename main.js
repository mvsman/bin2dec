const input = document.querySelector('#input');
const output = document.querySelector('#output');
const convert = document.querySelector('#convert');

convert.addEventListener('click', convertToDecimal);


function convertToDecimal(){
   inputValue = input.value;
   if(!inputValue || !isFinite(inputValue)) return alert('Enter the number out of 0 and 1');
   for(let value of inputValue){
      if(value > 1 || !parseInt(inputValue.trim(), 2)) return alert('Enter the number out of 0 and 1')
   }
   return output.value = parseInt(inputValue, 2);
}
