'use strict';
(function(){
  // Insert the updates section without replacing the existing website HTML.
  const anchor=document.querySelector('.download-meta');
  if(anchor&&!document.getElementById('nfSiteRelease')){
    const section=document.createElement('section');section.id='nfSiteRelease';section.className='nf-site-release';section.setAttribute('aria-live','polite');
    const label=document.createElement('span');label.className='nf-release-tag';label.textContent='ATUALIZAÇÕES';section.append(label);
    const h=document.createElement('h3');h.textContent='Novidades da última versão';section.append(h);
    const p=document.createElement('p');p.id='nfSiteVersion';p.textContent='As novidades serão exibidas após a primeira publicação automática.';section.append(p);
    const ul=document.createElement('ul');ul.id='nfSiteNotes';section.append(ul);
    const small=document.createElement('small');small.id='nfSitePublished';section.append(small);
    anchor.before(section);
  }
  const version=document.getElementById('nfSiteVersion');
  const notes=document.getElementById('nfSiteNotes');
  const published=document.getElementById('nfSitePublished');
  if(!version||!notes)return;
  async function check(){
    try{
      const response=await fetch('latest.json?at='+Date.now(),{cache:'no-store'});
      if(!response.ok)throw Error('Sem release publicada');
      const info=await response.json();
      if(!/^\d+\.\d+\.\d+$/.test(info.version))throw Error('Versão inválida');
      const expected='https://github.com/M3iaN0it3/noctisforge-site/releases/download/v'+info.version+'/NoctisForge.exe';
      if(info.downloadUrl!==expected)throw Error('Link inválido');
      version.textContent='NoctisForge v'+info.version+' para Windows';
      document.querySelectorAll('a[href$=".exe"]').forEach(link=>{
        if(!link.closest('.hero-actions')&&!link.closest('.download-actions'))return;
        link.href=info.downloadUrl;
        link.removeAttribute('download');
        if(link.closest('.download-actions')){
          // Preserva o ícone e altera apenas o texto adjacente.
          const textNode=Array.from(link.childNodes).find(n=>n.nodeType===Node.TEXT_NODE&&n.textContent.includes('Baixar'));
          if(textNode)textNode.textContent=' Baixar NoctisForge v'+info.version+' ';
        }
      });
      notes.replaceChildren();
      (Array.isArray(info.notes)?info.notes:[]).slice(0,25).forEach(line=>{const li=document.createElement('li');li.textContent=String(line).slice(0,500);notes.append(li)});
      if(!notes.children.length){const li=document.createElement('li');li.textContent='Melhorias e correções nesta versão.';notes.append(li)}
      if(published&&info.publishedAt){const date=new Date(info.publishedAt);if(!isNaN(date))published.textContent='Publicado em '+date.toLocaleDateString('pt-BR')}
    }catch{
      // Preserva o botão já publicado enquanto nenhuma release existir.
      version.textContent='As novidades aparecerão aqui após a primeira publicação automática.';
    }
  }
  check();
})();
