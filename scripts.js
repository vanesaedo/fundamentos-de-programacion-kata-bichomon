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
for (let i = 0; i < 10; i++) {
    console.log(nodos[i].alt);
    console.log(nodos[i].src); 
    console.log(nodos[i].class); 
}

//6: 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

let sustSrc = document.getElementsByTagName("img");
for (let i = 0; i < sustSrc.length; i++) {
    sustSrc[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"; 
}


//7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`

let elementos = document.getElementsByTagName("class");
while (elementos.class = ) {
    
}

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