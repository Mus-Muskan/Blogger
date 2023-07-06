import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes:Routes=[
  {path:'home' , component:HomeComponent},
  {path:'products' , component:ProductsComponent},
  {path:'contact' , component:ContactUsComponent},
  {path:'aboutus' , component:AboutUsComponent},
  {path:'' , redirectTo:'/home' , pathMatch:'full'},
  {path:'**' , component:PagenotfoundComponent}

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
