import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
  tag: 'cb-home-page',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements ComponentInterface {
  componentWillRender(): Promise<void> | void {
    document.title = `Christian Binzer Blog - Software Engineer`;
  }

  public render() {
    return (
      <Host class="container">
        <section>
          <cb-about-me-teaser />
        </section>
        <section class="blog-section">
          <cb-blog-list />
        </section>
      </Host>
    );
  }
}
