var carros = [];

function addCarro() {
    const nome = document.getElementById('carroNome').value;
    const ano = document.getElementById('carroAno').value;
    const imagem = document.getElementById('carroImagem').value;

    if (nome === "" || ano === "" || imagem === "") {
        alert("Você tentou adicionar um carro sem preencher todos os campos.");
        return;
    }

    const novoCarro = {
        text: `${nome} (${ano})`,
        image: imagem,
    };
    carros.push(novoCarro);
    localStorage.setItem("Carros", JSON.stringify(carros));
    render();

    document.getElementById('carroNome').value = "";
    document.getElementById('carroAno').value = "";
    document.getElementById('carroImagem').value = "";
    document.getElementById('carroNome').focus();
}

function render() { 

    const listaCarros = document.getElementById("lista-carros");
    listaCarros.innerHTML = "";

    for (let i = 0; i < carros.length; i++) { //NÃO ENTENDI O PQ MAS COM VAR NÃO FUNCIONOU, TROQUEI PARA LET E DEU CERTO :D
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = carros[i].text;

        const img = document.createElement("img");
        img.src = carros[i].image;
        img.width = 500;

        const botaoDeletar = document.createElement("button");
        botaoDeletar.textContent = "Deletar";
        botaoDeletar.onclick = function() {
            deletarCarro(i); 
        };

        li.appendChild(span);
        li.appendChild(img);
        li.appendChild(botaoDeletar);
        listaCarros.appendChild(li);
    }
}


function carregarCarros() {
    const carrosLocalStorage = localStorage.getItem("Carros");

    if (carrosLocalStorage) {
        carros = JSON.parse(carrosLocalStorage);
        render();
    }
}

function deletarCarro(index) {
    carros.splice(index, 1);
    localStorage.setItem("Carros", JSON.stringify(carros));
    render(); 
}

