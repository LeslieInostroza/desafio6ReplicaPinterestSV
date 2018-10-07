import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuNavbarComponent } from './menu-navbar/menu-navbar.component';
import { PaginaMuroComponent } from './pagina-muro/pagina-muro.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageServiceService} from './image-service.service'

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
    PaginaMuroComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule

  ],
  providers: [ImageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
