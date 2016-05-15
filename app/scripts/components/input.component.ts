import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sp-input',
  templateUrl: 'app/templates/input.html'
})

export class InputComponent implements OnInit {
  @Input() input = 'tetris';
  @Output() inputChanged = new EventEmitter();

  search(query) {
    this.inputChanged.emit({
      query
    })
    this.input = query;
    // hack b/c im tired
    document.querySelector("button").click()
  }

  ngOnInit() {
    let searchAction = this.search.bind(this);
    if (annyang) {
      let commands = {
        '*search': searchAction
      };
      annyang.addCommands(commands);
      annyang.start();
    }
  }

  constructor() {
   this.input = 'tetris';
  }
}
