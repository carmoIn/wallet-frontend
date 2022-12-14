### 1. Histórico de revisões

| DATA | VERSÃO | DESCRIÇÃO |
| --- | --- | --- |
| 12/12/2022 | 1.0 | Documento Inicial |

### 2. Introdução

Este documento tem por finalidade a documentação resumida da arquitetura da aplicação da carteira virtual desenvolvida pelos acadêmicos de Engenharia de Software do 5º período da Universidade Uniamérica Descomplica, Helcio Laurentino do Carmo Junior e Pedro Henrique Garcia.
A aplicação desenvolvida WEB, desenvolvida utilizando o framework React em conjunto com a biblioteca Redux e tem o objetivo de gerenciar as despesas de uma carteira virtual, permitindo o controle de usuários e persistência local das informações.
Serão tratados neste documento uma visão geral da arquitetura do sistema desenvolvido e casos do de uso do sistema.

### 3. Visão Geral

![Visão Geral](https://github.com/carmoIn/wallet-frontend/raw/feat-docs/docs/architeture.png)

### 4. Mecanismos arquiteturiais

| MECANISMO DE ANÁLISE | MECANISMO DE DESIGN | MECANISMO DE IMPLEMENTAÇÃO |
| --- | --- | --- |
| Persistência | Armazenamento em objeto local | Redux |
| Front-End | Interface de comunicação com usuário final da aplicação | ReacJs |
| Build | Configuração do ambiente para validação do código fonte | Visual Studio Code, node.js, yarn |
| Deploy | Configuração do ambiente para deploy | Visual studio Code, docker |

### 5. Visão de caso de uso (Como demonstrado no conteúdo da Blackboard)

![Casos de Uso](https://github.com/carmoIn/wallet-frontend/raw/feat-docs/docs/user-case.png)
