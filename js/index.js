const data = [
  {
    id: 1,
    img: "bota.jpeg",
    nameItem: "Bota Ankleboot",
    description:
      "Bota curta, cor marrom. Versátil e ideal para qualquer ocasião",
    value: 120.00,
    addCart: "Adicionar ao carrinho",
    tag: ["Calçados"],
  },
  {
    id: 2,
    img: "oculos.jpeg",
    nameItem: "Óculos Aviador",
    description:
      "Óculos de lente azul, modelo clássico aviador. Lente levemente espelhada.",
    value: 329.00,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 3,
    img: "casaco.jpeg",
    nameItem: "Casaco Flanelado",
    description:
      "Casaco forrado com camada espessa interna de algodão, perfeito para temperaturas mais baixas ",
    value: 240.00,
    addCart: "Adicionar ao carrinho",
    tag: ["Roupas"],
  },
  {
    id: 4,
    img: "bolsa.jpeg",
    nameItem: "Bolsa de couro",
    description:
      "Bolsa tira colo marrom, forrada e com três repartições internas.",
    value: 175.00,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 5,
    img: "tamanco.jpeg",
    nameItem: "Tamanco peptooe",
    description:
      "Tamanco Salto médio. Garante coforte e um look elegante. ",
    value: 99.00,
    addCart: "Adicionar ao carrinho",
    tag: ["Calçados"],
  },
  {
    id: 6,
    img: "conjunto.jpeg",
    nameItem: "Conjunto Moletom ",
    description:
      "Conjunto de moletom super confortável e usual.",
    value: 189.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Roupas"],
  },
];

function renderProductList(dataToProcess, vitrini) {
  if (dataToProcess.length == 0) {
    dataToProcess = data
  }
  
  vitrini.innerHTML = ""
  dataToProcess.forEach(element => {
    const card = document.createElement("li")
    card.classList.add("card")
    vitrini.appendChild(card)


    const fotografia = document.createElement("div")
    fotografia.classList.add("fotografia")
    card.appendChild(fotografia)
    const fotoDoProduto = document.createElement("img")
    fotoDoProduto.classList.add("fotoDoProduto")
    fotoDoProduto.src = element.img
    fotografia.appendChild(fotoDoProduto)


    const sobreProduto = document.createElement("div")
    sobreProduto.classList.add("sobreProduto")
    card.appendChild(sobreProduto)
    const sessaoProduto = document.createElement("p")
    sessaoProduto.classList.add("sessaoProduto")
    sessaoProduto.innerText = element.tag[0]
    sobreProduto.appendChild(sessaoProduto)
    const tituloDeProduto = document.createElement("h1")
    tituloDeProduto.classList.add("tituloDeProduto")
    tituloDeProduto.innerText = element.nameItem
    sobreProduto.appendChild(tituloDeProduto)
    const descricaoDoProduto = document.createElement("p")
    descricaoDoProduto.classList.add("descricaoDoProduto")
    descricaoDoProduto.innerText = element.description
    sobreProduto.appendChild(descricaoDoProduto)
    const precoDoProduto = document.createElement("p")
    precoDoProduto.classList.add("precoDoProduto")
    precoDoProduto.innerText = "R$ " + element.value.toFixed(2)
    sobreProduto.appendChild(precoDoProduto)
    const botaoProduto = document.createElement("button")
    botaoProduto.classList.add("botaoProduto")
    botaoProduto.innerText = element.addCart
    botaoProduto.id = element.id

    botaoProduto.addEventListener("click", function () {
      const carrinhoDeCompras = document.querySelector(".carrinhoDeCompras")

      const carrinhoQtd = document.querySelector(".carrinhoQtd")

      let divTodosProdutosCarrinho = null
      if (carrinhoQtd.value == 0) {
        divTodosProdutosCarrinho = document.createElement("div")
        divTodosProdutosCarrinho.classList.add("divTodosProdutosCarrinho")
        carrinhoDeCompras.appendChild(divTodosProdutosCarrinho)
      } else {
        divTodosProdutosCarrinho = document.querySelector(".divTodosProdutosCarrinho")
      }

      const sobreProdutoCarrinho = document.createElement("div")
      sobreProdutoCarrinho.classList.add("sobreProdutoCarrinho")
      sobreProdutoCarrinho.id = "sobreProdutoCarrinho" + botaoProduto.id
      divTodosProdutosCarrinho.appendChild(sobreProdutoCarrinho)
      
      const fotografiaCarrinho=document.createElement("section")
      fotografiaCarrinho.classList.add("fotografiaCarrinho")
      sobreProdutoCarrinho.appendChild(fotografiaCarrinho)
      const fotoDoProdutoCarrinho = document.createElement("img")
      fotoDoProdutoCarrinho.classList.add("fotoDoProdutoCarrinho")
      fotoDoProdutoCarrinho.src = dataToProcess[botaoProduto.id - 1].img
      fotografiaCarrinho.appendChild(fotoDoProdutoCarrinho)
    
      const itensCarrinho=document.createElement("section")
      itensCarrinho.classList.add("itensCarrinho")
      sobreProdutoCarrinho.appendChild(itensCarrinho)
      const tituloDeProdutoCarrinho = document.createElement("h1")
      tituloDeProdutoCarrinho.classList.add("tituloDeProdutoCarrinho")
      tituloDeProdutoCarrinho.innerText = dataToProcess[botaoProduto.id - 1].nameItem
      itensCarrinho.appendChild(tituloDeProdutoCarrinho)
      const precoDoProdutoCarrinho = document.createElement("p")
      precoDoProdutoCarrinho.classList.add("precoDoProdutoCarrinho")
      precoDoProdutoCarrinho.innerText = "R$ " + dataToProcess[botaoProduto.id - 1].value.toFixed(2)
      itensCarrinho.appendChild(precoDoProdutoCarrinho)
      const botaoRemoverProduto = document.createElement("button")
      botaoRemoverProduto.classList.add("botaoRemoverProduto")
      botaoRemoverProduto.innerText = "Remover Produto"
      botaoRemoverProduto.id = botaoProduto.id
      botaoRemoverProduto.addEventListener("click", function () {
        const produtoCarrinho = document.querySelector("#sobreProdutoCarrinho" + botaoProduto.id)
        divTodosProdutosCarrinho.removeChild(produtoCarrinho)

        carrinhoQtd.value = parseInt(carrinhoQtd.value) - 1
        const qtdProdutosCarrinho = document.querySelector(".qtdProdutoCarrinho")
        qtdProdutosCarrinho.innerText = carrinhoQtd.value

        const valorProdutosCarrinho = document.querySelector(".valorProdutosCarrinho")
        const precoDoProduto = dataToProcess[botaoProduto.id - 1].value

        valorProdutosCarrinho.innerText = (parseFloat(valorProdutosCarrinho.innerText) - precoDoProduto).toFixed(2)

        if (carrinhoQtd.value == 0) {

          const cabecalhoCarrinhodeCompras = document.querySelector(".cabecalhoCarrinhodeCompras")

          const carrinhoQtdHidden = document.querySelector(".carrinhoQtd")

          carrinhoDeCompras.innerHTML = '';

          carrinhoDeCompras.appendChild(cabecalhoCarrinhodeCompras)
          carrinhoDeCompras.appendChild(carrinhoQtdHidden)

          const carrinhoVazio = document.createElement("p")
          carrinhoVazio.classList.add("carrinhoVazio")
          carrinhoVazio.innerText = "Carrinho Vazio"
          carrinhoDeCompras.appendChild(carrinhoVazio)

          const AdicioneItem = document.createElement("p")
          AdicioneItem.classList.add("AdicioneItem")
          AdicioneItem.innerText = "Adicione Ítem"
          carrinhoDeCompras.appendChild(AdicioneItem)
        }
      })
      itensCarrinho.appendChild(botaoRemoverProduto)

      //se o carrinho estiver vazio
      if (carrinhoQtd.value === "0") {

        // remove "Carrinho vazio"
        const removerCarrinhoVazio = document.querySelector(".carrinhoVazio")
        carrinhoDeCompras.removeChild(removerCarrinhoVazio)

        const removerAdicioneItem = document.querySelector(".AdicioneItem")
        carrinhoDeCompras.removeChild(removerAdicioneItem)

        const divResutadoProdutosCarrinho = document.createElement("div")
        divResutadoProdutosCarrinho.classList.add("divResutadoProdutosCarrinho")
        carrinhoDeCompras.appendChild(divResutadoProdutosCarrinho)

        const quantidadeCarrinho = document.createElement("section")
        quantidadeCarrinho.classList.add("quantidadeCarrinho")
        divResutadoProdutosCarrinho.appendChild(quantidadeCarrinho)
        const textQtdProdutosCarrinho = document.createElement("p")
        textQtdProdutosCarrinho.classList.add("textQtdProdutosCarrinho")
        textQtdProdutosCarrinho.innerText = "Quantidade: "
        quantidadeCarrinho.appendChild(textQtdProdutosCarrinho)
        const qtdProdutosCarrinho = document.createElement("p")
        qtdProdutosCarrinho.classList.add("qtdProdutoCarrinho")
        qtdProdutosCarrinho.innerText = "0"
        quantidadeCarrinho.appendChild(qtdProdutosCarrinho)

        const valorCarrinho = document.createElement("section")
        valorCarrinho.classList.add("valorCarrinho")
        divResutadoProdutosCarrinho.appendChild(valorCarrinho)
        const textValorProdutosCarrinho = document.createElement("p")
        textValorProdutosCarrinho.classList.add("textValorProdutosCarrinho")
        textValorProdutosCarrinho.innerText = "Total:"
        valorCarrinho.appendChild(textValorProdutosCarrinho)
        const valorProdutosCarrinho = document.createElement("p")
        valorProdutosCarrinho.classList.add("valorProdutosCarrinho")
        valorProdutosCarrinho.innerText = "0.0"
        valorCarrinho.appendChild(valorProdutosCarrinho)
      }
      carrinhoQtd.value = parseInt(carrinhoQtd.value) + 1
      const qtdProdutosCarrinho = document.querySelector(".qtdProdutoCarrinho")
      const valorProdutosCarrinho = document.querySelector(".valorProdutosCarrinho")
      const precoDoProduto = dataToProcess[botaoProduto.id - 1].value
      qtdProdutosCarrinho.innerText = carrinhoQtd.value
      valorProdutosCarrinho.innerText = (parseFloat(valorProdutosCarrinho.innerText) + precoDoProduto).toFixed(2)
    })
    sobreProduto.appendChild(botaoProduto)
  });
}



const body = document.querySelector("body")

const header = document.querySelector("header")

const menuData = [
  "Todos",
  "Roupas",
  "Calçados",
  "Acessórios",
  "Sale"
]

const menu = document.querySelector(".menu")

menuData.forEach(element => {
  const item = document.createElement("p")
  item.classList.add("itemMenu")
  item.innerText = element
  item.addEventListener("click", function(){
    let dataFiltrada = []
    data.forEach(product => {
      if (product.tag[0].includes(item.innerText)) {
        dataFiltrada.push(product)
      }
    });

    renderProductList(dataFiltrada, vitrini)
  })
  menu.appendChild(item)
});

const main = document.querySelector("main")

const vitrini = document.querySelector("#Vitrine")

const barraDePesquisa = document.createElement("input")
barraDePesquisa.classList.add("barraDePesquisa")
barraDePesquisa.placeholder = "Digite aqui sua pesquisa"

const botaoPesquisar = document.createElement("button")
botaoPesquisar.classList.add("botaoPesquisar")
botaoPesquisar.innerText = "Pesquisa"
botaoPesquisar.addEventListener("click", function () {
  let dataFiltrada = []
  data.forEach(element => {
    if (element.nameItem.toLowerCase().includes(barraDePesquisa.value.toLowerCase())) {
      dataFiltrada.push(element)
    }
  });

  renderProductList(dataFiltrada, vitrini)
})

carrinhoDeCompras = document.querySelector(".carrinhoDeCompras")
main.insertBefore(barraDePesquisa, carrinhoDeCompras)
main.insertBefore(botaoPesquisar, carrinhoDeCompras)


renderProductList(data, vitrini)
