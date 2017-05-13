var inputEmail = document.querySelector('input');
var signUpBtn = document.querySelector('button');

signUpBtn.addEventListener('click', function(event){
  if(inputEmail.value != ''){
    alert('Your email ' + inputEmail.value + ' is successfully added!');
  }else{
    inputEmail.style.borderColor = 'red';    
  }
});