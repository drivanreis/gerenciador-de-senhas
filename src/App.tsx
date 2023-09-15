// importar a Biblioteca React e suar o gerenciamento de Estado.
import { useState } from 'react';
// Importar o Estilho para o APP
import './App.css';
// Importar uma biblioteca publica para estilizar a mensagem
import Swal from 'sweetalert2';
// Importar os componentes que eu criei
import Form, { PropsInput } from './components/form';
import Botao from './components/botao';
import ItemDaLista from './components/itemDaLista';

function App() {
  // estou setando o estado do coponente form
  const [showForm, setShowForm] = useState(false);

  // estou setando o estado do coponente ArreyDeDados
  const [arrListaDados, setArrListaDados] = useState<PropsInput[]>([]);

  // inclui um objeto no conjunto arrListaDados
  const hCadastra = (dado: PropsInput) => {
    setArrListaDados([...arrListaDados, dado]);
    setShowForm(false);

    // incorporei uma biblioteca externa chamada sweetalert2
    // Só pra dar o alerta: "Que deu Certo"
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Serviço cadastrado com sucesso',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // Remove um item cadastrado
  const hRemoveItem = (nomeServ: string) => {
    const filarrList = arrListaDados.filter((item) => {
      return item.nomeServ !== nomeServ;
    });
    setArrListaDados(filarrList);

    // incorporei uma biblioteca externa chamada sweetalert2
    // Só pra dar o alerta: "Que deu Certo"
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Serviço EXCLUIDO com sucesso',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <header>
        <h1 className="tituloH1">Gerenciador de senhas</h1>
        {/* Exibição condicional. Se o form não estiver aparecendo, ele mostra o botão */}
        {
          !showForm ? (
            <Botao clique={ () => setShowForm(true) }>Cadastrar nova senha</Botao>
          ) : ''
        }
        <br />
        <br />
      </header>
      {showForm ? (
        <Form
          hCancelaCadastro={ () => setShowForm(false) }
          hCadastrar={ hCadastra }
        />
      ) : ''}

      {arrListaDados.length === 0 ? (
        <p>Nenhuma senha cadastrada</p>
      ) : (
        <ul>
          { arrListaDados.map((item) => (

            <ItemDaLista
              key={ item.nomeServ }
              nomeServ={ item.nomeServ }
              login={ item.login }
              senha={ item.senha }
              url={ item.url }
              handleRemove={ hRemoveItem }
            />

          ))}
        </ul>
      )}

    </>
  );
}

export default App;
