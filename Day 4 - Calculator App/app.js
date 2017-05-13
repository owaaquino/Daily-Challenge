var calcScreen = document.getElementById("calcScreen");
var numBtn = document.getElementById("calcBtns");

var num1 = 0;
var num2 = 0;
var operators = '';
var totalVal = 0;

numBtn.addEventListener("click", e => {
  var calcScrn = calcScreen;  

  if (e.target.className === "clearBtn") {
    calcScrn.value = "";  
    num1 = 0;
    num2 = 0;
    totalVal = 0;
    operators = '';
  }

  //storing first added numbers to num1 variable 
  if (e.target.className === "numValue") {
    var numValue = e.target;
    calcScrn.value += numValue.textContent;
    num1 = calcScrn.value;
    totalVal = num1;
    console.log(parseFloat(num1));
  }
  
  // selecting operation 
  if (e.target.className === "operator"){    

    //transfer value of totalVal to num2
    num2 = totalVal;    
    console.log('num2 upon operator selection is ' + num2);
    //return num1 to 0.
    //return totalVal - ;
    num1 = 0; 
    totalVal = 0;   

    var opBtn = e.target;
    if(opBtn.textContent === '+'){
      console.log('You selected addition');
      operators = 'add';
      calcScrn.value = "";
    }else if(opBtn.textContent === '-'){
      console.log('You selected subtraction');
      operators = 'minus';
      calcScrn.value = "";
    }else if(opBtn.textContent === 'x'){
      console.log('You selected multiplication');
      operators = 'times';
      calcScrn.value = "";
    }else if(opBtn.textContent === '/'){
      console.log('You selected division');
      operators = 'divide';
      calcScrn.value = "";
    }
  }
  
  if(e.target.className === "equals"){    
    if(operators === 'add'){
      totalVal = parseFloat(num1) + parseFloat(num2);
      console.log(totalVal);
      calcScrn.value = totalVal;
    }else if(operators === 'minus'){
      totalVal =  parseFloat(num2) - parseFloat(num1);
      console.log(totalVal);
      calcScrn.value = totalVal;
    }else if(operators === 'times'){
      totalVal = parseFloat(num1) * parseFloat(num2);
      console.log(totalVal);
      calcScrn.value = totalVal;
    }else if(operators === 'divide'){
      totalVal = parseFloat(num2)/parseFloat(num1);
      console.log(totalVal);
      calcScrn.value = totalVal;
    }

  }
});




