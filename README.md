# 🥂 Point Adega – Monorepo

Repositório monolítico com as aplicações **web**, **mobile** e futura **API** do e-commerce de bebidas *Point Adega*.

## 📦 Estrutura

pointadega/
├── apps/
│ ├── app-web/ # Frontend web (Next.js + Tailwind CSS)
│ ├── app-mobile/ # Aplicativo mobile (Expo + React Native)
│ └── app-api/ # Backend (NestJS) – em breve
├── .gitignore
├── README.md
└── package.json # Compartilhado (se necessário)



---

## 🚀 Aplicações

### 🖥️ Web – `app-web`

Frontend responsivo do e-commerce, criado com:

- **Next.js 14 (App Router)**
- **Tailwind CSS**
- **TypeScript**
- **Efeitos com CSS e animações personalizadas**
- **Responsivo e com design escuro (preto + dourado)**

#### 🔧 Scripts

```bash
cd apps/app-web

# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview de produção
npm start


📱 Mobile – app-mobile
Aplicativo mobile para Android/iOS com foco em:

Expo + React Native

TypeScript

Navegação com React Navigation

Design adaptado a dispositivos móveis

Compartilhamento visual com o web

🔧 Scripts

cd apps/app-mobile

# Instalar dependências
npm install

# Rodar app no Expo Go
npx expo start

# Build (opcional com EAS)
npx expo build:android
npx expo build:ios

🧠 API – app-api (em breve)
Backend a ser construído com:

NestJS

TypeORM ou Prisma

Autenticação com JWT

Painel de admin (futuro)

Integração com gateways de pagamento

👨‍💻 Requisitos
Node.js (versão 18+)

Yarn ou npm

Expo CLI (npm install -g expo-cli)

(Futuramente) Nest CLI (npm i -g @nestjs/cli)

🛠️ Contribuindo
Este projeto segue um fluxo de trabalho com branches e boas práticas:

Branches
main: produção

dev: desenvolvimento principal

feature/[nome]: novas funcionalidades

fix/[nome]: correções

Commits convencionais
Utilizamos Conventional Commits para padronização:

feat: nova funcionalidade
fix: correção de bug
chore: configuração ou tarefa sem impacto direto
refactor: melhoria no código sem mudança funcional

git checkout -b feature/header-responsive
git commit -m "feat: header responsivo com menu toggle"

📸 Design
O visual segue identidade premium em preto e dourado, com foco em experiência do usuário, clareza e estilo.

📦 Build e Deploy
O projeto app-web será hospedado na Vercel

O projeto app-mobile será distribuído via Expo e futuramente na Play Store / App Store

A app-api será hospedada em Railway, Render ou outro serviço cloud.

🔐 .env
Cada app possui seu próprio .env que não é versionado. Use .env.example como base.

📄 Licença
Projeto proprietário. Todos os direitos reservados à equipe da Point Adega.

🤝 Equipe
Nome	Função
Você	Fullstack / Dev Lead

Point Adega 🍾 – Criado com tecnologia, paixão e uma dose de estilo.


