import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Audit} from '../models/audit';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private vehicleUrl = 'http://localhost:3601/api/vehicle';

  constructor(private http: HttpClient) {
  }

  getAllVehicle(): Observable<Audit[]> {
    return this.http
      .get<Audit[]>(this.vehicleUrl)
      .pipe(
        map(res => res as Audit[] || []),
        catchError(err => Observable.throw('Une erreur est survenue :', err))
      );
  }

  postVehicle(vehicle: Audit): Observable<any> {
    return this.http.post(this.vehicleUrl, vehicle);
  }

  putVehicle(vehicle: Audit): Observable<any> {
    return this.http.put(this.vehicleUrl, vehicle);
  }
}
