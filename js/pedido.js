// Função para mostrar o popup de escolha de quantidade
function mostrarPopup(produto) {
    // Exibe o popup
    document.getElementById('popup').classList.remove('popup-oculto');
    // Exibe o fundo com blur
    document.getElementById('overlay').style.display = 'block';
    // Atualiza o nome do produto no popup
    document.getElementById('produtoNome').textContent = produto;
}

// Função para cancelar o popup
function cancelarPopup() {
    // Esconde o popup
    document.getElementById('popup').classList.add('popup-oculto');
    // Remove o efeito de blur no fundo
    document.getElementById('overlay').style.display = 'none';
}

// Função para enviar o pedido (simulação)
function enviarPedido() {
    alert('Pedido enviado!');
    // Fecha o popup após enviar o pedido
    cancelarPopup();
}
