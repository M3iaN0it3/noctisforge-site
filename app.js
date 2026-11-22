'use strict';
(function(){
  const menu = document.getElementById('menuToggle');
  const nav = document.getElementById('navLinks');
  const iconMarkup = '<svg aria-hidden="true"><use href="#ic-menu"></use></svg>';
  const closeMarkup = '<svg aria-hidden="true"><use href="#ic-close"></use></svg>';
  function closeMenu(){
    if(!menu||!nav)return;
    menu.setAttribute('aria-expanded','false');
    menu.setAttribute('aria-label','Abrir menu');
    menu.innerHTML=iconMarkup;
    nav.classList.remove('open');
  }
  if(menu&&nav){
    menu.addEventListener('click',()=>{
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded',String(open));
      menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
      menu.innerHTML=open?closeMarkup:iconMarkup;
      nav.classList.toggle('open',open);
    });
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
    document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
  }
  const lightbox=document.getElementById('lightbox');
  const lightboxImg=document.getElementById('lightboxImage');
  const lightboxTitle=document.getElementById('lightboxTitle');
  const lightboxClose=document.getElementById('lightboxClose');
  if(lightbox&&lightboxImg&&lightboxTitle&&lightboxClose){
    document.querySelectorAll('[data-image]').forEach(button=>{
      button.addEventListener('click',()=>{
        lightboxImg.src=button.dataset.image;
        lightboxImg.alt=button.querySelector('img')?.alt || 'Captura do NoctisForge';
        lightboxTitle.textContent=button.dataset.title || 'NoctisForge';
        if(typeof lightbox.showModal==='function')lightbox.showModal();
      });
    });
    lightboxClose.addEventListener('click',()=>lightbox.close());
    lightbox.addEventListener('click',event=>{if(event.target===lightbox)lightbox.close()});
  }
  const year=document.getElementById('currentYear');
  if(year)year.textContent=String(new Date().getFullYear());
})();
