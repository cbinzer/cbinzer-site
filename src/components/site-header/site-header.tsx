import { Component, Element, Listen, State, h } from '@stencil/core';

@Component({
  tag: 'site-header',
  styleUrl: 'site-header.css'
})
export class SiteHeader {
  @Element() el!: Element;

  @State() isMobileMenuShown: boolean = false;

  @Listen('resize', { target: 'window' })
  handleResize() {
    requestAnimationFrame(() => {
      if (window.innerWidth > 768) {
        const menu = (this.el.querySelector('.header-menu') as HTMLElement);
        menu.style.display = '';
        this.el.classList.remove('show-mobile-menu');
        document.body.classList.remove('no-scroll');
        this.isMobileMenuShown = false;
      }
    });
  }

  componentDidLoad() {
    this.isMobileMenuShown = false;
  }

  showNav () {
    if (this.isMobileMenuShown) return;
    this.isMobileMenuShown = true;

    const menu = (this.el.querySelector('.header-menu') as HTMLElement);

    menu.style.display = "flex";
    setTimeout(() => {
      this.el.classList.add('show-mobile-menu');
      document.body.classList.add('no-scroll');
    }, 1)
  }

  hideNav () {
    if (!this.isMobileMenuShown) return;
    this.isMobileMenuShown = false;

    const menu = (this.el.querySelector('.header-menu') as HTMLElement);

    this.el.classList.remove('show-mobile-menu');
    setTimeout(() => {
      menu.style.display = "none";
      document.body.classList.remove('no-scroll');
    }, 300)
  }

  render() {
    return (
      <div class="container">
        <stencil-route-link url="/" class="logo-link" anchorTitle="cbinzer logo">
          <span class="logo">cbinzer</span>
        </stencil-route-link>

        <div class="header-menu">
          <stencil-route-link url="/blog" onClick={() => { this.hideNav() }}>
            Blog
          </stencil-route-link>

          <ul class="external-links list--unstyled">
            <li>
              <a rel="noopener" class="link--external" target="_blank" href="https://twitter.com/chbinzer" aria-label="Twitter">
                <app-icon name="twitter"></app-icon>
              </a>
            </li>
            <li>
              <a rel="noopener" class="link--external" target="_blank" href="https://github.com/cbinzer" aria-label="Github">
                <app-icon name="github"></app-icon>
              </a>
            </li>
          </ul>

          <button class="header-close" onClick={() => { this.hideNav() }}>
            <app-icon name="close"></app-icon>
          </button>
        </div>

        <button class="header-overflow" onClick={() => { this.showNav() }} aria-label="Open menu">
          <app-icon name="more"></app-icon>
        </button>
      </div>
    );
  }
}
