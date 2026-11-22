# NoctisForge | Site oficial (primeira versão)

Site de apresentação e download do NoctisForge, criado por **MeiaNoite**.

## Conteúdo

- `index.html`: página inicial (apresentação, recursos, como funciona, capturas, FAQ e download).
- `privacidade.html`: política inicial de privacidade, adequada ao site estático atual.
- `styles.css`: visual FULL BLACK + ROXO; responsivo para desktop, tablet e celular.
- `app.js`: menu mobile, visualizador de capturas e ano automático do rodapé.
- `assets/`: logo e capturas **reais** do NoctisForge v1.3, otimizadas em WebP.
- `downloads/`: executável Windows e pacote ZIP da versão v1.3.
- `site.webmanifest` e `favicon.ico`: identidade no navegador.

## Como visualizar no seu computador

1. Extraia o ZIP.
2. Abra `index.html` no navegador.
3. Para uma prévia com o mesmo comportamento da hospedagem, abra um terminal nesta pasta e execute:

   ```bash
   python -m http.server 8080
   ```

4. Abra `http://localhost:8080`.

**O site não exige Python para funcionar.** O comando acima é só uma opção de servidor local para testes. Você também pode abrir o HTML diretamente.

## Como publicar no GitHub Pages

1. Entre no GitHub e crie um repositório público, por exemplo `noctisforge-site`.
2. Envie **o conteúdo desta pasta** para a raiz do repositório, e não uma pasta `NoctisForge_Site` envolvendo os arquivos.
3. Vá em **Settings → Pages**, selecione **Deploy from a branch**, escolha `main` e `/(root)` e salve.
4. O endereço normalmente segue o padrão `https://SEU-USUARIO.github.io/noctisforge-site/`.
5. Confirme se os botões de download funcionam após a publicação.

O repositório público que você criar terá um URL real para a seção *Git URL* do formulário da API. O URL do site publicado serve para *Website URL*. **Não coloque um link fictício** no formulário.

### Outra alternativa

Hospedagens estáticas como Cloudflare Pages e Netlify também conseguem servir esse site. Publique o conteúdo da pasta como diretório raiz. Um domínio personalizado é opcional.

## Como atualizar a versão do aplicativo

1. Substitua os arquivos em `downloads/` pelos novos artefatos Windows que você compilou.
2. Atualize os links nos botões da página `index.html`.
3. Atualize os textos `v1.3` e os requisitos técnicos, caso tenham mudado.
4. Substitua as capturas de `assets/` caso a interface mude.

## Cuidados

- Os arquivos Windows incluídos são a versão **v1.3**, a mais recente disponível nesta conversa. O `.exe` não tem assinatura digital de código e pode gerar um aviso do Microsoft Defender SmartScreen.
- Não prometa que todos os modpacks funcionarão sem erros. O NoctisForge verifica metadados e conflitos conhecidos, mas ainda exige teste no jogo.
- O site por si só **não solicita API Key do CurseForge**, não hospeda contas, não recebe formulários e não faz coleta própria de dados.
- O repositório `noctisforge-site` pode ser diferente do repositório de código-fonte do aplicativo. Na solicitação da API, explique com clareza qual repositório contém a aplicação.
- A página `privacidade.html` deve ser revista se você integrar analytics, contato, newsletters ou backend.
- A divulgação pública não torna o programa automaticamente aprovado pela CurseForge nem elimina a necessidade de cumprir seus termos.

**Assinatura:** Criado Por MeiaNoite.
