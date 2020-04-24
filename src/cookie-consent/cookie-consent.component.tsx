import { Component, ComponentInterface, h, Host } from '@stencil/core';
import 'cookieconsent/build/cookieconsent.min';

@Component({
  tag: 'cb-cookie-consent',
  styleUrl: './cookie-consent.component.css'
})
export class CookieConsentComponent implements ComponentInterface {
  public componentWillLoad(): Promise<void> | void {
    (window as any).cookieconsent.initialise({
      domain: 'cbinzer.de',
      secure: true,
      revokable: false,
      law: {
        regionalLaw: true
      },
      location: false,
      content: {
        message:
          'Cookies erleichtern die Bereitstellung meiner Dienste. Mit der Nutzung erklärst du dich damit einverstanden, dass ich Cookies verwende.',
        dismiss: 'Akzeptieren',
        link: 'Datenschutzerklärung',
        href: '/datenschutz'
      },
      position: 'top-left'
    });
  }

  render() {
    return <Host></Host>;
  }
}
