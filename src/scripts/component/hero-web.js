class HeroWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section id="hero">
            <div class="hero-content">
              <h1 class="hero-title">Digi Foods!</h1>
              <p class="hero-tag">Find Restaurant with delicious food</p>
            </div>
        </section>
           `;
  }
}
customElements.define("hero-web", HeroWeb);
