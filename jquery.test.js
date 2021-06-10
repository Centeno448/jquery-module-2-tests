import '@testing-library/jest-dom/extend-expect';
const $ = require('jquery');

beforeAll(() => {
  // Set up our document body
  document.body.innerHTML = `
  <div class="container">
    <h2>Bienvenido al curso de jQuery</h2>

    <form name="listaCompras">
      <input type="text" name="itemCompras" />
    </form>

    <div id="button">Añadir ítem</div>
    <ol></ol>
  </div>
    `;
  require('./index');
});

it('index.js agrega un nuevo item a la ol al presionar el div id="button" | Asegúrate de que al presionar el div id="Button" se agregue un nuevo item a la ol con el valor del input', () => {
  $('input[type="text"]').val('1');

  $('#button').click();

  expect($('li:last-child').text()).toBe('1');

  $('input[type="text"]').val('2');

  $('#button').click();

  expect($('li:last-child').text()).toBe('2');
});

it('index.js limpia el valor del input al hacer click | Asegúrate de que al presionar el div id="Button" se limpie el valor del input', () => {
  $('input[type="text"]').val('3');

  $('#button').click();

  expect($('input[type="text"]').val()).toBe('');
});
