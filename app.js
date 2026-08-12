(function(){
var root=document.getElementById('spk-app-root');
if(!root||root.dataset.ready==='1')return;
root.dataset.ready='1';
var css="\n:root{\n  --red:#cf0000;\n  --dark:#17212b;\n  --teal:#c20000;\n  --teal2:#ef6a6a;\n  --bg:#f4f5f6;\n  --line:#e3e6e8;\n  --muted:#6d767d;\n  --white:#fff;\n  --shadow:0 12px 34px rgba(23,33,43,.10);\n}\n#spk-app-root,#spk-app-root *{box-sizing:border-box}\n#spk-app-root{margin:0;background:transparent;color:var(--dark);font-family:Arial,Helvetica,sans-serif}\n#spk-app-root button,#spk-app-root input,#spk-app-root select{font:inherit}\n#spk-app-root a{text-decoration:none}\n.sp-app{max-width:1180px;margin:0 auto;padding:10px}\n.sp-shell{\n  display:grid;\n  grid-template-columns:420px minmax(0,1fr);\n  gap:0;\n  min-height:430px;\n  overflow:hidden;\n  background:#fff;\n  border:1px solid var(--line);\n  border-radius:22px;\n  box-shadow:var(--shadow);\n  transition:min-height .35s ease;\n}\n.sp-shell.has-result{\n  grid-template-columns:300px minmax(0,1fr);\n  min-height:620px;\n}\n.sp-left{\n  position:relative;\n  z-index:2;\n  padding:28px;\n  background:#fff;\n  border-right:1px solid var(--line);\n}\n.sp-eyebrow{\n  color:var(--red);\n  font-size:12px;\n  font-weight:800;\n  letter-spacing:.09em;\n  text-transform:uppercase;\n}\n.sp-left h1{\n  margin:8px 0 8px;\n  font-size:28px;\n  line-height:1.08;\n}\n.sp-intro{\n  margin:0 0 20px;\n  color:var(--muted);\n  font-size:14px;\n  line-height:1.5;\n}\n.sp-form{display:grid;gap:13px}\n.sp-field label{\n  display:block;\n  margin-bottom:6px;\n  font-size:14px;\n  font-weight:800;\n}\n.sp-field input,.sp-field select{\n  width:100%;\n  min-height:47px;\n  padding:10px 12px;\n  border:1px solid #ccd2d6;\n  border-radius:9px;\n  background:#fff;\n  color:#15191c;\n}\n.sp-field input:focus,.sp-field select:focus{\n  outline:0;\n  border-color:var(--teal);\n  box-shadow:0 0 0 3px rgba(194,0,0,.10);\n}\n.sp-calc-btn{\n  width:100%;\n  min-height:50px;\n  margin-top:4px;\n  border:0;\n  border-radius:10px;\n  background:var(--red);\n  color:#fff;\n  font-weight:800;\n  cursor:pointer;\n}\n.sp-calc-btn:hover{filter:brightness(.95)}\n.sp-note{\n  margin-top:11px;\n  color:#80878c;\n  font-size:11px;\n  line-height:1.4;\n}\n.sp-summary{display:none}\n.has-result .sp-form,\n.has-result .sp-intro{display:none}\n.has-result .sp-summary{display:block}\n.sp-result-number{\n  margin:15px 0 5px;\n  color:var(--teal);\n  font-size:42px;\n  font-weight:900;\n  line-height:1;\n}\n.sp-result-label{\n  color:var(--muted);\n  font-size:13px;\n  line-height:1.45;\n}\n.sp-mini{\n  display:grid;\n  gap:8px;\n  margin-top:20px;\n  padding-top:16px;\n  border-top:1px solid var(--line);\n}\n.sp-mini-row{\n  display:flex;\n  justify-content:space-between;\n  gap:12px;\n  font-size:13px;\n}\n.sp-mini-row span{color:var(--muted)}\n.sp-mini-row strong{text-align:right}\n.sp-edit{\n  width:100%;\n  margin-top:18px;\n  padding:10px 12px;\n  border:1px solid #cfd5d8;\n  border-radius:9px;\n  background:#fff;\n  color:var(--dark);\n  font-weight:800;\n  cursor:pointer;\n}\n\n/* pravá bannerová časť */\n.sp-right{\n  position:relative;\n  overflow:hidden;\n  min-width:0;\n  background:linear-gradient(135deg,#8f0000 0%,#c20000 48%,#ef6a6a 100%);\n  color:#fff;\n}\n.sp-promo{\n  position:absolute;\n  inset:0;\n  display:grid;\n  grid-template-columns:1fr 46%;\n  align-items:center;\n  gap:18px;\n  padding:42px;\n  transition:opacity .25s ease,transform .25s ease;\n}\n.has-result .sp-promo{\n  opacity:0;\n  pointer-events:none;\n  transform:translateY(-8px);\n}\n.sp-promo:before,.sp-promo:after{\n  content:\"\";\n  position:absolute;\n  border-radius:50%;\n  background:rgba(255,255,255,.08);\n}\n.sp-promo:before{width:360px;height:360px;right:-100px;top:-150px}\n.sp-promo:after{width:220px;height:220px;left:-80px;bottom:-100px}\n.sp-promo-copy{position:relative;z-index:1}\n.sp-promo-copy h2{\n  margin:0 0 12px;\n  max-width:520px;\n  font-size:clamp(30px,4vw,52px);\n  line-height:1.02;\n}\n.sp-promo-copy p{\n  max-width:520px;\n  margin:0;\n  color:rgba(255,255,255,.88);\n  font-size:16px;\n  line-height:1.55;\n}\n.sp-power-tags{\n  display:flex;\n  flex-wrap:wrap;\n  gap:8px;\n  margin-top:20px;\n}\n.sp-power-tags span{\n  padding:8px 11px;\n  border:1px solid rgba(255,255,255,.32);\n  border-radius:99px;\n  background:rgba(255,255,255,.10);\n  font-size:13px;\n  font-weight:800;\n}\n.sp-promo-img{\n  position:relative;\n  z-index:1;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n}\n.sp-promo-img img{\n  width:100%;\n  max-height:310px;\n  object-fit:contain;\n  filter:drop-shadow(0 20px 22px rgba(0,0,0,.22));\n}\n\n/* výsledok po zväčšení bannera */\n.sp-results{\n  position:absolute;\n  inset:0;\n  overflow:auto;\n  padding:26px;\n  opacity:0;\n  pointer-events:none;\n  transform:translateY(10px);\n  transition:opacity .28s ease,transform .28s ease;\n}\n.has-result .sp-results{\n  opacity:1;\n  pointer-events:auto;\n  transform:none;\n}\n.sp-results-head{\n  display:flex;\n  align-items:flex-end;\n  justify-content:space-between;\n  gap:18px;\n  margin-bottom:17px;\n}\n.sp-results-head h2{\n  margin:0 0 5px;\n  font-size:24px;\n}\n.sp-results-head p{\n  margin:0;\n  color:rgba(255,255,255,.82);\n  font-size:13px;\n  line-height:1.45;\n}\n.sp-needed{\n  flex:0 0 auto;\n  text-align:right;\n}\n.sp-needed strong{\n  display:block;\n  font-size:30px;\n}\n.sp-needed span{\n  font-size:12px;\n  color:rgba(255,255,255,.78);\n}\n.sp-product-grid{\n  display:grid;\n  grid-template-columns:repeat(3,minmax(0,1fr));\n  gap:12px;\n}\n.sp-product{\n  position:relative;\n  display:flex;\n  flex-direction:column;\n  min-width:0;\n  min-height:430px;\n  overflow:hidden;\n  background:#fff;\n  color:var(--dark);\n  border-radius:15px;\n  box-shadow:0 8px 26px rgba(0,0,0,.14);\n}\n.sp-product.recommended{\n  outline:3px solid #ffdc66;\n}\n.sp-badge{\n  position:absolute;\n  top:11px;\n  left:11px;\n  z-index:2;\n  padding:6px 9px;\n  border-radius:999px;\n  background:#17212b;\n  color:#fff;\n  font-size:10px;\n  font-weight:800;\n}\n.sp-product.recommended .sp-badge{\n  background:#e6a900;\n}\n.sp-product-img{\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  height:170px;\n  padding:18px;\n  background:#fff;\n  border-bottom:1px solid #edf0f1;\n}\n.sp-product-img img{\n  max-width:100%;\n  max-height:138px;\n  object-fit:contain;\n}\n.sp-product-body{\n  display:flex;\n  flex-direction:column;\n  flex:1;\n  padding:15px;\n}\n.sp-brand{\n  color:var(--teal);\n  font-size:11px;\n  font-weight:900;\n  text-transform:uppercase;\n  letter-spacing:.05em;\n}\n.sp-product h3{\n  margin:6px 0 7px;\n  font-size:15px;\n  line-height:1.3;\n}\n.sp-features{\n  margin:0 0 12px;\n  padding-left:17px;\n  color:#606970;\n  font-size:12px;\n  line-height:1.45;\n}\n.sp-price{\n  margin-top:auto;\n  font-size:22px;\n  font-weight:900;\n}\n.sp-price-note{\n  margin-top:2px;\n  color:#777f84;\n  font-size:11px;\n}\n.sp-complete{\n  margin-top:8px;\n  padding:8px 9px;\n  border-radius:8px;\n  background:#fff4f4;\n  color:#34434a;\n  font-size:12px;\n}\n.sp-complete strong{color:var(--teal)}\n.sp-actions{\n  display:grid;\n  grid-template-columns:1fr;\n  gap:7px;\n  margin-top:10px;\n}\n.sp-link{\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  min-height:40px;\n  padding:8px 10px;\n  border-radius:8px;\n  background:var(--red);\n  color:#fff;\n  font-size:12px;\n  font-weight:800;\n}\n.sp-mount-link{\n  border:0;\n  background:transparent;\n  color:var(--red);\n  font-size:11px;\n  font-weight:800;\n  text-decoration:underline;\n  cursor:pointer;\n}\n.sp-result-foot{\n  display:flex;\n  justify-content:space-between;\n  gap:14px;\n  margin-top:14px;\n  color:rgba(255,255,255,.82);\n  font-size:11px;\n  line-height:1.4;\n}\n.sp-result-foot a{color:#fff;font-weight:800;text-decoration:underline}\n\n/* modal montáže */\n.sp-modal{\n  position:fixed;inset:0;z-index:10000;display:none;\n  align-items:center;justify-content:center;padding:16px;\n  background:rgba(8,14,18,.68)\n}\n.sp-modal.open{display:flex}\n.sp-modal-card{\n  width:min(600px,100%);\n  max-height:88vh;\n  overflow:auto;\n  background:#fff;\n  border-radius:16px;\n  box-shadow:0 24px 70px rgba(0,0,0,.30)\n}\n.sp-modal-head{\n  display:flex;justify-content:space-between;align-items:center;gap:15px;\n  padding:18px 20px;border-bottom:1px solid var(--line)\n}\n.sp-modal-head h3{margin:0;font-size:20px}\n.sp-close{\n  width:38px;height:38px;border:0;border-radius:50%;background:#eef1f2;\n  font-size:23px;cursor:pointer\n}\n.sp-modal-body{padding:20px}\n.sp-modal-price{\n  padding:13px 15px;margin-bottom:15px;border-radius:10px;\n  background:#fff2f2;font-weight:800\n}\n.sp-modal-price strong{float:right;color:var(--teal);font-size:20px}\n.sp-modal-body ul{padding-left:20px;line-height:1.7;color:#48545b}\n.sp-warning{\n  padding:12px 13px;border-left:4px solid #e3a314;\n  background:#fff8e6;font-size:12px;line-height:1.5\n}\n\n@media(max-width:900px){\n  .sp-shell,.sp-shell.has-result{grid-template-columns:1fr;min-height:0}\n  .sp-left{border-right:0;border-bottom:1px solid var(--line)}\n  .sp-right{min-height:420px}\n  .sp-shell.has-result .sp-right{min-height:1150px}\n  .sp-promo{grid-template-columns:1fr 38%;padding:28px}\n  .sp-product-grid{grid-template-columns:1fr}\n  .sp-product{min-height:360px}\n  .sp-product-img{height:140px}\n}\n@media(max-width:600px){\n  .sp-app{padding:4px}\n  .sp-shell{border-radius:14px}\n  .sp-left{padding:20px}\n  .sp-left h1{font-size:24px}\n  .sp-promo{grid-template-columns:1fr;padding:24px}\n  .sp-promo-img{display:none}\n  .sp-right{min-height:330px}\n  .sp-shell.has-result .sp-right{min-height:1240px}\n  .sp-results{padding:18px}\n  .sp-results-head{align-items:flex-start;flex-direction:column}\n  .sp-needed{text-align:left}\n  .sp-result-foot{flex-direction:column}\n}\n";
if(!document.getElementById('spk-github-style')){var st=document.createElement('style');st.id='spk-github-style';st.textContent=css;document.head.appendChild(st);}
root.innerHTML="<div class=\"sp-app\">\n  <section class=\"sp-shell\" id=\"spShell\">\n    <aside class=\"sp-left\">\n      <div class=\"sp-eyebrow\">Spektra Shop · výber klimatizácie</div>\n      <h1>Aký výkon klimatizácie potrebujete?</h1>\n      <p class=\"sp-intro\">Stačia 4 údaje. Výšku stropu počítame interne ako 2,6 m.</p>\n\n      <form class=\"sp-form\" id=\"spForm\">\n        <div class=\"sp-field\">\n          <label for=\"area\">Plocha miestnosti</label>\n          <input id=\"area\" type=\"number\" min=\"5\" max=\"250\" step=\"1\" value=\"28\" required>\n        </div>\n        <div class=\"sp-field\">\n          <label for=\"orientation\">Orientácia miestnosti</label>\n          <select id=\"orientation\">\n            <option value=\"0.92\">Sever</option>\n            <option value=\"1.00\" selected>Východ</option>\n            <option value=\"1.08\">Západ</option>\n            <option value=\"1.18\">Juh</option>\n          </select>\n        </div>\n        <div class=\"sp-field\">\n          <label for=\"people\">Počet osôb v miestnosti</label>\n          <input id=\"people\" type=\"number\" min=\"1\" max=\"30\" value=\"3\" required>\n        </div>\n        <div class=\"sp-field\">\n          <label for=\"room\">Využitie miestnosti</label>\n          <select id=\"room\">\n            <option value=\"1\">Obývačka / bežná izba</option>\n            <option value=\"0.95\">Spálňa</option>\n            <option value=\"1.08\">Kancelária</option>\n            <option value=\"1.15\">Kuchyňa</option>\n            <option value=\"1.12\">Obchod / prevádzka</option>\n            <option value=\"1.22\">Podkrovie</option>\n          </select>\n        </div>\n        <button class=\"sp-calc-btn\" type=\"submit\">Odporučiť klimatizáciu</button>\n      </form>\n\n      <div class=\"sp-summary\" id=\"spSummary\">\n        <div class=\"sp-result-number\" id=\"sumKw\">3,5 kW</div>\n        <div class=\"sp-result-label\">odporúčaná výkonová trieda</div>\n        <div class=\"sp-mini\">\n          <div class=\"sp-mini-row\"><span>Vypočítaná potreba</span><strong id=\"sumNeed\">2,8 kW</strong></div>\n          <div class=\"sp-mini-row\"><span>Orientačný el. príkon</span><strong id=\"sumInput\">1,0 kW</strong></div>\n          <div class=\"sp-mini-row\"><span>Plocha</span><strong id=\"sumArea\">28 m²</strong></div>\n          <div class=\"sp-mini-row\"><span>Orientácia</span><strong id=\"sumOrientation\">Východ</strong></div>\n          <div class=\"sp-mini-row\"><span>Využitie</span><strong id=\"sumRoom\">Obývačka</strong></div>\n        </div>\n        <button class=\"sp-edit\" id=\"editBtn\" type=\"button\">Upraviť údaje</button>\n      </div>\n\n      <div class=\"sp-note\">Výsledok je orientačný. Pri veľkom presklení, otvorenom schodisku alebo viacerých miestnostiach odporúčame obhliadku.</div>\n    </aside>\n\n    <div class=\"sp-right\">\n      <div class=\"sp-promo\">\n        <div class=\"sp-promo-copy\">\n          <h2>Vyberieme výkon aj konkrétny model.</h2>\n          <p>Po výpočte sa tento banner rozšíri a zobrazí klimatizácie priamo z ponuky Spektra Shop.</p>\n          <div class=\"sp-power-tags\">\n            <span>2,5 kW</span><span>3,5 kW</span><span>5,0 kW</span><span>7,0 kW</span>\n          </div>\n        </div>\n        <div class=\"sp-promo-img\">\n          <img src=\"https://www.spektrashop.sk/user/shop/orig/1386_g1bbf28dmg05elodyelyhl86k0axoxufguilgzwtwk-2.png?6a5e22b5\" alt=\"Nástenná klimatizácia\">\n        </div>\n      </div>\n\n      <div class=\"sp-results\" id=\"spResults\">\n        <div class=\"sp-results-head\">\n          <div>\n            <h2>Vybrali sme vhodné klimatizácie</h2>\n            <p id=\"resultText\">Pre zadanú miestnosť odporúčame výkonovú triedu 3,5 kW.</p>\n          </div>\n          <div class=\"sp-needed\">\n            <strong id=\"resultKw\">3,5 kW</strong>\n            <span>odporúčaný výkon</span>\n          </div>\n        </div>\n        <div class=\"sp-product-grid\" id=\"productGrid\"></div>\n        <div class=\"sp-result-foot\">\n          <span>Ceny produktov sú uvedené s DPH. Štandardná montáž do 3 m je kalkulovaná od 369 € s DPH.</span>\n          <a href=\"https://www.spektrashop.sk/klimatizacie/\" target=\"_top\">Zobraziť všetky klimatizácie →</a>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n\n<div class=\"sp-modal\" id=\"mountModal\" aria-hidden=\"true\">\n  <div class=\"sp-modal-card\">\n    <div class=\"sp-modal-head\">\n      <h3>Štandardná montáž klimatizácie do 3 m</h3>\n      <button class=\"sp-close\" id=\"closeModal\" type=\"button\">×</button>\n    </div>\n    <div class=\"sp-modal-body\">\n      <div class=\"sp-modal-price\">Cena s DPH <strong>369 €</strong></div>\n      <ul>\n        <li>montáž jednej vnútornej a jednej vonkajšej jednotky,</li>\n        <li>prepojovacie medené potrubie do 3 m,</li>\n        <li>elektrické a komunikačné prepojenie jednotiek,</li>\n        <li>odvod kondenzátu samospádom do 3 m,</li>\n        <li>jeden prestup cez bežné murivo,</li>\n        <li>konzola alebo silentbloky podľa podmienok,</li>\n        <li>vákuovanie, kontrola tesnosti, spustenie a zaškolenie.</li>\n      </ul>\n      <div class=\"sp-warning\">Dlhšia trasa, železobetón, práca vo výške, čerpadlo kondenzátu, samostatný elektrický prívod alebo ďalšie stavebné práce sa naceňujú osobitne.</div>\n    </div>\n  </div>\n</div>";

(function(){
const MOUNT=369;
const INPUT={"2.5":0.7,"3.5":1.0,"5.0":1.5,"7.0":2.1};
const ORIENTATION={"0.92":"Sever","1":"Východ","1.08":"Západ","1.18":"Juh"};

const PRODUCTS={
"2.5":[
 {badge:"Odporúčame Spektra",recommended:true,brand:"Hyundai",name:"Hyundai REVOLUTION 09 · 2,5 kW",price:659,img:"https://www.spektrashop.sk/user/shop/orig/1380_g1bbf28dmg05elodyelyhl86k0axoxufguilgzwtwk-3.png?6a5e22b5",url:"https://www.spektrashop.sk/klimatizacia-hyundai-split-nastenna-revolution-09-r32-230v-2-5kw-2/",features:["Wi‑Fi zabudované","Ionizátor","Chladenie 2,6 kW"]},
 {badge:"Komfortná voľba",brand:"Samsung",name:"Samsung AR35 WIFI · 2,5 kW",price:746.30,img:"https://www.spektrashop.sk/user/shop/orig/1587_0jj5fq2nfxbdlfdgkfnrcxbcdvaubkxwzwxs7prdasw.png?6a5e22b7",url:"https://www.spektrashop.sk/klimatizacia-samsung-split-nastenna-ar35-wifi-ar40h09-r32-230v-2-5kw/",features:["Wi‑Fi zabudované","R32","Chladenie 2,6 kW"]},
 {badge:"Prémiová voľba",brand:"Mitsubishi Electric",name:"Mitsubishi MSZ‑HR · 2,5 kW",price:949,img:"https://www.spektrashop.sk/user/shop/orig/2937_mitsubishi-nastenna-kompaktna-klimatizacia-msz-hr--2.jpg?6a6adf6f",url:"https://www.spektrashop.sk/mitsubishi-electric-msz-hr-2-5-kw/",features:["Kompaktné prevedenie","Energetická trieda A++","R32"]}
],
"3.5":[
 {badge:"Odporúčame Spektra",recommended:true,brand:"Hyundai",name:"Hyundai REVOLUTION 12 · 3,5 kW",price:679,img:"https://www.spektrashop.sk/user/shop/orig/1386_g1bbf28dmg05elodyelyhl86k0axoxufguilgzwtwk-2.png?6a5e22b5",url:"https://www.spektrashop.sk/klimatizacia-hyundai-split-nastenna-revolution-12-r32-230v-3-5kw-2/",features:["Wi‑Fi zabudované","Ionizátor","Chladenie 3,5 kW"]},
 {badge:"Komfortná voľba",brand:"Samsung",name:"Samsung AR35 WIFI · 3,5 kW",price:827.48,img:"https://www.spektrashop.sk/user/shop/orig/1614_0jj5fq2nfxbdlfdgkfnrcxbcdvaubkxwzwxs7prdasw.png?6a5e22b7",url:"https://www.spektrashop.sk/klimatizacia-samsung-split-nastenna-ar35-wifi-ar40h12-r32-230v-3-5kw/",features:["Wi‑Fi zabudované","R32","Chladenie 3,5 kW"]},
 {badge:"Prémiová voľba",brand:"Mitsubishi Electric",name:"Mitsubishi MSZ‑HR · 3,5 kW",price:1099,img:"https://www.spektrashop.sk/user/shop/orig/2934_mitsubishi-nastenna-kompaktna-klimatizacia-msz-hr--2.jpg?6a6adf6f",url:"https://www.spektrashop.sk/mitsubishi-electric-msz-hr-3-5-kw/",features:["Kompaktné prevedenie","Energetická trieda A++","R32"]}
],
"5.0":[
 {badge:"Odporúčame Spektra",recommended:true,brand:"Hyundai",name:"Hyundai REVOLUTION 18 · 5 kW",price:1069,img:"https://www.spektrashop.sk/user/shop/orig/1413_g1bbf28dmg05elodyelyhl86k0axoxufguilgzwtwk-4.png?6a5e22b5",url:"https://www.spektrashop.sk/klimatizacia-hyundai-split-nastenna-revolution-18-r32-230v-5kw-2/",features:["Wi‑Fi zabudované","Chladenie 5,3 kW","Vykurovanie 5,6 kW"]},
 {badge:"Prémiová voľba",brand:"Mitsubishi Electric",name:"Mitsubishi MSZ‑HR · 5,0 kW",price:1399,img:"https://www.spektrashop.sk/user/shop/orig/2931_mitsubishi-nastenna-kompaktna-klimatizacia-msz-hr--2.jpg?6a6adf6f",url:"https://www.spektrashop.sk/mitsubishi-electric-msz-hr-5-0-kw/",features:["Kompaktné prevedenie","Energetická trieda A++","R32"]},
 {badge:"Komfortná voľba",brand:"Samsung",name:"Samsung AR35 WIFI · 5 kW",price:1455.70,img:"https://www.spektrashop.sk/user/shop/orig/1716_0jj5fq2nfxbdlfdgkfnrcxbcdvaubkxwzwxs7prdasw.png?6a5e22b8",url:"https://www.spektrashop.sk/klimatizacia-samsung-split-nastenna-ar35-wifi-ar40h18-r32-230v-5kw/",features:["Wi‑Fi zabudované","Chladenie 5,3 kW","R32"]}
],
"7.0":[
 {badge:"Odporúčame Spektra",recommended:true,brand:"Hyundai",name:"Hyundai REVOLUTION 24 · 7 kW",price:1459,img:"https://www.spektrashop.sk/user/shop/orig/1440_g1bbf28dmg05elodyelyhl86k0axoxufguilgzwtwk.png?6a5e22b5",url:"https://www.spektrashop.sk/klimatizacia-hyundai-split-nastenna-revolution-24-r32-230v-7kw/",features:["Wi‑Fi zabudované","Chladenie 7,0 kW","Vykurovanie 7,3 kW"]},
 {badge:"Dizajnová voľba",brand:"Hyundai",name:"Hyundai CARBON GREY 24 · 7 kW",price:1729,img:"https://www.spektrashop.sk/user/shop/orig/1464_9tffxq-xfh15m89ypecga3qyroy20di4-mmtnaeco14-2.jpg?6a5e22b6",url:"https://www.spektrashop.sk/klimatizacia-hyundai-split-nastenna-carbon-grey-24-r32-230v-7kw/",features:["Sivý dizajn","Wi‑Fi zabudované","Chladenie 7,0 kW"]},
 {badge:"Komfortná voľba",brand:"Samsung",name:"Samsung AR35 WIFI · 7 kW",price:1752.75,img:"https://www.spektrashop.sk/user/shop/orig/1773_0jj5fq2nfxbdlfdgkfnrcxbcdvaubkxwzwxs7prdasw-1.png?6a5e22b9",url:"https://www.spektrashop.sk/klimatizacia-samsung-split-nastenna-ar35-wifi-ar40h24-r32-230v-7kw/",features:["Wi‑Fi zabudované","Chladenie 7,0 kW","R32"]}
]
};

const $=s=>document.querySelector(s);
const shell=$("#spShell"), form=$("#spForm"), grid=$("#productGrid");
const modal=$("#mountModal");

function euro(v){
 return new Intl.NumberFormat("sk-SK",{style:"currency",currency:"EUR",minimumFractionDigits:0,maximumFractionDigits:2}).format(v);
}
function one(v){return Number(v).toLocaleString("sk-SK",{minimumFractionDigits:1,maximumFractionDigits:1})}

function calc(){
 const area=+$("#area").value, people=+$("#people").value;
 const orient=+$("#orientation").value, room=+$("#room").value;
 let watts=(area*55*orient*room)+(Math.max(0,people-1)*100);
 watts*=1.12;
 const need=watts/1000;
 let nominal=2.5, multi=false;
 if(need<=2.20) nominal=2.5;
 else if(need<=3.15) nominal=3.5;
 else if(need<=4.55) nominal=5.0;
 else if(need<=6.30) nominal=7.0;
 else {nominal=7.0;multi=true}
 return {area,people,orient,room,need,nominal,multi};
}

function renderProducts(r){
 const key=r.nominal.toFixed(1);
 grid.innerHTML=PRODUCTS[key].map(p=>`
 <article class="sp-product ${p.recommended?"recommended":""}">
   <span class="sp-badge">${p.badge}</span>
   <div class="sp-product-img"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
   <div class="sp-product-body">
     <div class="sp-brand">${p.brand}</div>
     <h3>${p.name}</h3>
     <ul class="sp-features">${p.features.map(x=>`<li>${x}</li>`).join("")}</ul>
     <div class="sp-price">${euro(p.price)}</div>
     <div class="sp-price-note">cena zariadenia s DPH</div>
     <div class="sp-complete">S montážou do 3 m od <strong>${euro(p.price+MOUNT)}</strong></div>
     <div class="sp-actions">
       <a class="sp-link" href="${p.url}" target="_top">Pozrieť produkt</a>
       <button type="button" class="sp-mount-link" data-mount>Čo obsahuje montáž?</button>
     </div>
   </div>
 </article>`).join("");
}

form.addEventListener("submit",e=>{
 e.preventDefault();
 const area=+$("#area").value, people=+$("#people").value;
 if(area<5||area>250||people<1||people>30) return;
 const r=calc(), key=r.nominal.toFixed(1);
 $("#sumKw").textContent=one(r.nominal)+" kW";
 $("#sumNeed").textContent=one(r.need)+" kW";
 $("#sumInput").textContent=one(INPUT[key])+" kW";
 $("#sumArea").textContent=r.area+" m²";
 $("#sumOrientation").textContent=ORIENTATION[String(r.orient)];
 $("#sumRoom").textContent=$("#room").options[$("#room").selectedIndex].text;
 $("#resultKw").textContent=one(r.nominal)+" kW";
 $("#resultText").textContent=r.multi
   ?"Výpočet presahuje bežný rozsah jednej nástennej jednotky. Zobrazujeme 7 kW modely, ale odporúčame technickú obhliadku."
   :"Vypočítaná chladiaca potreba je približne "+one(r.need)+" kW. Pre tento priestor odporúčame výkonovú triedu "+one(r.nominal)+" kW.";
 renderProducts(r);
 shell.classList.add("has-result");
 shell.scrollIntoView({behavior:"smooth",block:"start"});
});

$("#editBtn").addEventListener("click",()=>{
 shell.classList.remove("has-result");
 setTimeout(()=>$("#area").focus(),250);
});

document.addEventListener("click",e=>{
 if(e.target.closest("[data-mount]")){
   modal.classList.add("open");
   modal.setAttribute("aria-hidden","false");
 }
 if(e.target===modal||e.target.id==="closeModal"){
   modal.classList.remove("open");
   modal.setAttribute("aria-hidden","true");
 }
});
document.addEventListener("keydown",e=>{
 if(e.key==="Escape"){
   modal.classList.remove("open");
   modal.setAttribute("aria-hidden","true");
 }
});
})();

})();
