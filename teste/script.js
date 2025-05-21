function calcularFrete() {
    const address = document.getElementById('address').value;
    const freteInfo = document.getElementById('frete-info');

    if (address.trim() === '') {
        freteInfo.textContent = "Digite um endereço válido";
        return;
    }

    // Simulando um cálculo de frete (valores fictícios)
    const precoFrete = (Math.random() * 10 + 5).toFixed(2);
    freteInfo.textContent = `Frete para "${address}": R$ ${precoFrete}`;
}

function toggleSearch() {
    var searcheBox = document.getElementById('search-box');
    if (searcheBox.style.display === 'none') {
        searcheBox.style.display = 'block';
    } else {
        searcheBox.style.display = 'none';
    }
}