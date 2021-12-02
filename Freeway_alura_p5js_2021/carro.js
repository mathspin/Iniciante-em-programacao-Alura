//código do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 309];
let velocidadesCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i += 1) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro() {
  
  for (let i = 0; i < xCarros.length; i += 1) {
    xCarros[i] -= velocidadesCarros[i]; 
  }
}

function voltaPosicaoInicialDoCarro() {
  for (let i = 0; i <= imagemCarros.length; i += 1){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarros){
  return xCarros <= -50;
}