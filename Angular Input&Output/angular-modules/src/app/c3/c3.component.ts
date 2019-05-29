import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

  @Input() someText3;
  @Output() outputTitle3: EventEmitter<string> = new EventEmitter();

  constructor() {
    console.log(this.someText3);
   }

  ngOnInit() {
    console.log(this.someText3);
  }

  toUpperCase() {
    this.someText3.toUpperCase();
  }

  returnTitle() {
    this.outputTitle3.emit(this.someText3.toUpperCase());
  }

}
