import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {  

  user = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const userId = paramMap.get('id');

      this.user = this.userService.getUsersById(Number(userId));
    })
  }

}
