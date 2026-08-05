# Portfólio Artista

Portfólio visual construído com Next.js, TypeScript e Motion.

## Executar localmente

```bash
npm install
npm run dev
```

Depois, acesse `http://localhost:3000`.

## Trocar as obras

1. Coloque suas imagens em `public/artworks/color` e `public/artworks/monochrome`.
2. Atualize `src/data/collections.ts`.
3. Para a obra principal em camadas, substitua os SVGs em
   `public/artworks/color/destaque`.

## Publicar na Vercel

Importe a pasta em um repositório GitHub e conecte o repositório à Vercel.
O projeto não precisa de banco de dados.
