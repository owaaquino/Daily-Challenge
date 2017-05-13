
var signBtn = document.getElementById('signIn');
var userName = document.getElementById('userName');
var password = document.getElementById('password');

signBtn.addEventListener('click', function(){
  if(userName.value != 'admin' && password.value != 'admin'){
    console.log('toot!');
  }else{
    console.log('tooot tooot!');
  }
})

