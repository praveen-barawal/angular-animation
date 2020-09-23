import { Component, Input } from '@angular/core';
import { SlideInOutAnimation } from '../Animation/animation';

@Component({
  selector: 'switch',
  templateUrl: './switch.component.html',
   animations: [SlideInOutAnimation]
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
  animationState:string = 'in';

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
          this.animationState = this.animationState === 'out' ? 'in' : 'out';
     }
     else{
       this.colorClass = 'warn';
       this.spinnerClass = "mat-off-progress";
       this.showTextAndLoader('Devices Off');
     }
  }
}
