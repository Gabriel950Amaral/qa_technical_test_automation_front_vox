class LoginElements {
  inputUserName = () => {
    return 'input[data-test="username"]';
  };

  inputPassword = () => {
    return 'input[data-test="password"]';
  }

  btnLogin = () => {
    return '#login-button';
  };

  itemName = () => {
    return '.inventory_item_name';
  };

  itemClass = () => {
    return '.inventory_item';
  };

  itemDesc = () => {
    return '.inventory_item_desc';
  };

  priceItem = () => {
    return '.inventory_item_price';
  };
  
  addCart = () => {
    return '.btn_primary';
  };

  captcha = () => {
    return '#captcha';
  };
  
  urlCadastroConcluido = () => {
    return 'https://conteudo.credisis.com.br/agradecimento';
  };

  botaoIrSite = () => {
    return '#rd-button-kshzjvy1';
  };

  Carrinho = () => {
    return '.shopping_cart_link';
  };

  removerCarrinho = () => {
    return '.btn_secondary';
  };

  checkout = () => {
    return '.btn_action';
  };

  inputFirstName = () => {
    return 'input[data-test="firstName"]';
  };

  inputLastName = () => {
    return 'input[data-test="lastName"]';
  };
  
  inputZipCode = () => {
    return 'input[data-test="postalCode"]';
  };
}

export default LoginElements;
