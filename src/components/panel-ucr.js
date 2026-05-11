class PanelUCR extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <div class="panel-ucr">
        <div class="panel-filas">

          <div class="panel-fila">
            <span class="fila-texto">Aulas 5, 6, 7</span>
            <span class="flecha">➔</span>
          </div>

          <div class="panel-fila">
            <span class="fila-texto">Apoyo Informático</span>
            <span class="flecha">➔</span>
          </div>

          <div class="panel-fila">
            <span class="fila-texto">Servidores</span>
            <span class="flecha">➔</span>
          </div>

          <div class="panel-fila">
            <span class="fila-texto">Laboratorio 1 y 2</span>
            <span class="flecha">➔</span>
          </div>

          <div class="panel-fila">
            <span class="fila-texto">
              Coordinación<br>
              Informática Empresarial
            </span>
            <span class="flecha">➔</span>
          </div>

        </div>

        <div class="panel-footer">
          <span>UCR</span>
        </div>
      </div>
    `;
  }
}

customElements.define('panel-ucr', PanelUCR);
