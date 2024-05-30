/* global Given, Then, When, And */
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the site', () => {
  cy.visit('/');
});

Then('I see the title {string}', (title) => {
  cy.title().should('eq', title);
});

import CadastroPage from "../pageobjects/CadastroPage";
const cadastroPage = new CadastroPage();


Given("que estou na tela inicial do Cadastro", () => {
    cadastroPage.acessarSite();
});

When("preencho os campos “Nome” e “E-mail”", () => {
  cadastroPage.preencherCadastroInicial();
});

When("clico em “CADASTRAR”", () => {
  cadastroPage.clicarBotaoCadastrar();
});

Then("devo ver a mensagem de e-mail já cadastrado no sistema", () => {
  cadastroPage.validarCampoInvalido();
});


When("preencho os campos “CPF”, “Data de Nascimento”, “Celular” e “Senha” corretamente", () => {
  cadastroPage.preencherDadosPessoais();
  cadastroPage.aceitarTermosUso();
});

When("preencho o CPF com um formato inválido", () => {
  cadastroPage.preencherDadosCpfInvalido();
});

When("preencho o telefone com um formato inválido", () => {
  cadastroPage.preencherDadosTelefoneInvalido();
});

Then("devo ver uma mensagem de erro indicando que o CPF é inválido", () => {
  cadastroPage.validarCampoInvalido();
});

Then("devo ver uma mensagem de erro indicando que o telefone é inválido", () => {
  cadastroPage.validarCampoInvalido();
});

When("clico no botão “AVANÇAR”", function () {
  cadastroPage.clicarAvancar();
});

When("preencho “CEP” com um Cep válido E preencho o campo “Número”", () => {
  cadastroPage.preencherDadosEndereco();
});



Then("o cadastro na plataforma deve ser efetuado com sucesso", () => {
  cadastroPage.cadastroConcluido()
});

When("devo ser redirecionado para a tela de “Boas-Vindas” do sistema", () => {
  cadastroPage.validarRedirecionamento()
});


