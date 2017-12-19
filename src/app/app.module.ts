import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LlistaalbumComponent } from './llistaalbum/llistaalbum.component';
import { CrearalbumComponent } from './crearalbum/crearalbum.component';
import { DetallalbumComponent } from './detallalbum/detallalbum.component';
import { AlbumsService } from './albums.service';

const appRoutes: Routes = [ 
 { path: 'llista', component: LlistaalbumComponent },
 { path: 'detall/:id', component: DetallalbumComponent },
 { path: 'crear', component: CrearalbumComponent }
]; 

@NgModule({
  declarations: [
    AppComponent,
    LlistaalbumComponent,
    CrearalbumComponent,
    DetallalbumComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
