import '@stencil/router';
import { RouterHistory } from '@stencil/router';
import { Component, ComponentInterface, Element, h, Listen, State } from '@stencil/core';
import SiteProviderConsumer, { SiteState } from '../../global/site-provider-consumer';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot implements ComponentInterface {
  history?: RouterHistory;
  elements = ['site-header', 'site-menu', 'app-burger', 'main'];

  @Element() el!: HTMLElement;

  @State() isLeftSidebarIn: boolean = false;

  @Listen('resize', { target: 'window' })
  handleResize() {
    requestAnimationFrame(() => {
      if (window.innerWidth > 768 && this.isLeftSidebarIn) {
        this.isLeftSidebarIn = false;
        document.body.classList.remove('no-scroll');
        this.elements.forEach(el => {
          this.el.querySelector(el)!.classList.remove('left-sidebar-in');
        });
      }
    });
  }

  private setHistory = ({ history }: { history: RouterHistory }) => {
    if (!this.history) {
      this.history = history;
      this.history.listen(() => {
        // Google Analytics
        // (window as any).gtag("config", "UA-44023830-34", {
        //   page_path: location.pathname + location.search
        // });
        // Hubspot
        // (window as any)._hsq.push(['setPath', location.pathname + location.search ]);
        // (window as any)._hsq.push(['trackPageView']);
      });
    }
  };

  public componentDidLoad() {
    this.isLeftSidebarIn = false;
  }

  private toggleLeftSidebar = () => {
    if (window.innerWidth >= 768) {
      return;
    }
    const elements = this.elements.map(el => this.el.querySelector(el)).filter(el => !!el) as Element[];

    if (this.isLeftSidebarIn) {
      this.isLeftSidebarIn = false;
      document.body.classList.remove('no-scroll');
      elements.forEach(el => {
        el.classList.remove('left-sidebar-in');
        el.classList.add('left-sidebar-out');
      });
    } else {
      this.isLeftSidebarIn = true;
      document.body.classList.add('no-scroll');
      elements.forEach(el => {
        el.classList.add('left-sidebar-in');
        el.classList.remove('left-sidebar-out');
      });
    }
  };

  render() {
    const siteState: SiteState = {
      isLeftSidebarIn: this.isLeftSidebarIn,
      toggleLeftSidebar: this.toggleLeftSidebar
    };

    return (
      <SiteProviderConsumer.Provider state={siteState}>
        <site-header />
        <main>
          <stencil-router scrollTopOffset={0}>
            <stencil-route style={{ display: 'none' }} routeRender={this.setHistory} />
            <stencil-route-switch>
              <stencil-route url="/" component="cb-home-page" exact={true} />

              <stencil-route url="/blog" component="cb-blog-page" exact={true} />
              <stencil-route url="/blog/" component="cb-blog-page" exact={true} />
              <stencil-route
                url="/blog/:pageName"
                routeRender={({ match }) => <blog-component page={match!.url}></blog-component>}
              />

              <stencil-route url="/impressum" component="cb-imprint-page" />
              <stencil-route url="/datenschutz" component="cb-privacy-page" />

              <stencil-route component="cb-notfound-page"></stencil-route>
            </stencil-route-switch>
          </stencil-router>
          <footer>
            <div class="container">
              <div class="footer-content">
                <div>
                  <span>© 2020 Christian Binzer</span>
                  <stencil-route-link url="/impressum" class="footer-link">
                    Impressum
                  </stencil-route-link>
                  <stencil-route-link url="/datenschutz" class="footer-link">
                    Datenschutz
                  </stencil-route-link>
                </div>
                <div>
                  <ul class="external-links list--unstyled">
                    <li>
                      <a
                        rel="noopener"
                        class="link--external"
                        target="_blank"
                        href="https://twitter.com/chbinzer"
                        aria-label="Twitter"
                      >
                        <app-icon name="twitter"></app-icon>
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noopener"
                        class="link--external"
                        target="_blank"
                        href="https://github.com/cbinzer"
                        aria-label="Github"
                      >
                        <app-icon name="github"></app-icon>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </SiteProviderConsumer.Provider>
    );
  }
}
