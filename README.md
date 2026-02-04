# Projeto Conta Bancária - TypeScript & POO

## Simulador Educacional de Sistema Bancário | Portfólio Profissional

<br />

modelo_readme_cb_type.md
7 KB
# Bootcamp JavaScript Full Stack - Generation Brasil

<br />

<div align="center">
	<img src="https://i.imgur.com/izFuHID.png" title="source: imgur.com" width="35%"/>

modelo_readme_b1_type.md
5 KB
﻿
# Projeto Conta Bancária - TypeScript & POO

## Simulador Educacional de Sistema Bancário | Portfólio Profissional

<br />

<div align="center">
	<img src="https://i.imgur.com/izFuHID.png" title="source: imgur.com" width="35%"/>
</div>
<br />

<div align="center">
  <img src="https://img.shields.io/github/languages/top/bia024/conta_bancaria?style=flat-square" />
  <img src="https://img.shields.io/github/repo-size/bia024/conta_bancaria?style=flat-square" />
  <img src="https://img.shields.io/github/languages/count/bia024/conta_bancaria?style=flat-square" />
  <img src="https://img.shields.io/github/last-commit/bia024/conta_bancaria?style=flat-square" />
  <img src="https://img.shields.io/github/issues/bia024/conta_bancaria?style=flat-square" />
  <img src="https://img.shields.io/github/issues-pr/bia024/conta_bancaria?style=flat-square" />
  <img src="https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen" alt="Status: Concluído">
</div>


------

<br />


O **Projeto Conta Bancária** é um projeto **educacional** desenvolvido em **TypeScript**, com foco em **Programação Orientada a Objetos (POO)** e **arquitetura modular**, simulando operações bancárias reais como **CRUD de contas, transferências, depósitos e saques**.

**Objetivo:** Demonstrar **organização, domínio técnico, modelagem de domínio e boas práticas de engenharia de software** em um case prático de portfólio.

<br />

> [!WARNING]
>
> Este projeto possui **fins educacionais** e **não representa um sistema bancário real**. Foi desenvolvido para **aprendizado, demonstração técnica e portfólio profissional**.

<br />

Este projeto foi estruturado para:

- Demonstrar **competência técnica em TypeScript**
- Aplicar **POO em um cenário realista**
- Evidenciar **arquitetura limpa e organização de código**
- Simular **regras de negócio financeiras**
- Servir como **case técnico para recrutadores**

<br />

## Competências Técnicas Demonstradas



- Programação Orientada a Objetos (Encapsulamento, Herança, Polimorfismo)
- Modelagem de domínio orientada a objetos
- Arquitetura em camadas (**Model, Repository, Controller**)
- Tipagem forte com **TypeScript**
- Separação de responsabilidades
- Boas práticas de código e organização modular
- Simulação de regras financeiras
- Validação de entradas e controle de fluxo
- Estrutura pronta para evolução futura (API, DB, testes)

<br />

## Impacto Técnico e Métricas



| Indicador                     | Valor                         |
| ----------------------------- | ----------------------------- |
| Linhas de código              | +600                          |
| Classes principais            | 3                             |
| Funcionalidades implementadas | 9                             |
| Conceitos POO aplicados       | 6+                            |
| Camadas arquiteturais         | Model, Repository, Controller |
| Persistência                  | Simulada em memória           |
| Complexidade lógica           | Média                         |
| Uso educacional               | ✅                             |

<br />

## Funcionalidades do Projeto



| Funcionalidade                  | Status |
| ------------------------------- | ------ |
| CRUD de contas bancárias        | ✅      |
| Conta Corrente e Conta Poupança | ✅      |
| Depósitos e Saques              | ✅      |
| Transferência entre contas      | ✅      |
| Consulta por número             | ✅      |
| Consulta por titular            | ✅      |
| Regras de saldo e limite        | ✅      |
| Interface CLI interativa        | ✅      |

<br />

## Diagrama de Classes



```mermaid
classDiagram
class Conta {
  - _numero: number
  - _agencia: number
  - _tipo: number
  - _titular: string
  - _saldo: number
  + get numero() number
  + get agencia() number
  + get tipo() number
  + get titular() string
  + get saldo() number
  + set numero(numero: number) void
  + set agencia(agencia: number) void
  + set tipo(tipo: number) void
  + set titular(titular: string) void
  + set saldo(saldo: number) void
  + sacar(valor: number) boolean
  + depositar(valor: number) void
  + visualizar() void
}
class ContaCorrente {
  - _limite: number
  + get limite() number
  + set limite(limite: number) void
  + sacar(valor: number) boolean
  + visualizar() void
}
class ContaPoupanca {
  - _aniversario: number
  + get aniversario() number
  + set aniversario(aniversario: number) void
  + visualizar() void
}
ContaCorrente --> Conta
ContaPoupanca --> Conta
```

<br />

## Arquitetura do Projeto



Estrutura organizada para facilitar **manutenção, escalabilidade e leitura técnica**:

```text
📦 conta_bancaria
 ┣ 📂 src
 ┃ ┣ 📂 controller     # Regras de aplicação
 ┃ ┣ 📂 model          # Entidades de domínio
 ┃ ┣ 📂 repository     # Persistência simulada
 ┃ ┗ 📂 util           # Utilidades e helpers
 ┣ 📜 Menu.ts          # Ponto de entrada da principal
 ┗ 📜 tsconfig.json
```

<br />

## Tecnologias Utilizadas



- **Linguagem & Runtime**

  - TypeScript

  - Node.js

  - ts-node

- **Ferramentas & Qualidade**
  - Git & GitHub
  - Mermaid (diagramas UML)
  - CLI interativa (terminal)

<br />

## Como Executar



**1️⃣ Clone o repositório**

```bash
git clone https://github.com/bia024/conta_bancaria.git
```

**2️⃣ Acesse a pasta do projeto via terminal**

```bash
cd conta_bancaria
```

**3️⃣ Instale as dependências**

```bash
npm install
```

**4️⃣ Execute a aplicação**

```bash
ts-node Menu.ts
```

<br />

## Implementações Futuras



- [ ]  Persistência com banco de dados
- [ ]  Testes automatizados (Jest)
- [ ]  API REST com NestJS
- [ ]  Interface Web (React)
- [ ]  Dockerização
- [ ]  CI/CD com GitHub Actions

<br />

## Contribuições



Sugestões, melhorias e pull requests são bem-vindos.

Você pode contribuir com:

- Melhorias arquiteturais
- Refatorações
- Testes automatizados
- Documentação

<br />

## Licença



Este projeto está sob licença **MIT** — livre para uso educacional e profissional.

<br />

##  Autor



**Bianca Caetano — Desenvolvedora Full Stack**

<br />

##  Contato

🔗 **GitHub:** https://github.com/bia024

🔗 **LinkedIn:** www.linkedin.com/in/bia-caetano

Projeto desenvolvido para **aprendizado contínuo**, **demonstração técnica** e **portfólio profissional**.
Para dúvidas, sugestões ou colaborações, utilize as **issues do GitHub** ou entre em contato diretamente pelo perfil.