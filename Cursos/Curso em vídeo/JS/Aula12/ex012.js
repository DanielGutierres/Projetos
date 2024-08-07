var agora = new Date()   // como obter as horas do sistema
var hora = agora.getHours() //

console.log(`Agora são extamente ${hora} horas`)
if (hora < 12){
    console.log('Bom dia')
}else if(hora <= 18){
    console.log('Boa tarde')
}else{
    console.log('boa noite')
}