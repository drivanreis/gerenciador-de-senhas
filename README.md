# Boas-vindas ao repositório do projeto Gerenciador de Senhas!


# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  2. Instale as dependências

  - `npm install`.
</details>  

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Para garantir a qualidade do código, utilize neste projeto os linters `ESLint` e `StyleLint`. Assim, o código estará alinhado com as boas práticas de desenvolvimento, além de ser mais legível e de fácil manutenção. Para rodá-los localmente no projeto, execute os comandos a seguir.

  ```bash
    npm run lint
    npm run lint:styles
  ```

</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

  Para avaliar o projeto, será utilizada a [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) para a execução dos testes.

  Esse _framework_ de testes utiliza algumas marcações no código para verificar a solução proposta, e uma dessas marcações é o atributo `data-testid`, que será utilizado aqui.

  Na descrição dos requisitos a seguir, será pedida que seja feita a adição de atributos `data-testid` a alguns elementos _HTML_. Observe este exemplo para esclarecer essa configuração:

  Se o requisito pedir "crie um botão e adicione o id de teste (ou `data-testid`) com o valor `my-action`, você poderá criar:

  ```html
  <button data-testid="my-action"></button>
  ```
  
  ou

  ```html
  <a data-testid="my-action"></a>
  ```

  Ou seja, o atributo `data-testid="my-action"` servirá para o React Testing Library (RTL) identificar o elemento e, dessa forma, ser possível realizar testes focados no comportamento da aplicação.

  Em alguns requisitos, utilize o `getByRole` para poder selecionar os elementos de modo semântico. Portanto, atente às instruções de cada requisito. Por exemplo, se o requisito pedir explicitamente um `button`, você deverá utilizar exatamente esse elemento.

  A fim de verificar a solução proposta, você pode executar todos os testes localmente. Para isso, basta executar:

  ```bash
  npm test
  ```

  ### Dica: desativando testes

  Especialmente no início, quando a maioria dos testes está falhando, a saída após executar os testes é extensa. Você pode desabilitar temporariamente um teste utilizando a função `skip` junto à função `it`. Como o nome indica, essa função "pula" um teste. Observe este exemplo:

  ```js
  it.skip("Será validado se o campo de filtro por nome renderiza na tela", () => {
    render(<App />)
    const filterNameInput = screen.getByTestId(/name-filter/i);
    expect(filterNameInput).toBeInTheDocument();
  });
  ```

  ![image](skip-image.png)

  Duas estratégias são pular todos os testes no início e implementar um teste de cada vez, removendo dele a função `skip`.

  Você também pode rodar apenas um arquivo de teste. Por exemplo:

  ```bash
  npm test 01
  ```

  Outra forma para contornar esse problema é a utilização da função `.only` após o `it`. Com isso, será possível que apenas um requisito rode localmente e seja avaliado.

  ```js
  it.only("Será validado se o campo de filtro por nome renderiza na tela", () => {
    render(<App />)
    const filterNameInput = screen.getByTestId(/name-filter/i);
    expect(filterNameInput).toBeInTheDocument();
  });
  ```

  ![image](only-image.png)

  ⚠️ **O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**
</details>

<details>
  <summary><strong>💻 Protótipo do projeto no Figma</strong></summary><br />

Além da qualidade do código e do atendimento aos requisitos, um bom layout é um dos aspectos responsáveis por melhorar a usabilidade de uma aplicação e turbinar seu portfólio!

Você pode estar se perguntando: *"Como deixo meu projeto com um layout mais atrativo?"* 🤔

Para isso, disponibilizamos este [protótipo do Figma](https://www.figma.com/file/DZGxIb6HBGBGzqCw1G1Nu6/%5BProject%5D%5BFrontend%5D-Password-Manager?node-id=0%3A1&t=v6gvpgpkGHt3yMeQ-1) para lhe ajudar!

⚠️ A estilização de sua aplicação não será avaliada neste projeto, portanto esse protótipo é apenas uma **sugestão** e seu uso é **opcional**. Sinta-se à vontade para modificar o layout e deixá-lo de seu jeito.

</details>

<details>

# Publicando uma aplicação com Surge

* "build": "vite build"
* npm install -g surge
* surge dist

</details>