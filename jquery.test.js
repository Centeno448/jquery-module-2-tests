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
  </div>
    `;
  require('./index');
});

it('index.js imprime a consola el valor del input al presionar el div id="Button" | Asegúrate de que al presionar el div id="Button" se imprima a consola el valor del input', () => {
  $('input[type="text"]').val('124asd213');

  $('#button').click();

  expect($('h2').text()).toBe('124asd213');
});
