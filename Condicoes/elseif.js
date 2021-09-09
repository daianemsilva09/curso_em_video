/*var idade = 67
if (idade < 16 ){
    console.log('Não vota')
}else if(idade < 18 || idade > 65){
    console.log('Voto opcional')      
}else{
    console.log('vota')
}
*/
var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} Horas`)
if (hora < 12){
    console.log('Bom dia')
}else if(hora <= 18){
    console.log('Boa tarde')
}else{
    console.log('Boa noite')
}
