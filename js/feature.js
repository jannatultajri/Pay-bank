//show the cashout form

document.getElementById('btn-show-co').addEventListener('click',function(){

    //show cashout btn
    document.getElementById('cashOut-form').classList.remove('hidden');

    //hide addmoney btn

    document.getElementById('addMoney-form').classList.add('hidden');
})

document.getElementById('btn-show-ad').addEventListener('click',function(){

    //show cashout btn
    document.getElementById('cashOut-form').classList.add('hidden');

    //hide addmoney btn

    document.getElementById('addMoney-form').classList.remove('hidden');
})