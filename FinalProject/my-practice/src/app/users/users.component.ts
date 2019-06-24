import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UsersService } from './users.service';
import { MatDialog } from "@angular/material/dialog";
import { ReadComponent } from '../read/read.component';
import { DeleteComponent } from '../delete/delete.component';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users: User[];  
  user: User;

  constructor(
    private usersService: UsersService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getUsers()    
  }

  getUsers(): void {
    this.usersService.getAll()
    .subscribe(users => this.users = users) 
  }

  openReadDialog(user: User): void {
    this.dialog.open(ReadComponent, {
      height: "400px",
      width: "300px",
      data: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        profession: user.profession
      }
    });
  }

  openDeleteDialog(id: string): void {
    const dialogRef = this.dialog.open(DeleteComponent, {      
      data: {
        id: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteUser(id);
      }
    });
  }
  
  deleteUser(id: string): void {    
    this.usersService.deleteOne(id).subscribe(() => {
      this.getUsers()
    });
  }

  
}
