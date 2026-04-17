# carumds Storybook

Interface estática inspirada em **Material Design 3** (navigation drawer, top app bar, cartões com elevação, FAB, ícones Material Symbols) para navegar pelos componentes do design system.

## Como ver localmente

Na raiz do repositório (pasta que contém `design-tokens.css`):

```bash
# Servidor HTTP simples (evita bloqueios de file:// em alguns browsers)
python3 -m http.server 8080
```

Abre: `http://localhost:8080/storybook/index.html`

## GitHub Pages

1. Coloca o repositório no GitHub com a estrutura atual (`storybook/` ao lado de `design-tokens.css`, etc.).
2. Em **Settings → Pages**, escolhe a branch e a pasta raiz **ou** define `/docs` e move o conteúdo para lá ajustando os `href` se necessário.
3. Os links em `index.html` usam `../design-tokens.css` — o site publicado deve manter `storybook/` um nível abaixo dos CSS na árvore de ficheiros.

## Ficheiros

| Ficheiro    | Função                                      |
|------------|----------------------------------------------|
| `index.html` | Página principal do Storybook              |
| `shell.css`  | Estilo MD3 do “chrome” (não substitui os tokens) |

Os componentes continuam a vir de `../design-tokens.css`, `../core-components.css` e `../components.css`.
