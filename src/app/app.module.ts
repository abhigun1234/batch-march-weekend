import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpendilogComponent } from './opendilog/opendilog.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MydailogComponent } from './mydailog/mydailog.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { TeamComponent } from './team/team.component'
@NgModule({
  declarations: [
    AppComponent,
    OpendilogComponent,
    RegisterComponent,
    HeaderComponent,
    MydailogComponent,
    FlexboxComponent,
    LoginComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
