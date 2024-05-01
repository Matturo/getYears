function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'image/criancaeditm.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'image/jovemeditm.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'image/adultoeditm.png')
            }else{
                //idoso
                img.setAttribute('src', 'image/idosoeditM.png')
            }
        }else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'image/criancaeditf.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'image/jovemeditf.png')
            }else if (idade < 50){
                //adulta
                img.setAttribute('src', 'image/adultoeditf.png')
            }else{
                //idosa
                img.setAttribute('src', 'image/idosaeditF.png')
            }
        }
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }

}