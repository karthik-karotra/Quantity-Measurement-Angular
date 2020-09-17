import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { UnitTypeComponent } from './components/unit-type/unit-type.component';
import { UnitConvertorComponent } from './components/unit-convertor/unit-convertor.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    UnitTypeComponent,
    UnitConvertorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
