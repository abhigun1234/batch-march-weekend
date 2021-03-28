import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {OpendilogComponent} from '..//app/opendilog/opendilog.component'
import {MydailogComponent} from '..//app/mydailog/mydailog.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(MydailogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      alert("hello")
    });
  }
  sendData(data){
    alert(data)

  }
   addValue(no1,no2){
  this.result= Number(no1)+Number(no2)
  }

}
