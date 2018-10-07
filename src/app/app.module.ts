import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuNavbarComponent } from './menu-navbar/menu-navbar.component';
import { PaginaMuroComponent } from './pagina-muro/pagina-muro.component';


const appRoutes: Routes = [
  {
    path: '',
    component: PaginaMuroComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    MenuNavbarComponent,
    PaginaMuroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
