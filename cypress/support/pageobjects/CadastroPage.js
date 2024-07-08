/// <reference types="Cypress" />

import CadastroElements from "../elements/CadastroElements";

const fs = require('fs');
const faker = require('faker-br');

const user = {
    nome: faker.name.findName(),
    email: faker.internet.email(),
    cpf: faker.br.cpf(),
    cpfInvalido: "111.111.111-11",
    telefoneInvalido: "00000000000",
    dataNascimento: faker.date.past(50, new Date(2000, 0, 1)).toISOString().split('T')[0],
    senha: faker.internet.password(),
    cep: "96055-710",
    numeroEndereço: "949",
    complemento: "Sede Melhor Envio"
};

const gerarTelefoneCelular = () => {
    const DDD = faker.address.zipCode().slice(0, 2); // Obtém dois primeiros dígitos para o código de área
    const primeiraParte = `9${faker.random.number({min: 1000, max: 9999})}`; // Sempre começa com '9' seguido de quatro dígitos
    const segundaParte = faker.random.number({min: 1000, max: 9999}); // Quatro últimos dígitos
    return `(${DDD}) ${primeiraParte}-${segundaParte}`;
};


const gerarDataNascimento = () => {
    const hoje = new Date();
    const idadeMaxima = 99;
    const idadeMinima = 18;
    const dataMaxima = new Date(hoje.getFullYear() - idadeMinima, hoje.getMonth(), hoje.getDate());
    const dataMinima = new Date(hoje.getFullYear() - idadeMaxima, hoje.getMonth(), hoje.getDate());
    const dataRandomica = faker.date.between(dataMinima, dataMaxima);

    // Formate a data como dd/mm/aaaa
    const dia = String(dataRandomica.getDate()).padStart(2, '0');
    const mes = String(dataRandomica.getMonth() + 1).padStart(2, '0');
    const ano = dataRandomica.getFullYear();

    return `${dia}/${mes}/${ano}`;
};


const cadastroElements = new CadastroElements();
const url = Cypress.config("baseUrl");




class LoginPage {
  // Acessa o site que será testado
  acessarSite() {
    cy.visit(url);
  }

  aceitarCoockies() {
    cy.get(cadastroElements.aceitarCoockies()).click();
  }
  // Clica no botão de realizar login
  preencherCadastroInicial() {
        cy.get(cadastroElements.inputNome()).should('be.visible')
        cy.get(cadastroElements.inputNome()).type(user.nome);
        cy.get(cadastroElements.inputEmail()).type(user.email);
        cy.get(cadastroElements.inputCelular()).type(gerarTelefoneCelular())
  }

  selecionarCidade() {
    cy.get(cadastroElements.selectCidades()).click()
    cy.get(cadastroElements.pesquisarCidade()).type("Cuiabá").wait(2000).type('{enter}');
  }
 
  resolverExpressaoMatematica() {       
    // Resolver a expressão matemática
    cy.get('#math_expression').then(($expression) => {
      const expressionText = $expression.text().trim();
      const [num1, operator, num2] = expressionText.split(' ');

      let result;
      switch (operator) {
        case '+':
          result = parseInt(num1) + parseInt(num2);
          break;
        case '-':
          result = parseInt(num1) - parseInt(num2);
          break;
        case '*':
          result = parseInt(num1) * parseInt(num2);
          break;
        case '/':
          result = parseInt(num1) / parseInt(num2);
          break;
        default:
          throw new Error('Operador desconhecido');
      }
      cy.get(cadastroElements.captcha()).type(result);
    });
  }

  enviarFormularioCadastro() {
    // Submeter o formulário
    cy.get(cadastroElements.enviarFormulario()).click();
  }


  validarRedirecionamento() {
    // Verificar se há uma mensagem de sucesso
    cy.contains('Em breve um dos nossos consultores entrará em contato com você!').should('be.visible');
     cy.url().should('eq', cadastroElements.urlCadastroConcluido());
    }
}

export default LoginPage;
