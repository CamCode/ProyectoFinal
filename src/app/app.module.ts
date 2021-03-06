import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './globals/header/header.component';
import { MenuComponent } from './globals/menu/menu.component';
import { HomeComponent } from './globals/pages/home/home.component';
import { CanastaComponent } from './globals/canasta/canasta.component';
import { appRouter } from './routing';
import { CategoriaComponent } from './globals/pages/categoria/categoria.component';
import { SliderproductoComponent } from './globals/slider/sliderproducto/sliderproducto.component';
import { ProductoItemComponent } from './globals/slider/sliderproducto/producto-item/producto-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    CanastaComponent,
    CategoriaComponent,
    SliderproductoComponent,
    ProductoItemComponent
  ],
  imports: [
    BrowserModule,
    appRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
