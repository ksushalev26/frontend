import { Component, OnInit, Optional, Inject } from '@angular/core';
import { UsersService } from '../users/users.service';
import { User } from '../users/user';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  users: User[];
  user: User; 

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any    
  ) { }

  ngOnInit() {    
  }
 
}
