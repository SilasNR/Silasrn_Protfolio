const conSobre = document.getElementById("conSobre");
const conFormacao = document.getElementById('conFormacao');
const conCarreira = document.getElementById('conCarreira');
const conClike = document.getElementById('conClike');

document.addEventListener("scroll", function() {
  var posicaoy = window.pageYOffset;

  if (posicaoy > 3){

  }
});
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
      conSobre.style.visibility= "visible";
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
