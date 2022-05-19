class NavWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container" id="container">
            <nav id="navbar">
                <a href="#" class="navbar-brand">DF</a>
                <button id="menu-button" aria-label="navigation-menu"><i class="fas fa-bars"></i></button>
                <div class="nav">
                    <a class="nav-link" href="#/home">Home</a>
                    <a class="nav-link" href="#/favorite">Favorite</a>
                    <a class="nav-link" href="https://www.linkedin.com/in/muhammad-fachrurrazi-6484401a2/"
                        target="_blank" rel="noopener">About Us</a>
                </div>
            </nav>
            <nav id="sidebar">
                <div id="sidebar-menu" class="nav">
                    <button id="close-button" aria-label="close-navigation-menu"><i class="fas fa-times"></i></button>
                    <a class="nav-link" href="#/home">Home</a>
                    <a class="nav-link" href="#/favorite">Favorite</a>
                    <a class="nav-link" href="https://www.linkedin.com/in/muhammad-fachrurrazi-6484401a2/"
                        target="_blank" rel="noopener">About Us</a>
                </div>
            </nav>
        </div>
    `;
  }
}
customElements.define("nav-web", NavWeb);
