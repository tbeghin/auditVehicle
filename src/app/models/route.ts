import {Routes} from '@angular/router';
import {ErrorPageComponent} from '../error-page/error-page.component';
import {ContentComponent} from '../content/content.component';

export const APP_ROUTES: Routes = [
  {path: '', component: ContentComponent},
  {path: '**', component: ErrorPageComponent}
];
