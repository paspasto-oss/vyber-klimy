(function(){
  var root=document.getElementById('spk-app-root');
  if(!root||root.dataset.ready==='1')return;
  root.dataset.ready='1';

  var MOUNT=369;
  var INPUT={'2.5':0.7,'3.5':1.0,'5.0':1.5,'7.0':2.1};
  var ORIENT_LABEL={'0.92':'Sever','1':'Východ','1.08':'Západ','1.18':'Juh'};

  var PRODUCTS={
    '2.5':[
      {badge:'Odporúčame Spektra',recommended:true,brand:'HYUNDAI',name:'Hyundai REVOLUTION 09 · 2,5 kW',price:659,img:'https://www.spektrashop.sk/user/shop/orig/1380_g1bbf28dmg05elodyelyhl86k0axoxufguilgzwtwk-3.png?6a5e22b5',url:'/klimatizacia-hyundai-split-nastenna-revolution-09-r32-230v-2-5kw-2/',features:['Wi‑Fi zabudované','Ionizátor','Chladenie 2,6 kW']},
      {badge:'Komfortná voľba',brand:'SAMSUNG',name:'Samsung AR35 WIFI · 2,5 kW',price:746.30,img:'https://www.spektrashop.sk/user/shop/orig/1587_0jj5fq2nfxbdlfdgkfnrcxbcdvaubkxwzwxs7prdasw.png?6a5e22b7',url:'/klimatizacia-samsung-split-nastenna-ar35-wifi-ar40h09-r32-230v-2-5kw/',features:['Wi‑Fi zabudované','R32','Chladenie 2,6 kW']},
      {badge:'Prémiová voľba',brand:'MITSUBISHI ELECTRIC',name:'Mitsubishi MSZ‑HR · 2,5 kW',price:949,img:'https://www.spektrashop.sk/user/shop/orig/2937_mitsubishi-nastenna-kompaktna-klimatizacia-msz-hr--2.jpg?6a6adf6f',url:'/mitsubishi-electric-msz-hr-2-5-kw/',features:['Kompaktné prevedenie','Energetická trieda A++','R32']}
    ],
    '3.5':[
      {badge:'Odporúčame Spektra',recommended:true,brand:'HYUNDAI',name:'Hyundai REVOLUTION 12 · 3,5 kW',price:679,img:'https://www.spektrashop.sk/user/shop/orig/1386_g1bbf28dmg05elodyelyhl86k0axoxufguilgzwtwk-2.png?6a5e22b5',url:'/klimatizacia-hyundai-split-nastenna-revolution-12-r32-230v-3-5kw-2/',features:['Wi‑Fi zabudované','Ionizátor','Chladenie 3,5 kW']},
      {badge:'Komfortná voľba',brand:'SAMSUNG',name:'Samsung AR35 WIFI · 3,5 kW',price:827.48,img:'https://www.spektrashop.sk/user/shop/orig/1614_0jj5fq2nfxbdlfdgkfnrcxbcdvaubkxwzwxs7prdasw.png?6a5e22b7',url:'/klimatizacia-samsung-split-nastenna-ar35-wifi-ar40h12-r32-230v-3-5kw/',features:['Wi‑Fi zabudované','R32','Chladenie 3,5 kW']},
      {badge:'Prémiová voľba',brand:'MITSUBISHI ELECTRIC',name:'Mitsubishi MSZ‑HR · 3,5 kW',price:1099,img:'https://www.spektrashop.sk/user/shop/orig/2934_mitsubishi-nastenna-kompaktna-klimatizacia-msz-hr--2.jpg?6a6adf6f',url:'/mitsubishi-electric-msz-hr-3-5-kw/',features:['Kompaktné prevedenie','Energetická trieda A++','R32']}
    ],
    '5.0':[
      {badge:'Odporúčame Spektra',recommended:true,brand:'HYUNDAI',name:'Hyundai REVOLUTION 18 · 5 kW',price:1069,img:'https://www.spektrashop.sk/user/shop/orig/1413_g1bbf28dmg05elodyelyhl86k0axoxufguilgzwtwk-4.png?6a5e22b5',url:'/klimatizacia-hyundai-split-nastenna-revolution-18-r32-230v-5kw-2/',features:['Wi‑Fi zabudované','Chladenie 5,3 kW','Vykurovanie 5,6 kW']},
      {badge:'Prémiová voľba',brand:'MITSUBISHI ELECTRIC',name:'Mitsubishi MSZ‑HR · 5,0 kW',price:1399,img:'https://www.spektrashop.sk/user/shop/orig/2931_mitsubishi-nastenna-kompaktna-klimatizacia-msz-hr--2.jpg?6a6adf6f',url:'/mitsubishi-electric-msz-hr-5-0-kw/',features:['Kompaktné prevedenie','Energetická trieda A++','R32']},
      {badge:'Komfortná voľba',brand:'SAMSUNG',name:'Samsung AR35 WIFI · 5 kW',price:1455.70,img:'https://www.spektrashop.sk/user/shop/orig/1716_0jj5fq2nfxbdlfdgkfnrcxbcdvaubkxwzwxs7prdasw.png?6a5e22b8',url:'/klimatizacia-samsung-split-nastenna-ar35-wifi-ar40h18-r32-230v-5kw/',features:['Wi‑Fi zabudované','Chladenie 5,3 kW','R32']}
    ],
    '7.0':[
      {badge:'Odporúčame Spektra',recommended:true,brand:'HYUNDAI',name:'Hyundai REVOLUTION 24 · 7 kW',price:1459,img:'https://www.spektrashop.sk/user/shop/orig/1440_g1bbf28dmg05elodyelyhl86k0axoxufguilgzwtwk.png?6a5e22b5',url:'/klimatizacia-hyundai-split-nastenna-revolution-24-r32-230v-7kw/',features:['Wi‑Fi zabudované','Chladenie 7,0 kW','Vykurovanie 7,3 kW']},
      {badge:'Dizajnová voľba',brand:'HYUNDAI',name:'Hyundai CARBON GREY 24 · 7 kW',price:1729,img:'https://www.spektrashop.sk/user/shop/orig/1464_9tffxq-xfh15m89ypecga3qyroy20di4-mmtnaeco14-2.jpg?6a5e22b6',url:'/klimatizacia-hyundai-split-nastenna-carbon-grey-24-r32-230v-7kw/',features:['Sivý dizajn','Wi‑Fi zabudované','Chladenie 7,0 kW']},
      {badge:'Komfortná voľba',brand:'SAMSUNG',name:'Samsung AR35 WIFI · 7 kW',price:1752.75,img:'https://www.spektrashop.sk/user/shop/orig/1773_0jj5fq2nfxbdlfdgkfnrcxbcdvaubkxwzwxs7prdasw-1.png?6a5e22b9',url:'/klimatizacia-samsung-split-nastenna-ar35-wifi-ar40h24-r32-230v-7kw/',features:['Wi‑Fi zabudované','Chladenie 7,0 kW','R32']}
    ]
  };

  var css=`
  .spk,.spk *{box-sizing:border-box}.spk{width:100%;max-width:1450px;margin:0 auto 18px;font-family:Arial,sans-serif;color:#17212b}
  .spk-shell{display:grid;grid-template-columns:390px 1fr;background:#fff;border:1px solid #e4e7e9;border-radius:20px;overflow:visible;box-shadow:0 10px 30px rgba(0,0,0,.07)}
  .spk-left{padding:24px;background:#fff;border-radius:20px 0 0 20px}.spk-eyebrow{font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#c20000}.spk-left h1{margin:8px 0 6px!important;font-size:29px!important;line-height:1.05!important;color:#111!important}.spk-intro{margin:0 0 15px;color:#6f777d;font-size:13px}
  .spk-form{display:grid;gap:10px}.spk-field label{display:block;margin:0 0 5px;font-size:13px;font-weight:800}.spk-field input,.spk-field select{width:100%;height:44px;padding:8px 11px;border:1px solid #cfd5d8;border-radius:8px;background:#fff;color:#111}.spk-field input:focus,.spk-field select:focus{outline:0;border-color:#c20000;box-shadow:0 0 0 3px rgba(194,0,0,.08)}
  .spk-btn{height:46px;border:0;border-radius:9px;background:#c20000;color:#fff;font-weight:800;cursor:pointer}.spk-note{margin-top:9px;color:#7c848a;font-size:10px;line-height:1.35}
  .spk-summary{display:none}.spk.has-result .spk-form,.spk.has-result .spk-intro{display:none}.spk.has-result .spk-summary{display:block}.spk.has-result .spk-shell{grid-template-columns:260px 1fr}.spk.has-result .spk-left{padding:22px}
  .spk-kW{margin:12px 0 2px;color:#c20000;font-size:38px;font-weight:900;line-height:1}.spk-kW-label{font-size:12px;color:#777}.spk-mini{display:grid;gap:7px;margin-top:16px;padding-top:14px;border-top:1px solid #e6e8ea}.spk-mini div{display:flex;justify-content:space-between;gap:8px;font-size:12px}.spk-mini span{color:#747c82}.spk-mini strong{text-align:right}.spk-edit{width:100%;margin-top:14px;padding:9px;border:1px solid #d1d6d9;border-radius:8px;background:#fff;font-weight:800;cursor:pointer}
  .spk-right{padding:24px;background:linear-gradient(135deg,#900000 0%,#c20000 55%,#ef6b6b 100%);border-radius:0 20px 20px 0;color:#fff;overflow:visible}
  .spk-promo{display:grid;grid-template-columns:1fr 42%;align-items:center;gap:20px;min-height:390px}.spk.has-result .spk-promo{display:none}.spk-promo h2{margin:0 0 10px!important;font-size:46px!important;line-height:1.03!important;color:#fff!important}.spk-promo p{max-width:570px;margin:0;color:rgba(255,255,255,.9);font-size:15px;line-height:1.45}.spk-tags{display:flex;flex-wrap:wrap;gap:7px;margin-top:17px}.spk-tags span{padding:7px 10px;border:1px solid rgba(255,255,255,.32);border-radius:999px;background:rgba(255,255,255,.08);font-size:12px;font-weight:800}.spk-promo img{display:block;width:100%;max-height:260px;object-fit:contain;filter:drop-shadow(0 16px 18px rgba(0,0,0,.18))}
  .spk-results{display:none}.spk.has-result .spk-results{display:block}.spk-results-head{margin-bottom:13px}.spk-results-head h2{margin:0 0 4px!important;color:#fff!important;font-size:23px!important}.spk-results-head p{margin:0;color:rgba(255,255,255,.86);font-size:12px;line-height:1.4}
  .spk-products{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.spk-card{position:relative;display:flex;flex-direction:column;min-width:0;background:#fff;color:#17212b;border-radius:13px;overflow:hidden;box-shadow:0 7px 20px rgba(0,0,0,.13)}.spk-card.tip{outline:2px solid #ffc400}.spk-badge{position:absolute;top:10px;left:10px;z-index:2;padding:6px 9px;border-radius:999px;background:#17212b;color:#fff;font-size:9px;font-weight:800}.spk-card.tip .spk-badge{background:#e6a900}
  .spk-img{display:flex;align-items:center;justify-content:center;height:120px;padding:12px 12px 8px;border-bottom:1px solid #edf0f1;background:#fff}.spk-img img{max-width:100%;max-height:98px;object-fit:contain}.spk-body{display:flex;flex-direction:column;flex:1;padding:12px}.spk-brand{color:#c20000;font-size:10px;font-weight:900;letter-spacing:.05em}.spk-card h3{margin:5px 0 7px!important;min-height:38px;font-size:14px!important;line-height:1.25!important;color:#17212b!important}.spk-feat{margin:0 0 10px!important;padding-left:17px!important;color:#60686e;font-size:11px;line-height:1.4}.spk-price{margin-top:auto;font-size:20px;font-weight:900}.spk-price-note{font-size:10px;color:#7a8287}.spk-complete{margin-top:7px;padding:7px 8px;border-radius:7px;background:#fff2f2;color:#455057;font-size:11px}.spk-complete strong{color:#c20000}.spk-link{display:flex;align-items:center;justify-content:center;height:39px;margin-top:9px;border-radius:7px;background:#c20000;color:#fff!important;font-size:11px;font-weight:800;text-decoration:none!important}.spk-mount{margin-top:6px;border:0;background:transparent;color:#c20000;font-size:10px;font-weight:800;text-decoration:underline;cursor:pointer}.spk-foot{display:flex;justify-content:space-between;gap:15px;margin-top:11px;color:rgba(255,255,255,.88);font-size:10px}.spk-foot a{color:#fff;font-weight:800;text-decoration:underline}
  .spk-modal{position:fixed;inset:0;z-index:999999;display:none;align-items:center;justify-content:center;padding:16px;background:rgba(0,0,0,.62)}.spk-modal.open{display:flex}.spk-modal-card{width:min(580px,100%);max-height:88vh;overflow:auto;background:#fff;border-radius:14px;box-shadow:0 25px 70px rgba(0,0,0,.3)}.spk-modal-head{display:flex;align-items:center;justify-content:space-between;padding:16px 18px;border-bottom:1px solid #e5e7e9}.spk-modal-head h3{margin:0!important;font-size:18px!important}.spk-close{width:36px;height:36px;border:0;border-radius:50%;background:#eef1f2;font-size:22px;cursor:pointer}.spk-modal-body{padding:18px}.spk-modal-body ul{padding-left:20px;line-height:1.65;color:#4c565d}.spk-warning{padding:11px 12px;border-left:4px solid #e3a314;background:#fff8e6;font-size:11px;line-height:1.5}
  @media(max-width:980px){.spk-shell,.spk.has-result .spk-shell{grid-template-columns:1fr}.spk-left{border-radius:16px 16px 0 0}.spk-right{border-radius:0 0 16px 16px}.spk-promo{grid-template-columns:1fr 34%}.spk-products{grid-template-columns:1fr}.spk-card{max-width:640px;margin:0 auto}.spk-img{height:130px}}
  @media(max-width:620px){.spk{margin-bottom:10px}.spk-left,.spk.has-result .spk-left{padding:18px}.spk-left h1{font-size:24px!important}.spk-right{padding:16px}.spk-promo{display:block;min-height:0}.spk-promo h2{font-size:31px!important}.spk-promo img{display:none}.spk-products{gap:10px}.spk-foot{flex-direction:column}.spk-kW{font-size:34px}}
  `;

  if(!document.getElementById('spk-github-style')){
    var st=document.createElement('style');st.id='spk-github-style';st.textContent=css;document.head.appendChild(st);
  }

  root.innerHTML=`
  <div class="spk" id="spkApp">
    <div class="spk-shell">
      <aside class="spk-left">
        <div class="spk-eyebrow">Spektra Shop · výber klimatizácie</div>
        <h1>Aký výkon klimatizácie potrebujete?</h1>
        <p class="spk-intro">Stačia 4 údaje. Výšku stropu počítame interne ako 2,6 m.</p>
        <form class="spk-form" id="spkForm">
          <div class="spk-field"><label>Plocha miestnosti</label><input id="spkArea" type="number" min="5" max="250" value="28" required></div>
          <div class="spk-field"><label>Orientácia miestnosti</label><select id="spkOrientation"><option value="0.92">Sever</option><option value="1" selected>Východ</option><option value="1.08">Západ</option><option value="1.18">Juh</option></select></div>
          <div class="spk-field"><label>Počet osôb v miestnosti</label><input id="spkPeople" type="number" min="1" max="30" value="3" required></div>
          <div class="spk-field"><label>Využitie miestnosti</label><select id="spkRoom"><option value="1">Obývačka / bežná izba</option><option value="0.95">Spálňa</option><option value="1.08">Kancelária</option><option value="1.15">Kuchyňa</option><option value="1.12">Obchod / prevádzka</option><option value="1.22">Podkrovie</option></select></div>
          <button class="spk-btn" type="submit">Odporučiť klimatizáciu</button>
        </form>
        <div class="spk-summary">
          <div class="spk-kW" id="spkSumKw">3,5 kW</div><div class="spk-kW-label">odporúčaná výkonová trieda</div>
          <div class="spk-mini">
            <div><span>Vypočítaná potreba</span><strong id="spkNeed">–</strong></div>
            <div><span>Orientačný el. príkon</span><strong id="spkInput">–</strong></div>
            <div><span>Plocha</span><strong id="spkSumArea">–</strong></div>
            <div><span>Orientácia</span><strong id="spkSumOrient">–</strong></div>
            <div><span>Využitie</span><strong id="spkSumRoom">–</strong></div>
          </div>
          <button class="spk-edit" type="button" id="spkEdit">Upraviť údaje</button>
        </div>
        <div class="spk-note">Výsledok je orientačný. Pri veľkom presklení, otvorenom schodisku alebo viacerých miestnostiach odporúčame obhliadku.</div>
      </aside>
      <section class="spk-right">
        <div class="spk-promo">
          <div><h2>Vyberieme výkon aj konkrétny model.</h2><p>Po výpočte zobrazíme tri vhodné klimatizácie priamo z ponuky Spektra Shop.</p><div class="spk-tags"><span>2,5 kW</span><span>3,5 kW</span><span>5,0 kW</span><span>7,0 kW</span></div></div>
          <img src="https://www.spektrashop.sk/user/shop/orig/1386_g1bbf28dmg05elodyelyhl86k0axoxufguilgzwtwk-2.png?6a5e22b5" alt="Klimatizácia">
        </div>
        <div class="spk-results">
          <div class="spk-results-head"><h2>Vybrali sme vhodné klimatizácie</h2><p id="spkResultText"></p></div>
          <div class="spk-products" id="spkProducts"></div>
          <div class="spk-foot"><span>Ceny sú s DPH. Štandardná montáž do 3 m je kalkulovaná od 369 €.</span><a href="/klimatizacie/">Zobraziť všetky klimatizácie →</a></div>
        </div>
      </section>
    </div>
    <div class="spk-modal" id="spkModal"><div class="spk-modal-card"><div class="spk-modal-head"><h3>Štandardná montáž klimatizácie do 3 m</h3><button class="spk-close" type="button" id="spkClose">×</button></div><div class="spk-modal-body"><ul><li>montáž jednej vnútornej a jednej vonkajšej jednotky,</li><li>prepojovacie medené potrubie do 3 m,</li><li>elektrické a komunikačné prepojenie,</li><li>odvod kondenzátu samospádom do 3 m,</li><li>jeden prestup cez bežné murivo,</li><li>konzola alebo silentbloky,</li><li>vákuovanie, kontrola tesnosti, spustenie a zaškolenie.</li></ul><div class="spk-warning">Dlhšia trasa, železobetón, práca vo výške, čerpadlo kondenzátu, samostatný elektrický prívod a stavebné práce sa naceňujú osobitne.</div></div></div></div>
  </div>`;

  var $=function(s){return root.querySelector(s)};
  function euro(v){return new Intl.NumberFormat('sk-SK',{style:'currency',currency:'EUR',minimumFractionDigits:v%1===0?0:2,maximumFractionDigits:2}).format(v)}
  function one(v){return Number(v).toLocaleString('sk-SK',{minimumFractionDigits:1,maximumFractionDigits:1})}
  function calc(){
    var area=+$('#spkArea').value,people=+$('#spkPeople').value,orient=+$('#spkOrientation').value,room=+$('#spkRoom').value;
    var watts=(area*55*orient*room)+(Math.max(0,people-1)*100);watts*=1.12;
    var need=watts/1000,nominal=2.5,multi=false;
    if(need<=2.2)nominal=2.5;else if(need<=3.15)nominal=3.5;else if(need<=4.55)nominal=5;else if(need<=6.3)nominal=7;else{nominal=7;multi=true}
    return{area:area,people:people,orient:orient,room:room,need:need,nominal:nominal,multi:multi};
  }
  function render(r){
    var key=r.nominal.toFixed(1),list=PRODUCTS[key]||PRODUCTS['7.0'];
    $('#spkProducts').innerHTML=list.map(function(p){return `<article class="spk-card ${p.recommended?'tip':''}"><span class="spk-badge">${p.badge}</span><div class="spk-img"><img src="${p.img}" alt="${p.name}" loading="lazy"></div><div class="spk-body"><div class="spk-brand">${p.brand}</div><h3>${p.name}</h3><ul class="spk-feat">${p.features.map(function(f){return '<li>'+f+'</li>'}).join('')}</ul><div class="spk-price">${euro(p.price)}</div><div class="spk-price-note">cena zariadenia s DPH</div><div class="spk-complete">S montážou do 3 m od <strong>${euro(p.price+MOUNT)}</strong></div><a class="spk-link" href="${p.url}">Pozrieť produkt</a><button class="spk-mount" type="button" data-mount>Čo obsahuje montáž?</button></div></article>`}).join('');
  }
  $('#spkForm').addEventListener('submit',function(e){
    e.preventDefault();var r=calc(),key=r.nominal.toFixed(1);
    $('#spkSumKw').textContent=one(r.nominal)+' kW';$('#spkNeed').textContent=one(r.need)+' kW';$('#spkInput').textContent=one(INPUT[key])+' kW';$('#spkSumArea').textContent=r.area+' m²';$('#spkSumOrient').textContent=ORIENT_LABEL[String(r.orient)];$('#spkSumRoom').textContent=$('#spkRoom').options[$('#spkRoom').selectedIndex].text;
    $('#spkResultText').textContent=r.multi?'Výpočet presahuje bežný rozsah jednej nástennej jednotky. Zobrazujeme 7 kW modely, ale odporúčame technickú obhliadku.':'Vypočítaná chladiaca potreba je približne '+one(r.need)+' kW. Pre tento priestor odporúčame výkonovú triedu '+one(r.nominal)+' kW.';
    render(r);$('#spkApp').classList.add('has-result');
  });
  $('#spkEdit').addEventListener('click',function(){$('#spkApp').classList.remove('has-result')});
  root.addEventListener('click',function(e){if(e.target.closest('[data-mount]'))$('#spkModal').classList.add('open');if(e.target.id==='spkClose'||e.target===$('#spkModal'))$('#spkModal').classList.remove('open')});
})();