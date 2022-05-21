class HeroWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div id="hero">
          <div class="hero-content">
            <picture>
              <source media="(max-width: 650px)" srcset="../images/hero/hero-image_2-small.jpg" type="image/jpeg">
              <source media="(min-width: 650px)" srcset="../images/hero/hero-image_2-medium.jpg" type="image/jpeg">
              <source media="(min-width: 1200px)" srcset="../images/hero/hero-image_2-large.jpg" type="image/jpeg">
            </picture>
            <div>
              <h1 class="hero-title">Digi Foods!</h1>
              <p class="hero-tag">Find Restaurant with delicious food</p>
            </div>
          </div>
        </div>
           `;
  }
}
customElements.define("hero-web", HeroWeb);
