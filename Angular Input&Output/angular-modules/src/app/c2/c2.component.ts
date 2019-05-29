import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  @Input() someText2;
  @Output() outputTitle2: EventEmitter<string> = new EventEmitter();

  constructor() {
    console.log(this.someText2);
   }

  ngOnInit() {
    console.log(this.someText2);
  }

  onOutputTitle(text){
    this.outputTitle2.emit(text);
  }

}
