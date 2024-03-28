//Desenvolver um programa para contar o número de letras maiúsculas da string abaixo: “LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY”

function letrasMaiusculas (text){
   let contador = 0
   const arrayNormal = text.split('')
   const arrayUpperCase = text.toUpperCase().split('')
    for(x in arrayNormal){
      if(arrayNormal[x] == arrayUpperCase[x]){
         contador++
      }
    }
    console.log(contador)
}  

letrasMaiusculas(`LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY`)