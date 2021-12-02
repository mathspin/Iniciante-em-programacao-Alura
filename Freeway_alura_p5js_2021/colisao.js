//

function verificaColisao() {
  for(let i = 0; i < imagemCarros.length; i += 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 3)
    
      if (colisao) {
      somDaColisao.play()
      atorVoltaPosicaoInicial();
      meusPontos = 0;
      
    }
  }
}

function colisaoComBordas() {
  if (xAtor >= 500 || xAtor <= 0) {
    xAtor = 250
  }
  
  if (yAtor >= 400 ) {
    yAtor = 375
  }
}