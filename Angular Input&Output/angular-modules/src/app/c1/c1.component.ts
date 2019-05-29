import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  @Input() someText1;
  @Output() outputTitle1: EventEmitter<string> = new EventEmitter();

  constructor() {
    console.log(this.someText1)
   }

  ngOnInit() {
    console.log(this.someText1)
  }

  onOutputTitle(text) {
    this.outputTitle1.emit(text);
  }

}
