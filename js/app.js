function getCount(product, price) {
  const productMemory = document.getElementById(product + '-cost');
  const  ProductMemoryText = productMemory.innerText
  let memoryNum = parseInt(ProductMemoryText);
   
  //price number
       if (price == 0) {
         memoryNum = price;
      }
      else if (price == 20) {
         memoryNum = price;
      }

      else if (price == 100) {
         memoryNum = price; 
      }
      
       else if (price == 180) {
         memoryNum = price;
      }

      productMemory.innerText = memoryNum;
  
   calculation()
}

function getInputValue(product){
   const  productMemory1 = document.getElementById(product + '-cost');
   const ProductMemoryText1 = productMemory1.innerText;
   let memoryNum1 = parseInt(ProductMemoryText1);
   return  memoryNum1;
  
}

//total calculation
function calculation() {
   
   const caseTota1 = getInputValue('memory');
   const caseTota2 = getInputValue('storage');
   const caseTota3 = getInputValue('delivery');
   const totalNumber = document.getElementById('first-Price');
   const totalPrice = totalNumber.innerText;
   const previousTotal = parseInt(totalPrice);
   //total price
   const totalp4 = caseTota1+caseTota2+caseTota3+previousTotal;
   //total percentage
   const total5 =(totalp4*20)/100;

   document.getElementById('total-cost').innerText = totalp4;
   
   document.getElementById('increment').innerText=totalp4 ;
   //input text
   const textInput= document.getElementById('input-text');
   const textEmpty=textInput.value;

   if(textEmpty=='stive'){
      document.getElementById('increment').innerText = total5;
   }
   
   textInput.value='';
}

//apply button
function applyButton(){
  calculation('input-text');
}

//Memory button1
document.getElementById('memory-button-1').addEventListener('click', function () {
   getCount('memory', 0);

})
//Memory button2
document.getElementById('memory-button-2').addEventListener('click', function () {
   getCount('memory', 180);

})
//Storage button1
document.getElementById('storage-button-1').addEventListener('click', function () {
   getCount('storage', 0);

})
// storage button2
document.getElementById('storage-button-2').addEventListener('click', function () {
   getCount('storage', 100);

})
//storage button3
document.getElementById('storage-button-3').addEventListener('click', function () {
   getCount('storage', 180);

})
//delivery button1
document.getElementById('delivery-button-1').addEventListener('click', function () {
   getCount('delivery', 0);

})
//delivery button2
document.getElementById('delivery-button-2').addEventListener('click', function () {
   getCount('delivery', 20);

})
