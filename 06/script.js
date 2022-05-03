console.log("working");

// **Iteración #6: Mixed For...of e includes**

// Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array:

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

let eliminate = [];

for (const item of toys) {
  if (item.name.includes("gato")) {
    eliminate.push(toys.indexOf(item));
  }
}

eliminate.sort((a, b) => b - a);

eliminate.forEach((element) => {
  toys.splice(element, 1);
});

console.log(toys);
