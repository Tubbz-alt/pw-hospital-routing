import { Component, AfterViewInit } from '@angular/core';
import { MapComponent } from './map/map.component';
import { SidePaneComponent } from './side-pane/side-pane.component';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { MapApiService } from './services/map-api.service';
import { MdDialog } from '@angular/material';
import { UserAccountComponent } from './user-account/user-account.component';
declare var gapi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GoogleMapsAPIWrapper, MapApiService]
})
export class AppComponent implements AfterViewInit {
  mapApi: GoogleMapsAPIWrapper;
  constructor(private _mapApi: GoogleMapsAPIWrapper, private _internalMapApiService: MapApiService, public dialog: MdDialog) {
    this.mapApi = _mapApi;
    _internalMapApiService.setApi(_mapApi);
  }

  onMyAccountClick() {
    this.dialog.open(UserAccountComponent, { disableClose: false, width: '60vw', height: '57vh' });
  }

  onLogoutClick() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut();
  }
  ngAfterViewInit() {
    var auth2 = gapi.auth2.getAuthInstance();
  }
}
