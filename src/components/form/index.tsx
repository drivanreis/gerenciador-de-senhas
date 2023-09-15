/* O formulario por sua vez, também é um componente
que vai precisar das informações passdas pelo pai
Só que esta informação é 2 funções
*/
import { useState } from 'react';
import './styele.css';
import Botao from '../botao';

type FormProps = {
  hCancelaCadastro: () => void,
  hCadastrar: (dado: PropsInput) => void,
};

export type PropsInput = {
  nomeServ: string,
  login: string,
  senha: string,
  url: string,
};

const DadoIni = {
  nomeServ: '',
  login: '',
  senha: '',
  url: '',
};
// nome da classe que vou usar na mensagem
const nomeDaClasse = ['invalid-password-check', 'valid-password-check'];

// REGEX para validar a senha
const REGEXSenha = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
// REGEX para validar a letras e numeros
const REGEXLetrasNum = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
// REGEX para validar caracteres especiais
const REGEXEspecial = /[!@#$%^&*(),.?":{}|<>]/;

function Form({
  hCancelaCadastro: hCancelCadastro,
  hCadastrar: handleCadastra }: FormProps) {
  const [dado, setDado] = useState(DadoIni);
  const [btnCadastro, setBtnCadastro] = useState(true);

  // aplicando o texte do REGEX
  const senhaLetrasNum = REGEXLetrasNum.test(dado.senha);
  const senhaCarEsp = REGEXEspecial.test(dado.senha);

  const verrificaInput = ({ nomeServ, login, senha } : PropsInput) => {
    if (nomeServ.length === 0 || login.length === 0 || !REGEXSenha.test(senha)) {
      setBtnCadastro(true);
    } else {
      setBtnCadastro(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDado({ ...dado, [event.target.id]: event.target.value });
    const objVerr = { ...dado, [event.target.id]: event.target.value };
    verrificaInput(objVerr);
  };

  const temp = (dado.senha.length >= 1 && dado.senha.length <= 16);

  const [showSenha, setShowSenha] = useState(false);

  // alterna a visibilidade da senha
  function hShowSenha() {
    setShowSenha(!showSenha);
  }

  return (
    <div className="formulario">
      <label htmlFor="nomeServ">Nome do serviço</label>
      <br />
      <input
        type="text"
        name="nomeServ"
        id="nomeServ"
        value={ dado.nomeServ }
        onChange={ (event) => handleInputChange(event) }
      />

      <br />
      <br />

      <label htmlFor="login">Login</label>
      <br />
      <input
        type="text"
        name="login"
        id="login"
        value={ dado.login }
        onChange={ (event) => handleInputChange(event) }
      />
      <br />
      <br />
      <label htmlFor="senha">Senha</label>
      <br />
      <input
        type={ showSenha ? 'text' : 'password' }
        name="senha"
        id="senha"
        value={ dado.senha }
        onChange={ (event) => handleInputChange(event) }
      />
      <br />
      <button
        className="btnBotao"
        data-testid="show-hide-form-password"
        onClick={ hShowSenha }
      >
        Mostrar/Esconder
      </button>
      <br />
      <br />
      <label htmlFor="url">URL</label>
      <input
        type="text"
        name="url"
        id="url"
        value={ dado.url }
        onChange={ (event) => handleInputChange(event) }
      />
      <br />
      <br />
      <div className="mensagens">
        <span className={ dado.senha.length >= 8 ? nomeDaClasse[1] : nomeDaClasse[0] }>
          Possuir 8 ou mais caracteres
        </span>
        <br />
        <span className={ temp ? nomeDaClasse[1] : nomeDaClasse[0] }>
          Possuir até 16 caracteres
        </span>
        <br />
        <span className={ senhaLetrasNum ? nomeDaClasse[1] : nomeDaClasse[0] }>
          Possuir letras e números
        </span>
        <br />
        <span className={ senhaCarEsp ? nomeDaClasse[1] : nomeDaClasse[0] }>
          Possuir algum caractere especial
        </span>
        <br />
      </div>
      <br />
      <button
        className="btnBotao"
        disabled={ btnCadastro }
        onClick={ () => handleCadastra(dado) }
      >
        Cadastrar
      </button>
      <Botao clique={ hCancelCadastro }>Cancelar</Botao>
    </div>
  );
}

export default Form;
