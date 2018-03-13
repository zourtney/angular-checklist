import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'chk-app',
  styles: [`
    * {
      margin: 0;
      padding: 0;
    }
    html {
      font-family: sans-serif;
    }
    nav {
      background: black;
      color: white;
    }
    nav a {
      display: inline-block;
      padding: 10px 15px;
      color: white;
    }
    nav a:visited {
      color: white;
    }
    nav a.active {
      background: #555;
    }
    nav a:hover {
      background: #333;
    }
    
    .app-content {
      margin: 20px;
    }
    .demo {
      position: relative;
      margin: 0 0 40px 0;
      padding: 20px;
      border: 1px solid #ccc;
    }
    .demo:before {
      content: "DEMO";
      font-family: sans-serif;
      position: absolute;
      top: -14px;
      left: 0px;
      font-weight: 200;
      letter-spacing: .15em;
      font-size: .67em;
    }
    .demo label {
      display: block;
      margin: 5px 0;
    }
    code {
      font-size: 1.2em;
      background: #eee;
      padding: 1px 4px
    }
    .code {
      margin: 10px 0 40px 0;
      padding: 20px;
      background: #333;
      color: white;
      font-family: monospace;
    }
    .output {
      position: relative;
      padding: 20px;
      background: #eee;
      border: 1px solid #ccc;
      font-family: monospace;
    }
    .output:before {
      content: "OUTPUT";
      font-family: sans-serif;
      position: absolute;
      top: -14px;
      left: 0px;
      font-weight: 200;
      letter-spacing: .15em;
      font-size: .67em;
    }
    .compatibility {
      position: relative;
      margin: 20px 0;
      padding: 20px 100px 20px 20px;
      background: #eee;
      border: 1px solid #ccc;
    }
    .compatibility-version {
      position: absolute;
      top: 0;
      right: 0;
      background: #333;
      color: white;
      padding: 14px 10px;
      font-family: monospace;
      font-size: 2em;
    }
  `],
  template: `
    <nav>
      <a routerLink="/getting-started" routerLinkActive="active">Home</a>
      <a routerLink="/two-way" routerLinkActive="active">Two-Way Binding</a>
      <a routerLink="/one-way" routerLinkActive="active">One-Way Binding</a>
      <a routerLink="/objects" routerLinkActive="active">Object Binding</a>
      <a routerLink="/looping" routerLinkActive="active">Looping</a>
      <a routerLink="/max-selection" routerLinkActive="active">Max Selection</a>
    </nav>
    <div class="app-content">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent { }
