document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id && id.length > 1){
      const el = document.querySelector(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({ behavior:'smooth', block:'start' });
        const nav = document.getElementById('mainNav');
        if(nav?.classList.contains('show')) new bootstrap.Collapse(nav).hide();
      }
    }
  });
});

(function initCountdown(){
  const clockEl = document.getElementById('clock');
  if(!clockEl) return;

  const eventDate = new Date("2026-03-13T12:00:00-03:00").getTime();
  const now = Date.now();
  const seconds = Math.max(0, Math.floor((eventDate - now) / 1000));

  const hasjQuery = typeof window.jQuery !== 'undefined';
  const hasFlip = hasjQuery && typeof jQuery.fn.FlipClock === 'function';

  if(hasFlip){
    jQuery(function($){
      $('#clock').FlipClock(seconds, { clockFace: 'DailyCounter', countdown: true });
    });
  }else{
    const fmt = (n)=> n.toString().padStart(2,'0');
    const box = document.createElement('div');
    box.className = 'text-center';
    const span = document.createElement('div');
    span.className = 'fs-3 fw-bold';
    box.appendChild(span);
    clockEl.appendChild(box);

    const tick = ()=>{
      const diff = Math.max(0, eventDate - Date.now());
      const total = Math.floor(diff/1000);
      const d = Math.floor(total/86400);
      const h = Math.floor((total%86400)/3600);
      const m = Math.floor((total%3600)/60);
      const s = total%60;
      span.textContent = `${d}d ${fmt(h)}h ${fmt(m)}m ${fmt(s)}s`;
      if(total <= 0){ clearInterval(int); span.textContent = "¡Es hoy!"; }
    };
    const int = setInterval(tick, 1000);
    tick();
  }
})();



(function initMagnific(){
  const hasjQuery = typeof window.jQuery !== 'undefined';
  const hasMagnific = hasjQuery && !!jQuery.fn.magnificPopup;
  if(!hasMagnific) return;

  jQuery(function($){
    $('.image-popup-vertical-fit').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: { verticalFit: true }
    });

    $('.image-popup-fit-width').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      image: { verticalFit: false }
    });

    $('.image-popup-no-margins').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom',
      image: { verticalFit: true },
      zoom: { enabled: true, duration: 300 }
    });
  });
})();
