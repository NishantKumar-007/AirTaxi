import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddflightsComponent } from './admin/addflights/addflights.component';
import { AdminComponent } from './admin/admin.component';
import { EditflightsComponent } from './admin/editflights/editflights.component';
import { ViewflightsComponent } from './admin/viewflights/viewflights.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { SeatSelectComponent } from './seat-select/seat-select.component';

const routes: Routes = [

  {path:'searchResult',component:FlightListComponent},
  {path:'payment',component:PaymentPageComponent},
  {path:'',component:HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'seat',component:SeatSelectComponent},
  {path:'admin',component:AdminLoginComponent},
  {path:'myBooking',component:MyBookingComponent},
  {path:'passenger',component:PassengerDetailsComponent},
  {path:'admin/Admin',component:AdminComponent},
  {path:'admin/viewflights',component:ViewflightsComponent},
  {path:'admin/addflights',component:AddflightsComponent},
  {path:'admin/editflights',component:EditflightsComponent}

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
