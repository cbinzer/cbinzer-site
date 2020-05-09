---
title: Unit Testing StencilJS
date: 2020-05-10
url: /blog/unit-testing-stenciljs
author: Christian Binzer
twitter: chbinzer
description: Wie kann man mit Unit Tests die Logik und den HTML-Inhalt einer StencilJS Komponente testen? Antworten gibt es in diesem Blog Post. 
img: /assets/img/blog/posts/unit-testing-stenciljs/unit-testing-stenciljs.png
---

![Unit Testing StencilJS](/assets/img/blog/posts/unit-testing-stenciljs/unit-testing-stenciljs.png)

In meinem letzten Blog Post habe ich euch eine kurze <a href="/blog/einfuehrung-stenciljs" target="_blank">Einführung in StencilJS</a> gegeben. Ich bin auf die Definition eingegangen, habe beschrieben wie ein neues Projekt aufgesetzt wird und habe euch am Beispiel eines Alerts gezeigt, wie Komponenten erstellt werden.

Dieses Mal möchte ich auf das Thema Unit Testing mit <a href="https://stenciljs.com/" target="_blank">StencilJS</a> eingehen. Leider sieht man heutzutage immer noch in Projekten, dass das Thema Testing stiefmütterlich behandelt wird. Besonders im Bereich Front-End-Entwicklung. Man hört immer wieder Ausreden wie, "Front-End-Tests sind zu kompliziert" oder "wir haben keine Zeit zum Testen". Dabei haben nahezu alle Bibliotheken eine top Test-Unterstützung, die das Schreiben von Tests vereinfacht und beschleunigt.

Auch StencilJS bringt einen sehr guten Support fürs Testen mit, den ich euch in diesem Artikel vorstellen möchte.

## Konfiguration

StencilJS verwendet <a href="https://jestjs.io/" target="_blank">Jest</a> als Testing Lösung für Unit Tests. Jest ist ein von Facebook geschriebenes JavaScript Testing Framework und hat in den letzten Jahren viel an Popularität gewonnen. Es zeichnet sich durch die einfache Konfiguration, gute API sowie Schnelligkeit aus. Am meisten verbreitet ist es in der <a href="https://reactjs.org/" target="_blank">React</a>-Welt, funktioniert aber mit jedem beliebigen JavaScript-Projekt.

StencilJS bringt eine eigene Jest-Konfiguration mit. Diese ist im Stencil-CLI enthalten. Damit wird einem die Konfiguration einer Test-Umgebung abgenommen, sodass direkt mit dem Testen losgelegt werden kann. Unit Tests werden in Dateien mit der Endung `.spec.ts` erstellt und können mit dem folgenden Kommando ausgeführt werden:

```bash
stencil test --spec
```

Mit dem `watchAll`-Flag kann man die Tests auch im Watch-Mode ausführen, der uns bei der testgetriebenen Entwicklung unterstützt:

```bash
stencil test --spec --watchAll
```

Nicht wundern, der erste Start eines Tests kann etwas länger dauern, denn bei einem neu aufgesetzten Projekt sind die Testing-Dependencies noch nicht vorhanden. StencilJS installiert Jest sowie die zugehörigen Types erst bei Bedarf und fügt sie dann der `package.json` hinzu.

## Komponentenlogik testen

Komponentenlogik lässt sich in StencilJS relativ einfach testen, denn eine StencilJS-Komponente ist nichts anderes als eine TypeScript-Klasse. Für einen einfachen Test kann man also die Klasse instanziieren, darauf folgend die passenden Methodenaufrufe durchführen und am Ende die erwartenden Änderungen am Objekt prüfen.

Nehmen wir an wir haben wieder eine simple Alert-Komponente (wie schon in meinem <a href="/blog/einfuehrung-stenciljs" target="_blank">letzten Blog-Artikel</a>), die ein `visible`-Attribut und eine Methode `show` enthält. Der initiale Zustand des `visible`-Attributs ist `false`. Die `show`-Methode ändert diesen Zustand auf `true`. 

Wie schon erwähnt können wir diese Logik testen, indem wir eine neue Instanz der Komponentenklasse erzeugen, die Methode aufrufen und anschließend prüfen, ob sich der Zustand des `visible`-Attributs auf `true` geändert hat:

```typescript
import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  it('should change the visible state to true', () => {
    const alertComponent = new AlertComponent();
    expect(alertComponent.visible).toEqual(false);

    alertComponent.show();
    expect(alertComponent.visible).toEqual(true);
  });
});
```

## Rendering von Komponenten testen

Das reine Logiktesten reicht jedoch nicht aus. Man möchte natürlich auch das generierte HTML einer Komponente prüfen. Dazu stellt uns StencilJS die Funktion `newSpecPage` zur Verfügung, mit der man eine Browser-Seite simulieren kann. Das hat den Vorteil, dass keine Browser Installation zum Ausführen der Unit Tests benötigt wird.

Um das Rendering unserer Alert-Komponente zu testen, muss zunächst eine neue Seite mit der `newSpecPage`-Funktion erzeugt werden. Die Funktion erwartet ein Objekt vom Typ `NewSpecPageOptions` als Parameter. In diesem Objekt müssen wir zwei Eigenschaften setzen. Zum einen die `html`-Eigenschaft, die das eigentliche HTML der Seite festlegt. Zum anderen das `components`-Feld, mit der dann StencilJS weiß, wie die im HTML enthaltenen Tags gerendert werden müssen. Die `newSpacPage`-Funktion liefert uns eine in einem Promise verpackte `SpecPage`-Instanz zurück. Das Promise können wir elegant mit dem async/await-Mechanismus auflösen. Mit dem `root`-Attribut des Seitenobjekts und der von Jest bereitgestellten Methode `toEqualHtml`, können wir einen HTML vergleich durchführen:

```typescript
import { AlertComponent } from './alert.component';
import { newSpecPage } from '@stencil/core/testing';

describe('AlertComponent', () => {
  it('should render the alert', async () => {
    const page = await newSpecPage({
      components: [AlertComponent],
      html: '<cb-alert />',
    });

    expect(page.root).toEqualHtml(`
      <cb-alert class="alert">
        Unit Testing StencilJS
        <span class="close-btn">&times;</span>
      </cb-alert>
    `);
  });
});
```

Verwendet eine Komponente Shadow DOM, dann simuliert das StencilJS mit dem `mock:shadow-root`-Element im Komponenten-Body. Dies muss dann im HTML-Vergleich berücksichtigt werden:

```typescript
expect(page.root).toEqualHtml(`
  <cb-alert class="alert">
    <mock:shadow-root>
      Unit Testing StencilJS
      <span class="close-btn">&times;</span>
    </mock:shadow-root>
  </cb-alert>
`);
```

Alternativ kann man den Support für Shadow DOM mit dem `supportsShadowDom`-Attribut in den `NewSpecPageOptions` deaktivieren.

Möchte man nicht das ganze HTML vergleichen, dann kann man auch gezielt Elemente auslesen und prüfen. Über das `root`-Attribut der `SpecPage` gelangen wir an das Root-HTML-Element des von uns spezifizierten HTML-Inhalts (in unserem Fall `cb-alert`). Damit können wir mit den bekannten Methoden, wie `querySelector` oder `querySelectorAll`, auf die darunter liegenden Elemente zugreifen und Checks ausführen.

Um Auswirkungen durch das Ändern von Properties oder das Ausführen von Methoden zu testen, brauchen wir Zugriff auf die Komponenteninstanz. Diese bekommen wir über die Eigenschaft `rootInstance` des Seitenobjekts. Mit der Instanz kann dann z.B. eine Methode ausgelöst werden, die den Zustand unserer Komponente verändert. Die Änderung des Zustands wird leider nicht automatisch erkannt und dementsprechend wird der HTML-Inhalt nicht neu generiert. Dies muss noch mit der `waitForChanges`-Methode manuell durchgeführt werden:

```typescript
import { AlertComponent } from './alert.component';
import { newSpecPage } from '@stencil/core/testing';

describe('AlertComponent', () => {
  it('should make the alert visible', async () => {
    const page = await newSpecPage({
      components: [AlertComponent],
      html: '<cb-alert />'
    });
    const alertElement = page.root;
    expect(alertElement).not.toHaveClass('visible');

    const alertComponent: AlertComponent = page.rootInstance;
    alertComponent.show();
    await page.waitForChanges();
    expect(alertElement).toHaveClass('visible');
  });
});
```

## Mocking

Komponenten können eine gewisse Komplexität aufweisen. Sie können zum Beispiel komplizierte Berechnungen durchführen oder entfernte Datenendpunkte aufrufen. Dazu werden oft externe Bibliotheken oder interne Browser APIs verwendet. Diese Funktionalitäten möchte man nicht unbedingt testen, da man davon ausgeht, dass diese bereits getestet wurden und somit einwandfrei funktionieren. Solche Funktionalitäten können gemockt werden. Dazu verwendet StencilJS die von Jest zur Verfügung stehenden Mechanismen.

Gehen wir davon aus, dass unsere Alert-Komponente ihre anzuzeigende Nachricht von einem Server bekommt und dabei die vom Browser zur Verfügung stehende `fetch`-API verwendet: 

```typescript
import { Component, ComponentInterface, h, Host, State } from '@stencil/core';

@Component({
  tag: 'cb-alert',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements ComponentInterface {
  @State() public visible: boolean = false;
  @State() public message: string;

  public async componentWillLoad(): Promise<void> {
    this.message = await fetch('https://cbinzer.de/blog/unit-testing-stenciljs')
      .then((response) => response.json());
  }

  public render() {
    return (
      <Host class={`alert ${this.visible ? 'visible' : ''}`}>
        {this.message}
        <span class="close-btn">&times;</span>
      </Host>
    );
  }

  public show() {
    this.visible = true;
  }
}
```

Mit der `fn`-Methode von Jest, können wir relativ einfach die `fetch`-Funktion mit einer Mock-Implementierung überschreiben. Zusätzlich überschreiben wir auch noch die `json`-Methode des `fetch`-Results, die uns unsere eigentliche Nachricht zurückliefert. Da das Verhalten der `fetch`-API in jedem Test-Case gleich sein soll, erfolgt das Mocken in `beforeAll`:

```typescript
import { AlertComponent } from './alert.component';
import { newSpecPage } from '@stencil/core/testing';

declare var fetch: Function;

describe('AlertComponent', () => {
  beforeAll(() => {
    fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: jest.fn(() => Promise.resolve('Unit Testing StencilJS')),
      })
    );
  });

  it('should render the alert', async () => {
    const page = await newSpecPage({
      components: [AlertComponent],
      html: '<cb-alert />',
    });

    expect(page.root).toEqualHtml(`
      <cb-alert class="alert">
        Unit Testing StencilJS
        <span class="close-btn">&times;</span>
      </cb-alert>
    `);
  });

  afterAll(() => {
    fetch.mockClear();
  });
});
```

Mit Jest lassen sich nicht nur einzelne Funktionen mocken, sondern auch ganze Module. Um ein Modul aus dem `node_modules`-Verzeichnis zu mocken, muss parallel zu `node_modules` ein `__mocks__`-Ordner angelegt werden. In diesem Ordner wird dann die Mock-Implementierung abgelegt, die Jest beim Ausführen der Tests automatisch lädt. Für eine Mock-Implementierung der Bibliothek <a href="https://lodash.com/" target="_blank">lodash</a> muss eine Datei `lodash.ts` im `__mocks__`-Verzeichnis erstellt werden. Ein gescoptes Modul hingegen, muss in der Verzeichnisstruktur erstellt werden, die den Namen des Moduls mit Scope entspricht (z.B. `__mocks__/@scope/module-name.ts`). Weitere Informationen zu diesem Thema findet ihr in der <a href="https://jestjs.io/docs/en/manual-mocks" target="_blank">Jest-Dokumentation</a>.

## Fazit

Für mich ist das Testing in StencilJS sehr gelungen. Das Rad wird hier nicht neu erfunden sondern man setzt auf etablierte Bibliotheken wie Jest. Dadurch fühlt man sich schnell zu Hause, besonders wenn man aus der React oder <a href="https://angular.io/" target="_blank">Angular</a> Welt kommt. Der einzige Nachteil für mich ist, dass man sich um das Rerendering mit `waitForChanges` selbst kümmern muss. Zwar gibt es in den `NewSpecPageOptions` eine Einstellung `autoApplyChanges`, diese bewirkt aber nur bei Property-Änderungen ein erneutes Rendern. Bei Änderungen des internen States einer Komponente muss das Rendern selbst getriggert werden. Außerdem sollte einem bewusst sein, dass in den Unit Tests der Browser nur simuliert wird. Dementsprechend stehen einem nicht alle Funktionen zur Verfügung. Dafür bietet uns StencilJS aber Support für e2e-Tests, auf die ich in einem weiteren Blog Post eingehen werde. Die in diesem Artikel gezeigten Beispiele findet ihr auf <a href="https://github.com/cbinzer/blog-post-unit-testing-stenciljs" target="_blank">GitHub</a>.
 
