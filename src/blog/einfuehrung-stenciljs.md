---
title: Einführung in StencilJS
date: 2020-04-19
url: /blog/einfuehrung-stenciljs
author: Christian Binzer
twitter: chbinzer
description: In diesem Blog-Artikel möchte ich euch eine kurze Einführung in StencilJS geben. Dazu schauen wir uns die Definition von StencilJS an und erstellen eine einfache Alert-Komponente.
img: /assets/img/blog/posts/einfuehrung-stenciljs/einfuehrung-stenciljs.png
---

![Einfuehrung in StencilJS](/assets/img/blog/posts/einfuehrung-stenciljs/stenciljs-logo.png)

Schaut man sich heutzutage den Markt der Frontend JavaScript Frameworks an, dann sieht man ganz klar, dass sich drei Frameworks etabliert haben: <a href="https://reactjs.org/" target="_blank">React</a>, <a href="https://angular.io/" target="_blank">Angular</a> und <a href="https://vuejs.org/" target="_blank">Vue.js</a>. Meiner Meinung nach ist es heute nur noch eine Geschmackssache, welches Framework man für sein Projekt wählt, denn alle verfolgen den selben Komponenten basierten Ansatz.

Besonders in großen Unternehmen kann man beobachten, dass jedes Team seinen Favoriten hat und dass immer wieder dieselben Komponenten, wie Buttons, Listen, Inputs etc., neu implementiert werden. Die Wiederverwendbarkeit bleibt also auf der Strecke.

Dieses Problem hatten auch die Entwickler des <a href="https://ionicframework.com/" target="_blank">Ionic-Frameworks</a>. Die ursprünglich auf Angular basierten Komponenten sollten zukünftig auch in anderen Frameworks verwendbar sein. Um das Vorhaben zu realisieren hat sich das Team entschlossen die Ionic-Komponenten in Web Components umzuschreiben. Web Components werden heutzutage von jedem modernen Browser unterstützt und können somit auch Framework unabhängig verwendet werden.

Bei der Portierung hat das Team gemerkt, dass die Entwicklung mit den vom Browser zur Verfügung stehenden Low-Level-APIs nicht gerade innovativ ist. Aus diesem Grund ist <a href="https://stenciljs.com/" target="_blank">StencilJS</a> entstanden. StencilJS bringt nämlich die besten Innovationen aus den bekannten Frameworks in die Web Components Welt.

In diesem Blog-Artikel möchte ich euch eine kurze Einführung in StencilJS geben. Dazu schauen wir uns die Definition von StencilJS an und erstellen eine einfache Alert-Komponente.

## Was ist StencilJS?

StencilJS ist kein Framework, sondern ein Compiler mit dem Web Components erstellt werden können. Stencil benötigt also keine eigene Runtime, wie z.B. Angular oder React, um die Komponenten auflösen zu können, sondern generiert standardkonforme Web Components, die der Browser ohne weitere Hilfsmittel verarbeiten kann. Das hat den Vorteil, dass am Ende die Komponenten Framework-agnostisch sind. Außerdem muss kein zusätzlicher Framework Code mitgeschleppt werden, was die Bundles der Endanwendung kleiner macht.

Stencil kombiniert die besten Techniken der etablierten Frameworks wie Virtual DOM, asynchrones Rendern, reaktives data-binding, <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> und JSX. Diese Techniken erlauben eine schnellere und einfachere Erstellung von Web Components. Außerdem bringt der Compiler einen minimalistischen DEV-Server mit, welcher uns z.B. ein Live-Reloading beim Entwickeln bietet und somit die Developer Experience verbessert.

## Projekt-Setup

Um ein StencilJS-Projekt erstellen zu können, benötigen wir die letzte LTS Version von <a href="https://nodejs.org/" target="_blank">Node.js</a> (12.x) und npm (6.x). Mit einem für Stencil zur Verfügung stehenden npm init Skript kann ein neues Projekt angelegt werden:

```shell script
npm init stencil
```

Nach dem Ausführen des Skripts erhält man eine Eingabeaufforderung, wo man die Möglichkeit hat die Art des Projekts zu wählen. Mit Stencil kann man nicht nur eigenständige Komponenten bauen, sondern auch vollwertige Apps:

![npm init stencil](/assets/img/blog/posts/einfuehrung-stenciljs/npm-init-stencil.png)

Für unser Beispiel wählen wir die component-Variante und vergeben daraufhin einen passenden Projektnamen.

Im Root-Verzeichnis unseres neu erstellten Projekts, können wir jetzt mit dem folgenden Aufruf den Development-Server starten:

```shell script
npm run start
```

Daraufhin sollten wir eine von StencilJS vorgenerierte Komponente im Browser unter der Adresse [http://localhost:3333/](http://localhost:3333/) angezeigt bekommen:

![Browser localhost](/assets/img/blog/posts/einfuehrung-stenciljs/browser-localhost.png)

## StencilJS am Beispiel einer simplen Alert-Komponente

StencilJS ist ein in TypeScript geschriebener Compiler. Eine Komponente wird, wie auch in Angular, mit einer TypeScript-Klasse in Kombination mit einem `@Component`-Decorator definiert. Der Unterschied zu Angular ist, dass auf keine eigene Templating-Engine gesetzt wird, sondern auf das von React bekannte JSX. Genauso wie in React, gibt es keine Trennung zwischen dem TypeScript-Code und dem Markup, denn das JSX wird in der `render`-Methode der Klasse generiert.

```tsx
import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'cb-alert',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements ComponentInterface {
  public render() {
    return (
      <div class="alert">
        Hello StencilJS!<span class="close-btn">&times;</span>
      </div>
    );
  }
}
```

Im `@Component`-Decorator werden Metadaten definiert wie z.B. der Tag-Name unter dem Stencil die Komponente registrieren soll. In unserer Alert-Komponente ist das `cb-alert`. Wichtig ist, dass der Tag-Name nicht aus einem einzigen Wort besteht, sondern immer aus mindestens einem Bindestrich zusammengesetzt ist (siehe dazu auch die <a href="https://html.spec.whatwg.org/multipage/custom-elements.html" target="_blank">Custom-Elements-Spezifikation</a>). Auch die Zuordnung von Styles wird im Decorator festgelegt.

In unserem Beispiel implementiert die Alert-Komponente das Interface `ComponentInterface`. Dies ist nicht zwingend notwendig, ermöglicht aber der IDE eine bessere Code-Vervollständigung und es lässt sich dadurch auch herausfinden, welche Methoden noch eine Komponente implementieren kann (z.B. Lifecycle-Methoden). Die wichtigste Methode ist jedoch `render`. In `render` wird der eigentliche HTML-Content in Form von JSX definiert. Damit TypeScript JSX korrekt kompilieren kann, muss die `h`-Funktion von Stencil importiert werden. Das `h` steht hier für `hyperscript`, in das JSX umgewandelt wird. Die `h`-Funktion ist das Äquivalent zu der `createElement`-Funktion von React. Außerdem muss die Datei der Klassendefinition statt `.ts` die Endung `.tsx` haben.

Die Registrierung der Komponente im Browser übernimmt Stencil für uns. Somit kann einfach das neue Element der `index.html` getestet werden:

```html
<!DOCTYPE html>
<html dir="ltr" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" />
    <title>Stencil Component Starter</title>
    <script type="module" src="/build/blog-post-stenciljs-introduction.esm.js"></script>
    <script nomodule src="/build/blog-post-stenciljs-introduction.js"></script>
  </head>
  <body>
    <cb-alert></cb-alert>
  </body>
</html>
```

## Properties

Unsere aktuelle Alert-Komponente ist noch sehr statisch. Der Text des Alerts ist fest und eine Möglichkeit zum Ausblenden ist auch nicht gegeben. Beide Eigenschaften sollten von außen steuerbar sein. Dies lässt sich in StencilJS mit sogenannten Properties realisieren, die man dem HTML-Element in Form von Attributen übergeben kann:

```html
<cb-alert message="Hello StencilJS!" visible="true"></cb-alert>
```

Properties werden in der Komponenten-Klasse als Variablen mit dem `@Prop`-Decorator festgelegt und können dann im JSX verwendet werden. Bei jeder Änderung einer Property wird die `render`-Methode erneut aufgerufen.

```tsx
import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'cb-alert',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements ComponentInterface {
  @Prop() public message: string;
  @Prop() public visible: boolean = false;

  public render() {
    return (
      <div class={`alert ${this.visible ? 'visible' : ''}`}>
        {this.message}
        <span class="close-btn">&times;</span>
      </div>
    );
  }
}
```

## Events

Als Nächstes möchten wir die Möglichkeit schaffen von außen auf den Click des Close-Buttons zu reagieren. Dies lässt sich mit DOM-Events umsetzen. Ähnlich wie in Angular, werden Events mit Klassen-Variablen vom Typ `EventEmitter` und einem Decorator realisiert. In Stencil heißt der Decorator `@Event` statt Output. Das Instanziieren des EventEmitters übernimmt Stencil für uns und mit der `emit`-Methode können wir das Event beim Click auf den Close-Button ausführen.

```tsx
import { Component, ComponentInterface, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'cb-alert',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements ComponentInterface {
  @Prop() public message: string;
  @Prop() public visible: boolean = false;

  @Event() public closeClicked: EventEmitter<void>;

  public render() {
    return (
      <div class={`alert ${this.visible ? 'visible' : ''}`}>
        {this.message}
        <span class="close-btn" onClick={() => this.closeClicked.emit()}>
          &times;
        </span>
      </div>
    );
  }
}
```

Jetzt haben wir die Möglichkeit von außen auf den Click zu reagieren. Um das besser zu veranschaulichen, erstellen wir eine Wrapper-Komponente, die auf das Event reagieren soll und uns eine Ausgabe auf der Konsole erzeugt. Stencil bietet uns zwei Möglichkeiten auf Events zu reagieren. Zum einen können wir direkt im JSX auf dem Element das Binding vornehmen. Hier ist darauf zu achten, dass wir das Event nur mit einem vorangestellten `on` ansprechen können. In unserem Beispiel binden wir das Event also mit `onCloseClicked` statt nur mit `closeClicked`:

```tsx
import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'cb-alert-wrapper'
})
export class AlertWrapperComponent implements ComponentInterface {
  public render() {
    return <cb-alert message="Hello StencilJS!" visible={true} onCloseClicked={() => console.log('Close clicked!')} />;
  }
}
```

Zum anderen können wir auch direkt in der Klasse mit einer Methode auf Events reagieren. Dazu muss die Methode mit dem `@Listen`-Decorator versehen werden. Dem `@Listen`-Decorator muss der Event-Name übergeben werden, hier diesmal ohne das vorangestellte `on`:

```tsx
import { Component, ComponentInterface, h, Listen } from '@stencil/core';

@Component({
  tag: 'cb-alert-wrapper'
})
export class AlertWrapperComponent implements ComponentInterface {
  @Listen('closeClicked')
  public logCloseClicked() {
    console.log('Close clicked!');
  }

  public render() {
    return <cb-alert message="Hello StencilJS!" visible={true} />;
  }
}
```

## State

Beim Clicken auf den Close-Button wollen wir jetzt die Alert-Komponente ausblenden. Dazu erstellen wir eine Klassen-Variable, die den Sichtbarkeitszustand verwaltet. Die Variable wird an dem `visible`-Attribut des Alerts gebunden. Wenn jetzt beim Drücken des Buttons die Variable auf `false` gesetzt wird, sollte unsere Komponente ausgeblendet werden. Dem ist aber nicht so, denn StencilJS löst das Rendering beim Auslösen eines Events nicht aus. Um das zu erreichen, muss die Variable mit dem `@State`-Decorator gekennzeichnet werden. Durch den Decorator weiß Stencil, dass nach einer Wertänderung die `render`-Methode ausgeführt werden muss.

```tsx
import { Component, ComponentInterface, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'cb-alert-wrapper'
})
export class AlertWrapperComponent implements ComponentInterface {
  @State() private alertVisible = true;

  @Listen('closeClicked')
  public hideAlert() {
    this.alertVisible = false;
  }

  public render() {
    return <cb-alert message="Hello StencilJS!" visible={this.alertVisible} />;
  }
}
```

## Fazit

Diese kurze Einführung reißt nur einen kleinen Teil der Funktionalität von StencilJS an. Das Tool hat noch viel mehr zu bieten, unter anderem Support fürs Prerendering oder einen Store zum Verwalten von Shared State. Damit eignet sich Stencil nicht nur für Komponenten-Libraries, sondern auch zum Erstellen vollwertiger Apps. Entwickler, die Erfahrung mit Angular und/oder React haben, werden sich sehr schnell in Stencil zurechtfinden, denn Stencil vereinigt die besten Konzepte der beiden Frameworks.

Ich hoffe, meine kurze Einführung in StencilJS hat euch gefallen. Mir persönlich gefällt der Ansatz, wie man Web Components erstellt, sehr gut. Den Sourcecode für das Beispiel findet ihr auf <a href="https://github.com/cbinzer/blog-post-stenciljs-introduction/" target="_blank">GitHub</a>.
