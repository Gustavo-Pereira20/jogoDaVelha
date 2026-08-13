# Jogo da Velha (Tic-Tac-Toe) - Refatorado e Modernizado

## 📌 Visão Geral
A aplicação é uma versão refatorada e modernizada do clássico Jogo da Velha, desenvolvida em React para permitir partidas entre dois jogadores com alternância automática de turnos. Ela organiza a lógica do jogo em um tabuleiro interativo de 3x3 posições, valida e destaca vitórias ou empates e permite a navegação pelo histórico de jogadas (*time-travel*). 

Em relação ao código base da documentação oficial do React, esta versão se diferencia ao reestruturar o projeto em componentes isolados, aplicando estilização modular com **CSS Modules**, nomenclatura **BEM** e um **Design System** baseado em **variáveis CSS**, além de aprimorar a acessibilidade, o layout responsivo e a experiência do usuário.

---

## 🎯 Objetivo
Refatorar o projeto **Jogo da Velha** desenvolvido no tutorial oficial do React, aplicando os conceitos estudados em aula para criar uma versão personalizada da aplicação. O objetivo é aprimorar a estrutura, a organização e a qualidade do código, preservando e evoluindo as funcionalidades existentes e implementando melhorias na interface e na experiência do usuário.

**Durante o desenvolvimento, são aplicados os seguintes conceitos:**
- **Componentização e reutilização**: separação clara de responsabilidades entre componentes;
- **Composição de componentes**: organização eficiente da hierarquia da aplicação;
- **Gerenciamento de Estado**: utilização de `props` e Hook `useState` com imutabilidade rigorosa;
- **Arquitetura modular**: organização da estrutura de pastas e arquivos por componentes;
- **Design System**: estilização com **CSS Modules**, Variáveis CSS e padrão de nomenclatura **BEM**;
- **Clean Code**: legibilidade, nomes semânticos, funções de responsabilidade única e facilidade de manutenção;
- **Acessibilidade e Semântica**: uso de tags HTML5 semânticas e atributos ARIA;
- **Responsividade**: interface adaptável para dispositivos móveis e desktops.

*Referência principal:* [Tutorial Oficial do React (Tic-Tac-Toe)](https://pt-br.react.dev/learn/tutorial-tic-tac-toe)

---

## 🛠️ Tecnologias Utilizadas & Dependências
* **React (v18+)**: Biblioteca principal para construção da interface declarativa em componentes.
* **Vite**: Ferramenta de build moderna, rápida e configuradora do ambiente de desenvolvimento.
* **JavaScript (ES6+)**: Lógica da aplicação, manipulação de arrays e conceitos de imutabilidade.
* **CSS Modules & Variáveis CSS**: Escopamento local de estilos e facilidade na manutenção do Design System.
* **HTML5 Semântico**: Estruturação acessível e otimizada para leitores de tela.

---

## 📋 Regras de Negócio
1. **Início do Jogo:** O jogo inicia com o tabuleiro 3x3 inteiramente vazio (9 posições preenchidas com `null`). O jogador **'X'** realiza a primeira jogada.
2. **Interação e Alternância:** Os jogadores se alternam a cada jogada válida.
3. **Validação de Jogadas Inválidas:** Impedimento de jogadas em casas já preenchidas ou com a partida encerrada.
4. **Condição de Vitória:** Validação automática das 8 combinações de vitória (linhas, colunas e diagonais).
5. **Empate (Velha):** Identificado quando todas as 9 posições estiverem ocupadas sem vencedor.
6. **Histórico de Jogadas (*Time-Travel*):** Permite navegar até estados anteriores do jogo mantendo a imutabilidade do histórico.

---

## ⚙️ Requisitos Funcionais
- [x] **RF01:** Iniciar nova partida com o tabuleiro limpo.
- [x] **RF02:** Alternar automaticamente a vez dos jogadores ('X' e 'O').
- [x] **RF03:** Impedir jogadas em posições ocupadas ou partidas finalizadas.
- [x] **RF04:** Identificar e declarar o vencedor.
- [x] **RF05:** Identificar empate ("Velha").
- [x] **RF06:** Manter histórico das jogadas.
- [x] **RF07:** Permitir viajar no tempo (*Time-Travel*) para jogadas anteriores.
- [x] **RF08:** Exibir layout responsivo.

### Pré-requisitos
Ter o [Node.js](https://nodejs.org/) (versão 18 ou superior) e o **npm** instalados em sua máquina.

### Passo a Passo
1. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/Gustavo-Pereira20/jogoDaVelha.git]