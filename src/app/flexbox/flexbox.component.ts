import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.css']
})
export class FlexboxComponent implements OnInit {
   mydata:string="hello"
  constructor() { }

  ngOnInit(): void {
  }
  setData(_data:string){
   this.mydata=_data
  }

}
