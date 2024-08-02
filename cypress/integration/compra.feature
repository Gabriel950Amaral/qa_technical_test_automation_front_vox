# language: pt

@cadastro
Funcionalidade: Login no sistema 

Funcionalidade: Visualização de Produtos

  Cenário: Visualizar lista de produtos após login
    Dado que o usuário está logado com um usuário válido
    Quando ele deve ser redirecionado para a página de inventário
    Então ele deve ver uma lista de produtos
    E a lista deve conter 6 itens


 @adicionarCarrinho @smoke
 Cenário: Adicionar um produto ao carrinho
   Dado que o usuário está logado com um usuário válido
   Quando ele clica no botão adicionar ao carrinho do primeiro produto
   Então o ícone do carrinho deve mostrar '1'


 @removerCarrinho @smoke
  Cenário: Remover um produto do carrinho
    Dado que o usuário está logado com um usuário válido
    E ele clica no botão adicionar ao carrinho do primeiro produto
    Quando clica no ícone do carrinho
    E clica no botão 'Remove' do produto
    Então o ícone do carrinho deve mostrar '0'


 @compraSucesso @smoke
  Cenário: Finalizar compra com sucesso
    Dado que o usuário está logado com um usuário válido
    E ele clica no botão adicionar ao carrinho do primeiro produto
    E clica no ícone do carrinho
    Quando ele clica no botão Checkout
    E faz o fluxo de compra até o fim
    Então ele deve ver uma mensagem de confirmação de compra