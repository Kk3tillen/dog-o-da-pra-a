const select = document.getElementById("marcas");
let total = 0;

document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    })
})
mostrarCardapio();

function somaValor() {
    total += Number(document.querySelector("#opcao2").value)
    document.querySelector("#total-valor > span").innerHTML = total
}
function mostrarIngredientes(){
    document.querySelector("#sessaoCardapio").style.display = "none"
    document.querySelector("#sessaoIngredientes").style.display = "block"
}
function mostrarCardapio(){
    document.querySelector("#sessaoIngredientes").style.display = "none"
    document.querySelector("#sessaoCardapio").style.display = "block"
}