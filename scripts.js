console.log(document.title);
//-1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
document.querySelector("#gen-1").innerHTML ='Generasión 1 Pokimon';

//--2.Cambia el color de fondo de la primera generación de Pokimon.
document.querySelector("body > main > div:nth-child(6)").style.backgroundColor = 'blue';

//3
console.log(document.querySelector("body > header > div > a").href);

//4

let dominio = document.querySelector("body > header > div > a ").href;
dominio = dominio.substr(dominio.indexOf("."));
console.log(dominio);

//5 

let nodos = document.getElementsByTagName("img");
console.log(nodos);
/*
nodo.getElementsByClassName (<clase CSS>): con esta sentencia podemos seleccionar un nodo según el nombre de su clase CSS.

for (let i = 0; i < links.length; i++) {
console.log()

}

//ejemplo// Obtener todos los textos de los enlaces
let links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
    console.log(links[i].innerHTML);
    console.log(links[i].pathname);
    console.log(links[i].href);
    links[i].innerHTML += " Tortilla"; // escritura
}*/