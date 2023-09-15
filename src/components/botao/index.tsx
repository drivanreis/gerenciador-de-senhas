/* Quando você cria um componente
E ele precisa de uma informação
Que vem do componente pai
Você precisa criar o canal de entrada.
Isso é Props!
*/
import './style.css';

// Aqui eu declaro o tipo de props
type PropsBotao = {
  children: string,
  clique: () => void,
  desabilitar?: boolean,
};

// Aqui é a declaração do componente!
// O componente é um botão. Que precisa de um texto que é passado pela "children"
// A ação de click e se vai esta ativo ou não.
function Botao({ children, clique, desabilitar = false }: PropsBotao) {
  return (
    <button
      className="btnBotao"
      type="button"
      disabled={ desabilitar }
      onClick={ clique }
    >
      {children}
    </button>
  );
}

export default Botao;
