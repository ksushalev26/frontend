import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FirstModule } from './first/first.module';
import { SecondModule } from './second/second.module';
import { SomeService } from './some.service';
import { MY_SUPER_SERVICE } from './my-const';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { NotFoundComponent } from './not-found/not-found.component';

export function myInitializeFunction(httpClient: HttpClient) {
  return () => {
    return new Promise((resolve, reject) => {
      httpClient.get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((response) => {
        if(response) {         
          resolve(true);
        }
        reject();
      })     
    })
  }
}

export function testFunc(httpClient: HttpClient) {
  return new SomeService(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    FirstModule.forRoot({
      test: 'Hello world'
    }),
    
    AppRoutingModule    
  ],
  providers: [ 
    {
      provide: APP_INITIALIZER,
      useFactory: myInitializeFunction,
      multi: true,
      deps: [
        HttpClient
      ]
    },
    {
      provide: SomeService,
      useFactory: testFunc,
      deps: [
        HttpClient
      ]
    },   
    {
      provide: MY_SUPER_SERVICE,
      useValue: { value: 'Value from AppModule' },
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {  
  
 }
