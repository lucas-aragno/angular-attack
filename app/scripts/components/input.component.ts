import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'sp-input',
  templateUrl: 'app/templates/input.html'
})

export class InputComponent {
  @Input() input = 'tetris';
  @Output() inputChanged = new EventEmitter();

  search(query) {
    console.warn('query: ', query )
    this.input = query;
    this.inputChanged.emit({
      query
    })
  }
}
