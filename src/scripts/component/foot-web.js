class FooterWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer id="footer">
          Copyright © 2022 - DIGI FOODS | Muhammad Fachrurrazi
      </footer>
           `;
  }
}
customElements.define("foot-web", FooterWeb);
