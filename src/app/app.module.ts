import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MantenimientoComponent } from './pages/mantenimiento/mantenimiento.component';
import { JugarComponent } from './pages/jugar/jugar.component';
import { ShowPipe } from './pipes/show.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MantenimientoComponent,
    JugarComponent,
    ShowPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
