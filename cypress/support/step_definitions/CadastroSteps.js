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


When("preencho os campos do formulário corretamente", () => {
  cadastroPage.aceitarCoockies();
  cadastroPage.preencherCadastroInicial();
});

When("seleciono a cidade", () => {
  cadastroPage.selecionarCidade()
});

When("resolvo a expressão mátematica", () => {
  cadastroPage.resolverExpressaoMatematica()
});

When("envio o formulário", () => {
  cadastroPage.enviarFormularioCadastro()
});

When("devo ser redirecionado para a tela de Agradecimento do sistema", () => {
  cadastroPage.validarRedirecionamento()
});