import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './globals/header/header.component';
import { MenuComponent } from './globals/menu/menu.component';
import { HomeComponent } from './globals/pages/home/home.component';
import { CanastaComponent } from './globals/canasta/canasta.component';
import { appRouter } from './routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    CanastaComponent
  ],
  imports: [
    BrowserModule,
    appRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }