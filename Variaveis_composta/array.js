let num = [3,2,3,2,1]
/*
num[3]=7 // adiciona posição 3 numero 7
num.push(7) // adiciona o 7 no final
num.length // mostrar tamanho vetor 
num.sort() // crescente 
*/
//console.log(`nosso vetor é ${num}`) // mostrar vetor inteiro
 num.sort()
 num.push(1)
 console.log(num)
 console.log(`O vetor tem ${num.length} posições`)
 console.log(`O primeiro do vetor é ${num[0]}`)

 let pos = num.indexOf(2) // procurar o numero 2
 if (pos == -1){
     console.log('O valor não foi encontrado')
 } else{
     console.log(`O valor está na posição ${pos}`)
 }
