import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users = [
    {
      name: 'Test 1',
      age: 23,
      id: 1
    },
    {
      name: 'Test 2',
      age: 23,
      id: 2
    },
    {
      name: 'Test 3',
      age: 23,
      id: 3
    }
  ]

  constructor() {} 

    getUsers() {
      return this.users;
    }

    getUsersById(id:number) {
      const findUser = this.users.find((el) => {
        return el.id === id;
      });

      if(findUser) {
        return findUser
      }

      return null;
    }  
}
