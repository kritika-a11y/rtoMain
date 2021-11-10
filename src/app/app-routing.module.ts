import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DocumentsComponent } from './documents/documents.component';
import { HelpComponent } from './help/help.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { UserComponentComponent } from './user-component/user-component.component';

const routes: Routes = [
  {path:'',component:HomeScreenComponent},
  {path:'help',component:HelpComponent},
  {path:'home',component:HomeScreenComponent},
  {path:'contact',component:ContactComponent},
  {path:'vr',component:UserComponentComponent},
  {path:'documents',component:DocumentsComponent},
  {path:'payment',component:PaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
