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

  // Clica no botão de realizar login
  preencherCadastroInicial() {
        cy.get(cadastroElements.inputNome()).should('be.visible')
        cy.get(cadastroElements.inputNome()).type(user.nome);
        cy.get(cadastroElements.inputEmail()).type(user.email);
  }
 
  clicarBotaoCadastrar() {
    cy.get(cadastroElements.botaoCadastrar()).click();
  }

  preencherDadosPessoais() {
    cy.get(cadastroElements.inputCpf()).should('be.visible');
    cy.get(cadastroElements.inputCpf()).type(user.cpf);
    cy.get(cadastroElements.inputDataNascimento()).type(gerarDataNascimento());
    cy.get(cadastroElements.inputCelular()).type(gerarTelefoneCelular());
    cy.get(cadastroElements.inputSenha()).type(user.senha);
  }

  preencherDadosCpfInvalido(){
    cy.get(cadastroElements.inputCpf()).should('be.visible');
    cy.get(cadastroElements.inputCpf()).type(user.cpfInvalido);
    cy.get(cadastroElements.inputDataNascimento()).type(gerarDataNascimento());
    cy.get(cadastroElements.inputCelular()).type(gerarTelefoneCelular());
    cy.get(cadastroElements.inputSenha()).type(user.senha);
  }

  preencherDadosTelefoneInvalido(){
    cy.get(cadastroElements.inputCpf()).should('be.visible');
    cy.get(cadastroElements.inputCpf()).type(user.cpf);
    cy.get(cadastroElements.inputDataNascimento()).type(gerarDataNascimento());
    cy.get(cadastroElements.inputCelular()).type(user.telefoneInvalido);
    cy.get(cadastroElements.inputSenha()).type(user.senha);
  }

  validarCampoInvalido() {
    cy.get(cadastroElements.mensagemErropreenchimentoCampo()).should('be.visible');
  }

  aceitarTermosUso() {
    cy.get(cadastroElements.checkAceiteTermos()).click({force: true});
  }

  clicarAvancar() {
    cy.get(cadastroElements.botaoAvancar()).should('be.visible');
    cy.get(cadastroElements.botaoAvancar()).click();
  }

  preencherDadosEndereco() {
    cy.get(cadastroElements.inputCep()).should('be.visible');
    cy.get(cadastroElements.inputCep()).type(user.cep);
    cy.get(cadastroElements.inputNumero()).type(user.numeroEndereço)
    cy.get(cadastroElements.inputComplemento()).type(user.complemento)
    cy.get(cadastroElements.botaoAvancarEndereco()).click()
  }

  cadastroConcluido() {
    cy.get(cadastroElements.cadastroConcluido()).should('be.visible');
  }

  validarRedirecionamento() {
     cy.url().should('eq', cadastroElements.urlCadastroConcluido());
    }
}

export default LoginPage;
