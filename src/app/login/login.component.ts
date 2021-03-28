import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='Shivangi'
  flag=true;
  constructor() { }

  ngOnInit(): void {
  }
  loginForm(name,password){

    if(name=='abhishek' && password==='123456'){

      alert("logged in")
    }
    else{
      alert("autentication fail")
    }
  }

}
