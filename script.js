
document.getElementById('yr').textContent=new Date().getFullYear();

// Terminal typing
const lines=[
 '<span class="c">$</span> whoami',
 'faizan_ali',
 '<span class="c">$</span> roles --list',
 '<span class="k">[</span>"developer", "designer", "ai-builder"<span class="k">]</span>',
 '<span class="c">$</span> status',
 'open to work <span class="c">&#10003;</span><span class="cursor"></span>'
];
const t=document.getElementById('typed');let i=0;
(function next(){ if(i<lines.length){t.innerHTML+=(i?'\n':'')+lines[i++];setTimeout(next,i%2?350:650);} })();

// Project filter
document.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('on'));
  b.classList.add('on');
  document.querySelectorAll('.proj').forEach(p=>p.classList.toggle('hide',b.dataset.f!=='all'&&p.dataset.t!==b.dataset.f));
});

// Assistant demo
const msgs=document.getElementById('msgs'),form=document.getElementById('form'),q=document.getElementById('q');
const answers=[
 [/service|offer|do you do/i,'I build websites and web apps, design logos and social media creatives, and add AI chat assistants to businesses.'],
 [/tool|tech|stack|skill/i,'Code: HTML, CSS, JavaScript, React, Node.js, Python. Design: Photoshop, Illustrator, Figma, Canva.'],
 [/contact|hire|email|reach/i,'Use the Contact section below. The Email me button opens your mail app.'],
 [/price|cost|rate|budget/i,'Pricing depends on scope. Send a short project brief and you will get a quote.'],
 [/hi|hello|hey|salam/i,'Hello! Ask about services, tools or how to contact me.']
];
function add(txt,cls){const d=document.createElement('div');d.className='m '+cls;d.textContent=txt;msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;}
function ask(text){
  add(text,'me');
  const hit=answers.find(a=>a[0].test(text));
  setTimeout(()=>add(hit?hit[1]:'I can answer questions about services, tools and contact. Try one of those.','bot'),400);
}
form.onsubmit=e=>{e.preventDefault();if(q.value.trim()){ask(q.value.trim());q.value='';}};
document.querySelectorAll('.quick button').forEach(b=>b.onclick=()=>ask(b.textContent));
