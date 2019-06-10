import { Renderer2, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class SomeService {

  private name: string = 'Mark';

  constructor(
    private HttpClient: HttpClient
  ) {
    console.log('create')
   }

  public getName(): string {
    return this.name;
  }
}
