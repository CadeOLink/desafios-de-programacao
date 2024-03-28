// Escreva um programa para encontrar o fatorial do número 12.

function fatorial(n){

   let contador = 1;

   for(let x=1; x<=n; x++){
      contador = contador*x
   }
    console.log(`O fatorial de 12 é ${contador}`);
}

fatorial(12);