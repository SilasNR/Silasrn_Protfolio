const conSobre = document.getElementById("conSobre");
const conConhecimentos = document.getElementById('conConhecimentos');
const conProjetos = document.getElementById('conProjetos');
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
  conConhecimentos.style.visibility= "hidden";
  conProjetos.style.visibility= "hidden";
}

/*---------------  menu que for selecionado -------->>>>>>>>*/
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
      
      break;

    case "menuConhecimento":
      esconderInformacoes(1);
      conConhecimentos.style.visibility= "visible";
      break;

    case "menuProjetos":
      esconderInformacoes(1);
      conProjetos.style.visibility= "visible";
      break;
    default:
  }
}

function mudancas(elemento){
  elemento.style.visibility= "visible";
  elemento.style.background-color = "var(--cor_media)";
  elemento.style.color = "var(--cor_clara)";
  elemento.style.width = "89%";
}
