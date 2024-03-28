// Em uma pequena vila, o fazendeiro precisa separar os números primos para determinar quantos novos campos plantar. 
// Ele pede sua ajuda para identificar esses números criando um algoritmos. Os números são: 23, 16, 11, 8, 19, 14, 5, 21.

function quaisSaoaNumerosPrimos(array=[]){
   for(x in array){
      if(array[x] % 3 !== 0 && array[x] % 2 !== 0){
         console.log(`O número ${array[x]} é primo`)
      }
   }

}

quaisSaoaNumerosPrimos([23, 16, 11, 8, 19, 14, 5, 21]);