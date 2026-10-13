const content = window.siteContent;
const services = [
  ['Branding & Logo','Identities that capture who you are and make you instantly recognisable.','<circle cx="12" cy="12" r="8"/><path d="M8 12h8M12 8v8"/>'],
  ['Web Design','Fast, mobile-friendly websites that turn visitors into customers.','<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h1M10 6.5h1"/>'],
  ['Graphic Design','Striking visuals for campaigns, reports, presentations and digital ads.','<path d="m4 20 3-7L17 3l4 4-10 10-7 3ZM7 13l4 4M14 6l4 4"/>'],
  ['Print Collateral','Business cards, brochures, flyers and packaging, print-ready and on brand.','<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>'],
  ['Video & Motion','Brand films, explainers and short-form content that hold attention.','<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m10 9 5 3-5 3Z"/>'],
  ['Social Media','Styled channels and scroll-stopping content, consistent everywhere.','<rect x="5" y="2" width="14" height="20" rx="3"/><path d="M9 6h6M10 18h4"/><circle cx="12" cy="12" r="3"/>']
];
function element(tag, className, text) { const el=document.createElement(tag); if(className)el.className=className; if(text!==undefined)el.textContent=text; return el; }
services.forEach(([name,description,icon],i)=>{
  const card=element('article','card'); const top=element('div','service-top',String(i+1).padStart(2,'0'));
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg'); svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('class','service-icon');svg.setAttribute('aria-hidden','true');svg.innerHTML=icon;
  top.append(svg);card.append(top,element('h3','',name),element('p','',description));document.querySelector('#service-grid').append(card);
});
content.projects.forEach(project=>{
  const card=element('article','project');card.style.setProperty('--cover',project.color);
  if(project.image){const img=element('img');img.src=project.image;img.alt=project.name;img.loading='lazy';card.append(img);card.classList.add('has-image');}
  else {card.append(element('div','shape'),element('span','sample','Portfolio preview'));}
  card.append(element('h3','',project.name),element('p','',project.category));document.querySelector('#work-grid').append(card);
});
if(content.city)document.querySelector('#city').textContent=` · ${content.city}`;
if(content.heroImage){
  const frame=document.querySelector('#hero-visual');frame.replaceChildren();
  const picture=element('picture');if(content.heroMobileImage){const source=element('source');source.media='(max-width: 760px)';source.srcset=content.heroMobileImage;picture.append(source);}
  const img=element('img','media-image');img.src=content.heroImage;img.alt='designOgraphic creative work';picture.append(img);frame.append(picture);
}
if(content.founderImage){const frame=document.querySelector('#founder');const img=element('img');img.src=content.founderImage;img.alt='The designOgraphic studio';img.loading='lazy';frame.replaceChildren(img);}
if(content.showreelVideo){const video=element('video');video.controls=true;video.preload='metadata';video.src=content.showreelVideo;if(content.showreelPoster)video.poster=content.showreelPoster;video.setAttribute('aria-label','designOgraphic showreel');document.querySelector('#reel-frame').replaceChildren(video);}
const clients=document.querySelector('#client-grid');
if(content.clients.length){content.clients.forEach(client=>{const tile=element('figure','client-tile');const img=element('img');img.src=client.image;img.alt=client.name;img.loading='lazy';img.width=160;img.height=110;tile.append(img,element('figcaption','',client.name));clients.append(tile);});document.querySelector('#client-note').hidden=true;}
else{for(let i=0;i<6;i++)clients.append(element('div','client-placeholder','Client logo space'));}
const testimonials=document.querySelector('#testimonial-grid');
if(content.testimonials.length){content.testimonials.forEach(t=>{const card=element('article','card');card.append(element('blockquote','',`“${t.quote}”`),element('cite','',t.credit));testimonials.append(card);});}
else{for(let i=0;i<3;i++){const card=element('article','card');card.append(element('span','preview-label','TESTIMONIAL SPACE'),element('blockquote','','Your approved client testimonial will appear here.'),element('cite','','Client name · Company'));testimonials.append(card);}}
document.querySelector('#form-preview').hidden=!content.emailIsPreview;
document.querySelector('#form-recipient').textContent=content.email;
const dateInput=document.querySelector('#project-date');
function setMinimumDate(){const now=new Date();dateInput.min=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;}
setMinimumDate();dateInput.addEventListener('focus',setMinimumDate);
document.querySelector('#project-form').addEventListener('submit',event=>{
  event.preventDefault();setMinimumDate();if(!event.currentTarget.reportValidity())return;
  const data=new FormData(event.currentTarget);
  const body=`Project enquiry — designOgraphic\n\nClient name: ${data.get('clientName').trim()}\nContact number: ${data.get('phone').trim()}\nEmail: ${data.get('email').trim()}\nService: ${data.get('service')}\nRequested completion date: ${data.get('deadline')}\n\nProject details:\n${data.get('details').trim()}`;
  document.querySelector('#enquiry-copy').value=body;
  document.querySelector('#email-fallback').hidden=false;
  document.querySelector('#form-status').textContent='Your enquiry is prepared. It has not been sent. Review and send it in your email app.';
  window.location.href=`mailto:${content.email}?subject=${encodeURIComponent('Project enquiry: '+data.get('service'))}&body=${encodeURIComponent(body)}`;
});
document.querySelector('#copy-enquiry').addEventListener('click',async()=>{
  const text=document.querySelector('#enquiry-copy');
  try{await navigator.clipboard.writeText(text.value);document.querySelector('#form-status').textContent='Enquiry copied. Paste it into your email app.';}
  catch{ text.focus();text.select();document.querySelector('#form-status').textContent='Select and copy the enquiry text, then paste it into your email app.'; }
});
content.socials.forEach(s=>{if(!/^https:\/\//i.test(s.url))return;const a=element('a','',s.label);a.href=s.url;a.target='_blank';a.rel='noopener noreferrer';document.querySelector('#social-links').append(a);});
document.querySelector('#year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('#navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();menu.focus();}});
