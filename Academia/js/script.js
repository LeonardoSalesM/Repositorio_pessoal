function trocar(caminho, nome, descrição) {
    document.getElementById("imagem-principal").src = caminho;
    document.getElementById("titulo").value = nome;
    document.getElementById("legenda").value = descrição;
}