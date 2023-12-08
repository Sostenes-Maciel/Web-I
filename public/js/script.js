 window.addEventListener("load", ready) 

const produtos = [
{
    id: 0,
    img: "imagens/pao1_resized.jpg",
    nome: "pao de ciabatta",
    descricao: "O Pão de Ciabatta é um pão italiano artesanal conhecido por sua crosta crocante e miolo macio e arejado. É feito com farinha de trigo, água, fermento e sal, e é perfeito para sanduíches devido à sua textura leve e sabor neutro",
    valor: "R$30,00",
},
{
    id: 1,
    img: "imagens/pao2_resized.jpg",
    nome: "Pão de Quatro Queijos",
    descricao: "Nosso Pão de Queijo é autêntico e traz o sabor inconfundível das cozinhas brasileiras. Feito com queijo fresco e polvilho,",
    valor: "R$ 25,00",
},
{
    id: 2,
    img:"imagens/pao3_resized.jpg",
    nome: "Pão de Focaccia",
    descricao: "Nosso Pão de Queijo é autêntico e traz o sabor inconfundível das cozinhas brasileiras.",
    valor: "R$ 22,00",
},
{
    id: 3,
    img: "imagens/pao4_resized.jpg",
    nome: "Pão de Centeio",
    descricao: "O Pão de Centeio é um pão escuro e denso feito com farinha de centeio.",
    valor: "R$ 30,00",

},
{
    id: 4,
    img: "imagens/pao5_resized.jpg",
    nome: "Pão Baguete",
    descricao: "A Baguete é um pão de origem francesa que é conhecido por sua forma longa e fina e casca crocante.",
    valor: "R$ 20,00",
},
{
    id: 5,
    img: "imagens/chocolate.jpg",
    nome: "Bolo confeitado prestigio nestlé",
    descricao: "Delicioso bolo de chocolate feito com ingredientes de alta qualidade. Perfeito para qualquer ocasião.",
    valor: "R$ 30,00",
},
{
    id: 6,
    img: "imagens/morango.jpg",
    nome: "Bolo Sabor merengue",
    descricao: "Um bolo fresco e saboroso, recheado com morangos frescos e creme. Uma escolha perfeita para dias especiais.",
    valor: "R$ 35,00",
},
{
    id: 7,
    img: "imagens/brigadeiro.jpg",
    nome: "Bolo sabor brigadeiro com morango",
    descricao: "Este bolo é feito com camadas de bolo de chocolate macio, recheado com um delicioso brigadeiro cremoso e coberto com uma generosa camada de brigadeiro ganache",
    valor: "R$ 40,00",
},
{
    id: 8,
    img: "imagens/mousse.jpg",
    nome: "Bolo duas moussess",
    descricao: "Este bolo é composto por camadas de bolo leve e fofo intercaladas com camadas de mousse de chocolate sedoso.",
    valor: "R$ 55,00",
},
{
    id: 9,
    img: "imagens/fereiro.jpg",
    nome: "Bolo confeitado ferrero branco",
    descricao: "O Bolo de Chocolate Branco é uma opção sofisticada e requintada. Este bolo apresenta camadas de bolo de chocolate branco, que é mais suave e doce que o chocolate tradicional.",
    valor: "R$ 45,00",
},
];

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

// public/js/script2.js

document.addEventListener('DOMContentLoaded', () => {
    // Função para carregar os produtos do backend
    async function carregarProdutos() {
        try {
            const response = await fetch('http://localhost:3000/api/produtos');
            const produtosdoBackend = await response.json();

            // Renderizar os produtos no frontend
            produtosdoBackend.forEach(produto => {
                const section = document.getElementById(produto.id.toString());
                if (section) {
                    section.querySelector('.title').textContent = produto.nome;
                    section.querySelector('.preco-bolo').textContent = `R$ ${produto.valor.toFixed(2)}`;
                }
            });
        } catch (error) {
            console.error('Erro ao carregar produtos:', error);
        }
    }

    carregarProdutos(); // Chamar a função ao carregar a página

});


//document.addEventListener("DOMContentLoaded", ready);

    if(document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", ready)
    } else {
        ready()
    }

    var totalCarrinho = "0,00"

    function ready() {
        const removerCarrinho = document.querySelectorAll(".botao-remover")
        //console.log(removerCarrinho)
        for (var i = 0; i < removerCarrinho.length; i++) {
        removerCarrinho[i].addEventListener("click", removeProduto)
            }

            const qtdInputs = document.getElementsByClassName("produtqtd")
            for (var i = 0; i < qtdInputs.length; i++) {
                qtdInputs[i].addEventListener("change", atualizacaoCarrinho)
            }

            const addCarrinho = document.getElementsByClassName(".botao-enviar")
            for(var i = 0; i < addCarrinho.length; i++) {
                addCarrinho[i].addEventListener("click", addProdutoCarrinho)
                
            } 

             document.addEventListener("click", function(event) {
                if (event.target.classList.contains("botao-enviar")) {
                    addProdutoCarrinho(event);
                    alert("Produto Adicionado com Sucesso!")
                }
            });
 
            const limprarCarrinho = document.getElementsByClassName("botao-final")[0]
            limprarCarrinho.addEventListener("click", compraFinalizada)

        }
        const botaoFinalizarCompra = document.getElementsByClassName('botao-final')[0]
        //botaoFinalizarCompra.addEventListener("click", enviarDadosCarrinho)
        if (botaoFinalizarCompra) {
            botaoFinalizarCompra.addEventListener("click", enviarDadosCarrinho);
        }

        //Verifica se a quantidade é igual a 0, sendo, remove o item do carrinho
        function checkInputNull(event) {
            if(event.target.value === "0") {
                event.target.parentElement.parentElement.remove()

            }

        }

function addProdutoCarrinho(event) {
const button = event.target
const infoProduto = button.parentElement
const imagemProduto = infoProduto.getElementsByClassName("imagem-bolo")[0].src
const nomeProduto = infoProduto.getElementsByClassName("title")[0].innerText
const precoProduto = infoProduto.getElementsByClassName("preco-bolo")[0].innerText


const nomeProdutosCarrinho = document.getElementsByClassName("produtname")
for(var i = 0; i < nomeProdutosCarrinho.length;i++) {
    if (nomeProdutosCarrinho[i].innerText === nomeProduto) {
        nomeProdutosCarrinho[i].parentElement.parentElement.getElementsByClassName("produtqtd")[0].value++
        return
    }
}

let copiaProduto = document.createElement("tr")
copiaProduto.classList.add("produt1")

copiaProduto.innerHTML =  
`
    <tr class="produt1">
    <td class="produtid">
        <img class="produtimage" src="${imagemProduto}" alt="${nomeProduto}">
        <strong class="produtname" >${nomeProduto}</strong>
    </td>
    <td>
        <span class="produtprice" >${precoProduto}</span>
    </td>
    <td>
        <input class="produtqtd" type="number" min="0" value="1">
        <button  class="botao-remover">Remover</button>
    <td>
`;
    const novo = document.querySelector(".tabelaa tbody")
    novo.append(copiaProduto)
    atualizacaoCarrinho()

    copiaProduto.getElementsByClassName("produtqtd")[0].addEventListener("change", checkInputNull)
    copiaProduto.getElementsByClassName("botao-remover")[0].addEventListener("click", removeProduto)
    atualizacaoCarrinho()
    

    const produto = {
        imagem: imagemProduto,
        nome: nomeProduto,
        preco: precoProduto,
        quantidade: 1
    };

    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produtoExistente = carrinho.find(item => item.nome === nomeProduto);

    if (produtoExistente) {
        produtoExistente.quantidade++;
    } else {
        carrinho.push(produto);
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
            }
            
function atualizacaoCarrinho() {
                totalCarrinho = 0
                const descricaoProduto = document.getElementsByClassName("produt1")
                for (var i = 0; i < descricaoProduto.length; i++) {
                    //console.log(descricaoProduto[i])
                    const precoItem = descricaoProduto[i].getElementsByClassName("produtprice")[0].innerText.replace("R$ ", "").replace(",", ".")
                    const produtoqt = descricaoProduto[i].getElementsByClassName("produtqtd")[0].value
                    
                    totalCarrinho += precoItem * produtoqt
                    //console.log(totalCarrinho)
                }
            
                totalCarrinho = totalCarrinho.toFixed(2)
                totalCarrinho = totalCarrinho.replace(".", ",")
                document.querySelector(".produtcont span").innerText = "R$ " + totalCarrinho 
}
                      
function carregarCarrinho() {
                const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
            
                const tabelaCarrinho = document.querySelector(".tabelaa tbody");
                tabelaCarrinho.innerHTML = "";
            
                carrinho.forEach(produto => {
                    const copiaProduto = document.createElement("tr");
                    copiaProduto.classList.add("produt1");
                    

                    
            
                    copiaProduto.innerHTML = `
                        <tr class="produt1">
                            <td class="produtid">
                                <img class="produtimage" src="${produto.imagem}" alt="${produto.nome}">
                                <strong class="produtname">${produto.nome}</strong>
                            </td>
                            <td>
                                <span class="produtprice">${produto.preco}</span>
                            </td>
                            <td>
                                <input class="produtqtd" type="number" min="0" value="1">
                                <button class="botao-remover">Remover</button>
                            </td>
                            
                        </tr>
                    `;

                    copiaProduto.getElementsByClassName("produtqtd")[0].addEventListener("change", checkInputNull)
                    copiaProduto.getElementsByClassName("botao-remover")[0].addEventListener("click", removeProduto)
                    
                    
            
                    tabelaCarrinho.appendChild(copiaProduto);
                    atualizacaoCarrinho()
                });
        
}      
        
function removeProduto(event) {
        var paiDoElemento = event.target.parentNode.parentNode;
        paiDoElemento.parentNode.removeChild(paiDoElemento);
        atualizacaoCarrinho()    
            
}

function compraFinalizada() {
    if (totalCarrinho === "0,00") {
        alert("Seu carrinho está vazio!")
    } else {
        alert(
        `
            Obrigado pela compra!
            Valor do pedido: R$${totalCarrinho}
            Volte sempre!
        `
        )
    }
    document.querySelector(".tabelaa tbody").innerHTML = ""
    atualizacaoCarrinho()
    limparLocalStorage()
}

// Função para atualizar o localStorage
function atualizarLocalStorage() {

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Remover o item do carrinho
    carrinho = carrinho.filter(i => JSON.stringify(i) !== JSON.stringify(item));
  
    // Atualizar o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  
    // Remover o item do localStorage se não estiver mais no carrinho
    if (carrinho.length === item) {
      localStorage.removeItem('carrinho');
    }

}

// Função para limpar o localStorage
function limparLocalStorage() {
    localStorage.clear();
}

//document.addEventListener('DOMContentLoaded', () => {
    // ...


    // Função para enviar dados do carrinho para o backend
    async function enviarDadosCarrinho(produtos) {
        try {
            const response = await fetch('http://localhost:3000/api/carrinhos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(produtos),
            });

            const resultado = await response.text();
            console.log('Resposta do servidor:', resultado);
        } catch (error) {
            console.error('Erro ao enviar dados do carrinho:', error);
        }

            //enviarDadosCarrinho(produtos);
            if (botaoFinalizarCompra) {
            botaoFinalizarCompra.addEventListener("click", () => enviarDadosCarrinho(produtos));
    }

}

    // Exemplo de uso

    




