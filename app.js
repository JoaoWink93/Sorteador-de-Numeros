// FUNÇAO DE SORTEAR NÚMERO ALEATORIO.
function sortear() {
    // RECEBE O VALOR DOS ID/INPUT E TRANSFORMA EM NÚMEROS.
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    //LISTA PATA OS NUMEROS SORTEADOS.
    let sorteados = [];
    let numeroSorteado;
    
    // VERIFICA SE O NUMERO JÁ FOI SORTEADO.
    for (let i = 0; i < quantidade; i++) {
        numeroSorteado = obterNumeroAleatorio(de, ate);
        while(sorteados.includes(numeroSorteado)) {
            numeroSorteado = obterNumeroAleatorio(de, ate);
        }
        
        // PUXA O NUMERO PARA A LISTA
        sorteados.push(numeroSorteado);
    }
    
    // ALTERA O TEXTO COM O RESULTADO.
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    
    alterarStatusDoBotao();
}



// FUNÇÃO PARA OBTER NÚMERO ALEATÓRIO.
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1))+ min;
}

// FUNÇÃO QUE ALTERA O STATUS DOS BOTÕES.
function alterarStatusDoBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

// FUNÇÃO QUE REINICIA O SORTEADOR.
function reiniciar() {
    alterarStatusDoBotao();
    quantidade = document.getElementById('quantidade').value = '';
    de = document.getElementById('de').value = '';
    ate = document.getElementById('ate').value = '';
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
}