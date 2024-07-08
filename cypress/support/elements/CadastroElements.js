class CadastroElements {
  inputNome = () => {
    return 'input[name="name"]';
  };

  inputEmail = () => {
    return 'input[name="email"]';
  }

  inputCelular = () => {
    return '#rd-phone_field-_NTcLCwlSl-MjkaA0TJLvg';
  };

  inputCpf = () => {
    return 'input[name="cpf"]';
  };

  enviarFormulario = () => {
    return '#rd-button-joq3m2m7';
  };

  aceitarCoockies = () => {
    return '.cc-ALLOW';
  };

  selectCidades = () => {
    return '#select2-chosen-1';
  };
  
  pesquisarCidade = () => {
    return '#s2id_autogen1_search';
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
}

export default CadastroElements;
