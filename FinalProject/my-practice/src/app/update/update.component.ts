import { Component, OnInit } from '@angular/core';
import { User } from '../users/user';
import { UsersService } from '../users/users.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  user: User;
  editForm: FormGroup;
  http: any;
  

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');

      this.usersService.getById(id).subscribe((user) => {
        this.user = user;

        this.initForm();
      })
    })
  }

  initForm() {
    this.editForm = this.fb.group({
      id: new FormControl(this.user.id),
      firstName: new FormControl(this.user.firstName, [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl(this.user.lastName, [Validators.required, Validators.minLength(3)]),
      age: new FormControl(this.user.age),
      profession: new FormControl(this.user.profession)
    });
  }

  updateUser() {
    const user: User = {
      id: this.editForm.controls.id.value,
      firstName: this.editForm.controls.firstName.value,
      lastName: this.editForm.controls.lastName.value,
      age: this.editForm.controls.age.value,
      profession: this.editForm.controls.profession.value
    }
    this.usersService.update(user)
      .subscribe((response) => {        
        this.router.navigate(['/'])
      })
  }

  onSubmit() {
    //this.submitted = true;

    if (this.editForm.invalid) {
      return;
    }

    console.log(this.editForm.value);  
  } 
}
