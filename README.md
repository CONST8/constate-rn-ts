<h1 align="center">

<a href="http://constate.co/">
<img src="https://i.ibb.co/M8L1pLF/template-banner.png" width="1440"/>
</a>
</h1>
<br />

<!-- <p style="font-size: 18px; font-weight: bold; margin: 4px 0">Sobre o projeto</p> -->

### Sobre o projeto

Este modelo foi pensado para muitos desenvolvedores que desejam eficiência e conforto ao iniciar um novo projeto.

Nós da [Constate](https://constate.co) buscamos cada vez mais eficiência na hora de programar, e com isso em mente juntamos várias tecnologias úteis para você iniciar seu projeto avançado da forma mais rápida possível!

<!-- GETTING STARTED -->

<!-- <p style="font-size: 18px; font-weight: bold; margin: 4px 0">Começando</p> -->

### Começando

Para conseguir utilizar o template, seja através do React Native CLI ou com uma cópia local dos arquivos, siga os passos abaixo.

<!-- <p style="font-size: 18px; font-weight: bold; margin: 4px 0">Pré-requisitos</p> -->

### Pré-requisitos

Antes de seguirmos para as configurações e uso do template, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso você pode seguir o guia do link abaixo:

[Ambiente React Native (Android/iOS)](https://github.com/Rocketseat/ambiente-react-native)

<!-- <p style="font-size: 18px; font-weight: bold; margin: 4px 0">Instalação</p> -->

### Instalação

1. Para instalar e utilizar esse template o processo é bem simples, basta criar um projeto novo utilizando o comando:

<!-- <div style="background-color: #000; padding: 12px 32px 6px; border-radius: 8px; margin: 8px 0">
  <p style="font-size: 16px;font-weight: bold;color: #FFF">
  react-native init <span contenteditable>SeuApp</span> --template constate-rn-ts
  </p>
</div> -->

```
npx react-native init [app_name] --template constate-rn-ts
```

2. Depois do projeto criado você pode deletar o arquivo `App.js` da raiz, pois o arquivo `index.js` agora aponta para a pasta **src**.

Com isso o projeto será criado com todas as dependências do template devidamente instaladas e linkadas, tal como os arquivos de configuração que são copiados para o projeto.

<details style="margin:8px 0">
<summary style="font-size: 18px; font-weight: bold; margin: 4px 0">Feito com</summary>
<section>
AS tecnologias usadas para fazer essa template:

- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando JavaScript e React;
- [Redux](https://redux.js.org/) - O Redux é um contêiner de estado previsível para aplicativos JavaScript. Ele ajuda você a escrever aplicativos que se comportam consistentemente, executados em diferentes ambientes (cliente, servidor e nativo) e são fáceis de testar;
  - [Redux Saga](https://redux-saga.js.org/) - O redux-saga é uma biblioteca que tem como objetivo tornar os efeitos colaterais dos aplicativos mais fáceis de gerenciar, mais eficientes de executar, fáceis de testar e melhores em lidar com falhas;
- [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade comunidade do React Native de uma navegação de forma fácil de se usar, e escrita toda em JavaScript;
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native;
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [i18n](https://www.npmjs.com/package/i18n) - O i18n é uma biblioteca auxiliar para criação de aplicativos multi-idiomas;
- [Prop Types](https://github.com/facebook/prop-types) - Verificação de tipo em tempo de execução para propriedades (props) React e objetos semelhantes;
- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações JavaScript;
  - [babel-eslint](https://github.com/babel/babel-eslint) - Este pacote é um _wrapper_ do parser do Babel para o ESLint;
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - Esse plugin do Babel permite que sejam feitos imports e requires em caminhos baseados em uma raiz(root);
  - [babel-plugin-transform-remove-console](https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console) - Esse plugin do Babel remove todos os console.\* da sua aplicação ([Dica no site oficial do RN](https://facebook.github.io/react-native/docs/performance#using-consolelog-statements));
- [ESLint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;
  - [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) - Regras de linting do ESLint específicas do React Native;
  - [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import) - Um resolver da lib _babel-root-import_ para a lib _eslint-plugin-import_;
- [Prettier](https://prettier.io/) - O Prettier atualiza seu código automaticamente seguindo os padrões que você quiser toda vez salva o arquivo;
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) - Roda o Prettier como uma regra do ESLint;
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Desativa todas as regras que são desnecessárias ou que podem dar conflito com o Prettier;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;

</section>
</details>

<details style="margin:8px 0">

<summary style="font-size: 18px; font-weight: bold; margin: 4px 0">Estrutura de Arquivos</summary>
<section>
A estrutura de arquivos está da seguinte maneira:

```bash
YourApp
├── src/
│   ├── @types/
│   │   └── env.d.ts
│   ├── assets/
│   │   ├── fonts/
│   │   │    ├── Product Sans Bold Italic.ttf
│   │   │    ├── Product Sans Bold.ttf
│   │   │    ├── Product Sans Italic.ttf
│   │   │    └── Product Sans Regular.ttf
│   │   ├── img/
│   │   │    ├── .gitkeep
│   │   │    ├── axios.png
│   │   │    ├── constate.png
│   │   │    ├── i18n.png
│   │   │    ├── navigation.png
│   │   │    ├── redux-sagas.png
│   │   │    ├── redux.png
│   │   │    └── typescript.png
│   │   └── svg/
│   │       └── .gitkeep
│   ├── config/
│   │   └── i18n.tsx
│   ├── fonts/
│   │   ├── en-us.json
│   │   ├── es-es.json
│   │   └── pt-br.json
│   ├── pages/
│   │   └── Main/
│   │       └── index.js
│   ├── routes/
│   │   ├── index.tsx
│   │   └── stack.tsx
│   ├── services/
│   │   └── api.js
│   ├── store/
│   │   ├── ducks/
│   │   │   ├── technologies/
│   │   │   │   └── index.tsx
│   │   │   └── user/
│   │   │       └── rootReducer.tsx
│   │   │       └── rootSaga.tsx
│   │   └── index.js
│   ├── theme/
│   │   ├── index.ts
│   │   └── light.ts
│   ├── utils/
│   │   ├── formatters.ts
│   │   └── validators.ts
│   │   └── types.ts
│   ├── index.js
│   └── routes.js
├── .buckconfig
├── .editorconfig
├── .env
├── .eslintrc.js
├── .flowconfig
├── .gitattributes
├── .gitignore
├── .prettierrc.js
├── .watchmanconfig
├── app.json
├── babel.config.js
├── index.js
├── metro.config.js
├── package.json
├── react-native-config.js
└── tsconfig.json
```

</section>
</details>

<details style="margin:8px 0">
<summary style="font-size: 18px; font-weight: bold; margin: 4px 0">Edição</summary>
<section>
Nesta seção haverão instruções caso você queira editar o template, explicando para que os diretórios são utilizados e também os arquivos de configuração.

- **src** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;

  - **config** - Diretório para guardar os arquivos de configuração da aplicação, por exemplo, a configuração de uso do i18n;

    - **i18n.tsx** - Arquivo contendo a configuração do i18n, com os Plugins `i18next`, para ser usado na aplicação;

  - **assets** - Diretório para armazenar arquivos de mídia em geral que possam ser utilizadas na aplicação;

  - **pages** - Diretório onde ficam as páginas (telas) da aplicação, como forma de padronização e boas práticas toda página fica dentro de um diretório com seu nome;

    - **Main** - Diretório exemplo de uma página cujo nome é **Main**, por padrão foi adotado usar sempre como nome do diretório o nome da página em camelCase, dentro desse diretório é necessária a criação ao menos do arquivo `index.js` ;

      - **index.ts** - Arquivo com toda a lógica da página, com os componentes visuais a serem renderizados e também o código para conectar o componente ao Redux para acessar o State global e as Actions criadas nos Ducks;

  - **services** - Diretório onde serão criados os arquivos relacionados a serviços utilizados na aplicação, por exemplo, requisições HTTP, autenticação com Firebase ou qualquer outro serviço que for utilizado;

    - **api.ts** - Arquivo com a configuração da biblioteca Axios para envio de requisições HTTP, o endereço que vem configurado por padrão é para a API do Github;

  - **utils** - Diretório onde serão criados os métodos que deixam o desenvolvimento mais prático e menos repetitivo;

    - **formatters.ts** - Arquivo com vários métodos que formatam as string para que sejam melhor interpretadas pelos usuários;

    - **uuidValidator.ts** - Arquivo com um método capaz de validar um uuid;

  - **hooks** - Diretório onde serão criados os hooks personalizados do projeto;

    - **useInput.ts** - Método que abrevia a forma que os inputs agregam valor as variáveis;

  - **lang** - Diretório onde serão criados os arquivos de linguagem;

  - **themes** - Diretório onde serão criados os arquivos de temas para a aplicação;

  - **store** - Diretório onde será criada toda a estrutura do Redux para a aplicação, como os **Ducks** (Reducers + Action Types + Action Creators), os **Sagas** e um arquivo para centralizar toda essa configuração e disponibilizar para o restante da aplicação;

    - **ducks** - Diretório destinado a centralizar os **Ducks** da aplicação para padronização na estrutura relacionada ao Redux;

      - **index.ts** - Arquivo responsável por importar cada **Duck** criado e combiná-los em um só para serem usados no Redux através da função `combineReducers()` ;

    - **sagas** - Diretório destinado a centralizar os **Sagas** da aplicação para padronização na estrutura relacionada ao Redux;

      - **index.ts** - Arquivo responsável por relacionar as **Actions** disparadas pela aplicação às funções do **Saga**, que são Funções Generator, nele é definido os **Action Types** a serem "escutados" e qual função executar quando um Action Creator for executado;

    - **index.ts** - Arquivo responsável por executar a configuração para o funcinamento do Redux + Redux Saga, dentre suas funções estão: criar um **Middleware** para monitorar as Actions disparadas na aplicação, aplicar o middleware criado juntamente com um Enhancer que monitora o fluxo de uma função do **Saga**, criar o store global da aplicação combinando os reducers existentes e exportar o state criado;

  - **index.tsx** - Arquivo responsável por centralizar o código do diretório `src` , nele é inserido o HOC Provider do `react-redux` que é o responsável por disponilizar o state global para a aplicação, e dentro do Provider são chamadas as rotas tal como qualquer outra configuração que precise ser executada na inicialização da aplicação, ele é como um _Entry Point_ do diretório `src` ;

  - **routes** - Diretório onde fica os arquivos com as configurações de navegação da aplicação, nele são criados os Navigators disponibilizados na biblioteca React Navigation;

- **.editorconfig** - Arquivo destinado à configuração do plugin Editor Config, que padroniza algumas configurações para o editor em diferentes ambientes;

- **.eslintrc.json** - Arquivo de configuração do ESLint, é nele que são inseridas as regras e configurações de Linting do projeto, tal como a configuração do Resolver para o Babel Plugin Root Import e configuração da variável global `__DEV__` ;

- **babel.config.js** - Arquivo de configuração do Babel, é nele que é configurado o Babel Plugin Root Import para aceitar imports absolutos na aplicação usando o diretório `src` como raiz;

- **index.js** - Arquivo raiz da aplicação, também chamado de _Entry Point_, é o primeiro arquivo chamado no momento do build e execução da aplicação, nele é chamado o arquivo `src/index.js` que por sua vez chama as rotas da aplicação;

- **tsconfig.json** - Arquivo de configuração do TypeScript no Editor, ele é o responsável por ativar o Auto Complete de códigos TypeScript na aplicação;

- **package.json** - Diferente dos projetos comuns, esse arquivo tem as configurações necessárias para a publicação do Template no NPM, para saber mais sobre isso veja a seção abaixo.
</section>
</details>

<!-- <p style="font-size: 18px; font-weight: bold; margin: 4px 0">Licença</p> -->

### Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<!-- <p style="font-size: 14px; font-weight: bold; margin-top: 48px">Agradecemos por visitar nossa template :D </p> -->
