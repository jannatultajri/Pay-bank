//step-1|| add and event handler to the add money button

document.getElementById('btn-add-money').addEventListener('click',function(event){
//prevent page reload after form submit

    event.preventDefault();

    //step-2 || add moneey to be added to the account

    const addMoneyInputString=document.getElementById('add-money-input').value;

    const addMoneyInput =parseFloat(addMoneyInputString);
   
    //get the pic num provided

    const pinNumberInput=document.getElementById('pin-number-input').value;
   
    //step--3 || varify the pin

    if(pinNumberInput==='4848'){
        //get the current balance
       const currentBalanceString=document.getElementById('account-balance').innerText;
      const currentBalance =parseFloat(currentBalanceString);

       //add money input with balance
        const newBalance=currentBalance - addMoneyInput;
       

        //step-6 || in the UI or dom

        document.getElementById('account-balance').innerText=newBalance;
    }
    else{
        alert('failed')
    }
})