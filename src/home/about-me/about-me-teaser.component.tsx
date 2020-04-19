import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
  tag: 'cb-about-me-teaser',
  styleUrl: './about-me-teaser.component.css'
})
export class AboutMeTeaserComponent implements ComponentInterface {
  render() {
    return (
      <Host class="about-me-teaser">
        <div class="author-short-description">
          <h1>
            <b>Hi,</b> ich bin <b>Christian</b>, ein leidenschaftlicher <b>Software Engineer</b> aus Düsseldorf.
          </h1>
        </div>
        <img alt="Christian Binzer" class="author-image" src="/assets/img/Christian_Binzer.png"></img>
      </Host>
    );
  }
}
