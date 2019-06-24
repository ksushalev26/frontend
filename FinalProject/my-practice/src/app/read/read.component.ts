import { Component, OnInit, Inject, Optional } from '@angular/core';
import { UsersService } from '../users/users.service';
import { User } from '../users/user';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  user: User;  

  constructor(
    
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {    
  }    
}
