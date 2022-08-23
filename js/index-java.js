console.log("conectado");

const conSobre = document.getElementById("conSobre");
const conFormacao = document.getElementById('conFormacao');
const conCarreira = document.getElementById('conCarreira');
const conClike = document.getElementById('conClike');
const centroSobre = document.getElementById('centroSobre');
//Elementos do centro>>>

const tituloS = document.getElementById("titulo-S");
const cabecalho = document.getElementById("top-cabecalho");
const tituloP = document.getElementById('titulo-P');
var valor = 0;
var i = 150;
//Elementos do topo >>>

document.addEventListener("scroll", function() {
  const posicaoy = window.pageYOffset;
  console.log(posicaoy);
  diminuirBarr(posicaoy);
  verifica(posicaoy);
  trocarCor(posicaoy);
  //subDes(posicaoy);
});

function diminuirBarr(posicaoy){
  if (posicaoy > 150){//ida
    console.log("no");
    cabecalho.style.position = "fixed";
    cabecalho.style.height = "100px";
    centroSobre.style.paddingTop = "300px";
  }
  if (posicaoy < 150){//volta
    cabecalho.style.position = "static";
    cabecalho.style.height = "250px";
    centroSobre.style.paddingTop = "50px";
  }
}

function verifica(posicaoy) {
  if (posicaoy > 5) {
    tituloS.style.fontSize = "95px";
    tituloS.style.top="0px";
    tituloP.style.top = "-100px";
  }
  if (posicaoy < 5) {
    tituloS.style.top="100px";
    tituloS.style.fontSize = "150px";
    tituloP.style.top = "0px";
  }
}

function trocarCor(posicaoy){
  if (posicaoy > 450){
    cabecalho.style.backgroundColor = "white";
    tituloS.style.color = "black";
  }
  if (posicaoy < 450){
    cabecalho.style.backgroundColor = "black";
    tituloS.style.color = "white";
  }
}

/*function subDes(posicaoy) {//subir e descer
  if (valor < posicaoy) { //descendo
    if (i >= 50){
      console.log(i +" "+ posicaoy);
      i = i - posicaoy;
      titulo.style.fontSize = i + "px";
      valor = posicaoy;
    }else {
      titulo.style.fontSize = "50px";
      i = 50;
    }
  }else if (valor > posicaoy) {//subindo
    if (i <= 140){
      console.log(i);
      i = i + posicaoy;
      titulo.style.fontSize = i + "px";
      valor = posicaoy;
    }else {
      titulo.style.fontSize = "150px";
      i = 150;
    }
  }
}
/*-------^^^^^^^^^^^^^^^^^^^^ Posição do scroll*/

/*----  Quando a Página carregar ----------->>>>>>>>>>*/
function esconderInformacoes(v){
  if(v){
    conClike.style.visibility = "hidden";
  }
  conSobre.style.visibility= "hidden";
  conFormacao.style.visibility= "hidden";
  conCarreira.style.visibility= "hidden";
}

/*--------------- Quando o menu for selecionado -------->>>>>>>>*/
document.querySelectorAll(".center-menu").forEach( function(button) {
    button.addEventListener("click", function(event) {
    const el = event.target || event.srcElement;
    const id = el.id;
    menuSelecionado(id);
  });
});

function menuSelecionado(id){
  switch (id) {
    case "menuSobre":
      esconderInformacoes(1);
      mudancas(conSobre, menuSobre);
      break;

    case "menuFormacao":
      esconderInformacoes(1);
      conFormacao.style.visibility= "visible";
      break;

    case "menuCarreira":
      esconderInformacoes(1);
      conCarreira.style.visibility= "visible";
      break;
    default:
  }
}

function mudancas(elemento, menuElemento){
  elemento.style.visibility= "visible";
  menuElemento.style.background = "var(--cor_media)";
  menuElemento.style.color = "var(--cor_clara)";
  menuElemento.style.width = "89%";
}
