import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css']
})
export class SomeComponent implements OnInit {

  public arrayUsers: {name:string, age:number}[] = [
    {
      name: 'Test1',
      age: 26
    },
    {
      name: 'Test2',
      age: 15
    },
    {
      name: 'Test3',
      age: 32
    }
  ];

  public toggleClass: boolean = true;

  @Input() textWeight: string | number = 'normal';
  @Input() textClass: string;

  constructor() { }

  ngOnInit() {
  }

  onAddUser(name: string, age: number) {
    const newUser = {
      name: name,
      age: age
    };

    this.arrayUsers.push(newUser)
  }

  onToggle(){
    this.toggleClass = !this.toggleClass;
  }

}
