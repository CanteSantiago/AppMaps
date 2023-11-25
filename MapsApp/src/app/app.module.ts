import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MiniMapComponent } from './maps/components/mini-map/mini-map.component';
import { SideMenuComponent } from './maps/components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './maps/layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './maps/pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './maps/pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './maps/pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './maps/pages/zoom-range-page/zoom-range-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniMapComponent,
    SideMenuComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
