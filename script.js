const tabs=document.querySelectorAll('.tab-btn');
const sections=document.querySelectorAll('.tab-content');
tabs.forEach(btn=>{
 btn.addEventListener('click',()=>{
   tabs.forEach(b=>b.classList.remove('active'));
   sections.forEach(s=>s.classList.remove('active'));
   btn.classList.add('active');
   document.getElementById(btn.dataset.tab).classList.add('active');
 });
});
