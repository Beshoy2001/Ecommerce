import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  myScriptJQuery: HTMLScriptElement;
  myScriptMui: HTMLScriptElement;
  myScript: HTMLScriptElement;
  clicked: boolean = true;
  constructor() {
    this.myScriptJQuery = document.createElement("script");
    this.myScriptJQuery.src = "../../../../assets/static/jquery-2.1.4.min.js";
    document.body.appendChild(this.myScriptJQuery);


    this.myScriptMui = document.createElement("script");
    this.myScriptMui.src = "../../../../assets/static/mui.min.js";
    document.body.appendChild(this.myScriptMui);

 

    this.myScript = document.createElement("script");
    this.myScript.src = "../../../../assets/static/script.js";
    document.body.appendChild(this.myScript);
  }
  IsClicked() {
    this.clicked = !this.clicked;
  }
  ToggleSideDrawer(): string {
    return "";
  }
}
