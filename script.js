function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano') 
  var res = document.getElementById('res')
  if(fano.value.length ==  0  || fano.value > ano ){
      window.alert('[ERRO!] DADOS INVALIDOS TENTE NOVAMENTE')
    
  }else{

    var fsex = document.getElementsByName('radsex')
    var idade = ano - fano.value
    var genero = ' '
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero='homem'
  
        if (idade >= 0 && idade < 10) {
            
            img.setAttribute('src','criança-menino.png')
            }else if (idade <21){
                img.setAttribute('src','joven-homen.png')
            }else if (idade <50){
                img.setAttribute('src','adulto.png')
            }else{
                img.setAttribute('src','velho.png')
            }

    }else if (fsex[1].checked) {
        genero='mulher'
        if (idade >0 && idade <10) {
            img.setAttribute('src','criança.png')
        }else if (idade <21){
            img.setAttribute('src','joven-mulher.png')
        }else if (idade <50){
            img.setAttribute('src','adulto-mulher.png')

        }else{
            img.setAttribute('src','velha.png')
             }
        }
      
         res.style.textAlign = 'center'
         res.innerHTML= `Dectamos ${genero} com ${idade} anos`
         res.appendChild(img)
  }
}
