// evento -> Ação (Clique, Teclar, Movimentar o crusor)
// click -> Clique  do mouse
// ondblclick -> Duplo clique do mouse
//keydoun -> Apertar o botão
// keyup -> Soltar o botão
// mouseover -> Mover o ponteiro do mouse sobre o elemento
// mouseout -> Mover o ponteiro para fora do elemento
// submit -> Submeter os dados de um formulário
// change -> Alterar o valor de um campo de formulário
// focus -> Evento acionado quando o foco está sobre o elemento


const quadrado = document.querySelector("#quadrado");
console.log({quadrado});

quadrado.onclick = () => { // primeira forma de adicionar um "ouvidor de evento"
    quadrado.style.backgroundColor = "#003049"
    //quadrado.style.borderRadius = "100px";
    quadrado.style.transform = "translateY(200px)"
}

quadrado.ondblclick = () => {
    //quadrado.style.borderRadius = "0";
    quadrado.style.transform = "translateY(0)"
    quadrado.style.backgroundColor = "#0d63cb"
}

function changeColorSquare() { // esta função está sendo chamada no HMTL
    quadrado.style.backgroundColor = "#219ebc";
}

quadrado.addEventListener("mouseout", () => { // terceira forma de adicionar um "ouvidor de evento"
    quadrado.style.backgroundColor = "#f07167";
});




