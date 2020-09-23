import { Component } from '@angular/core';

@Component({
  selector: 'toggle-demo',
  templateUrl: './toggle-demo-component.html'
})
export class ToggleDemoComponent  {
  showMessage(value:string) {
    console.log(value);
  }
}
