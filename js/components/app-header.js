
const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="/assets/bootstrap/bootstrap.min.css" type="text/css" />
  <link rel="stylesheet" href="/css/bootstrap-overrides.css" type="text/css" />
  <link rel="stylesheet" href="/css/components.css" type="text/css" />
  <nav class="app-header navbar navbar-expand-lg bg-primary text-uppercase fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="/assets/images/app-logo.svg" height="60" width="60" height="auto"/>
      </a>
      <button 
        type="button" 
        class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarMenu" 
        aria-controls="navbarMenu" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <div class="menu-button">
          <div class="bar-1"></div>
          <div class="bar-2"></div>
          <div class="bar-3"></div>
        </div>
      </button>
      <div class="collapse navbar-collapse" id="navbarMenu">
        <ul class="navbar-nav ms-auto" id="navItems">
          <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/">Home</a></li>
          <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/about.html">About</a></li>
          <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/meet-the-team/electrical.html">Meet the team</a></li>
          <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/sponsors.html">Sponsors</a></li>
          <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="/contact-us.html">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </nav>
`;

class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const navItems = this.shadowRoot.querySelector('#navItems');
    const navLinks = navItems.querySelectorAll('a');
    const currentUrl = window.location.href;
    navLinks.forEach(link => {
      if (link.href === currentUrl) {
        link.style.color = '#FFCD00';
      }
    });

    const navbarToggler = this.shadowRoot.querySelector('.navbar-toggler');
    const menuButton = this.shadowRoot.querySelector('.menu-button');
    navbarToggler.addEventListener('click', () => {
      const navbarMenu = this.shadowRoot.querySelector('#navbarMenu');
      navbarMenu.classList.toggle('show');
      menuButton.classList.toggle('transform');
    });
  }
}

customElements.define('app-header', AppHeader);
