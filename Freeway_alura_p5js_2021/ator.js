//código do ator

let xAtor = 250;
let yAtor = 375;
let colisao = false



function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);  
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;      
      }
  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 3;      
      }
if (keyIsDown(LEFT_ARROW)) {
    xAtor -= 3;      
      }

if (keyIsDown(RIGHT_ARROW)) {
    xAtor += 3;      
      }
}

function atorVoltaPosicaoInicial() {
  yAtor = 366;
}
