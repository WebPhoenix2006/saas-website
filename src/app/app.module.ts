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
import { FeaturesComponent } from './pages/features/features.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SharedFeatureComponent } from './components/shared/shared-feature/shared-feature.component';
import { NewsletterComponent } from './components/shared/newsletter/newsletter.component';
import { ContactComponent } from './pages/contact/contact.component';

// DEFINE THE ROUTES HERE

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SvgIconsComponent,
    HeaderComponent,
    AboutComponent,
    FeaturesComponent,
    NotFoundComponent,
    FooterComponent,
    SharedFeatureComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
