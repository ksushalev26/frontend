import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  users: any[] = [];

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
