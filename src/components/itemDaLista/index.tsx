import React, { useState } from 'react';

type PropsItem = {
  nomeServ: string,
  login: string,
  senha: string,
  url: string,
  handleRemove: (id:string) => void,
};

function ItemDaLista({ nomeServ, login, senha, url, handleRemove }: PropsItem) {
  const [showSenha, setShowSenha] = useState(false);

  function hShowSenha() {
    setShowSenha(!showSenha);
  }

  return (
    <li>
      <a href={ url }><strong>{nomeServ}</strong></a>
      <br />
      <span>{login}</span>
      <br />
      <span>{showSenha ? '******' : senha}</span>
      <label>
        <input
          type="checkbox"
          checked={ showSenha }
          onChange={ hShowSenha }
        />
        Esconder senhas
      </label>
      <br />
      <button
        data-testid="remove-btn"
        onClick={ () => handleRemove(nomeServ) }
      >
        Apagar
      </button>
    </li>
  );
}

export default ItemDaLista;
