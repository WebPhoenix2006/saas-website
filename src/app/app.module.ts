import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { SvgIconsComponent } from './components/shared/svg-icons/svg-icons.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './components/shared/footer/footer.component';

// DEFINE THE ROUTES HERE

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SvgIconsComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule,CarouselModule,  AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
