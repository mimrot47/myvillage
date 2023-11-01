import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {MatListModule} from '@angular/material/list';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SignupComponent } from './components/signup/signup.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SchoolDashbordComponent } from './components/school/school-dashbord/school-dashbord.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    SchoolDashbordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    NgbModule,
    MatDialogModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
