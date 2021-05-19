# ReactJS Challenge
A aplicação sera uma PWA que funcionará em cima da api do github Documentação API GITHUB, onde deve existir uma tela de login que o usuário digitará o nickname de um usuário do github, ao buscar esse usuário, ele deve ser redirecionado para uma tela interna onde estará disponível informações gerais do usuário conforme o protótipo, com uma navegação de tabs para Início, Repositórios, Seguidores, Seguindo.

## Protótipo da aplicação
- O protótipo do aplicativo está disponível no link link (tente reproduzir o layout da forma mais fiel possível)
- O layout é o mesmo da aplicação react-native.

## Requisitos não funcionais
- O aplicativo deve usar reactjs.
- Você deve gerenciar suas rotas com o react-router.
- Você deve gerenciar todo o estado do aplicativo com redux ou Context Api.
- Para estilizar o aplicativo, adoraríamos ver você usando componentes estilizados, mas não é obrigatório.

## Requisitos funcionais
- Você deve permitir que um usuário seja autenticado buscando pelo username do github
- Você deve armazenas as informações de (login, name, email, location, company, bio, avatar_url, followers_url, following_url, organizations_url, starred_url, public_repos, public_gists, followers, following)
- Você deve possuir uma navegação por abas com items ("Início", "Repositórios", "Seguidores", "Seguindo")
- Quando clicado nas abas deve ser exibido as listagens respectivas de ("Início", Repositórios: repos_url, Seguidores: followers_url e Seguindo: following_url)
- Quando o usuário estiver dentro de uma aba de seguidores ou seguindo, você deve ter um botão que torne aquele usuário o principal da aplicação, substituindo o usuário salvo na autenticação pelo usuário da tela atual.
- Na tela início, você deve ter um botão que permita o usuário sair da aplicação o redirecionando para a tela de autenticação
- Na tela início, você deve apenas renderizar as informações do protótipo se a informação de fato existir no retorno da requisição de autenticação.
