import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'switch',
  templateUrl: './switch.component.html',
})
export class SwitchComponent  {
  @Input() isChecked: boolean;
  @Input() className: string;

  private showProgress = false;
  private showText = 'Devices Off';
  canShowWarn = true;
  canShowPrimary = false;
  colorClass = 'warn';

  showTextAndLoader(showText: string){
    setTimeout(()=>{        
       this.showText = showText;
       this.showProgress = false;
    }, 1000);
  }

  onClick(){
     this.showProgress = true;
     this.showText = 'Please Wait...';

     if(this.isChecked){
       this.colorClass = 'primary';
       this.showTextAndLoader('Devices On');
     }
     else{
       this.colorClass = 'warn';
       this.showTextAndLoader('Devices Off');
     }
  }
}
