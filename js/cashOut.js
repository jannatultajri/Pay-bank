document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();

    const cashOutString =document.getElementById('cash-out-input').value;
const cashOut=parseFloat(cashOutString);

//condition er baire jei id thake see id change kore dite hoy
    const pinNumberInput=document.getElementById('pin-number').value;

    if(pinNumberInput==='4848'){
        const balance=document.getElementById('account-balance').innerText;
        const balanceNumber=parseFloat(balance);

        const newBalance=balanceNumber - cashOut;

        document.getElementById('account-balance').innerText=newBalance;

    }

    else{
        alert('enter valid pin')
    }


})