import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() public options: Array<any>;
  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

  public selectedItem(value) {
    this.selected.emit(value)
  }

}
