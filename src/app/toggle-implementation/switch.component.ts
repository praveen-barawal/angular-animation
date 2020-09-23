import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'switch',
  templateUrl: './switch.component.html',
})
export class SwitchComponent  {
  @Input() isChecked: boolean;
  @Input() className: string;

  showProgress:boolean = false;
  showText:string = 'Devices Off';
  canShowWarn:boolean = true;
  canShowPrimary:boolean = false;
  colorClass:string = 'warn';
  spinnerClass :string = "mat-off-progress";

  showTextAndLoader(showText: string){
    setTimeout(()=>{        
       this.showText = showText;
       this.showProgress = false;
    }, 2000);
  }

  onClick(){
     this.showProgress = true;
      this.colorClass ="progress";
     this.showText = 'Please Wait...';
     if(this.isChecked){
       this.colorClass = 'primary';
       this.spinnerClass = "mat-on-progress";
       this.showTextAndLoader('Devices On');
     }
     else{
       this.colorClass = 'warn';
       this.spinnerClass = "mat-off-progress";
       this.showTextAndLoader('Devices Off');
     }
  }
}
