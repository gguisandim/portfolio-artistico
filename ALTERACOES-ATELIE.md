# Alterações visuais aplicadas

A primeira parte do portfólio recebeu uma direção de arte de ateliê, sem adicionar obras novas e sem inventar informações sobre o artista.

## Hero

- textura e granulação produzidas em CSS;
- partículas amarelas animadas;
- pincelada e rabisco em SVG produzidos por código;
- número editorial `01 / 05`;
- campos de técnica, ano e dimensão;
- citação mantida como `XXXX` e autoria como `A definir`;
- crédito discreto sobre a obra;
- efeitos de profundidade e movimento com GSAP.

## Coleção colorida

- introdução editorial lateral;
- título, subtítulo e descrição continuam vinculados a `collections.ts`;
- numeração das cinco obras;
- técnica e ano abaixo de cada card;
- ação `Ver obra` no hover;
- sombras, textura e pincelada de transição;
- divisor visual para a entrada da seção da HQ.

## Arquivos alterados

- `src/components/hero/ColorHero.tsx`
- `src/components/gallery/ArtworkCollection.tsx`
- `src/components/gallery/ArtworkCard.tsx`
- `src/app/globals.css`

## Arquivos adicionados

- `public/decor/brush-yellow.svg`
- `public/decor/scribble.svg`

## Observação de validação

Não foi possível executar `npm run build` no ambiente de geração porque o espelho interno do npm retornou erro 404 ao baixar uma dependência indireta. O código foi mantido compatível com as dependências já declaradas no projeto. Na sua máquina, execute `npm install` e `npm run dev`.


## Atualização com novas fotografias
- Removidos os campos visuais de técnica, ano e dimensão do hero.
- Removido o contador grande de obras da introdução da coleção.
- Substituída a imagem principal pelo JPG horizontal enviado.
- Substituídas as cinco imagens da galeria e adicionada uma sexta obra.
- Mantidos títulos, técnicas e descrições como “A definir”.
