import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
//sockets
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: environment.wsUrl, options: {} };

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FooterComponent } from './components/footer/footer.component';
import { TemHumComponent } from './components/tem-hum/tem-hum.component';
import { RGBComponent } from './components/rgb/rgb.component';
import { PushBTNComponent } from './components/push-btn/push-btn.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TemHumComponent,
    RGBComponent,
    PushBTNComponent,
    ToggleComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
