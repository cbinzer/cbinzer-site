import { Build, Component, ComponentInterface, h } from '@stencil/core';
import { fileNotFound } from '../global/site-structure-utils';

@Component({
  tag: 'cb-notfound-page',
  styleUrl: './notfound-page.component.css'
})
export class NotfoundPageComponent implements ComponentInterface {
  public componentWillRender(): Promise<void> | void {
    document.title = '404 - Christian Binzer';
  }

  public render() {
    if (!Build.isBrowser) {
      fileNotFound();
      return null;
    }

    return (
      <div>
        <h1>Oh oh! Die Seite konnte nicht gefunden werden.</h1>
        <p>
          <stencil-route-link url="/" class="block">
            Zurück zur Startseite
          </stencil-route-link>
        </p>
      </div>
    );
  }
}
