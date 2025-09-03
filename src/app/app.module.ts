import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableComponent } from '../screens/table/table.component';
import { LoginComponent } from '../screens/login/login.component';
import { AddAnimalsComponent } from '../screens/add-animals/add-animals.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
 

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
 
    LoginComponent,
      AddAnimalsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
     NgbModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
