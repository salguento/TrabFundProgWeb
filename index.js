// Definição de constantes para cada link da navbar
const btnHome = document.getElementById("btn-home");
const btnAbout = document.getElementById("btn-about");
const btnEducation = document.getElementById("btn-education");
const btnWork = document.getElementById("btn-work");
const btnContact = document.getElementById("btn-contact");

// Definição de constante para todos os links da navbar
const buttons = document.getElementsByClassName("navbar-btn");

// Variável para o endereço atual
let curentURL = window.location.href;

// Recorta a hash ao final do endereço
const cleanTag = (URL) => {
  return URL.slice(URL.indexOf("#"), URL.length);
};

// Função para adicionar ou remover a classe 'active' dos links
const updateBtn = (currentTag) => {
  for (item in buttons) {
    if (item === "item") return;
    let buttonTag = cleanTag(buttons[item].href);
    let button = document.getElementById(buttons[item].id);
    if (buttonTag === currentTag) {
      button.classList.add("active");
    } else if (currentTag === "/" || currentTag === "a") {
      updateBtn("#home");
    } else {
      button.classList.remove("active");
    }
  }
  console.log("after function");
};

//Event listeners de clique nos links da navbar
btnHome.addEventListener("click", function () {
  updateBtn("#home");
});
btnAbout.addEventListener("click", function () {
  updateBtn("#about");
});
btnEducation.addEventListener("click", function () {
  updateBtn("#education");
});
btnWork.addEventListener("click", function () {
  updateBtn("#work");
});
btnContact.addEventListener("click", function () {
  updateBtn("#contact");
});

// Check inicial para ativar o link de acordo com endereço aberto
updateBtn(cleanTag(curentURL));

// Atualização de link ativo com base no scroll da página
const scroller = document.querySelector("#scroller");

scroller.addEventListener("scroll", (event) => {
  let i = scroller.scrollTop;
  if (i < 400) {
    updateBtn("#home");
  } else if ((i > 400) & (i < 800)) {
    updateBtn("#about");
  } else if ((i > 800) & (i < 1400)) {
    updateBtn("#education");
  } else if ((i > 1400) & (i < 2300)) {
    updateBtn("#work");
  } else if (i > 2300) updateBtn("#contact");
});
