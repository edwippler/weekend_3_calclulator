$(document).ready(function() {

$('.operator').on('click', function(){
  var $numOne = $('#numOne').val();
  var $numTwo = $('#numTwo').val();
  var numberObject = {array:[$numOne, $numTwo]};
  clearFields();
  $.ajax({
    type: 'POST',
    url: '/calculator/' + $(this).data('math'), //selects the data type to identy post request
    data: numberObject,
    success: function(response) {
      $('#total').text(response.value); //updates the total
    }
  });
});

$('#clear').on('click', function(){
  $('#total').text('');
  clearFields();
});

});

function clearFields() { // emptys the input fields
  $('#numOne').val('');
  $('#numTwo').val('');
}

// function getResult() { // uneccesary ajax request function
//   $.ajax({
//     type: 'GET',
//     url: '/calculator',
//     success: function(response){
//       $('#total').text(response);
//     }
//   });
// }
