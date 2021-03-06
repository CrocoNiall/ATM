var balance1 = 56;
var balance2 = 32;


// onload, action event listeners. 
//each event listener will trigger corospnding function.
$(document).ready(function(){
  $('#deposit1').click(depositAccount1);
  $('#deposit2').click(depositAccount2);
  $('#withdraw1').click(withdrawAccount1);
  $('#withdraw2').click(withdrawAccount2);
  $('#balance1').text('£' + balance1);
  $('#balance2').text('£' + balance2);

});
//simply adds balance to matching input box. 
//calls update HTML Function. 
function depositAccount1() {
  balance1 = balance1 + parseInt($('#amount1').val());
  updateAccountsHTML();
}

//simply adds balance to matching input box. 
//calls update HTML Function.
function depositAccount2() {
  balance2 = balance2 + parseInt($('#amount2').val());;
  updateAccountsHTML();
}


function withdrawAccount1() {
  var amount = parseInt($('#amount1').val());
  balances = withdraw(amount, balance1, balance2);

  balance1 = balances[0];
  balance2 = balances[1];

  updateAccountsHTML();
}

//uses the withdraw function to calculate if user is withdrawing a valid amount
//uses the return values to update balance variables 
//calls the update HTML Function

function withdrawAccount2() {
  var amount = parseInt($('#amount2').val());
  balances = withdraw(amount, balance2, balance1);

  balance2 = balances[0];
  balance1 = balances[1];

  updateAccountsHTML();
}


//if account not going overdrawn, perform calculation.
//if both accounts not going overdawm, perform alculation
//return valuess in the form of an array.
function withdraw(value, primary, secondary) {
  if(value <= primary) {
    primary = primary - value;
  }
  else if((value > primary) && (value <= (secondary + primary))) {
    secondary = (primary + secondary) - value;
    primary = 0;
  }
    //return primary + secondary
  return [primary, secondary];
}

// applys css to match the current state of ballance1 & ballace2
// updates the HTML within page to represent variable balance1 or balance2
// resets inputs back to nothing after funtion. 
function updateAccountsHTML() {

//if balance is 0 or less, apply class zero 
  if(balance1 <= 0){
    $('#balance1').addClass('zero');
  } else{
    $('#balance1').removeClass('zero');
  }

  if(balance2 <= 0){
    $('#balance2').addClass('zero');
  } else {
    $('#balance2').removeClass('zero');
  }

//selects element and updates text to match balance
  $('#balance1').text('£' + balance1);
  $('#balance2').text('£' + balance2);
//sets input fields to ''
  $('#amount1').val('');
  $('#amount2').val('');
}



