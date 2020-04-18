import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './modules/shared/shared.module';
import {ConfigHttpLoader} from "@ngx-config/http-loader";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ConfigLoader, ConfigModule } from "@ngx-config/core";


@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HttpClientModule,
  ConfigModule.forRoot({
    provide: ConfigLoader,
    useFactory: (configFactory),
    deps: [ HttpClient ]
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
export function configFactory(http: HttpClient): ConfigLoader {
  return new ConfigHttpLoader(http, 'assets/config.json'); // API ENDPOINT
}