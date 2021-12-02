//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 3;

//variáveis da raquete
let xRaquete = 5
let yRaquete = 150
let raqueteComprimento = 10
let raqueteAltura = 90

//variáveis da raquete do oponente
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let raqueteComprimentoOponente = 10
let raqueteAlturaOponente = 90

//velocidade do Oponente
let velocidadeXOponente = 6;
let velocidadeYOponente = 6;

//placar do jogo
let meusPontos = 0;
let oponentePontos = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaqueteOponente();
  incluirPlacar();
  marcaPonto();
  
}

function mostraBolinha() {
  circle (xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
}

function verificaColisaoBorda() {
    if (xBolinha + raio >= width || 
        xBolinha - raio <= 0){
      velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio >= height || 
      yBolinha - raio <= 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y) {
  rect (x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if (keyIsDown (UP_ARROW)){
    yRaquete -=10
  }
  if (keyIsDown (DOWN_ARROW)){
    yRaquete +=10
  }
}

function verificaColisaoRaquete() {
  if (xBolinha - raio <= xRaquete + raqueteComprimento &&
      yBolinha - raio <= yRaquete + raqueteAltura &&
      yBolinha + raio >= yRaquete) {
      velocidadeXBolinha *= -1;
    raquetada.play();    
    }  
}

function movimentaRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteAltura / 2 - 30;
  yRaqueteOponente += velocidadeYOponente - 30 ;
}

function verificaColisaoRaqueteOponente() {
  if (xBolinha + raio >= xRaqueteOponente &&
      yBolinha - raio <= yRaqueteOponente + raqueteAltura &&
      yBolinha + raio >= yRaqueteOponente) {
      velocidadeXBolinha *= -1;
    raquetada.play();
    }
  
}

function incluirPlacar() {
  textAlign(CENTER)
  textSize(16);
  fill(color(255,165,0))
  rect(225, 15, 50, 20);
  rect(325, 15, 50, 20);
  fill (255);
  text(meusPontos, 250, 30 );
  text(oponentePontos, 350, 30 );
  
}

function marcaPonto() {
  if (xBolinha >= 590) {
    meusPontos += 1;
    xBolinha = 589;
    ponto.play();    
  }
  
  if (xBolinha <= 10) {
    oponentePontos += 1;
    xBolinha = 11;
    ponto.play();
  }
}