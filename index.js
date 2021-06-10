import $ from 'jquery';

$('#button').click(function () {
  var toAdd = $('input[name=itemCompras]').val();
  $('ol').append('<li>' + toAdd + '</li>');
  $('input[name=itemCompras]').val('');
});
