/* global Given, Then, When, And */
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the site', () => {
  cy.visit('/');
});

Then('I see the title {string}', (title) => {
  cy.title().should('eq', title);
});

import LoginPage from "../pageobjects/LoginPage";
const loginPage = new LoginPage();


Given("que o usuário está na página de login", () => {
    loginPage.acessarSite();
});


When("ele insere um nome de usuário e senha válido", () => {
  loginPage.preencherUserValido();

});

When("clica no botão de login", () => {
  loginPage.clicarLogin()
});

When("ele deve ser redirecionado para a página de inventário", () => {
  loginPage.validarRedirecionamento()
});

When("ele deve ver uma mensagem de erro", () => {
  loginPage.validarMensagemErro()
});

When("ele insere um nome de usuário inválido e senha invalida", () => {
  loginPage.preencherUserInvalido()
});

Then("ele deve ver uma lista de produtos", () => {
  loginPage.validarListaProdutos()
});

When("a lista deve conter 6 itens", () => {
  loginPage.validarQuantidadeProdutos()
});

Then("ele clica no botão adicionar ao carrinho do primeiro produto", () => {
  loginPage.adicionarItemCarrinho()
});

When("o ícone do carrinho deve mostrar '1'", () => {
  loginPage.validarCarrinho1()
});

Then("o ícone do carrinho deve mostrar '0'", () => {
  loginPage.validarCarrinho0();
});

Then("clica no ícone do carrinho", () => {
  loginPage.clicarCarrinho();
});

Then("que o usuário está logado com um usuário válido", () => {
  loginPage.acessarSite();
  loginPage.preencherUserValido();
  loginPage.clicarLogin();
  loginPage.validarRedirecionamento();
});

Then("clica no botão 'Remove' do produto", () => {
  loginPage.clicarRemove();
});

Then("ele clica no botão Checkout", () => {
  loginPage.clicarCheckout();
});

When("faz o fluxo de compra até o fim", () => {
  loginPage.fluxoCompraFinal()
});

Then("ele deve ver uma mensagem de confirmação de compra", () => {
  loginPage.validarMensagemCompra()
});

