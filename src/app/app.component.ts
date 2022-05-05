import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstProject';
  ename="Mercy"
  address="chennai"

  display()
  {
    alert("Welcome to CG Angular Cource!!!");
  }

  products: any=[
    {
      title:"led tv",
      company:"sony",
      price:40000
    },
    {
      title:"Mobile",
      company:"samsung",
      price:20000
    },
    {
      title:"Freeze",
      company:"LG",
      price:45000
    }
  ]
}
