import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/main/app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './ngrx';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CountriesEffects } from './ngrx/effects/countries.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CountriesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
