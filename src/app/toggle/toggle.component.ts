import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
})
export class ToggleComponent  {
  @Input() isChecked: boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  onClick() {
   // this.isChecked = !this.isChecked;
    this.toggled.emit(this.isChecked);
  }
}
