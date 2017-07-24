import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { SidePaneComponent } from './side-pane/side-pane.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { SearchPlacesComponent } from './search-places/search-places.component';
import { FeatureTypeComponent } from './feature-type/feature-type.component';
import { FeatureTagEditorComponent } from './feature-tag-editor/feature-tag-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SidePaneComponent,
    ToolBarComponent,
    SearchPlacesComponent,
    FeatureTypeComponent,
    FeatureTagEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgmCoreModule,
    MaterialModule,
    MdNativeDateModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCuF0jO6w-aCgx7P28epp7zKGbNJwjlw6g',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
