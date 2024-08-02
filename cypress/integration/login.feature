# language: pt

@cadastro
Funcionalidade: Login no sistema 

@loginSucesso @smoke
Cenário: Login com usuário válido 
    Dado que o usuário está na página de login
    Quando ele insere um nome de usuário e senha válido
    E clica no botão de login
    Então ele deve ser redirecionado para a página de inventário

@loginUserInvalido @smoke
Cenário: Login com usuário inválido
    Dado que o usuário está na página de login
    Quando ele insere um nome de usuário inválido e senha invalida
    E clica no botão de login
    Então ele deve ver uma mensagem de erro