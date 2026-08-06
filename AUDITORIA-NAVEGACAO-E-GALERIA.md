# Auditoria de navegação e Galeria

## Alterações aplicadas

- Criada a rota `/galeria`, com 19 imagens organizadas em três projetos:
  - Rostos Familiares: 6 obras;
  - Ainda Sou Eu: capa e 9 páginas;
  - Arte Digital: 3 ilustrações.
- Adicionado “Galeria” à navegação principal e ao menu lateral.
- O botão circular de três pontos agora abre e fecha uma sidebar funcional.
- A sidebar fecha pelo botão “Fechar”, clique no fundo, tecla `Esc` ou seleção de uma página.
- O menu bloqueia a rolagem do conteúdo enquanto está aberto e remove os links ocultos da navegação por teclado.
- A Galeria permite ampliar imagens e navegar com botões ou setas do teclado.

## Botões e links auditados

| Elemento | Problema encontrado | Correção |
| --- | --- | --- |
| Botão de três pontos | Não tinha ação | Agora controla o menu lateral |
| “Ver detalhes” no destaque | Botão sem destino | Abre o autorretrato na Galeria |
| “Ver coleção completa” | Apontava para a própria seção | Abre “Rostos Familiares” na Galeria |
| Links do cabeçalho | Sem Galeria e destaque fixo | Galeria adicionada e estado ativo por página |
| “Ler HQ completa” | Funcionando | Mantido: abre o PDF existente |
| Controles da Arte Digital | Funcionando | Mantidos: setas, pontos, teclado e gesto |
| “Reorganizar mesa” | Funcionando | Mantido no desktop |
| Instagram | Funcionando | Mantido em “Sobre” e “Contato” |

## Observação

A Galeria reúne todas as imagens que já aparecem como obras nas três experiências do site. Arquivos técnicos, elementos decorativos, versões duplicadas e fotografias da seção “Sobre” não foram misturados aos projetos artísticos.
