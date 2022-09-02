console.log("conectado");

const conSobre = document.getElementById("conSobre");
const conFormacao = document.getElementById('conFormacao');
const conExperiencia = document.getElementById('conExperiencia');
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
  diminuirTitulo(posicaoy);
  trocarCor(posicaoy);
  //subDes(posicaoy);
});

function diminuirBarr(posicaoy){
  if (posicaoy > 190){//ida
    console.log(posicaoy);
    cabecalho.style.position = "fixed";
    cabecalho.style.height = "60px";
    centroSobre.style.paddingTop = "270px";
  }
  if (posicaoy < 190){//volta
    cabecalho.style.position = "static";
    cabecalho.style.height = "250px";
    centroSobre.style.paddingTop = "20px";
  }
}

function diminuirTitulo(posicaoy) {
  if (posicaoy > 5) {
    tituloS.style.fontSize = "55px";
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
      esconderInformacoes(id);
      selecionado(conSobre, id);
      break;

    case "menuFormacao":
      esconderInformacoes(id);
      selecionado(conFormacao, id);
      break;

    case "menuExperiencia":
      esconderInformacoes(id);
      selecionado(conExperiencia, id);
      break;
    default:
  }
}

function selecionado(elemento, menuElemento){
  elemento.style.visibility= "visible";
  //selecione["manter"](menuElemento);
}

function esconderInformacoes(id){
  conClike.style.visibility = "hidden";
  conSobre.style.visibility= "hidden";
  conFormacao.style.visibility= "hidden";
  conExperiencia.style.visibility= "hidden";
//  selecione["soltar"](id);
}

/*const selecione = {
  manter: function(menuElemento){
    document.getElementById(menuElemento).style.background = "var(--cor_media)";
    document.getElementById(menuElemento).style.color = "var(--cor_clara)";
    document.getElementById(menuElemento).style.width = "89%";
  },
  soltar: function(menuElemento){
      document.getElementById(menuElemento).style.background = "var(--cor_clara)";
      document.getElementById(menuElemento).style.color = "var(--cor_escura)";
      document.getElementById(menuElemento).style.width = "88%";
  }
}
*/
