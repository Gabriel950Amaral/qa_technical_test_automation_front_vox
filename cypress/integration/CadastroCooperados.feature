# language: pt

@cadastro
Funcionalidade: Cadastro de Cooperado CredSIS 

@cadastrosucesso @smoke
Cenário: Preenchimento completo do fluxo de cadastro com dados válidos 
    Dado que estou na tela inicial do Cadastro
    E preencho os campos do formulário corretamente 
    E seleciono a cidade 
    Quando resolvo a expressão mátematica
    E envio o formulário
    Então devo ser redirecionado para a tela de Agradecimento do sistema

