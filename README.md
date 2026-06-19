# 💻 Portfólio Pessoal - Welton Santos Franco

Este é um portfólio profissional de desenvolvimento de software desenvolvido com **React**, **Vite** e **Tailwind CSS**. A interface foi totalmente remodelada para adotar uma estética escura com acentos vibrantes e neon (inspirada no visual do *Shadcn UI*), trazendo alta performance, responsividade e interações fluidas com **Framer Motion**.

---

## 🎨 Principais Recursos

- **Estilo Shadcn UI + Neon**: Design moderno com cantos arredondados, bordas finas de `1px` com efeito fosco e brilho neon responsivo nas cores das tecnologias.
- **Metal Zone (Tocador Interativo)**: Um mockup interativo de tocador de música onde o usuário pode alternar entre bandas de heavy metal favoritas (**Gojira**, **Meshuggah**, **Children of Bodom** e **Death**). O player muda de cor e dados dinamicamente, acompanhado de barras animadas de equalizador.
- **Anime Sanctuary**: Cards temáticos com efeitos de hover personalizados de animes (**Naruto**, **Bleach**, **Hunter x Hunter** e **One Piece**).
- **Projetos via API do GitHub**: Integração em tempo real com a API do GitHub para buscar os repositórios públicos de forma dinâmica, exibindo badges coloridas para as linguagens e contagem de estrelas.
- **Canais de Contato Rápidos**: Cards interativos e responsivos com redirecionamento direto para WhatsApp, E-mail e LinkedIn.

---

## 🚀 Como Executar o Projeto

### 1. Clonar e Instalar Dependências
Primeiro, clone o repositório e instale as dependências usando o Yarn:
```bash
yarn install
```

### 2. Executar em Ambiente de Desenvolvimento
Para rodar o servidor local de desenvolvimento do Vite:
```bash
yarn dev
```
O projeto estará disponível por padrão em `http://localhost:5173`.

### 3. Build de Produção
Para compilar e otimizar o projeto para produção:
```bash
yarn build
```

---

## ⚙️ Customização

Você pode personalizar facilmente os dados exibidos editando os arquivos na pasta `src/utils`:

1. **`userData.ts`**: Altere suas informações pessoais (Nome, usuário do GitHub, LinkedIn, número de WhatsApp, Instagram, etc.).
2. **`stackData.ts`**: Adicione ou remova as tecnologias que aparecem no grid principal de habilidades e controle os ícones associados.
