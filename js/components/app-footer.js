const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="/assets/bootstrap/bootstrap.min.css" type="text/css" />
  <link rel="stylesheet" href="/css/bootstrap-overrides.css" type="text/css" />
  <link rel="stylesheet" href="/css/components.css" type="text/css" />
  <footer class="app-footer bg-primary text-center">
    <div class="container-fluid default">
      <div class="row align-items-center">
        <div class="col mx-auto p-0 text-center social-link">
          <a href="https://www.instagram.com/tsd_ucsd" target="_blank">
            <img src="/assets/images/footer/instagram-link.svg" />
            <span>tsd_ucsd</span>
          </a>
        </div> 
        <div class="col p-0 mx-auto social-link">
          <a href="https://www.linkedin.com/company/triton-solar-decathlon" target="_blank">
            <img src="/assets/images/footer/linkedin-link.svg" />
            <span>triton-solar-decathlon</span>
          </a>
        </div>
        <div class="col p-0 text-center">
          <a href="#page-top">
            <img id="logo" src="/assets/images/app-logo.svg" height="60" width="60" />
            <p class="m-0">Copyright © TSD 2022</p>
          </a>
        </div>
        <div class="col p-0 text-center">
          <img src="/assets/images/footer/youtube-link.svg" />
          <span>triton solar decathlon</span>
        </div>
        <div class="col p-0 text-center social-link">
          <a href="mailto:test@test.com" target="_blank">
            <img src="/assets/images/footer/email-link.svg" />
            <span>tsd_ucsd</span>
          </a>
        </div>
      </div>
    </div>
    <div class="container-fluid mobile">
      <div class="row align-items-center">
        <div class="col-3 mx-auto p-0 text-center footer-social-link">
          <a href="https://www.instagram.com/tsd_ucsd" target="_blank">
            <img src="/assets/images/footer/instagram-link.svg" />
            <span>tsd_ucsd</span>
          </a>
        </div> 
        <div class="col-3 p-0 mx-auto social-link">
          <a href="https://www.linkedin.com/company/triton-solar-decathlon" target="_blank">
            <img src="/assets/images/footer/linkedin-link.svg" />
            <span>triton-solar-decathlon</span>
          </a>
        </div>
        <div class="col-3 p-0 text-center">
          <img src="/assets/images/footer/youtube-link.svg" />
          <span>triton solar decathlon</span>
        </div>
        <div class="col-3 p-0 text-center social-link">
          <a href="mailto:test@test.com" target="_blank">
            <img src="/assets/images/footer/email-link.svg" />
            <span>tsd_ucsd</span>
          </a>
        </div>
        <div class="col mt-4 text-center">
          <a href="#page-top">
            <img id="logo" src="/assets/images/app-logo.svg" height="60" width="60" />
            <p class="m-0">Copyright © TSD 2022</p>
          </a>
        </div>
      </div>
    </div>
  </footer>
`;

class AppFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('app-footer', AppFooter);
