import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsListComponent } from './components/listings-list/listings-list.component';
import { ListingDetailsComponent } from './components/listing-details/listing-details.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: 'listings', pathMatch: 'full' },
  { path: 'listings', component: ListingsListComponent },
  { path: 'listings/:id', component: ListingDetailsComponent },
  { path: 'add', component: AddListingComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
