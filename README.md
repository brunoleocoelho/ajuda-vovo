# Projeto Ajuda Vovô

Ajuda Vovô é um app que visa ajudar as pessoas que estão em quarentena devido aos problemas do COVID-19, em especial os mais idosos, com listas de compras p/ entrega pelos supermercados/estabelecimento mais próximos.

A princípio apenas _smartphones_ com sistema Android serão contemplados. Tal decisão se deu levando em conta o maior número de usuários, bem como a maior facilidade de publicação de um aplicativo na [Google Play Store](https://play.google.com/).

> Mudanças podem ocorrer no objetivo do projeto no decorrer do desenvolvimento.

--------

## Execução e Desenvolvimento (Pré-requisitos)

Este app é desenvolvido com [React Native](https://reactnative.dev/), uma biblioteca JavaScript criada pelo Facebook para desenvolvimento _mobile_. Para que seja possível desenvolver e executar o projeto do app, algumas ferramentas e bibliotecas precisam ser instaladas localmente, conforme instruções abaixo:
- [Node & NPM](#nodejs-e-npm)
- [Android Studio](#android-studio)

> Para desenvolvimento iOS é necessário o uso de um sistema MacOS, com [Xcode](https://developer.apple.com/xcode/) instalado.

Se já tiver tudo instalado, pule para [**Executando o aplicativo**](#executando-o-aplicativo).

## NodeJs e NPM

Para começar sigas as instruções de instalação do NodeJs, conforme o sistema operacional que usao, pelo site: https://nodejs.org/. A instalação do NodeJs trará consigo o _NPM_, que é um gerenciador de pacotes do NodeJs, necessário para desenvolvimento e execução do projeto.

Caso já possua NodeJs instalado, recomenda-se a instalação do [NVM](https://www.npmjs.com/package/nvm), que é um gerenciador de versões utilizadas pelo NodeJs, e permite a instalação e utilização de diversas versões simultâneas. 

**A versão NodeJs utilizada neste projeto é a v10.19.0 (informação em _20-MAR-2020_).**

> Informações:
> - Releases: https://github.com/nodejs/Release
> - Global Packs: http://npm.github.io/using-pkgs-docs/working-with-packages/global-installation.html
> - Downgrade: https://www.abeautifulsite.net/how-to-upgrade-or-downgrade-nodejs-using-npm


## Android Studio

Primeiramente tenha certeza de que o Java JDK está instalado e funcionando corretamente no teu sistema operacional. Então, vistie o site https://developer.android.com/studio e faça o download do **Android Studio**.

Em geral, as instruções seguem basicamente o seguinte fluxo:
1. Faça o download do Android Studio
2. Realize a instalação.
3. Instale SDK , HAXM, Build Tools, system image (versão mín. API-23)
4. Edite o a variavel de sistema PATH (Windows e Linux)
5. Crie um novo Android Virtual Device (AVD) e execute-o

**A versão Android mínima de compatibilidade do aplicativo é Android 6.0 Marshmallow API 23.**

O emulador pode ser aberto pela tela inicial do Android Studio, em **Options > AVD**.
Alguns comandos do terminal podem ser úteis durante o desenvolvimento com o emulador Android:

- Lista de 'devices' criados:
```bash
emulator -list-avds
```
- Executar emulador:
```bash
emulator -avd <emulator-name> 
# Ou
emulator -avd <emulator-name> -netdelay none -netspeed full
```
- Help
```bash
emulator -help
```

> Mais informações: 
> - [Tutorial instalação Android Studio no Linux (Ubuntu 18.04)](https://www.youtube.com/watch?v=eWzgirSaGvs)
> - [Comandos Android Studio](https://developer.android.com/studio/run/emulator-commandline)



## Executando o aplicativo

O projeto foi criado utilizando a ferramenta [Expo](https://expo.io/) (já embutida no projeto) que permite criar e executar uma aplicação React Native de forma mais fácil, e disponibiliza uma biblioteca de componentes e APIs para comunicação com a API do sistema, seja Android ou iOS.

Para execução do projeto, siga as instruções:

1. Com o terminal, na pasta do projeto execute `npm install` para instalação das dependências. 
2. O navegador de internet padrão abrirá o endereço padrão `http://localhost:19002` para visualização de logs, e gerenciamento da execução. (Caso não abra automaticamente, navegue até a URL).
3. Abra o emulador Android (com o Android Studio)
4. Para abrir o aplicativo, mantenha o emulador aberto e clique em `Run on Android emulator` no browser. O app irá abrir "magicamente" no emulador. 

> `npm start`: Este comando executa a aplicação em si em 'development mode'.

> Existe uma ferramenta do Expo chamada [Snack](https://snack.expo.io/) que permite testar e executar diversas funcionalidade através do navegador de internet. Nela há um emulador embutido para Android e iOS, com as mesmas características dos emuladores reais. Fica sendo uma boa opção para desenvolvimento avulso de determinados componentes. 

------------------------
### Informações e referências:

#### REACT NATIVE TUTORIALS AND DOCS

- [Começando com React Native](https://reactnative.dev/docs/tutorial)

- [React Native Express](http://www.reactnativeexpress.com/)

- [React Native Elements](https://react-native-training.github.io/react-native-elements/docs/getting_started.html)

- [React Native Navigation](https://reactnavigation.org/docs/en/getting-started.html)

#### Casos:

- [Uber Eats](https://eng.uber.com/ubereats-react-native/)

- [Walmart Labs](https://medium.com/walmartlabs/react-native-at-walmartlabs-cdd140589560)

- [Bloomberg](https://www.techatbloomberg.com/blog/bloomberg-used-react-native-develop-new-consumer-app/)

- [Pinterest](https://medium.com/@Pinterest_Engineering/supporting-react-native-at-pinterest-f8c2233f90e6)


