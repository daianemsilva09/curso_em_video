function verificar(){
   
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res  = document.getElementById(res)

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Erro verifique 1 ')
    } else {
        var fsex = document.getElementsByName('radsex')
        //var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){
            genero ='homem'
        }else if (fsex[1].checked) {
            genero ='mulher'
        }

        res.style.textAlign ='center'
        res.innerHTML = `teste teste`        
    }
}