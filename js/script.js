
let email = document.getElementById("campo-email");

function enviarEmail() {
    let emailDigitado = email.value;
    console.log(emailDigitado)
}



function renderizarProdutos() {
    let product = document.getElementById("produtos");

    let listaProdutos = [
        {
            // cada chave vai ser um produto com preço e botão
            imagem: "IMG/teclado.png",
            titulo: "Produto 1",
            valorBoleto: "R$999,00",
            valorCartao: "R$1199,00"
        },
        {
            // cada chave vai ser um produto com preço e botão
            imagem: "IMG/cadeira 1.png",
            titulo: "Produto 2",
            valorBoleto: "R$759,99",
            valorCartao: "R$1099,99"
        },
        {
            // cada chave vai ser um produto com preço e botão
            
            imagem: "IMG/cooler.png",
            titulo: "Produto 1",
            valorBoleto: "R$999,00",
            valorCartao: "R$1199,00"
        },
        {
            // cada chave vai ser um produto com preço e botão
            imagem: "IMG/intel.png",
            titulo: "Produto 2",
            valorBoleto: "R$759,99",
            valorCartao: "R$1099,99"
        },
        {
            // cada chave vai ser um produto com preço e botão
            imagem: "IMG/monitor 1.png",
            titulo: "Produto 1",
            valorBoleto: "R$999,00",
            valorCartao: "R$1199,00"
        },
        {
            // cada chave vai ser um produto com preço e botão
            imagem: "IMG/notebook 1.png",
            titulo: "Produto 2",
            valorBoleto: "R$759,99",
            valorCartao: "R$1099,99"
        },
        {
            // cada chave vai ser um produto com preço e botão
            imagem: "IMG/placa.png",
            titulo: "Produto 1",
            valorBoleto: "R$999,00",
            valorCartao: "R$1199,00"
        },
        {
            // cada chave vai ser um produto com preço e botão
            imagem: "IMG/volante.png",
            titulo: "Produto 2",
            valorBoleto: "R$759,99",
            valorCartao: "R$1099,99"
        },
        {
            // cada chave vai ser um produto com preço e botão
            imagem: "IMG/notebook 1.png",
            titulo: "Produto 1",
            valorBoleto: "R$999,00",
            valorCartao: "R$1199,00"
        },
        {
            // cada chave vai ser um produto com preço e botão
            imagem: "IMG/volante.png",
            titulo: "Produto 2",
            valorBoleto: "R$759,99",
            valorCartao: "R$1099,99"
        }
    ]

    let template = "";

    for (let index = 0; index < listaProdutos.length; index++) {
        const deProduto = listaProdutos[index];
    
        template += `<div class="card_produtos">
        <img src="${deProduto.imagem}" alt="Foto de teclado Gamer">
        <h3>${deProduto.titulo}</h3>
        <p>${deProduto.valorBoleto}</p>
        <p>${deProduto.valorCartao}</p>
        <a href="#" class="btncompra">
            <h2>Comprar</h2>
        </a>
    </div>`
 
    }

    product.innerHTML = template;
}
