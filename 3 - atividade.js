// Escreva um programa que faça a ordenação dos frascos: 12, 5, 23, 17, 8, 14, 3, 19.

function odernados(array=[]){
   const arrayOrdenado = array.toSorted((a, b) => a - b);
   return console.log(arrayOrdenado)
}

odernados([ 12, 5, 23, 17, 8, 14, 3, 19]);