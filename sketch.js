//variaveis da bolinha
let xBolinha = 300; 
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2; 

//variaveis da velocidade
let xvelocidade = 6;
let yvelocidade = 6; 

//variaveis da raquete
let xRaquete = 10; 
let yRaquete = 155; 
let larguraRaquete = 10;
let alturaRaquete= 90;
let xRaqueteOponente= 580;
let yRaqueteOponente = 155;

let meuPlacar = 0 
let placarOponente = 0;

let trilha;
let ponto;
let raquetada;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background (0);
  desenhaBolinha();
  movimentaBolinha();
  verificaBorda();
  desenhaRaquete(xRaquete, yRaquete);
  desenhaRaquete(xRaqueteOponente,yRaqueteOponente)
  movimentaRaquete();
  movimentaRaqueteOponente();
  colisaoRaquete();
  placar();
  contabilizaPlacar()
}  



function desenhaBolinha(){
 circle(xBolinha, yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += xvelocidade;
  yBolinha += yvelocidade;
}

function verificaBorda(){
  if(xBolinha > width || xBolinha < 0){
    xvelocidade = xvelocidade * (-1);
  }
if(yBolinha > height || yBolinha < 0){
  yvelocidade = yvelocidade * (-1);
 }
}
function desenhaRaquete(x, y){
  rect (x, y, 10 , 90 );
  }

function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -=10;
  }
if(keyIsDown(DOWN_ARROW)){
  yRaquete += 10; 
 }
}
function movimentaRaqueteOponente(){
  if(keyIsDown(87)){
    yRaqueteOponente -=10;
  }
if(keyIsDown(83)){
  yRaqueteOponente += 10; 
 }
}

function colisaoRaquete(){
  if(xBolinha - raio <= xRaquete + larguraRaquete &&
    yBolinha + raio >= yRaquete &&
    yBolinha - raio <= yRaquete + alturaRaquete){
    xvelocidade *= -1;
    raquetada.play();
  }
  
  if(xBolinha + raio >= xRaqueteOponente &&
    yBolinha + raio >= yRaqueteOponente &&
    yBolinha - raio <= yRaqueteOponente + alturaRaquete){
    xvelocidade *= -1;
    raquetada.play();
  }
}

function placar(){
  fill('orange');
  rect(130, 5, 40, 25);
  rect(430, 5, 40, 25);
  textSize(23);
  textAlign(CENTER)
  fill(255);
  text(meuPlacar, 150, 25);
  text(placarOponente, 450, 25);
  
}

function contabilizaPlacar(){
  if(xBolinha - raio <= 0){
    placarOponente += 1;
    ponto.play();
  }
  if(xBolinha + raio >= width){
    meuPlacar += 1;
    ponto.play();
  }
}

function preload(){
  trilha = loadSound("trilha.mp3");
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
}
