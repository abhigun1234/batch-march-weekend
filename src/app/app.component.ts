import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {OpendilogComponent} from '..//app/opendilog/opendilog.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result
  constructor(public dialog: MatDialog) {}

  // openDialog() {
  //   const dialogRef = this.dialog.open(OpendilogComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  sendData(data){
    alert(data)

  }
   addValue(no1,no2){
  this.result= Number(no1)+Number(no2)
  }

}
