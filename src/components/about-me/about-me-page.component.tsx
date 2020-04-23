import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'about-me-page',
  styleUrl: './about-me-page.component.css'
})
export class AboutMePageComponent {
  public constructor() {
    document.title = `Software Engineer | Christian Binzer`;
  }

  render() {
    return (
      <Host>
        <div class="container">
          <section class="about-me-section">
            <div class="author-short-description">
              <h1>
                <b>Hi,</b> ich bin <b>Christian</b>, ein leidenschaftlicher <b>Software Engineer</b> aus Düsseldorf.
              </h1>
            </div>
            <img alt="Christian Binzer" class="author-image" src="/assets/img/Christian_Binzer.png"></img>
          </section>
        </div>

        <blog-list></blog-list>
      </Host>
    );
  }
}
