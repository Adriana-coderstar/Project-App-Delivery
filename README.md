###  Projeto App de Delivery!

Nesse projeto em grupo desenvolvemos uma plataforma de Delivery de cerveja, onde integramos tanto o back-end quanto o front-end.

O aplicativo compõe:

- acesso via login: tanto clientes como pessoas vendedoras e administradores, teêm acesso ao aplicativo via login cada um com suas respectivas responsabilidades.

- Comunicação entre clientes e pessoas vendedoras: a pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos devem possuir detalhes sobre seus pedidos;

- Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos após a atualização da página. A pessoa cliente, por sua vez, deve ter as informações sobre seu pedido quando sua página for atualizada, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega;

<details>
  <summary>
    <strong> 👩‍💻 👨‍💻 Equipe de Desenvolvimento:</strong>
  </summary><br>
  
- [Adriana Martins de Souza](https://www.linkedin.com/in/adriana-ms/)
- [Camilla Del Guerso](https://www.linkedin.com/in/camilla-del-guerso/)
- [Daniel Custódio](https://www.linkedin.com/in/danielscustodio/)
- [Emmanuel Rodrigues](https://www.linkedin.com/in/emmanuel-rodrigues-906ab91ba/)
- [João Victor Paduam](https://www.linkedin.com/in/joaovictorpaduam/)
</details>

<details>
  <summary>
    <strong> :rocket: Tecnologias usadas no projeto:</strong>
  </summary><br>
  
### Front-end:
>
- CSS - Estilização feito pelo Desenvolvedor [Daniel Custódio](https://www.linkedin.com/in/danielscustodio/)
- React.js
- React route
- React hooks
- Axios para requisição de API

### Back-end:

- Nodejs
- MySql
- Sequelize
- Express
- JWT
- Biblioteca md5 para criptografia  
</details>

<details>
  <summary>
    <strong>🪛 Scripts relevantes do <code>package.json</code> principal</strong>
  </summary><br>

  **São os scripts da raiz do projeto (`./package.json`) e não das aplicações individuais `./front-end/package.json` e `./back-end/package.json`**:

  - `start`: Limpa as portas `3000` e `3001` e simula a inicialização no avaliador. Também prepara o campo rodando o `Sequelize` para restaurar o **banco de dados de testes** (final `-test`) e sobe a aplicação com `pm2` em modo `fork` (uma instância para cada aplicação). Nesse modo, as alterações não são assistidas;
    - *uso (na raiz do projeto): `npm start`*

  - `stop`: Para e deleta as aplicações rodando no `pm2`;
    - *uso (na raiz do projeto): `npm stop`*

  - `dev`: Limpa as portas `3000` e `3001` e sobe a aplicação com `pm2` em modo `fork` (uma instância pra cada aplicação). Nesse modo, as atualizações são assistidas (modo `watch`);
    - *uso (na raiz do projeto): `npm run dev`*

  - `dev:prestart`: A partir da raiz, esse comando faz o processo de instalação de dependências (`npm i`) nos dois projetos (`./front-end` e `./back-end`) e roda o `Sequelize` no `./back-end` (lembrar de configurar o `.env` no mesmo);
    - *uso (na raiz do projeto): `npm run dev:prestart`*

  - `db:reset`: Roda os scripts do `Sequelize` restaurando o **banco de dados de desenvolvimento** (final `-dev`). Utilize esse script caso ocorra algum problema no seu banco local;
    - *uso (na raiz do projeto): `npm run db:reset`*

  - `db:reset:debug`: Roda os scripts do `Sequelize` restaurando o **banco de dados de desenvolvimento** (final `-dev`). Utilize esse script caso ocorra algum problema no seu banco local. Esse comando também é capaz de retornar informações detalhadas de erros (quando ocorrerem no processo);
    - *uso (na raiz do projeto): `npm run db:reset:debug`*
</details>

<details>
  <summary>
    <strong>🛠 Testes - Comandos para testar aplicação</strong>
  </summary><br>

 - `test <nomes-dos-arquivos>`: Roda todos os testes (ou uma parte deles caso `<nomes-dos-arquivos>` seja definido) utilizando o **banco de dados de testes** (final `-test`);
    - *uso (na raiz do projeto): `npm test`, `npm test 01login 02register` ou ainda `npm run test 01 02`*

  - `test:dev <nomes-dos-arquivos>`: Roda todos os testes (ou uma parte deles caso `<nomes-dos-arquivos>` seja definido) utilizando o **banco de dados de desenvolvimento** (final `-dev`); 
    - *uso (na raiz do projeto): `npm run test:dev`, `npm run test:dev 01login 02register` ou ainda `npm test:dev 01 02`*;

  - `test:dev:open <nomes-dos-arquivos>`: Roda todos os testes (ou uma parte deles caso `<nomes-dos-arquivos>` seja definido) utilizando o **banco de dados de desenvolvimento** (final `-dev`), exemplo `npm test:dev:open 01login 02register` ou ainda `npm test:dev:open 01 02`. Esse teste deve abrir uma janela mostrando o comportamento das páginas;
    - *uso (na raiz do projeto): `npm run test:dev:open`, `npm run test:dev:open 01login 02register` ou ainda `npm test:dev:open 01 02`*;

  - `test:dev:report "<nomes-dos-arquivos>"`: Roda todos os testes (ou uma parte deles caso `"<nomes-dos-arquivos>"` seja definido) utilizando o **banco de dados de desenvolvimento** (final `-dev`). Esse teste devolve um output em texto com o resultado de todos os testes. Os `logs` são gerados em `./__tests__/reports`.
    - *uso (na raiz do projeto): `npm run test:dev:report`, `npm run test:dev:report "01login 02register"` ou ainda `npm run test:dev:report "01 02"`*;
</details>
  
<details>
  <summary>
    <strong> :mag: Observações:</strong>
  </summary><br>
      Primeiros Passos:
    
      Pasta Back-End:
        - Inserir as informações para configuração com banco de dados no arquivo .env conforme o exemplo ".env.exemplo"

        - Para executar o back-end executar o comando `npm start` no terminal
    
      Pasta Front-End:
        - Executar o comando `npm start`no terminal para rodar aplicação.
    
  
</details>
  
  <img src="./assets/readme/app-delivery.gif" />

  
  
