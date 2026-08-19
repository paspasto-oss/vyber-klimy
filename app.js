(function(){

/* =========================================================
   ZÁKLAD
========================================================= */

var root=
    document.getElementById('spk-app-root');

if(!root){
    return;
}

root.innerHTML='';
root.dataset.ready='1';


var SHOP=
    'https://www.spektrashop.sk';

var RED=
    '#c20000';

var LIGHT=
    '#ef6767';

var DARK=
    '#18212b';

var MOUNT=
    369;



/* =========================================================
   ORIENTAČNÝ ELEKTRICKÝ PRÍKON
========================================================= */

var INPUT={

    '2.5':0.7,

    '3.5':1.0,

    '5.0':1.5,

    '7.0':2.1

};



/* =========================================================
   ORIENTÁCIA
========================================================= */

var ORIENT={

    sever:[
        'Sever',
        0.92
    ],

    vychod:[
        'Východ',
        1.00
    ],

    zapad:[
        'Západ',
        1.08
    ],

    juh:[
        'Juh',
        1.18
    ]

};



/* =========================================================
   VYUŽITIE KLIMATIZÁCIE
========================================================= */

var USE={

    chladenie:[
        'Najmä chladenie',
        1.00
    ],

    oboje:[
        'Chladenie + kúrenie',
        1.08
    ],

    kurenie:[
        'Najmä kúrenie',
        1.15
    ]

};



/* =========================================================
   PRODUKTY

   zatiaľ ponechané existujúce produkty.
   Neskôr sem môžeme vložiť MDV + Midea.
========================================================= */

var PRODUCTS={


/* ---------------------------------------------------------
   2,5 kW
--------------------------------------------------------- */

'2.5':[

{
    tag:'Odporúčame Spektra',

    kind:'tip',

    brand:'HYUNDAI',

    name:
        'Hyundai REVOLUTION 09 · 2,5 kW',

    price:
        659,

    img:
        SHOP+
        '/user/shop/orig/1380_g1bbf28dmg05elodyelyhl86k0axoxufguilgzwtwk-3.png?6a5e22b5',

    url:
        '/klimatizacia-hyundai-split-nastenna-revolution-09-r32-230v-2-5kw-2/',

    features:[

        'Wi-Fi zabudované',

        'Ionizátor',

        'Chladenie 2,6 kW'

    ]
},


{
    tag:'Komfortná voľba',

    kind:'comfort',

    brand:'SAMSUNG',

    name:
        'Samsung AR35 WIFI · 2,5 kW',

    price:
        746.30,

    img:
        SHOP+
        '/user/shop/orig/1587_0jj5fq2nfxbdlfdgkfnrcxbcdvaubkxwzwxs7prdasw.png?6a5e22b7',

    url:
        '/klimatizacia-samsung-split-nastenna-ar35-wifi-ar40h09-r32-230v-2-5kw/',

    features:[

        'Wi-Fi zabudované',

        'R32',

        'Chladenie 2,6 kW'

    ]
},


{
    tag:'Prémiová voľba',

    kind:'premium',

    brand:'MITSUBISHI ELECTRIC',

    name:
        'Mitsubishi MSZ-HR · 2,5 kW',

    price:
        949,

    img:
        SHOP+
        '/user/shop/orig/2937_mitsubishi-nastenna-kompaktna-klimatizacia-msz-hr--2.jpg?6a6adf6f',

    url:
        '/mitsubishi-electric-msz-hr-2-5-kw/',

    features:[

        'Kompaktné prevedenie',

        'Energetická trieda A++',

        'R32'

    ]
}

],



/* ---------------------------------------------------------
   3,5 kW
--------------------------------------------------------- */

'3.5':[

{
    tag:'Odporúčame Spektra',

    kind:'tip',

    brand:'HYUNDAI',

    name:
        'Hyundai REVOLUTION 12 · 3,5 kW',

    price:
        679,

    img:
        SHOP+
        '/user/shop/orig/1386_g1bbf28dmg05elodyelyhl86k0axoxufguilgzwtwk-2.png?6a5e22b5',

    url:
        '/klimatizacia-hyundai-split-nastenna-revolution-12-r32-230v-3-5kw-2/',

    features:[

        'Wi-Fi zabudované',

        'Ionizátor',

        'Chladenie 3,5 kW'

    ]
},


{
    tag:'Komfortná voľba',

    kind:'comfort',

    brand:'SAMSUNG',

    name:
        'Samsung AR35 WIFI · 3,5 kW',

    price:
        827.48,

    img:
        SHOP+
        '/user/shop/orig/1614_0jj5fq2nfxbdlfdgkfnrcxbcdvaubkxwzwxs7prdasw.png?6a5e22b7',

    url:
        '/klimatizacia-samsung-split-nastenna-ar35-wifi-ar40h12-r32-230v-3-5kw/',

    features:[

        'Wi-Fi zabudované',

        'R32',

        'Chladenie 3,5 kW'

    ]
},


{
    tag:'Prémiová voľba',

    kind:'premium',

    brand:'MITSUBISHI ELECTRIC',

    name:
        'Mitsubishi MSZ-HR · 3,5 kW',

    price:
        1099,

    img:
        SHOP+
        '/user/shop/orig/2934_mitsubishi-nastenna-kompaktna-klimatizacia-msz-hr--2.jpg?6a6adf6f',

    url:
        '/mitsubishi-electric-msz-hr-3-5-kw/',

    features:[

        'Kompaktné prevedenie',

        'Energetická trieda A++',

        'R32'

    ]
}

],



/* ---------------------------------------------------------
   5 kW
--------------------------------------------------------- */

'5.0':[

{
    tag:'Odporúčame Spektra',

    kind:'tip',

    brand:'HYUNDAI',

    name:
        'Hyundai REVOLUTION 18 · 5,0 kW',

    price:
        1069,

    img:
        SHOP+
        '/user/shop/orig/1413_g1bbf28dmg05elodyelyhl86k0axoxufguilgzwtwk-4.png?6a5e22b5',

    url:
        '/klimatizacia-hyundai-split-nastenna-revolution-18-r32-230v-5kw-2/',

    features:[

        'Wi-Fi zabudované',

        'Chladenie 5,3 kW',

        'Vykurovanie 5,6 kW'

    ]
},


{
    tag:'Komfortná voľba',

    kind:'comfort',

    brand:'SAMSUNG',

    name:
        'Samsung AR35 WIFI · 5,0 kW',

    price:
        1455.70,

    img:
        SHOP+
        '/user/shop/orig/1716_0jj5fq2nfxbdlfdgkfnrcxbcdvaubkxwzwxs7prdasw.png?6a5e22b8',

    url:
        '/klimatizacia-samsung-split-nastenna-ar35-wifi-ar40h18-r32-230v-5kw/',

    features:[

        'Wi-Fi zabudované',

        'Chladenie 5,3 kW',

        'R32'

    ]
},


{
    tag:'Prémiová voľba',

    kind:'premium',

    brand:'MITSUBISHI ELECTRIC',

    name:
        'Mitsubishi MSZ-HR · 5,0 kW',

    price:
        1399,

    img:
        SHOP+
        '/user/shop/orig/2931_mitsubishi-nastenna-kompaktna-klimatizacia-msz-hr--2.jpg?6a6adf6f',

    url:
        '/mitsubishi-electric-msz-hr-5-0-kw/',

    features:[

        'Kompaktné prevedenie',

        'Energetická trieda A++',

        'R32'

    ]
}

],



/* ---------------------------------------------------------
   7 kW
--------------------------------------------------------- */

'7.0':[

{
    tag:'Odporúčame Spektra',

    kind:'tip',

    brand:'HYUNDAI',

    name:
        'Hyundai REVOLUTION 24 · 7,0 kW',

    price:
        1459,

    img:
        SHOP+
        '/user/shop/orig/1440_g1bbf28dmg05elodyelyhl86k0axoxufguilgzwtwk.png?6a5e22b5',

    url:
        '/klimatizacia-hyundai-split-nastenna-revolution-24-r32-230v-7kw/',

    features:[

        'Wi-Fi zabudované',

        'Chladenie 7,0 kW',

        'Vykurovanie 7,3 kW'

    ]
},


{
    tag:'Dizajnová voľba',

    kind:'comfort',

    brand:'HYUNDAI',

    name:
        'Hyundai CARBON GREY 24 · 7,0 kW',

    price:
        1729,

    img:
        SHOP+
        '/user/shop/orig/1464_9tffxq-xfh15m89ypecga3qyroy20di4-mmtnaeco14-2.jpg?6a5e22b6',

    url:
        '/klimatizacia-hyundai-split-nastenna-carbon-grey-24-r32-230v-7kw/',

    features:[

        'Sivý dizajn',

        'Wi-Fi zabudované',

        'Chladenie 7,0 kW'

    ]
},


{
    tag:'Komfortná voľba',

    kind:'premium',

    brand:'SAMSUNG',

    name:
        'Samsung AR35 WIFI · 7,0 kW',

    price:
        1752.75,

    img:
        SHOP+
        '/user/shop/orig/1773_0jj5fq2nfxbdlfdgkfnrcxbcdvaubkxwzwxs7prdasw-1.png?6a5e22b9',

    url:
        '/klimatizacia-samsung-split-nastenna-ar35-wifi-ar40h24-r32-230v-7kw/',

    features:[

        'Wi-Fi zabudované',

        'Chladenie 7,0 kW',

        'R32'

    ]
}

]

};



/* =========================================================
   CSS
========================================================= */

var css=`

#spk-app-root,
#spk-app-root *{
    box-sizing:border-box;
}

#spk-app-root{
    width:100%;
    height:auto!important;
    max-height:none!important;
    overflow:visible!important;
}


.spk-app{

    width:100%;

    max-width:1480px;

    margin:16px auto 30px;

    display:grid;

    grid-template-columns:
        360px minmax(0,1fr);

    background:#fff;

    border-radius:22px;

    box-shadow:
        0 10px 32px rgba(0,0,0,.08);

    overflow:visible!important;

    height:auto!important;

    max-height:none!important;

    font-family:
        Arial,sans-serif;

    color:${DARK};
}


/* =========================================================
   ĽAVÁ STRANA
========================================================= */

.spk-left{

    padding:
        28px 34px 26px;

    background:#fff;

    border-radius:
        22px 0 0 22px;
}


.spk-eyebrow{

    font-size:12px;

    line-height:1.3;

    font-weight:800;

    letter-spacing:.08em;

    text-transform:uppercase;

    color:${RED};
}


.spk-left h1{

    margin:
        10px 0 10px!important;

    font-size:31px!important;

    line-height:1.08!important;

    color:#101820!important;
}


.spk-intro{

    margin:
        0 0 19px;

    color:#70777c;

    font-size:12px;

    line-height:1.5;
}



/* FORM */

.spk-form{

    display:grid;

    gap:12px;
}


.spk-field label{

    display:block;

    margin-bottom:5px;

    font-size:13px;

    font-weight:800;
}


.spk-field input,
.spk-field select{

    width:100%;

    height:46px;

    padding:
        8px 12px;

    border:
        1px solid #d4d9dc;

    border-radius:9px;

    background:#fff;

    color:#111;

    font-size:14px;
}


.spk-field input:focus,
.spk-field select:focus{

    outline:0;

    border-color:${RED};

    box-shadow:
        0 0 0 3px rgba(194,0,0,.09);
}


.spk-calc{

    height:48px;

    border:0;

    border-radius:9px;

    background:${RED};

    color:#fff;

    font-size:14px;

    font-weight:800;

    cursor:pointer;

    transition:.2s;
}


.spk-calc:hover{

    background:#101820;
}


.spk-note{

    margin-top:12px;

    color:#777;

    font-size:11px;

    line-height:1.4;
}



/* =========================================================
   VÝSLEDOK VĽAVO
========================================================= */

.spk-summary{

    display:none;
}


.spk-app.has-result .spk-form,
.spk-app.has-result .spk-intro{

    display:none;
}


.spk-app.has-result .spk-summary{

    display:block;
}


.spk-bigkw{

    margin:
        18px 0 2px;

    font-size:46px;

    line-height:1;

    font-weight:900;

    color:${RED};
}


.spk-klabel{

    color:#687078;

    font-size:12px;
}


.spk-stats{

    margin-top:22px;

    padding-top:14px;

    border-top:
        1px solid #e4e7e9;

    display:grid;

    gap:9px;
}


.spk-stat{

    display:flex;

    justify-content:space-between;

    gap:10px;

    font-size:12px;
}


.spk-stat span{

    color:#687078;
}


.spk-stat strong{

    text-align:right;
}


.spk-edit{

    width:100%;

    margin-top:18px;

    height:46px;

    border:
        1px solid #d5dade;

    border-radius:9px;

    background:#fff;

    color:#121820;

    font-weight:700;

    cursor:pointer;
}



/* =========================================================
   PRAVÁ STRANA
========================================================= */

.spk-right{

    position:relative;

    padding:
        20px 20px 14px;

    background:
        linear-gradient(
            135deg,
            #920000 0%,
            ${RED} 58%,
            ${LIGHT} 100%
        );

    border-radius:
        0 22px 22px 0;

    overflow:visible!important;

    height:auto!important;

    max-height:none!important;

    min-height:480px;

    color:#fff;
}



/* =========================================================
   ÚVODNÁ OBRAZOVKA
========================================================= */

.spk-start{

    min-height:445px;

    padding:
        40px 30px;

    display:flex;

    flex-direction:column;

    align-items:center;

    justify-content:center;

    text-align:center;

    color:#fff;
}


.spk-start-icon{

    width:76px;

    height:76px;

    margin-bottom:18px;

    border-radius:50%;

    background:
        rgba(255,255,255,.15);

    display:flex;

    align-items:center;

    justify-content:center;

    font-size:36px;
}


.spk-start h2{

    max-width:560px;

    margin:
        0 0 12px!important;

    color:#fff!important;

    font-size:31px!important;

    line-height:1.1!important;
}


.spk-start p{

    max-width:520px;

    margin:0;

    color:
        rgba(255,255,255,.88);

    font-size:14px;

    line-height:1.55;
}


.spk-start-info{

    margin:
        25px 0 12px;

    padding:
        11px 18px;

    border:
        1px solid rgba(255,255,255,.32);

    border-radius:30px;

    font-size:12px;

    font-weight:700;
}


.spk-start strong{

    font-size:12px;

    color:#fff;
}



/*
 * Ak nemáme výsledok,
 * produkty a výsledková hlavička
 * sa nezobrazujú.
 */

.spk-app:not(.has-result) .spk-head,
.spk-app:not(.has-result) .spk-products,
.spk-app:not(.has-result) .spk-foot{

    display:none;
}


/*
 * Po výpočte skryjeme
 * úvodnú obrazovku.
 */

.spk-app.has-result .spk-start{

    display:none;
}



/* =========================================================
   VÝSLEDKOVÁ HLAVIČKA
========================================================= */

.spk-head{

    display:flex;

    justify-content:space-between;

    gap:16px;

    align-items:flex-start;

    margin-bottom:14px;
}


.spk-head h2{

    margin:
        0 0 4px!important;

    color:#fff!important;

    font-size:27px!important;

    line-height:1.05!important;
}


.spk-head p{

    margin:0;

    color:
        rgba(255,255,255,.86);

    font-size:12px;

    line-height:1.4;
}


.spk-head-kw{

    text-align:right;

    white-space:nowrap;
}


.spk-head-kw strong{

    display:block;

    font-size:34px;

    line-height:1;
}


.spk-head-kw span{

    font-size:11px;

    color:
        rgba(255,255,255,.82);
}



/* =========================================================
   PRODUKTY
========================================================= */

.spk-products{

    display:grid;

    grid-template-columns:
        repeat(3,minmax(0,1fr));

    gap:12px;

    align-items:stretch;

    overflow:visible!important;

    height:auto!important;

    max-height:none!important;
}


.spk-card{

    position:relative;

    display:flex;

    flex-direction:column;

    min-width:0;

    background:#fff;

    color:${DARK};

    border-radius:15px;

    overflow:hidden;

    border:
        1px solid rgba(0,0,0,.07);

    box-shadow:
        0 8px 22px rgba(0,0,0,.12);
}


.spk-card.tip{

    outline:
        2px solid #f0b400;
}


.spk-badge{

    position:absolute;

    top:10px;

    left:10px;

    z-index:2;

    padding:
        6px 9px;

    border-radius:999px;

    background:#18212b;

    color:#fff;

    font-size:10px;

    font-weight:800;
}


.spk-card.tip .spk-badge{

    background:#e7a900;
}



/* OBRÁZOK */

.spk-image{

    height:150px;

    padding:
        22px 14px 10px;

    display:flex;

    align-items:center;

    justify-content:center;

    background:#fff;

    border-bottom:
        1px solid #edf0f1;
}


.spk-image img{

    max-width:100%;

    max-height:116px;

    object-fit:contain;

    display:block;
}



/* OBSAH KARTY */

.spk-body{

    display:flex;

    flex-direction:column;

    flex:1;

    padding:
        12px 13px 13px;
}


.spk-brand{

    font-size:10px;

    font-weight:900;

    letter-spacing:.04em;

    color:${RED};
}


.spk-name{

    margin:
        5px 0 8px;

    font-size:15px;

    line-height:1.25;

    font-weight:800;

    color:#17212b;
}


.spk-features{

    margin:
        0 0 10px;

    padding-left:17px;

    color:#687078;

    font-size:11px;

    line-height:1.45;
}


.spk-price{

    margin-top:auto;

    font-size:22px;

    font-weight:900;
}


.spk-price-note{

    margin-top:2px;

    color:#7b8388;

    font-size:10px;
}


.spk-complete{

    margin-top:8px;

    padding:
        8px 9px;

    border-radius:8px;

    background:#fff2f2;

    color:#51595f;

    font-size:11px;
}


.spk-complete strong{

    color:${RED};
}


.spk-btn{

    display:flex;

    align-items:center;

    justify-content:center;

    height:42px;

    margin-top:10px;

    border-radius:8px;

    background:#e00000;

    color:#fff!important;

    text-decoration:none!important;

    font-size:12px;

    font-weight:800;
}


.spk-mount{

    display:block;

    margin:
        7px auto 0;

    border:0;

    background:transparent;

    color:${RED};

    font-size:11px;

    font-weight:700;

    text-decoration:underline;

    cursor:pointer;
}



/* =========================================================
   SPODNÁ INFORMÁCIA
========================================================= */

.spk-foot{

    display:flex;

    justify-content:space-between;

    gap:14px;

    margin-top:11px;

    color:
        rgba(255,255,255,.88);

    font-size:10px;

    line-height:1.35;
}


.spk-foot a{

    color:#fff!important;

    font-weight:800;

    text-decoration:underline;
}



/* =========================================================
   MODAL MONTÁŽ
========================================================= */

.spk-modal{

    position:fixed;

    inset:0;

    z-index:99999;

    display:none;

    align-items:center;

    justify-content:center;

    padding:16px;

    background:
        rgba(0,0,0,.65);
}


.spk-modal.open{

    display:flex;
}


.spk-modal-card{

    width:
        min(600px,100%);

    max-height:88vh;

    overflow:auto;

    background:#fff;

    border-radius:15px;

    color:${DARK};

    box-shadow:
        0 24px 70px rgba(0,0,0,.28);
}


.spk-modal-head{

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:
        16px 18px;

    border-bottom:
        1px solid #e5e8ea;
}


.spk-modal-head h3{

    margin:0;

    font-size:18px;
}


.spk-close{

    width:36px;

    height:36px;

    border:0;

    border-radius:50%;

    background:#eef1f2;

    font-size:22px;

    cursor:pointer;
}


.spk-modal-body{

    padding:18px;
}


.spk-modal-body ul{

    padding-left:20px;

    line-height:1.65;

    color:#4d575d;
}


.spk-warn{

    padding:
        11px 12px;

    border-left:
        4px solid #e3a314;

    background:#fff7df;

    font-size:11px;

    line-height:1.5;
}



/* =========================================================
   RESPONZÍVNE
========================================================= */

@media(max-width:1050px){

    .spk-app{

        grid-template-columns:
            300px minmax(0,1fr);
    }


    .spk-left{

        padding:24px;
    }


    .spk-head h2{

        font-size:22px!important;
    }


    .spk-name{

        font-size:14px;
    }

}



@media(max-width:850px){

    .spk-app{

        grid-template-columns:1fr;
    }


    .spk-left{

        border-radius:
            18px 18px 0 0;
    }


    .spk-right{

        border-radius:
            0 0 18px 18px;
    }


    .spk-products{

        grid-template-columns:1fr;
    }


    .spk-card{

        max-width:620px;

        width:100%;

        margin:
            0 auto;
    }


    .spk-image{

        height:135px;
    }


    .spk-foot{

        flex-direction:column;
    }


    .spk-head-kw{

        text-align:left;
    }

}



@media(max-width:560px){

    .spk-app{

        margin:
            8px auto 20px;

        border-radius:14px;
    }


    .spk-left{

        padding:19px;
    }


    .spk-left h1{

        font-size:25px!important;
    }


    .spk-right{

        padding:
            15px 12px;

        min-height:410px;
    }


    .spk-start{

        min-height:380px;

        padding:
            25px 14px;
    }


    .spk-start h2{

        font-size:24px!important;
    }


    .spk-head{

        flex-direction:column;
    }


    .spk-head h2{

        font-size:21px!important;
    }


    .spk-image{

        height:125px;
    }


    .spk-body{

        padding:11px;
    }


    .spk-bigkw{

        font-size:40px;
    }

}

`;



/* =========================================================
   CSS DO HEAD
========================================================= */

var existingStyle=
    document.getElementById(
        'spk-github-style'
    );


if(!existingStyle){

    var style=
        document.createElement('style');

    style.id=
        'spk-github-style';

    style.textContent=
        css;

    document.head.appendChild(
        style
    );

}
else{

    existingStyle.textContent=
        css;

}



/* =========================================================
   FORMÁTOVANIE
========================================================= */

function money(v){

    return new Intl.NumberFormat(
        'sk-SK',
        {
            style:'currency',
            currency:'EUR',

            minimumFractionDigits:
                Number.isInteger(v)
                ? 0
                : 2,

            maximumFractionDigits:2
        }
    ).format(v);

}


function one(v){

    return Number(v)
        .toLocaleString(
            'sk-SK',
            {
                minimumFractionDigits:1,
                maximumFractionDigits:1
            }
        );

}



/* =========================================================
   ÚDAJE Z URL
========================================================= */

function parseState(){

    var q=
        new URLSearchParams(
            location.search
        );


    var rawArea=
        q.get('plocha') ||
        q.get('area');


    var rawOrientation=
        q.get('orientacia') ||
        q.get('orientation');


    var rawPeople=
        q.get('osoby') ||
        q.get('people');


    var rawUse=
        q.get('vyuzitie') ||
        q.get('use');


    /*
     * Ak nie sú všetky 4 údaje,
     * nič automaticky nepočítame.
     */

    if(
        !rawArea ||
        !rawOrientation ||
        !rawPeople ||
        !rawUse
    ){

        return null;

    }


    var area=
        parseFloat(rawArea);


    var orientation=
        String(rawOrientation)
        .toLowerCase();


    var people=
        parseInt(rawPeople);


    var use=
        String(rawUse)
        .toLowerCase();



    /*
     * Podpora starších názvov
     */

    if(
        use==='chladenie-kurenie' ||
        use==='chladenie_kurenie'
    ){

        use='oboje';

    }


    if(
        !area ||
        area<5 ||
        area>250 ||
        !people ||
        people<1 ||
        people>30 ||
        !ORIENT[orientation] ||
        !USE[use]
    ){

        return null;

    }


    return{

        area:area,

        orientation:orientation,

        people:people,

        use:use

    };

}



/* =========================================================
   VÝPOČET
========================================================= */

function calculate(s){

    /*
     * Základ:
     * cca 55 W / m²
     *
     * orientácia
     * spôsob používania
     * osoby
     * bezpečnostná rezerva
     */


    var watts=
        s.area *
        55 *
        ORIENT[s.orientation][1] *
        USE[s.use][1];


    /*
     * ďalšie osoby nad jednu
     */

    watts+=
        Math.max(
            0,
            s.people-1
        ) * 100;


    /*
     * rezerva
     */

    watts*=
        1.12;


    var need=
        watts/1000;


    var nominal=
        2.5;


    var multi=
        false;


    if(need<=2.20){

        nominal=2.5;

    }
    else if(need<=3.15){

        nominal=3.5;

    }
    else if(need<=4.55){

        nominal=5.0;

    }
    else if(need<=6.30){

        nominal=7.0;

    }
    else{

        nominal=7.0;

        multi=true;

    }


    return{

        need:need,

        nominal:nominal,

        multi:multi

    };

}



/* =========================================================
   HTML APLIKÁCIE
========================================================= */

root.innerHTML=`

<div
class="spk-app"
id="spkApp">


<!-- =====================================================
     ĽAVÁ STRANA
===================================================== -->

<aside class="spk-left">

    <div class="spk-eyebrow">
        SPEKTRA SHOP · VÝBER KLIMATIZÁCIE
    </div>


    <h1>
        Aký výkon klimatizácie potrebujete?
    </h1>


    <p class="spk-intro">

        Stačia 4 údaje.

        Odporučíme vhodný výkon
        a konkrétne klimatizácie.

    </p>


    <form
    class="spk-form"
    id="spkForm">


        <div class="spk-field">

            <label>
                Plocha miestnosti
            </label>

            <input
            id="spkArea"
            type="number"
            min="5"
            max="250"
            placeholder="napr. 35">

        </div>



        <div class="spk-field">

            <label>
                Orientácia miestnosti
            </label>

            <select id="spkOrientation">

                <option
                value=""
                selected
                disabled>
                    Vyberte orientáciu
                </option>

                <option value="sever">
                    Sever
                </option>

                <option value="vychod">
                    Východ
                </option>

                <option value="zapad">
                    Západ
                </option>

                <option value="juh">
                    Juh
                </option>

            </select>

        </div>



        <div class="spk-field">

            <label>
                Počet osôb
            </label>

            <input
            id="spkPeople"
            type="number"
            min="1"
            max="30"
            placeholder="napr. 3">

        </div>



        <div class="spk-field">

            <label>
                Ako budete klimatizáciu používať?
            </label>

            <select id="spkUse">

                <option
                value=""
                selected
                disabled>
                    Vyberte využitie
                </option>

                <option value="chladenie">
                    Najmä chladenie
                </option>

                <option value="oboje">
                    Chladenie + kúrenie
                </option>

                <option value="kurenie">
                    Najmä kúrenie
                </option>

            </select>

        </div>



        <button
        class="spk-calc"
        type="submit">

            ODPORUČIŤ KLIMATIZÁCIU

        </button>

    </form>



    <!-- VÝSLEDOK VĽAVO -->

    <div class="spk-summary">


        <div
        class="spk-bigkw"
        id="spkBigKw">
        </div>


        <div class="spk-klabel">
            odporúčaná výkonová trieda
        </div>


        <div class="spk-stats">


            <div class="spk-stat">

                <span>
                    Vypočítaná potreba
                </span>

                <strong id="spkNeed"></strong>

            </div>


            <div class="spk-stat">

                <span>
                    Orientačný el. príkon
                </span>

                <strong id="spkInput"></strong>

            </div>


            <div class="spk-stat">

                <span>
                    Plocha
                </span>

                <strong id="spkSumArea"></strong>

            </div>


            <div class="spk-stat">

                <span>
                    Orientácia
                </span>

                <strong id="spkSumOrient"></strong>

            </div>


            <div class="spk-stat">

                <span>
                    Využitie
                </span>

                <strong id="spkSumUse"></strong>

            </div>


        </div>


        <button
        class="spk-edit"
        type="button"
        id="spkEdit">

            Upraviť údaje

        </button>

    </div>



    <div class="spk-note">

        Výsledok je orientačný.

        Pri veľkom presklení,
        otvorenom schodisku,
        podkroví alebo viacerých
        miestnostiach odporúčame
        odbornú obhliadku.

    </div>

</aside>



<!-- =====================================================
     PRAVÁ STRANA
===================================================== -->

<section class="spk-right">


    <!-- ÚVODNÁ OBRAZOVKA -->

    <div class="spk-start">


        <div class="spk-start-icon">
            ❄
        </div>


        <h2>
            Vyberieme klimatizáciu
            pre váš priestor
        </h2>


        <p>

            Zadajte štyri jednoduché údaje
            a Spektra vám odporučí
            vhodný výkon klimatizácie
            a konkrétne modely.

        </p>


        <div class="spk-start-info">

            Plocha · Orientácia ·
            Počet osôb · Využitie

        </div>


        <strong>
            Výsledok zobrazíme okamžite
        </strong>


    </div>



    <!-- VÝSLEDKOVÁ HLAVIČKA -->

    <div class="spk-head">


        <div>

            <h2>
                Vybrali sme vhodné klimatizácie
            </h2>

            <p id="spkResultText"></p>

        </div>


        <div class="spk-head-kw">

            <strong id="spkHeadKw"></strong>

            <span>
                odporúčaný výkon
            </span>

        </div>


    </div>



    <div
    class="spk-products"
    id="spkProducts">
    </div>



    <div class="spk-foot">

        <span>

            Ceny produktov sú uvedené s DPH.

            Štandardná montáž do 3 m
            je kalkulovaná od 369 € s DPH.

        </span>


        <a
        href="${SHOP}/klimatizacie/"
        target="_top">

            Zobraziť všetky klimatizácie →

        </a>

    </div>


</section>

</div>



<!-- =====================================================
     MODAL MONTÁŽ
===================================================== -->

<div
class="spk-modal"
id="spkModal">


    <div class="spk-modal-card">


        <div class="spk-modal-head">

            <h3>
                Štandardná montáž klimatizácie do 3 m
            </h3>


            <button
            class="spk-close"
            type="button"
            id="spkClose">

                ×

            </button>

        </div>


        <div class="spk-modal-body">


            <ul>

                <li>
                    montáž jednej vnútornej
                    a jednej vonkajšej jednotky,
                </li>

                <li>
                    prepojovacie medené potrubie
                    do 3 m,
                </li>

                <li>
                    elektrické a komunikačné
                    prepojenie jednotiek,
                </li>

                <li>
                    odvod kondenzátu
                    samospádom do 3 m,
                </li>

                <li>
                    jeden prestup
                    cez bežné murivo,
                </li>

                <li>
                    konzola alebo silentbloky
                    podľa podmienok,
                </li>

                <li>
                    vákuovanie,
                    kontrola tesnosti,
                    spustenie a zaškolenie.
                </li>

            </ul>


            <div class="spk-warn">

                Dlhšia trasa,
                železobetón,
                práca vo výške,
                čerpadlo kondenzátu,
                samostatný elektrický prívod
                alebo ďalšie stavebné práce
                sa naceňujú osobitne.

            </div>


        </div>

    </div>

</div>

`;



/* =========================================================
   ELEMENTY
========================================================= */

var app=
    document.getElementById('spkApp');


var form=
    document.getElementById('spkForm');


var modal=
    document.getElementById('spkModal');



/* =========================================================
   VYKRESLENIE VÝSLEDKU
========================================================= */

function render(s){

    var r=
        calculate(s);


    var key=
        r.nominal.toFixed(1);


    var list=
        PRODUCTS[key];


    app.classList.add(
        'has-result'
    );


    document.getElementById(
        'spkBigKw'
    ).textContent=

        one(r.nominal)+' kW';


    document.getElementById(
        'spkNeed'
    ).textContent=

        one(r.need)+' kW';


    document.getElementById(
        'spkInput'
    ).textContent=

        one(INPUT[key])+' kW';


    document.getElementById(
        'spkSumArea'
    ).textContent=

        s.area+' m²';


    document.getElementById(
        'spkSumOrient'
    ).textContent=

        ORIENT[
            s.orientation
        ][0];


    document.getElementById(
        'spkSumUse'
    ).textContent=

        USE[
            s.use
        ][0];


    document.getElementById(
        'spkHeadKw'
    ).textContent=

        one(r.nominal)+' kW';



    if(r.multi){

        document.getElementById(
            'spkResultText'
        ).textContent=

            'Výpočet presahuje bežný rozsah jednej nástennej jednotky. '+
            'Zobrazujeme 7 kW modely, ale odporúčame technickú obhliadku.';

    }
    else{

        document.getElementById(
            'spkResultText'
        ).textContent=

            'Vypočítaná chladiaca potreba je približne '+
            one(r.need)+
            ' kW. Pre tento priestor odporúčame výkonovú triedu '+
            one(r.nominal)+
            ' kW.';

    }



    document.getElementById(
        'spkProducts'
    ).innerHTML=

        list.map(
            function(p){

                return `

                <article
                class="spk-card ${
                    p.kind==='tip'
                    ? 'tip'
                    : ''
                }">


                    <span class="spk-badge">
                        ${p.tag}
                    </span>


                    <div class="spk-image">

                        <img
                        src="${p.img}"
                        alt="${p.name}">

                    </div>


                    <div class="spk-body">


                        <div class="spk-brand">

                            ${p.brand}

                        </div>


                        <div class="spk-name">

                            ${p.name}

                        </div>


                        <ul class="spk-features">

                            ${
                                p.features.map(
                                    function(x){

                                        return '<li>'+
                                            x+
                                            '</li>';

                                    }
                                ).join('')
                            }

                        </ul>


                        <div class="spk-price">

                            ${money(p.price)}

                        </div>


                        <div class="spk-price-note">

                            cena zariadenia s DPH

                        </div>


                        <div class="spk-complete">

                            S montážou do 3 m od

                            <strong>

                                ${
                                    money(
                                        p.price+
                                        MOUNT
                                    )
                                }

                            </strong>

                        </div>


                        <a
                        class="spk-btn"
                        href="${SHOP+p.url}"
                        target="_top">

                            Pozrieť produkt

                        </a>


                        <button
                        class="spk-mount"
                        type="button"
                        data-mount>

                            Čo obsahuje montáž?

                        </button>


                    </div>

                </article>

                `;

            }

        ).join('');

}



/* =========================================================
   VYPLNENIE FORMULÁRA
========================================================= */

function setForm(s){

    document.getElementById(
        'spkArea'
    ).value=
        s.area;


    document.getElementById(
        'spkOrientation'
    ).value=
        s.orientation;


    document.getElementById(
        'spkPeople'
    ).value=
        s.people;


    document.getElementById(
        'spkUse'
    ).value=
        s.use;

}



/* =========================================================
   ÚVODNÝ STAV
========================================================= */

var initial=
    parseState();


/*
 * Ak zákazník prišiel
 * z bannera s parametrami,
 * rovno zobrazíme výsledok.
 *
 * Ak parametre nie sú,
 * zostane úvodná obrazovka.
 */

if(initial){

    setForm(initial);

    render(initial);

}
else{

    app.classList.remove(
        'has-result'
    );

}



/* =========================================================
   FORMULÁR
========================================================= */

form.addEventListener(
    'submit',
    function(e){

        e.preventDefault();


        var s={

            area:
                +document
                .getElementById(
                    'spkArea'
                ).value,


            orientation:
                document
                .getElementById(
                    'spkOrientation'
                ).value,


            people:
                +document
                .getElementById(
                    'spkPeople'
                ).value,


            use:
                document
                .getElementById(
                    'spkUse'
                ).value

        };


        if(
            !s.area ||
            s.area<5 ||
            s.area>250 ||
            !s.people ||
            s.people<1 ||
            s.people>30 ||
            !ORIENT[s.orientation] ||
            !USE[s.use]
        ){

            return;

        }


        render(s);

    }

);



/* =========================================================
   UPRAVIŤ ÚDAJE
========================================================= */

document.getElementById(
    'spkEdit'
)
.addEventListener(
    'click',
    function(){

        app.classList.remove(
            'has-result'
        );


        setTimeout(
            function(){

                document
                .getElementById(
                    'spkArea'
                )
                .focus();

            },
            100
        );

    }
);



/* =========================================================
   MODAL MONTÁŽ
========================================================= */

document.addEventListener(
    'click',
    function(e){

        if(
            e.target.closest(
                '[data-mount]'
            )
        ){

            modal.classList.add(
                'open'
            );

        }


        if(
            e.target===modal ||
            e.target.id==='spkClose'
        ){

            modal.classList.remove(
                'open'
            );

        }

    }
);



document.addEventListener(
    'keydown',
    function(e){

        if(e.key==='Escape'){

            modal.classList.remove(
                'open'
            );

        }

    }
);

})();
