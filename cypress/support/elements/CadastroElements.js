class CadastroElements {
  inputNome = () => {
    return '[data-cy="lead-input-name"]';
  };

  inputEmail = () => {
    return '[data-cy="lead-input-email"]';
  };

  botaoCadastrar = () => {
    return '[data-cy="lead-button-register"]';
  };

  inputDataNascimento = () => {
    return '[data-cy="personal-input-birthdate"]';
  };

  inputCelular = () => {
    return '[data-cy="personal-input-phone"]';
  };

  inputCpf = () => {
    return '[data-cy="personal-input-cpf"]';
  };

  mensagemErropreenchimentoCampo = () => {
    return '.errorText';
  };
  
  inputSenha = () => {
    return '.form-box-input';
  };

  checkAceiteTermos = () => {
    return '[data-cy="personal-checkbox-terms"]';
  };

  inputCep = () => {
    return '[data-cy="company-input-cep"]';
  };

  inputEndereco = () => {
    return '[data-cy="company-input-address"]';
  };

  inputNumero = () => {
    return '[data-cy="company-input-number"]';
  };
  
  inputComplemento = () => {
    return '[data-cy="company-input-complement"]';
  };

  botaoAvancar = () => {
    return '[data-cy="personal-button-submit"]';
  };

  botaoAvancarEndereco = () => {
    return '[data-cy="company-button-confirm"]';
  };

  inputEstado = () => {
    return '[id="slEstadoEmpresa"]';
  };

  inputCidade = () => {
    return '[id="iptCidadeEmpresa""]';
  };

  cadastroConcluido = () => {
    return '.complete-registration__text--primary';
  };

  urlCadastroConcluido = () => {
    return 'https://sandbox.melhorenvio.com.br/cadastre-se/boas-vindas';
  };
}

export default CadastroElements;
