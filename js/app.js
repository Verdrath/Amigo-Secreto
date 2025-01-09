let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value.trim() === '') {
        alert('Campo não preenchdio');
        return;
    }

    let nomeNormalizado = amigo.value.trim().toLowerCase();

    if (amigos.includes(nomeNormalizado)) {
        alert('Nome já adicionado na lista');
        return;
    }

    let lista = document.getElementById('lista-amigos');

    amigos.push(nomeNormalizado);

    if (lista.textContent === '') {
        lista.textContent = amigo.value.trim();
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value.trim();
    }
    amigo.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert ('É necessário no mínimo 4 amigos para iniciar o sorteio');
        return;
    }

    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio')
    sorteio.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' ---> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' ---> ' + amigos[i + 1] + '<br>';
        } 
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        
        [lista[indice -1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}