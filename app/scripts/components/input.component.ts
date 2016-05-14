import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sp-input',
  templateUrl: 'app/templates/input.html'
})

export class InputComponent implements OnInit {
  @Input() input = '';
  @Output() inputChanged = new EventEmitter();

  search(query) {
    this.input = query;
    this.inputChanged.emit({
      query
    })
  }

  ngOnInit() {
    console.log(annyang);
    if (annyang) {
      console.log('====== LOADING ANNYANG =====');
      let commands = {
        '*search': this.search.bind(this)
      };
      annyang.addCommands(commands);
      annyang.start();
    }
  }
}
