//! Scope & Hoisting;

//? Ejercicio 1
/* x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function (a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b);
};
c(8, 9, 10);
console.log(b);
console.log(x); */
// 10 8 8 9 10 1

//? Ejercicio 2
// C.G -> L.E -> {foo: undefined, bar: und}
// F.E -> 1
/* console.log(bar); // undef
console.log(foo)
foo();
function foo() {
    console.log("Hola!");
}
baz = 2;
console.log(baz); // Reference Error: baz is not defined
var bar = 1; */
//? Ejercicio extra parecido al 2
// LE -> {foo: fn, bar: 1}
// Fase de Ejecucion
/* var bar = 1;
console.log(foo(4));
function foo(aux) {
    return bar + aux;
} */

//? Ejercicio 3
// CG -> L.E -> {instructor: "Franco" }
// F.E ->
// LA UNICA ESTRUCTURA QUE PUEDE CREAR CONTEXTO DE EJECUCION SON LAS FUNCIONES
/* var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
console.log(instructor); // Franco */
//? Ejercicio 4 -> IIFEs -> Funciones Autoejecutables
// CG -> L.E -> { instructor: "Tony"}
// F.E -> consologuea Tony
// CL -> L.E -> {instructor: "Franco"}
// F.E -> consologuea Franco
// consologuea Tony

/* var instructor = "Tony";
console.log(instructor);
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor);
  }
})();
console.log(instructor); */

// Con ES6 -> 2015
/* let instructor = "Tony";
console.log(instructor);
if (true) {
  let instructor = "Franco";
  console.log(instructor);
}
console.log(instructor); */

//? Ejercicio 5
// CG -> L.E -> {instructor: The Flash, pm: Franco}
// F.E ->
// Bloque del if -> pm : ReverseFlash
/* var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor); // The Flash
  console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Franco */

//! Coerción de Datos
6 / "3"; // 2
"2" * "3"; // 2 * "3" -> 2 * 3 -> 6
4 + 5 + "px"; // 9 + "px" -> "9px"
"$" + 4 + 5; // "$4" + 5 -> "$45"
"4" - 2; // 4 - 2 -> 2
"4px" - 2; // NaN
7 / 0; // Infinity
{
}
[0]; // undefined
parseInt("09"); // 9
5 && 2; // 2
2 && 5; // 5
5 || 0; // 5
0 ||
  (5)[3] + // 5
    [3] -
    [10]; // [3] + [3] -> "3" + [3] -> "3" + "3" -> "33" -> "33" - [10] -> "33" - "10" -> 33 - "10" -> 33 - 10 -> 23
3 > 2 > 1; // 3 > 2 > 1
//   true > 1
// 1 > 1
// false
// [] == ![]
// [] == false // Type conversion by the statement itself
// [] == 0 // To number of right operand
// "" == 0 // To Primitive call for Array which will in this case convert to empty string
// 0 == 0 // To number call of "" which is 0
// true

// ! Hoisting

//? Ejercicio 1
// CG -> L.E -> {test: fn}
// F.E

// F.E -> undefined, 2
/* function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}
test(); */

//? Ejercicio 2
// CG -> L.E -> {snack: Meow Mix, getFood: fn}
// F.E ->
// CL -> L.E -> {food: false, snack: und }
// F.E ->
/* var snack = "Meow Mix";

function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  return snack;
}

console.log(getFood(false)); */

//! This
// this es un objeto, para poder agregarle props a ese objeto

/* var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname()); // Aurelio
var test = obj.prop.getFullname; //
console.log(test()); // undefined */

//! Event Loop
function printing() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}
printing();
// web apis
// 1. sto (cl(2), 1000) 
// 2. sto (clo(3), 0)
// Call back queue
// [3, 2]
// 1 4 3 2