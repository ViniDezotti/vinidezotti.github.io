var canvas;//o elemento canvas sobre o qual desenharemos
var ctx;//o "contexto" da canvas que será utilizado (2D ou 3D)
var dx = 2;//a taxa de variação (velocidade) horizontal do objeto
var x = 5;//posição horizontal do objeto (com valor inicial)
var y = 90;//posição vertical do objeto (com valor inicial)
var WIDTH = 1000;//largura da área retangular
var HEIGHT = 1080;//altura da área retangular
var dino = new Image();//Imagem que será carregada e desenhada na canvas
var posicao = 1;//Indicador da posição atual do personagem
var NUM_POSICOES = 9;//Quantidade de imagens que compõem o movimento
var direcao = 0;
var meteoro = new Image();
var posicaoX;
var posicaoY=0;

function KeyDown(evt){
    switch (evt.keyCode) {
        case 39:  /*seta para direita*/
            if (x + dx < WIDTH){
                x += dx;
                posicao++;
                direcao=0;
                if(posicao == NUM_POSICOES)
                    posicao = 1;
            }
            break;        
            case 37:  /*seta para esquerda*/
            if (x + dx < WIDTH){
                x -= dx;
                posicao++;
                direcao=1;
                if(posicao == NUM_POSICOES)
                    posicao = 1;
            }
            break;     
    }
}

function Chove(){
    meteoro.src = './imgs/meteoro.png';
    posicaoX = Math.random() * (0 - window.innerWidth) + window.innerWidth;
    setInterval(Chove, 2000);
    while(posicaoY < 90){
        posicaoY++;
    }
    console.log(posicaoX +'\n' + posicaoY);
}

function Desenhar() {   
    if(direcao == 0)dino.src = './imgs/dino/Run ('+posicao+').png';
    else dino.src = './imgs/dino/Run ('+posicao+')E.png';
    console.log(posicao);
    ctx.drawImage(dino, x, y, 50, 50);
    ctx.drawImage(meteoro, posicaoX, posicaoY, 10, 10);
}

function LimparTela() {
    ctx.clearRect(0, 0, 400, 400);
    ctx.fillStyle = 'transparent';
    ctx.beginPath();
    ctx.rect(0, 0, WIDTH, HEIGHT);  
    ctx.closePath();
    ctx.fill();   
}

function Atualizar() {
    LimparTela();    
    Desenhar();
}

function Iniciar() {
    document.getElementById("teste").innerHTML = ``;
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    return setInterval(Atualizar, 100);
}


window.addEventListener('keydown', KeyDown);
 