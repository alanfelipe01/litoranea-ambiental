# Litorânea Ambiental

Landing page da **Litorânea Ambiental — Empresa Júnior de Ciências Ambientais da Universidade Federal do Ceará (UFC)**.

🔗 [Acessar o site](https://litoranea-ambiental-ufc.vercel.app/)

## Sobre o projeto

Fui contratado pela Litorânea Ambiental para criar uma landing page que ajudasse na divulgação dos trabalhos ambientais da empresa júnior. O site apresenta a empresa, seus serviços, a forma de trabalho, a equipe, os diferenciais e os canais de contato.

Este também foi um **projeto de iniciante, feito para aprender**. Ele foi desenvolvido com ajuda de IA (Lovable), então é um projeto modesto, sem grandes pretensões técnicas.

## Seções da página

- Página inicial
- Quem Somos
- Serviços
- Como Trabalhamos
- Nossa Equipe
- Diferenciais
- Contato
- Localização e informações de atendimento

## Tecnologias

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router)
- TypeScript
- Vite
- Tailwind CSS 4 + shadcn/ui
- Bun (gerenciador de pacotes)
- Vercel (hospedagem)

## Como rodar localmente

Pré-requisito: [Bun](https://bun.sh) instalado.

```bash
# instalar as dependências
bun install

# rodar em modo de desenvolvimento
bun run dev

# gerar o build de produção
bun run build

# visualizar o build localmente
bun run preview
```

Outros scripts: `bun run lint` (verifica o código) e `bun run format` (formata com Prettier).

## Estrutura do projeto

```
src/
├── routes/        # páginas do site
├── components/    # componentes reutilizáveis
├── hooks/         # hooks customizados
├── lib/           # funções utilitárias
├── assets/        # imagens e arquivos estáticos
└── styles.css     # estilos globais
```

> `src/routeTree.gen.ts` é gerado automaticamente. Não precisa editar à mão.

## Deploy

O projeto está hospedado na **Vercel**: [litoranea-ambiental-ufc.vercel.app](https://litoranea-ambiental-ufc.vercel.app/)

## Créditos

Desenvolvido por Alan, a pedido da **Litorânea Ambiental — Empresa Júnior de Ciências Ambientais da UFC**.
