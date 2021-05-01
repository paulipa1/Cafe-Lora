import './style.css';

console.log('funguju!');
// Chceme zařídit, aby se na úzkých displejích po kliknutí na hamburger ikonku zobrazovala navigace. Zatím se to neděje a tím přichází ke slovu JavaScript.

// V JavaScriptu vyberte ze stránky ikonku #nav-btn. Připojte k ní posluchač události click. Tento posluchač prvku nav odebere nebo přidá třídu nav-closed. Klikáním na ikonku tak můžeme zobrazovat nebo skrývat navigaci.
const navBar = document.querySelector('nav');
const navElm = document.querySelector('#nav-btn');
console.log(navElm);
navElm.addEventListener('click', () => {
  navBar.classList.toggle('nav-closed');
});

// Navigaci budeme chtít schovat i po přesunutí na nějakou sekci. Připojte tedy posluchač události také na všechny položky navigace. Zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala. Zde se vám jistě bude hodit metoda querySelectorAll.

const hides = document.querySelectorAll(".hide");
for (i = 0, i < hides.length; i += 1) {
  hides[i].addEventListener("click", () => {
    navBar.classList.toggle("nav-closed"); 
  }); 
}