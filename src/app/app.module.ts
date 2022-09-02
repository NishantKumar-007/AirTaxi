import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PopUpComponent } from './login/pop-up/pop-up.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SeatSelectComponent } from './seat-select/seat-select.component';
import { HttpClientModule } from  '@angular/common/http';
import { SearchService } from './search.service';
import { StatusService } from './status.service';
import { RouterModule } from '@angular/router';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { AdminComponent } from './admin/admin.component';
import { AddflightsComponent } from './admin/addflights/addflights.component';
import { EditflightsComponent } from './admin/editflights/editflights.component';
import { ViewflightsComponent } from './admin/viewflights/viewflights.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TicketComponent } from './ticket/ticket.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    PaymentPageComponent,
    FooterComponent,
    FlightListComponent,
    LoginComponent,
    PopUpComponent,
    AdminLoginComponent,
    RegistrationComponent,
    SeatSelectComponent,
    MyBookingComponent,
    PassengerDetailsComponent,
    AdminComponent,
    AddflightsComponent,
    EditflightsComponent,
    ViewflightsComponent,
    ContactComponent,
    AboutusComponent,
    TicketComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [SearchService, StatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
