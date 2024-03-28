// Crie uma lógica para calcular a idade de uma pessoa. 
// Essa lógica deverá receber um valor de ano de nascimento no formato “yyyy-MM-dd” e deverá retornar o número da idade da pessoa como resultado.

function idade(data){

   let oldUser = 0
   const date = new Date()
   const day = date.getDate()
   // console.log(day)
   const month = 1 + date.getMonth() // O mês 0 é referente a Janeiro, pois isso adicionamos + 1
   // console.log(month)
   const year = date.getFullYear()
   // console.log(year)

   const arraydata = data.split('-')
   // console.log(arraydata)

   if(arraydata[0] <= year){
      oldUser = year - parseInt(arraydata[0]) - 1
   }if(parseInt(arraydata[1]) <= month && parseInt(arraydata[2]) <= day){
      oldUser = oldUser + 1
   }
   return console.log(`A idade do usuário é ${oldUser}`)
}

idade('2003-04-24')