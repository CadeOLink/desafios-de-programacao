// Escreva um programa que conte o número de palavras em uma frase fornecida pelo usuário. A frase é: "What is Lorem Ipsum?"

function quantasPalavras (text){
   const arrayText = text.split(' ')
   console.log(`Exsitem ${arrayText.length} palavras`)
}

quantasPalavras("What is Lorem Ipsum?");