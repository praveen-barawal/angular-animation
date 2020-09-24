import { Component, Input } from "@angular/core";
import { trigger, transition, animate, style } from "@angular/animations";
import { AngularAnimation } from "../Animation/animation";

@Component({
  selector: "switch",
  templateUrl: "./switch.component.html",
  animations: [
    AngularAnimation,
  ]
})
export class SwitchComponent {
  @Input() isChecked: boolean;
  @Input() className: string;

  showProgress: boolean = false;
  showText: string = "Devices Off";
  canShowWarn: boolean = true;
  canShowPrimary: boolean = false;
  colorClass: string = "warn";
  spinnerClass: string = "mat-off-progress";
  isShowLoader: boolean = false;

  showTextAndLoader(showText: string) {
    setTimeout(() => {
      this.showText = showText;
      this.showProgress = false;
      this.isShowLoader = false;
    }, 1500);
  }

  onClick() {
    debugger
    console.log("checked"+this.isChecked)
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
