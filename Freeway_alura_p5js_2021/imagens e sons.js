//imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;


function preload() {
  
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoAtor = loadImage("Imagens/ator-1.png");
  imagemCarro1 = loadImage("Imagens/carro-1.png");
  imagemCarro2 = loadImage("Imagens/carro-2.png");
  imagemCarro3 = loadImage("Imagens/carro-3.png");
  imagemCarro4 = loadImage("Imagens/carro-1.png");
  imagemCarro5 = loadImage("Imagens/carro-2.png");
  imagemCarro6 = loadImage("Imagens/carro-3.png");
  
  somDaTrilha = loadSound("Sons/trilha.mp3");
  somDaColisao = loadSound("Sons/colidiu.mp3");
  somDoPonto = loadSound("Sons/pontos.wav");
  
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6]
}