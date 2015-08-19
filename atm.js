var balance1 = 0;
var balance2 = 0;
var account1Overdrawn = false;
var account2Overdrawn = false;

$(function(){
  $('#deposit1').click(depositAccount1);
  $('#deposit2').click(depositAccount2);
  $('#withdraw1').click(withdrawAccount1);
  $('#withdraw2').click(withdrawAccount2);
});

function depositAccount1() {
  balance1 = balance1 + parseInt($('#amount1').val());
  updateAccountsHTML();
}

function depositAccount2() {
  balance2 = balance2 + parseInt($('#amount2').val());
  updateAccountsHTML();
}

function withdrawAccount1() {
  possibleBalance1 = balance1
  possibleBalance1 = possibleBalance1 - parseInt($('#amount1').val());
  withdraw(possibleBalance1, balance1);
  if (account1Overdrawn === false){
    balance1 = possibleBalance1;
    updateAccountsHTML();
  } else if (account1Overdrawn === false){
    console.log('account is overdrawn');
  }



}

function withdrawAccount2() {
  balance2 = balance2 - parseInt($('#amount2').val());
}


function withdraw(potentialBallace, account){
  if (possibleBalance1 > 0)  {
    account1Overdrawn = true;
    console.log(account1Overdrawn);
    return account1Overdrawn;
  }
}


function updateAccountsHTML() {
    $('#balance1').html('£' + balance1);
    $('#balance2').html('£' + balance2);
    $('#amount1').val('');
    $('#amount2').val('');
}

