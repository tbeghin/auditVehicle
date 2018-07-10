import {Component, Input} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {
  @Input() sidenav;
  @Input() isHandset$;
  auth: AuthenticationService;

  constructor(private authenticationService: AuthenticationService) {
    this.auth = authenticationService;
  }
}
