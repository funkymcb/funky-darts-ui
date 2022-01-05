import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { ApiHandlerService } from '../api-handler.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user = '';
  apiResponse: any;

  constructor(
      private keycloakService: KeycloakService,
      public apiHandlerService: ApiHandlerService
  ) { }

  ngOnInit(): void {
      this.initializeUserOptions();
  }

  private initializeUserOptions(): void {
      this.user = this.keycloakService.getUsername();
  }

  logout(): void {
      this.keycloakService.logout('https://funkyd.art');
  }

  callApi(): void {
      this.apiResponse = this.apiHandlerService.callApi().subscribe(data => {
          this.apiResponse = data;
      });
  }

}
