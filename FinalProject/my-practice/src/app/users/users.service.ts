import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: User;

  private usersUrl = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient    
  ) { }

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
  }

  public getById(id: string): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url)
  }

  public addNew(user: User): Observable<User> {   
    return this.http.post<User>(this.usersUrl, user)
  }

  public update(user: User): Observable<User> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.put<User>(url, user)        
  }

  public deleteOne(id: string): Observable<{}> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete<User[]>(url)
  }
}
