'use strict';
import './style.css';

export const Layer = (props) => {
  return `
  <div class="layer">
                  <div
                    class="layer__color"
                    style="background-color: ${props.color}"
                  ></div>
                  <div class="layer__label">${props.label}</div>
                </div>
  `;
};

// Skvělá práce! Teď si komponentu Layer přesuneme do samostatné složky. Ve vašem projektu vytvořte pro vaši komponentu separátní složku s názvem Layer. V této složce bude index.js a style.css V souboru index.js bude JavaScriptový kód vaší komponenty. Kompnentu správně exportujte a správně ji importujte v hlavním index.js celého projektu. Vyzkoušejte, že váš projekt funguje.
