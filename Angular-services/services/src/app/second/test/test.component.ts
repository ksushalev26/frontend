import { Component, OnInit, Injector, Inject } from '@angular/core';
import { SomeService } from 'src/app/some.service';
import { MY_SUPER_SERVICE } from 'src/app/my-const';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(
    private someService: SomeService,
    @Inject(MY_SUPER_SERVICE) private mySuperService: any,
    private injector: Injector
  ) { 
    console.log('TestComponent', this.someService);
    console.log(this.injector.get(SomeService));
    console.log('MY_SUPER_SERVICE is: ', mySuperService)
  }

  ngOnInit() {
  }

}
