import { Component, ViewChild } from "@angular/core";

@Component({
  selector: "button-overview-example",
  templateUrl: "button-overview-example.html",
  styleUrls: ["button-overview-example.css"]
})
export class ButtonOverviewExample {
  private showProgress = false;
  private showText = 'Devices Off';
  isChecked = false;
  canShowWarn = true;
  canShowPrimary = false;
  colorClass = 'warn';

  showTextAndLoader(showText: string){
    setTimeout(()=>{        
       this.showText = showText;
       this.showProgress = false;
    }, 1000);
  }

//Function to set Loader, change text and color change on toggle button click.
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