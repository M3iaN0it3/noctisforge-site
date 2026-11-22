# Atualização do site NoctisForge (v1.8)

- Apenas `.exe` nos downloads: `NoctisForge-v1.8.exe`.
- Removido o botão **Baixar pacote .ZIP**.
- Logo e capturas incorporados no HTML, sem depender de `assets/`.
- Os botões **Baixar para Windows** e **Baixar NoctisForge v1.8** levam ao mesmo `.exe`.

## Publicar no GitHub Pages

1. Extraia o ZIP deste pacote.
2. Abra github.com/M3iaN0it3/noctisforge-site (branch `main`).
3. Use `Add file` > `Upload files` e envie os arquivos extraídos para **a raiz** do repositório, substituindo `index.html` e mantendo `NoctisForge-v1.8.exe` no mesmo nível.
4. Confirme com `Commit changes`.
5. Opcional: exclua `NoctisForge-v1.3.exe` e `NoctisForge-v1.3-Windows.zip` do repositório, pois não são mais necessários. O novo site não aponta para eles.
6. Confira `Settings` > `Pages`: branch `main`, `/(root)`.
7. Aguarde o deploy da aba Actions terminar e atualize com Ctrl+F5.

**Não envie o ZIP fechado**. O site não se publica sozinho.

O `.exe` ainda não é assinado digitalmente e pode apresentar aviso do Microsoft SmartScreen.
