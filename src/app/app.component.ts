import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demotuesday';
  result
  clickMe(){
    alert("hello")
  }
  submitData(num1,num2){
    this.result=num1+num2
    console.log("result",this.result)
  }
}
