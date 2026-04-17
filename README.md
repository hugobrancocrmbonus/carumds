# carumds — Design system (GitHub)

Estrutura pensada para **GitHub Pages** ou qualquer hosting estático: um único `index.html` na **raiz** do repositório e todos os estilos em **`css/`**.

## Estrutura de pastas

```
Carum - Github/
├── index.html          ← Storybook (Material Design) — página principal
├── showcase.html       ← Galeria simples dos componentes (sem shell MD)
├── README.md
└── css/
    ├── design-tokens.css
    ├── core-components.css
    ├── components.css
    └── storybook-shell.css   ← só o “chrome” do Storybook (navegação, cartões)
```

Nada de `../` entre ficheiros: o repositório pode ser a **raiz** do site.

## GitHub Pages

1. Cria um repositório e envia **esta pasta inteira** (ou o conteúdo dela) para a branch principal.
2. **Settings → Pages → Build and deployment → Source**: *Deploy from a branch*.
3. Escolhe a branch (ex.: `main`) e pasta **`/ (root)`**.
4. O site servirá `index.html` em `https://<user>.github.io/<repo>/`.

## Desenvolvimento local

```bash
cd "Carum - Github"
python3 -m http.server 8080
```

Abre `http://localhost:8080/` — o Storybook. Para só a galeria: `http://localhost:8080/showcase.html`.

## O que é cada página

| Ficheiro      | Conteúdo |
|---------------|----------|
| `index.html`  | Storybook com drawer, top bar, cartões MD3, filtro na navegação |
| `showcase.html` | Lista de componentes sem o layout Material (mais leve) |

Ambos usam os mesmos quatro CSS em `css/`.
