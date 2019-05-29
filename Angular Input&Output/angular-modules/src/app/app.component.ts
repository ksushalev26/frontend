import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My title';
  newTitle: string;
  constructor() {}

  ngOnInit(): void {

  }

  onOutputTitle(text) {
    console.log(text);
    this.newTitle=text;
  }
  
}
