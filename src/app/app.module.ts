import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbDatepickerModule, NbInputModule } from '@nebular/theme';
import en from '@angular/common/locales/en';
import zh from '@angular/common/locales/zh';
import { registerLocaleData } from '@angular/common';
registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbDatepickerModule,
    NbInputModule,
    NbLayoutModule
  ],
  providers: [
    ...NbDatepickerModule.forRoot().providers,
    { provide: LOCALE_ID, useValue: 'zh-CN' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
