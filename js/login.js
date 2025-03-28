document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();

    //console.log('login button clicked')

    //get the phone number
    const phoneNumber = document.getElementById('phone-number').value;

    //get the pic number

    const pinNumber = document.getElementById('pin-number').value;
   // console.log(phoneNumber,pinNumber);

    //do this time only.never do it in professional project....

    if(phoneNumber==='01314819607'&& pinNumber==='4848'){
     //   console.log('you are log in');

     window.location.href ='/bank.html';
    }

    else{
        alert('invalid id & pass ');
    }

})