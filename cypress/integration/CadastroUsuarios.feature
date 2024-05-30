# language: pt

@cadastro
Funcionalidade: Cadastro de Usuário Pessoa física no Melhor Envio 

@cpfinvalido @smoke
Cenário: Validar não permissão de seguir com o cadastro com CPF invalido 
    Dado que estou na tela inicial do Cadastro
    E preencho os campos “Nome” e “E-mail”  
    E clico em “CADASTRAR”       
    Quando preencho o CPF com um formato inválido
    E clico no botão “AVANÇAR”
    Então devo ver uma mensagem de erro indicando que o CPF é inválido

@telefoneinvalido @smoke
Cenário: Validar não permissão de seguir com o cadastro com telefone invalido 
    Dado que estou na tela inicial do Cadastro
    E preencho os campos “Nome” e “E-mail”  
    E clico em “CADASTRAR”       
    Quando preencho o telefone com um formato inválido
    E clico no botão “AVANÇAR”
    Então devo ver uma mensagem de erro indicando que o telefone é inválido

@cadastrosucesso @smoke
Cenário: Preenchimento completo do fluxo de cadastro com dados válidos 
    Dado que estou na tela inicial do Cadastro
    E preencho os campos “Nome” e “E-mail” 
    E clico em “CADASTRAR” 
    E preencho os campos “CPF”, “Data de Nascimento”, “Celular” e “Senha” corretamente 
    Quando clico no botão “AVANÇAR” 
    E preencho “CEP” com um Cep válido E preencho o campo “Número” 
    Então o cadastro na plataforma deve ser efetuado com sucesso 
    E devo ser redirecionado para a tela de “Boas-Vindas” do sistema

@emailexistente @smoke
Cenário: Validar mensagem de erro para e-mail já existente 
    Dado que estou na tela inicial do Cadastro
    E preencho os campos “Nome” e “E-mail” 
    Quando clico em “CADASTRAR” 
    Então devo ver a mensagem de e-mail já cadastrado no sistema  


