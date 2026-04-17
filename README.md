# carumds — site estático (GitHub Pages)

Esta pasta está pronta para ser a **raiz** de um repositório GitHub: faz upload ou clone para `main`, activa **Pages** em *Settings → Pages → Branch: main / Folder: /* (root)* e o site fica disponível em `https://<utilizador>.github.io/<repo>/`.

## Estrutura

| Caminho | Descrição |
|--------|------------|
| `index.html` | Página inicial (hero + cartões, estilo [Material Design 3](https://m3.material.io/)) |
| `library/index.html` | Índice da biblioteca de componentes |
| `library/*.html` | Uma página por categoria (sem uma única página gigante com âncoras) |
| `css/` | Tokens, componentes, shell MD3, tema claro/escuro, landing |
| `js/theme.js` | Botão de tema: alterna claro/escuro e grava em `localStorage` |
| `js/demos.js` | Menu lateral móvel, filtro da navegação, dialogs/dropdowns/tabs onde existem |

## Tema

- O ícone na barra superior alterna entre **tema claro** e **tema escuro** (`data-theme` no `<html>`).
- A preferência é guardada como `carumds-theme` no `localStorage`.
- Um script mínimo no `<head>` de cada HTML aplica o tema antes da pintura quando já existe valor guardado, ou usa `prefers-color-scheme`.

## Desenvolvimento local

Abre `index.html` no browser (duplo clique ou servidor estático). Caminhos são relativos à raiz — não uses `../` a partir da raiz do site em produção.
