import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'sp-input',
  templateUrl: 'app/templates/input.html'
})

export class InputComponent implements OnInit {
  @Input() input = 'tetris';
  @Output() inputChanged = new EventEmitter();

  search(query) {
    console.warn('query: ', query )
    this.input = query;
    this.inputChanged.emit({
      query
    })
  }

  ngOnInit() {
    /*if (annyang) {
      console.log('====== LOADING ANNYANG =====');
      let commands = {
        '*search': this.search
      };
      annyang.addCommands(commands);
      annyang.start();
    }*/
  }

}
