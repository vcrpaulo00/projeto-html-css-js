(function () {
    function criarFaixas() {
        const elementosComFaixas = document.querySelectorAll("[faixas]");
        elementosComFaixas.forEach(elComFaixa => {
            const qtde = +elComFaixa.getAttribute("faixas");
            for (let i = 0; i < qtde; i++) {
                const faixa = document.createElement("div");
                faixa.classList.add("faixa");
                elComFaixa.appendChild(faixa);
            }
        })
    }
    criarFaixas();
})()



function criarPavimento() {
        const elementosComAndares = document.querySelectorAll("[andares]")
        elementosComAndares.forEach(elComAndares => {
            const qtde = +elComAndares.getAttribute("andares")
    
            for(let i = 0; i < qtde; i++) {
                elComAndares.appendChild(criarAndar())
            }
    
            elComAndares.appendChild(criarAndar())
        })
    }
    criarPavimento()