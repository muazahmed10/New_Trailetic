import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//import { BLE } from '@ionic-native/ble/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BluetoothSerial} from '@ionic-native/bluetooth-serial/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 

// import angularfireauth dependencies
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireAuthModule } from 'angularfire2/auth';

// import formbuilder angular
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { environment } from '../environments/environment';


let cordova: any;
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(AppComponent),
     AppRoutingModule,
     AngularFireAuthModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule],
    
  providers: [
    //BLE,
    BluetoothSerial,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

