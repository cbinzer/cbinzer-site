import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
  tag: 'cb-blog-page',
  styleUrl: './blog-page.component.css'
})
export class BlogPageComponent implements ComponentInterface {
  componentWillRender(): Promise<void> | void {
    document.title = `Christian Binzer - Blog`;
  }

  render() {
    return (
      <Host class="container">
        <cb-blog-list />
      </Host>
    );
  }
}
