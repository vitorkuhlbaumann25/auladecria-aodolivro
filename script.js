function scrollToForm() {
    document.getElementById("cadastro").scrollIntoView({behavior: "smooth"});
}

document.getElementById("promoForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let cpf = document.getElementById("cpf").value.trim();
    let codigo = document.getElementById("codigo").value.trim();

    if(nome.length < 3){
        alert("Nome inválido!");
        return;
    }

    if(!email.includes("@")){
        alert("Email inválido!");
        return;
    }

    if(codigo.length < 8){
        alert("Código de barras inválido!");
        return;
    }

    document.getElementById("modal").style.display = "block";
});

function fecharModal(){
    document.getElementById("modal").style.display = "none";
}