import { Component, Input } from "@angular/core";
import { trigger, transition, animate, style } from "@angular/animations";
import { AngularAnimation } from "../Animation/animation";
import { environment } from "../../environments/environment";

@Component({
  selector: "switch",
  templateUrl: "./switch.component.html",
  animations: [AngularAnimation]
})
export class SwitchComponent {
  @Input() isChecked: boolean;

  showProgress: boolean = false;
  showText: string = "Devices Off";
  canShowWarn: boolean = true;
  canShowPrimary: boolean = false;
  colorClass: string = "warn";
  spinnerClass: string = "mat-off-progress";
  isShowLoader: boolean = false;

  constructor() {
    this.isChecked=  environment.isToggleOn;
    console.log(this.isChecked);
    this.setSwitchData();
  }

  showTextAndLoader(showText: string) {
    setTimeout(() => {
      this.showText = showText;
      this.showProgress = false;
      this.isShowLoader = false;
    }, 1500);
  }

  onClick() {
   this.setSwitchData();
  }

  setSwitchData()
  {
     this.showProgress = true;
    this.colorClass = "progress";
    this.isShowLoader = true;
    this.showText = "Please Wait...";
    if (this.isChecked) {
      this.colorClass = "primary";
      this.spinnerClass = "mat-on-progress";
      this.showTextAndLoader("Devices On");
    } else {
      this.colorClass = "warn";
      this.spinnerClass = "mat-off-progress";
      this.showTextAndLoader("Devices Off");
    }
  }
}
