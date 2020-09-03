import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MbuttonComponent } from './mbutton/mbutton.component';
import {Routes, RouterModule} from '@angular/router';
import { MnavComponent } from './mnav/mnav.component';
import { MfooterComponent } from './mfooter/mfooter.component';
import { ProductComponent } from './product/product.component';
import { HomeaccessComponent } from './homeaccess/homeaccess.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WearComponent } from './wear/wear.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SouvenirComponent } from './souvenir/souvenir.component';
import { OurproductsComponent } from './ourproducts/ourproducts.component';
import { NotfoundComponent } from './notfound/notfound.component';



const routes : Routes = [
  {path: '', component:HomepageComponent},
{path: 'homeaccess', component:HomeaccessComponent},
{path: 'homepage', component:HomepageComponent},
{path: 'ourproducts', component:OurproductsComponent},
{path: 'wear', component:WearComponent},
{path: 'souvenir', component:SouvenirComponent},
{path: 'aboutncontact', component:AboutUsComponent},
{path: '**', component:NotfoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    MbuttonComponent,
    MnavComponent,
    MfooterComponent,
    ProductComponent,
    HomeaccessComponent,
    HomepageComponent,
    WearComponent,
    AboutUsComponent,
    SouvenirComponent,
    OurproductsComponent,
    NotfoundComponent,
    
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
