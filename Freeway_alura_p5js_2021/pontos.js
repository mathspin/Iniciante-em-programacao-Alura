//

let meusPontos = 0;

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255,0,255))
  text(meusPontos, (width / 5), 28);
}

function marcaPonto() {
  if (yAtor <= 10){
    somDoPonto.play();
    meusPontos += 1;
    atorVoltaPosicaoInicial();
    
  }
}

