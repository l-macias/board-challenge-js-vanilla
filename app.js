//Capturamos valores del DOM
let rows = document.getElementById('rows');
let cols = document.getElementById('cols');
let generateBoardButton = document.getElementById('gen-board');
let cleanBoardButton = document.getElementById('clean-board');
let board = document.getElementById('board');
let results = document.getElementById('results');
//Creamos variables que luego se capturarán del input, y las inicializamos en 0.
let rowsValue = 0;
let colsValue = 0;
//Creamos variables para totalizar los rojos y azules
let reds = 0;
let blues = 0;

//Funcion para vaciar el tablero
const cleanBoard = () => {
  board.innerHTML = '';
  reds = 0;
  blues = 0;
};

//Funcion que renderiza el tablero según las filas y las columnas que desee el usuario
const renderBoard = () => {
  cleanBoard(); //Limpia el tablero para que no se duplique.
  rowsValue = rows.value; //Capturamos el valor ingresado del input para las filas
  colsValue = cols.value; //Capturamos el valor ingresado del input para las columnas
  if (rowsValue > 0 && colsValue > 0) {
    //Hacemos un loop que comienza en 1  y finaliza en la cantidad de columnas totales
    for (let x = 1; x <= colsValue; x++) {
      let col = document.createElement('div'); //por cada vuelta del loop creamos un div.
      board.appendChild(col); // La añadimos dentro del div board
      //Dentro del loop, creamos otro, que por cada columna vaya creando cuadros dentro segun la cantidad definida
      for (let y = 1; y <= rowsValue; y++) {
        let square = document.createElement('div'); //Creamos el div para cada cuadro que
        square.classList.add('square'); // Le damos una clase para que se genere el cuadro con las propiedades de css.
        col.appendChild(square); //Metemos el cuadro dentro de la columna.
        //Hacemos una comprobacion del valor del eje x y el eje y y pintamos de rojo si x es igual o mayor a y, y de azul el resto.
        if (x >= y) {
          square.classList.add('red');
          reds++; //Incrementamos en 1 el valor de reds para totalizar
        } else {
          square.classList.add('blue');
          blues++; //Incrementamos en 1 el valor de blues para totalizar
        }
      }
    }
    //Mostramos por pantalla la cantidad de cuadros de cada color.
    results.innerHTML = `
    <p>La cantidad total de cuadros azules es: ${blues}</p>
    <p>La cantidad total de cuadros rojos es: ${reds}</p>`;
  }
  //Enviamos alerta si no se ingresaron valores en los inputs
  else {
    alert('Debes ingresar los valores de Columna y Filas');
  }
};

//Escuchamos el click de los botones de generar y de limpiar tablero, y en ambos casos invocamos la función correspondiente.
generateBoardButton.addEventListener('click', renderBoard);
cleanBoardButton.addEventListener('click', cleanBoard);
