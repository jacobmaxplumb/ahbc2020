import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OtherHomeComponent } from './other-home/other-home.component';

// import { RouterModule, Routes } from '@angular/router';

// const appRoutes: Routes = [
//   {path: 'app', component: AppComponent},
//   {path: '', redirectTo: '/app', pathMatch: 'full'}
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtherHomeComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoutes)
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
