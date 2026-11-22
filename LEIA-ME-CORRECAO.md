# NoctisForge — Correção para GitHub Pages

## Por que as imagens desapareceram?

Os arquivos `index.html`, `styles.css` e `app.js` foram publicados na raiz, mas a pasta `assets/` nao apareceu na lista do repositorio. O HTML antigo apontava para `assets/logo.webp`, `assets/criador.webp` etc., entao o navegador recebia 404 nesses enderecos.

## O que esta versao corrige?

- O `index.html` ja CONTEM as imagens do logo e das capturas internamente. Nao depende da pasta `assets`.
- A pagina `privacidade.html` tambem contem o logo.
- Os downloads agora apontam para os dois arquivos de programa na RAIZ, evitando dependencia da pasta `downloads`.
- `favicon.png` e `site.webmanifest` ficam diretamente na raiz.
- Preserva o layout preto e roxo, o CSS, o JS, todas as secoes e os links internos.

## Como atualizar o GitHub (importante)

1. Extraia o ZIP. Nao envie o ZIP fechado.
2. No repositorio `M3iaN0it3/noctisforge-site`, abra `Add file` > `Upload files`.
3. Envie os arquivos da pasta extraida para a RAIZ (nao crie subpasta):
   - `index.html` **obrigatorio**
   - `privacidade.html`
   - `favicon.png` e `site.webmanifest`
   - `NoctisForge-v1.3.exe` e `NoctisForge-v1.3-Windows.zip` para os downloads funcionarem
   - O restante dos arquivos pode permanecer como ja esta; se solicitado, substitua-os pelos novos.
4. Clique em `Commit changes`.
5. Em `Settings` > `Pages`, mantenha a branch `main` e a pasta `/(root)`.
6. Espere o workflow `pages build and deployment` terminar com sucesso.
7. Abra https://m3ian0it3.github.io/noctisforge-site/ e aperte `Ctrl + F5` para recarregar.

**Observacao:** `index.html` sozinho corrige as imagens da pagina principal. Para os downloads funcionarem, os dois arquivos `.exe` e `.zip` tambem precisam ser enviados a raiz.

A versao do aplicativo nos links e 1.3. Atualize esse numero quando publicar uma versao mais nova.
