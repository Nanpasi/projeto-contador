function animar_texto() {
    numero.style.animation = "none";
    
    // setTimeout() -> Executa um código depois de determinado tempo
    // setTimeout(funcao, tempo);
    setTimeout(() => {
        numero.style.animation = "aumentar 0.1s ease";
    }, 10);
}

const numero = document.getElementById("numero");

let num_int = 1;

const botao_diminuir = document.getElementById("botao-diminuir");
const botao_resetar = document.getElementById("botao-reset");
const botao_aumentar = document.getElementById("botao-aumentar");

botao_diminuir.addEventListener("click", function() {
    if (num_int>0) {
        num_int--;
        numero.textContent = num_int;

        animar_texto();
    }
});
botao_resetar.addEventListener("click", function() {
    num_int = 0;
    numero.textContent = num_int;
    animar_texto();
});
botao_aumentar.addEventListener("click", function() {
    num_int++;
    numero.textContent = num_int;
    animar_texto();
});