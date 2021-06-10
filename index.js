import $ from 'jquery';

$('#button').click(function () {
  var toAdd = $('input[name=itemCompras]').val();
  $('h2').text(toAdd);
});
