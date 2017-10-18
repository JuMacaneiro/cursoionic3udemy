import { HttpModule } from '@angular/http';
import { RegistrarPage } from '../pages/registrar/registrar';
import { LoginProvider } from './../providers/login/login';
import { FeedPage } from './../pages/feed/feed';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from '../pages/intro/intro';
import { LoginPage } from '../pages/login/login';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyChW94jn1yk_FY7xMtfSL_lHJxqEhz5Lks",
  authDomain: "maisumteste-7e57f.firebaseapp.com",
  databaseURL: "https://maisumteste-7e57f.firebaseio.com",
  projectId: "maisumteste-7e57f",
  storageBucket: "",
  messagingSenderId: "765620802642"
};
@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    TabsPage,
    LoginPage,
    FeedPage,
    HomePage,
   RegistrarPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)


  ],
  bootstrap: [IonicApp],
  entryComponents: [
     MyApp,
    IntroPage,
    TabsPage,
    LoginPage,
    FeedPage,
    HomePage,
    RegistrarPage
  ],
  providers: [
    LoginProvider,
   StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},



  ]
})
export class AppModule {
 constructor(){

  firebase.initializeApp(firebaseConfig );
}
}
