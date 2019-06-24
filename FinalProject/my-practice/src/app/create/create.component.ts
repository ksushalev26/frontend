import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UsersService } from '../users/users.service';
import { User } from '../users/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  submitted = false;
  id: FormControl;
  lastName: FormControl;
  firstName: FormControl;
  age: FormControl;
  profession: FormControl;
  users: User[];

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.createForm = this.fb.group({
      id: new FormControl(''),
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      age: new FormControl(''),
      profession: new FormControl('')
    });
  }

  get f() { return this.createForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.createForm.invalid) {
      return;
    }
    
    console.log(this.createForm.value);  
  } 

  addUser() {
   
    const user: User = {
      id: this.createForm.controls.id.value,
      firstName: this.createForm.controls.firstName.value,
      lastName: this.createForm.controls.lastName.value,
      age: this.createForm.controls.age.value,
      profession: this.createForm.controls.profession.value
    } 
    this.usersService.addNew(user)
      .subscribe((response) => {
        this.usersService.getAll();
        this.router.navigate(['/'])
      })
  }

}
