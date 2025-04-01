// Adicionar produto ao formulário de pedido
document.querySelectorAll(".btn-add").forEach((button) => {
  button.addEventListener("click", function () {
    const produto = this.getAttribute("data-produto");
    const preco = parseFloat(this.getAttribute("data-preco")); // Converter para número

    document.getElementById("produto").value = produto;
    document.getElementById("preco").value = preco.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    }); // Formatar preço

    // Rolar até a seção de pedidos
    document.getElementById("pedidos").scrollIntoView({ behavior: "smooth" });
    document.getElementById("nome").focus(); // Foco no campo nome
  });
});

// Lógica do formulário de pedido
document
  .getElementById("pedido-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const produto = document.getElementById("produto").value;
    const preco = document.getElementById("preco").value;
    const endereco = document.getElementById("endereco").value;
    const pagamento = document.getElementById("pagamento").value;

    // Simulação de confirmação
    const mensagem = `Pedido Confirmado!\n\nNome: ${nome}\nProduto: ${produto}\nPreço: ${preco}\nEndereço: ${endereco}\nPagamento: ${pagamento}\n\nEnvie o comprovante para nosso WhatsApp!`;
    document.getElementById("mensagem-confirmação").innerText = mensagem; // Adiciona mensagem na tela.
    document.getElementById("mensagem-confirmação").style.display = "block";

    // Mostrar informações de pagamento
    const pagamentoInfo = document.getElementById("pagamento-info");
    pagamentoInfo.style.display = "block";

    if (pagamento === "cartao") {
      document.getElementById("mensagem-cartao").innerText =
        "Redirecionando para pagamento (simulação)...";
      document.getElementById("mensagem-cartao").style.display = "block";
    }

    // Resetar formulário
    this.reset();
    document.getElementById("produto").value = "";
    document.getElementById("preco").value = "";
    pagamentoInfo.style.display = "none";
  });
