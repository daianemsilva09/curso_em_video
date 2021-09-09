

function carregar(){
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('imagem')
    var data = new Date()
    var hora =data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas`
    hora=20
   if (hora >=0 && hora < 12){
        // Bom dia
       img.src="manha.png"
       document.body.style.background = 'yellow'
    }
    else if (hora >= 12 && hora <= 18){
        img.src="tarde.jpg"
        document.body.style.background = 'pink'
    }else {
        img.src='noite.jpg'
        document.body.style.background = 'blue'
    }
}