import './style.css';
import { Layer } from './Layer/index.js';

console.log('funguju!');
// Chceme zařídit, aby se na úzkých displejích po kliknutí na hamburger ikonku zobrazovala navigace. Zatím se to neděje a tím přichází ke slovu JavaScript.

// V JavaScriptu vyberte ze stránky ikonku #nav-btn. Připojte k ní posluchač události click. Tento posluchač prvku nav odebere nebo přidá třídu nav-closed. Klikáním na ikonku tak můžeme zobrazovat nebo skrývat navigaci.
const navBar = document.querySelector('nav');
const navElm = document.querySelector('#nav-btn');
const navLinkElm = document.querySelectorAll('nav a');

navElm.addEventListener('click', () => {
  navBar.classList.toggle('nav-closed');
});

// Navigaci budeme chtít schovat i po přesunutí na nějakou sekci. Připojte tedy posluchač události také na všechny položky navigace. Zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala. Zde se vám jistě bude hodit metoda querySelectorAll.

for (let i = 0; i < navLinkElm.length; i++) {
  navLinkElm[i].addEventListener('click', () => {
    navBar.classList.add('nav-closed');
  });
}

// Na tlačíko se třídou order-btn pověste posluchač, při kliknutí změní nápis na tlačítku na Zrušit. Zároveň přidá na prvek se třídou drink__cup třídu drink__cup--selected.

// Při opětovném kliknutí na tlačítko chceme zařídit, aby se objednávka zrušila a změny na prvku .drink__cup i na tlačítku .order-btn se vrátily (odebrala se třída drink__cup--selected a vrátil se text tlačítka na Objednat). Tohoto můžete docílit například tak, že si vytvoříte globální proměnnou ordered, která bude obsahovat true nebo false podle toho, zde je nápoj objednaný či nikoliv.

const orderBtnElm = document.querySelector('.order-btn');
const drinkCupElm = document.querySelector('.drink__cup');
let notOrdered = true;

orderBtnElm.addEventListener('click', () => {
  if (notOrdered) {
    orderBtnElm.textContent = 'Zrušit';
    drinkCupElm.classList.add('drink__cup--selected');
    notOrdered = false;
  } else {
    orderBtnElm.textContent = 'Objednat';
    drinkCupElm.classList.remove('drink__cup--selected');
    notOrdered = true;
  }
});

// Každý nápoj bude obsahovat seznam ingrediencí. Na stránce vidíme příklad pro cappuccino. Budeme přepisovat kód tak, aby ingredience (vrstva) byla komponenta.

// V hlavním souboru index.js vytvořte komponentu Layer, která očekává props v následujícím tvaru. Podívejte se do index.html na strukturu jednotlivých layers. Komponenta nechť vrací řetězec obsahující výsledné HTML pro jednu vrstvu. V index.html si jednotlivé ingredience pro capuccino (divy .layer) zakomentujte nebo smažte. Použijte vaši komponentu a pomocí vlastnosti innerHTML zapojte do stránky tři dané ingredience pro cappuccino. Stránka by měla pro uživatele vypadat stejně jako na začátku.

//  {
//   color: '#feeeca',
//   label: 'mléčná pěna',
//  };

const drinkInfoElm = document.querySelector('.drink__info');

// const Layer = (props) => {
//   return `
//   <div class = "layer">
//   <div class="layer__color"
//   style="background-color:${props.color}"></div>
//   <div class="layer__label">${props.label}></div>
//   </div>
//   `;
// };

// drinkInfoElm.innerHTML += Layer({ color: '#feeeca', label: 'mléčná pěna' });
// drinkInfoElm.innerHTML += Layer({ color: '#fed7b0', label: 'teplé mléko' });
// drinkInfoElm.innerHTML += Layer({ color: '##613916', label: 'espresso' });

// console.log(drinkInfoElm);

// // Skvělá práce! Teď si komponentu Layer přesuneme do samostatné složky. Ve vašem projektu vytvořte pro vaši komponentu separátní složku s názvem Layer. V této složce bude index.js a style.css V souboru index.js bude JavaScriptový kód vaší komponenty. Kompnentu správně exportujte a správně ji importujte v hlavním index.js celého projektu. Vyzkoušejte, že váš projekt funguje.

// V tomto cvičení budeme chtít zařídit, abychom seznam ingrediencí dokázali zobrazit podle dat uložených v poli.
// Uvnitř hlavního index.js si vytvořte následujicí globální proměnnou.

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

for (let i = 0; i < layers.length; i++) {
  drinkInfoElm.innerHTML += Layer(layers[i]);
  console.log(layers[i]);
}

// Abychom nakonec mohli zobrazit celou nabídku nápojů, budeme potřebovat, aby každý nápoj byl jedna komponenta. Podívejte se do index.html nebo do devtools na strukturu jednoho nápoje. Tento obsah si v index.html zakomentujte. Zakomentujte si také přidávání ingrediencí capuccina pomocí komponenty Layer v hlavním index.js.
// Jak už jsme zvyklí, vytvořte pro komponentu složku Drink s index.js a style.css. Do style.css přesuňte styly související s komponentou. Pozor na to, že tentokrát ke stylu komponenty patří také obrázek cup-selected.png. Abychom měli vše hezky pohromadě, vytvořte ve složce komponenty složku img, do které tento obrázek přesuňte. (Dané styly musíte smazat nebo zakomentovat v hlavním style.css, protože tam bude obrázek cup-selected.png teď chybět).
// V index.js vytvořte komponentu Drink, která očekává props v následujícím tvaru.
