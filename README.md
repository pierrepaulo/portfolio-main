# 🚀 Portfolio - Pierre Paulo

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38BDF8?style=for-the-badge&logo=tailwindcss)

**Portfólio profissional de Pierre Paulo, Desenvolvedor FullStack especializado em produtos digitais modernos.**

[🔗 Live Demo](https://seu-portfolio.vercel.app) • [📧 Contato](mailto:pierrepaulotf@gmail.com) • [💼 LinkedIn](https://www.linkedin.com/in/pierre-paulo-temer/)

</div>

---

## 📖 Sobre

Este é o meu portfólio pessoal, desenvolvido com as tecnologias mais modernas do ecossistema React. O projeto foi construído do zero com foco em **performance**, **acessibilidade**, **design premium** e **experiência do usuário**.

### ✨ Destaques

- 🎨 **Design moderno e responsivo** com animações fluidas usando Motion
- 🌐 **SEO otimizado** com metadata dinâmica do Next.js
- 📱 **Mobile-first** com layout adaptativo para todos os dispositivos
- ⚡ **Performance otimizada** com React Compiler e preload de fontes
- 📬 **Formulário de contato funcional** integrado com Resend API
- 🎭 **Animações interativas** com efeitos de parallax e linhas flutuantes (Three.js)

---

## 🛠️ Tech Stack

### Core

| Tecnologia       | Versão | Descrição                        |
| ---------------- | ------ | -------------------------------- |
| **Next.js**      | 16.1.1 | Framework React com App Router   |
| **React**        | 19.2.3 | Biblioteca UI com React Compiler |
| **TypeScript**   | 5.x    | Tipagem estática                 |
| **Tailwind CSS** | 4.x    | Framework CSS utilitário         |

### Bibliotecas UI & Animação

| Tecnologia       | Uso                                          |
| ---------------- | -------------------------------------------- |
| **Radix UI**     | Componentes acessíveis (Dialog, Label, Slot) |
| **shadcn/ui**    | Sistema de design baseado em Radix           |
| **Motion**       | Animações declarativas (Framer Motion)       |
| **Three.js**     | Gráficos 3D para background interativo       |
| **Lucide React** | Ícones modernos                              |
| **React Icons**  | Biblioteca de ícones adicional               |

### Formulários & Validação

| Tecnologia          | Uso                                       |
| ------------------- | ----------------------------------------- |
| **React Hook Form** | Gerenciamento de formulários performático |
| **Zod**             | Validação de schemas com TypeScript       |
| **Resend**          | API de envio de emails                    |

### Componentes Adicionais

| Tecnologia                   | Uso                               |
| ---------------------------- | --------------------------------- |
| **Embla Carousel**           | Carrossel de imagens performático |
| **Class Variance Authority** | Variantes de componentes          |
| **clsx + tailwind-merge**    | Utilitários para classes CSS      |

---

## 📁 Estrutura do Projeto

```
portfolio-main/
├── public/
│   └── images/              # Imagens e assets do projeto
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/     # API Route para formulário de contato
│   │   ├── globals.css      # Estilos globais e variáveis CSS
│   │   ├── layout.tsx       # Layout raiz com metadata
│   │   └── page.tsx         # Página principal
│   ├── components/
│   │   ├── common/          # Componentes reutilizáveis
│   │   │   ├── Container.tsx
│   │   │   ├── Reveal.tsx   # Animações de entrada
│   │   │   ├── SectionHeader.tsx
│   │   │   └── SplitText.tsx
│   │   ├── layout/          # Componentes de layout
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/        # Seções da página
│   │   │   ├── Hero.tsx     # Seção inicial com animações
│   │   │   ├── Projects.tsx # Galeria de projetos
│   │   │   ├── About.tsx    # Sobre mim
│   │   │   ├── Techs.tsx    # Tecnologias
│   │   │   └── Contact.tsx  # Formulário de contato
│   │   ├── ui/              # Componentes UI (shadcn)
│   │   └── FloatingLines.tsx # Background animado
│   ├── data/                # Dados estáticos
│   │   ├── projects.ts      # Lista de projetos
│   │   ├── techs.ts         # Tecnologias dominadas
│   │   └── social.ts        # Links de redes sociais
│   ├── hooks/               # Custom hooks
│   └── lib/
│       └── validation/      # Schemas de validação Zod
└── package.json
```

---

## 🎯 Seções do Portfolio

### 1. **Hero**

- Animação de texto com efeito de split
- Background interativo com linhas flutuantes (Three.js)
- CTAs para download do currículo e navegação

### 2. **Projetos em Destaque**

Projetos reais com foco em impacto, arquitetura e boas práticas:

| Projeto           | Descrição                            | Stack Principal                          |
| ----------------- | ------------------------------------ | ---------------------------------------- |
| **RestaurantApp** | Sistema de pedidos para restaurantes | Node.js, React, React Native, PostgreSQL |
| **FutStore**      | E-commerce de camisetas de futebol   | Next.js, Express, Stripe, Prisma         |
| **ClinicaPRO**    | SaaS de agendamento para clínicas    | Next.js, Node.js, PostgreSQL             |
| **EasyDiet**      | Gerador de dietas com IA (ChatGPT)   | Fastify, OpenAI, React                   |

### 3. **Sobre Mim**

- Mais de 2 anos de experiência como FullStack
- Especialização em TypeScript, React e Node.js
- Foco em arquitetura limpa e qualidade de código

### 4. **Tecnologias**

Grid visual com 18 tecnologias:

- **Backend:** Node.js, Express, Fastify, PostgreSQL, MongoDB, Prisma
- **Frontend:** React, Next.js, Tailwind CSS, TanStack Query
- **Ferramentas:** TypeScript, Docker, AWS, Jest, Vitest, Zod, JWT

### 5. **Contato**

- Formulário funcional com validação Zod
- Integração com Resend para envio de emails
- Links diretos para WhatsApp, Email, GitHub e LinkedIn

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/pierrepaulo/portfolio.git

# Entre no diretório
cd portfolio-main

# Instale as dependências
npm install
```

### Configuração das Variáveis de Ambiente

Crie um arquivo `.env.local` baseado no `.env.example`:

```env
# Resend API para envio de emails
RESEND_API_KEY=sua_api_key_aqui
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Acesse http://localhost:3000
```

### Build de Produção

```bash
# Gere o build otimizado
npm run build

# Inicie o servidor de produção
npm start
```

---

## 📬 Contato

<div align="center">

| Canal           | Link                                                                  |
| --------------- | --------------------------------------------------------------------- |
| 📧 **Email**    | [pierrepaulotf@gmail.com](mailto:pierrepaulotf@gmail.com)             |
| 💼 **LinkedIn** | [pierre-paulo-temer](https://www.linkedin.com/in/pierre-paulo-temer/) |
| 🐙 **GitHub**   | [pierrepaulo](https://github.com/pierrepaulo)                         |
| 📱 **WhatsApp** | [+55 (33) 99199-3858](https://wa.me/5533991993858)                    |

</div>

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

**Feito com ❤️ por [Pierre Paulo](https://github.com/pierrepaulo)**

</div>
