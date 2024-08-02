/// <reference types="cypress" />

import LoginElements from "../elements/LoginElements";

const fs = require('fs');
const faker = require('faker-br');

const userValido = {
  Username: "standard_user",
  Password: "secret_sauce"
};

const userInvalido = {
  Username: "locked_out_user",
  Password: "secret_sauce"
};

const loginElements = new LoginElements();
const url = Cypress.config("baseUrl");




class LoginPage {
  // Acessa o site que será testado
  acessarSite(){
    cy.visit(url);
  }

  preencherUserValido(){
    cy.get(loginElements.inputUserName()).should('be.visible')
    cy.get(loginElements.inputUserName()).type(userValido.Username)
    cy.get(loginElements.inputPassword()).type(userValido.Password)
  }

  clicarLogin() {
    cy.get(loginElements.btnLogin()).click();
  }

  validarRedirecionamento(){
    cy.url().should('include', '/v1/inventory.html')
  }
  validarMensagemErro(){
    cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible');
  }
  preencherUserInvalido(){
    cy.get(loginElements.inputUserName()).should('be.visible')
    cy.get(loginElements.inputUserName()).type(userInvalido.Username)
    cy.get(loginElements.inputPassword()).type(userInvalido.Password)
  }

  validarListaProdutos(){
    cy.get(loginElements.itemClass()).should('be.visible')
    cy.get(loginElements.itemDesc()).should('be.visible')
  }
 
  validarQuantidadeProdutos(){
    cy.get(loginElements.itemClass()).should('have.length', 6)
    cy.get(loginElements.itemDesc()).should('have.length', 6)
  }

  adicionarItemCarrinho(){
    cy.get(loginElements.itemClass()).first().find('.btn_primary').click()
    cy.get(loginElements.Carrinho()).should('contain', '1')
  }

  validarCarrinho1(){
    cy.get(loginElements.Carrinho()).should('contain', '1')
  }

  validarCarrinho0(){
    cy.get(loginElements.Carrinho()).should('contain', '')
  }

  clicarCarrinho(){
    cy.get(loginElements.Carrinho()).click()
  }

  clicarRemove(){
    cy.get(loginElements.Carrinho()).click()
  }

  clicarCheckout(){
    cy.get(loginElements.checkout()).click()
  }

  fluxoCompraFinal(){
    cy.get(loginElements.inputFirstName()).type("Gabriel")
    cy.get(loginElements.inputLastName()).type("Amaral")
    cy.get(loginElements.inputZipCode()).type("78000000")
    cy.get(loginElements.addCart()).click()
    cy.get(loginElements.checkout()).click()
  }

  validarMensagemCompra(){
    cy.get('.complete-header').should('be.visible');
  }
}

export default LoginPage;
