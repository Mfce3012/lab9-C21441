class BannerUCR extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <div class="banner">
        <div class="banner-titulo">
          <span class="signo-apertura">¡</span>
          <div class="bloque-la-sede"><span>La Sede</span></div>
        </div>

        <div class="banner-segunda-linea">
          <div class="bloque-te"><span>Te</span></div>
          <span class="texto-acompana">Acompaña</span>

          <div class="signo-cierre">
            <div class="exclamacion-cuerpo"></div>
            <div class="exclamacion-punto"></div>
          </div>
        </div>

        <div class="banner-texto">
          <p>El respeto no se negocia</p>
          <p class="subtexto">¡Pará ya de acosar!</p>
        </div>
      </div>
    `;
  }
}

customElements.define('banner-ucr', BannerUCR);
