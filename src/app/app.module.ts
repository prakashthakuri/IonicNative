import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Vibration } from '@ionic-native/vibration/ngx';
import {Camera} from '@ionic-native/camera/ngx';
import {Brightness} from '@ionic-native/brightness/ngx';
import {TextToSpeech} from '@ionic-native/text-to-speech/ngx';
import {BatteryStatus} from '@ionic-native/battery-status/ngx';
import {Screenshot} from '@ionic-native/screenshot/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    Camera,
    Brightness,
      TextToSpeech,
      BatteryStatus,
      Screenshot,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
