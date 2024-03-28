// Tais está participando de um sorteio na Loteria e recebeu uma lista de números aleatórios para poder apostar. 
// Os números foram: 15, 8, 90, 75, 102, 6 e 2. 
// Por ser bastante cautelosa, ela gostaria de saber qual é o menor número e qual é o maior número. 

function menorEMaiorNumero(array=[]){

   let contadorMaior = 0;
   let contadorMenor = 0;
for(x in array){
   if(contadorMaior < array[x]){
      contadorMaior = array[x]
   }else if(contadorMaior > array[x]){
      contadorMenor = array[x]
   }
}
   console.log(`Maior = ${contadorMaior}`)
   console.log(`Maior = ${contadorMenor}`)

}

menorEMaiorNumero([15,8,90,75,102,6,2]);